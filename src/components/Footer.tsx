import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#282828] px-8 py-14 text-base font-light text-white md:px-20 lg:px-36">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-20">
        {/* Logo og kort tekst */}
        <section className="flex flex-col items-center text-center md:items-start md:text-left">
          <img src="/MKMlogo-09.png" alt="Kongsbro & Machado" className="mb-10 w-46 brightness-0 invert md:w-52" />

          <p className="w-56 italic text-white md:w-72">Vi bygger på tillid, solidt dansk håndværk og princippet om, at en aftale er en aftale. Vi sikrer dig gennemsigtige priser og høj kvalitet gennem hele projektet.</p>
        </section>

        {/* Links til ydelser og undersider */}
        <section className="flex h-full flex-col items-center text-center md:items-start md:pt-3 md:text-left">
          <div>
            <h2 className="mb-8 font-serif text-xl font-bold text-white">Vi tilbyder</h2>

            <div className="flex flex-col items-center gap-6 italic text-white md:items-start">
              <a href="/badevaerelse" className="w-fit underline decoration-white underline-offset-4">
                Badeværelse
              </a>
              <a href="/facade" className="w-fit underline decoration-white underline-offset-4">
                Facade
              </a>
              <a href="/renovering" className="w-fit underline decoration-white underline-offset-4">
                Renovering
              </a>
              <a href="/restaurering" className="w-fit underline decoration-white underline-offset-4">
                Restaurering
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 italic md:mt-auto md:items-start">
            <a href="/om-os" className="w-fit underline decoration-white underline-offset-4">
              Læs mere Om os her
            </a>
          </div>
        </section>

        {/* Kontaktinformation og sociale links */}
        <section className="flex flex-col items-center gap-8 text-center text-white">
          <h2 className="italic underline decoration-white underline-offset-4">Kontakt os</h2>

          <div className="flex flex-col items-center gap-7">
            <p>Hyben Alle 18, 2770 Kastrup</p>
            <p>CVR: 46412427</p>

            <div className="flex items-center gap-5">
              <FiPhone className="text-sm" />
              <span>+45 12 34 56 78</span>
            </div>

            <div className="flex items-center gap-10 pt-4 text-white">
              <FaFacebookSquare className="text-5xl" />
              <FaInstagram className="text-5xl" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
