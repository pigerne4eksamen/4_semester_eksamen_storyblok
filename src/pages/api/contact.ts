import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

// Fortæller Next.js at vi selv håndterer body parsing (fordi vi bruger formidable)
export const config = {
  api: { bodyParser: false },
};

// Opretter en instans af Resend med min API-nøgle fra .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Vores API-handler til kontaktformularen
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Tjekker at det kun er POST requests der accepteres
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Bruger formidable til at parse både tekstfelter og billeder fra formularen
    const { fields, files } = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // Forbereder attachments-array til billeder
    const attachments = [];
    if (files.images) {
      // Hvis der er uploadet billeder, læser jeg dem som buffer og tilføjer dem som vedhæftning
      const fileArray = Array.isArray(files.images) ? files.images : [files.images];
      for (const file of fileArray) {
        const content = fs.readFileSync(file.filepath); // Læser billedet fra disk
        attachments.push({
          filename: file.originalFilename, // Beholder originalt filnavn
          content,
          contentType: file.mimetype,
        });
      }
    }

    // Sender mailen med alle felter og evt. billeder som vedhæftning
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", //Skal udskiftes med virksomhedens domæne, når de får et
      to: "alre0003@stud.ek.dk", //Skal udskiftes med virksomhedens mail, når de har en
      subject: "Ny kontaktformular besked",
      html: `<p><strong>Navn:</strong> ${fields.name}</p>
             <p><strong>Telefon:</strong> ${fields.phone}</p>
             <p><strong>Email:</strong> ${fields.email}</p>
             <p><strong>Adresse:</strong> ${fields.address}</p>
             <p><strong>Postnummer:</strong> ${fields.zip}</p>
             <p><strong>Besked:</strong> ${fields.message}</p>`,
      attachments,
    });

    // Svarer tilbage til frontend at alt gik godt
    res.status(200).json({ success: true, data });
  } catch (error) {
    // Hvis der opstår fejl, sender jeg en fejlbesked tilbage
    res.status(500).json({ success: false, error: typeof error === "object" && error !== null && "message" in error ? error.message : String(error) });
  }
}
