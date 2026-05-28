"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { BsImage } from "react-icons/bs";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  message: string;
};

export default function Form() {
  const [imagePreviews, setImagePreviews] = useState<{ url: string; name: string; id: number }[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // Toast state
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });
  // Submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const formData = new FormData();
    // Tilføj tekstfelter fra React Hook Form
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("zip", data.zip);
    formData.append("message", data.message);
    // Tilføj billeder fra state
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });
    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    if (result.success) {
      setToast({ message: "Din besked er sendt!", type: "success" });
      // Nulstil formularfelter og billeder
      reset();
      setImagePreviews([]);
      setSelectedFiles([]);
    } else {
      setToast({ message: "Noget gik galt. Prøv igen.", type: "error" });
    }
    setIsSubmitting(false);
    // Skjul toast efter 3 sekunder
    setTimeout(() => setToast({ message: "", type: null }), 3000);
  };
  // Funktion til at vise billede-preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      const previews = newFiles.map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        id: file.lastModified + Math.random(),
      }));
      setImagePreviews((prev) => [...prev, ...previews]);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
      // Nulstil input, så samme billede kan vælges igen
      e.target.value = "";
    }
  };

  const handleRemoveImage = (id: number) => {
    setImagePreviews((prev) => prev.filter((img) => img.id !== id));
    setSelectedFiles((prev) => {
      // Find index for det billede der skal fjernes
      const idx = imagePreviews.findIndex((img) => img.id === id);
      if (idx === -1) return prev;
      const newArr = [...prev];
      newArr.splice(idx, 1);
      return newArr;
    });
  };

  return (
    <>
      {/* Toast besked */}
      {toast.type && (
        <div
          className={`fixed top-36 left-1/2 z-50 -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white transition-all duration-300
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
          style={{ minWidth: 220, textAlign: "center" }}
        >
          {toast.message}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 bg-white rounded-sm">
          <div className="mx-6">
            <div className="mb-4 pt-6">
              <label className="block text-[var(--tekst1)] mb-2" htmlFor="name">
                Navn*
              </label>
              <input
                {...register("name", {
                  required: "Navn er påkrævet",
                  minLength: { value: 2, message: "Navn skal være mindst 2 tegn" },
                  maxLength: { value: 50, message: "Navn må maks. være 50 tegn" },
                  pattern: {
                    value: /^[a-zA-ZæøåÆØÅ\s'-]+$/,
                    message: "Navn må kun indeholde bogstaver",
                  },
                })}
                id="name"
                type="text"
                placeholder="Indtast dit fulde navn"
                className="w-full p-3 border rounded text-[var(--tekst1)] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--tekst1)] shadow-xs transition"
              />
              {errors.name && <p className="text-red-600 mt-2">{errors.name.message}</p>}
            </div>
            <div className="mb-4 flex flex-col">
              <div>
                <label className="block text-[var(--tekst1)] mb-2" htmlFor="phone">
                  Telefon*
                </label>
                <input
                  {...register("phone", {
                    required: "Telefonnummer er påkrævet",
                    minLength: {
                      value: 8,
                      message: "Telefonnummer skal være mindst 8 cifre",
                    },
                    maxLength: {
                      value: 15,
                      message: "Telefonnummer må maks. være 15 cifre",
                    },
                    pattern: {
                      value: /^\+?\d+$/,
                      message: "Telefonnummer må kun indeholde tal og evt. +",
                    },
                  })}
                  id="phone"
                  type="tel"
                  placeholder="+45 XX XX XX XX"
                  className="w-full p-3 border rounded text-[var(--tekst1)] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--tekst1)] shadow-xs transition"
                />
                {errors.phone && <span className="text-red-400 mt-2">{errors.phone.message}</span>}
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div>
                <label className="block text-[var(--tekst1)] mb-2" htmlFor="phone">
                  E-mail*
                </label>
                <input
                  {...register("email", {
                    required: "E-mail er påkrævet",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Indtast en gyldig e-mail",
                    },
                  })}
                  id="email"
                  type="email"
                  placeholder="test@gmail.com"
                  className="w-full p-3 border rounded text-[var(--tekst1)] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--tekst1)] shadow-xs transition"
                />
                {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[var(--tekst1)] mb-2" htmlFor="address">
                  Adresse*
                </label>
                <input
                  {...register("address", {
                    required: "Adresse er påkrævet",
                    minLength: { value: 2, message: "Adresse skal være mindst 2 tegn" },
                  })}
                  id="address"
                  type="text"
                  placeholder="Indtast din adresse"
                  className="w-full p-3 border rounded text-[var(--tekst1)] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--tekst1)] shadow-xs transition"
                />
                {errors.address && <p className="text-red-600 mt-1">{errors.address.message}</p>}
              </div>
              <div className="w-full md:w-48">
                <label className="block text-[var(--tekst1)] mb-2" htmlFor="zip">
                  Post nr.*
                </label>
                <input
                  {...register("zip", {
                    required: "Postnummer er påkrævet",
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "Postnummer skal være 4 cifre",
                    },
                  })}
                  id="zip"
                  type="text"
                  placeholder="Post nr."
                  className="w-full p-3 border rounded text-[var(--tekst1)] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--tekst1)] shadow-xs transition"
                />
                {errors.zip && <p className="text-red-600 mt-1">{errors.zip.message}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-[var(--tekst1)] mb-2" htmlFor="message">
                Besked*
              </label>
              <textarea
                {...register("message", {
                  required: "Besked er påkrævet",
                  minLength: { value: 5, message: "Besked skal være mindst 5 tegn" },
                  maxLength: { value: 1000, message: "Besked må maks. være 1000 tegn" },
                })}
                id="message"
                placeholder="Fortæl os om dit projekt"
                rows={5}
                className="w-full p-3 border rounded text-[var(--tekst1)] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--tekst1)] shadow-xs transition"
              />
              {errors.message && <p className="text-red-600 mt-1">{errors.message.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-[var(--tekst1)] mb-2" htmlFor="image">
                Billede
              </label>
              <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 cursor-pointer">
                {imagePreviews.length > 0 ? (
                  <div className="flex gap-2 overflow-x-auto w-full h-28 items-center">
                    {imagePreviews.map((img, idx) => (
                      <div key={img.id} className="relative">
                        <img src={img.url} alt={`Billede ${idx + 1}`} className="object-contain h-24 rounded shadow" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveImage(img.id);
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                          title="Slet billede"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <BsImage size={48} color="#D1D5DB" />
                    <span className="mt-2 text-lg text-gray-400">Indsæt billede her</span>
                  </>
                )}
                <input id="image" type="file" accept="image/*" multiple className="hidden" onChange={handleImageChange} />
              </label>
            </div>
            <div className="flex justify-end mt-4 pb-6">
              <button type="submit" className="bg-[var(--cta)] text-[var(--tekst2)] border-[var(--cta)] hover:brightness-90 font-montserrat rounded-md border px-6 py-3 text-lg font-medium transition hover:brightness-90 disabled:opacity-60 disabled:cursor-not-allowed" disabled={isSubmitting}>
                {isSubmitting ? "Sender..." : "Send besked"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
