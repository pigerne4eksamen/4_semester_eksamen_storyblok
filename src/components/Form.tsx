"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  message: string;
  image: FileList;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 bg-white">
        <div className="mb-4">
          <label className="block text-[#282828] mb-2" htmlFor="name">
            Navn*
          </label>
          <input
            {...register("name", {
              required: "Navn er påkrævet",
              minLength: { value: 2, message: "Navn skal være mindst 2 tegn" },
              maxLength: { value: 20, message: "Navn må maks. være 20 tegn" },
              pattern: {
                value: /^[a-zA-ZæøåÆØÅ\s'-]+$/,
                message: "Navn må kun indeholde bogstaver",
              },
            })}
            id="name"
            type="text"
            placeholder="Skriv dit fulde navn"
            className="w-full p-3 border rounded text-[#282828] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#282828] shadow-xs transition"
          />
          {errors.name && <p className="text-red-600 mt-2">{errors.name.message}</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <div className="mb-4">
            <label className="block text-[#282828] mb-2" htmlFor="phone">
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
              className="w-full p-3 border rounded text-[#282828] border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#282828] shadow-xs transition"
            />
            {errors.phone && <span className="text-red-400 mt-2">{errors.phone.message}</span>}
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
