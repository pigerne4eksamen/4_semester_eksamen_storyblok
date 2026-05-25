const inputBase = "border border-[#E5E5E5] rounded-md px-4 py-3 bg-[#FAFAFA] placeholder-[#D1D5DB] text-[#282828] text-base focus:outline-none focus:ring-2 focus:ring-[#B64430]";

const Formular = ({ blok }: { blok: any }) => (
  <div>
    <div>
      <h2 className="text-[#ffffff] text-3xl font-bold text-center m-4">{blok.overskrift || "Send os en besked"}</h2>
    </div>
    <form className="bg-[#ffffff] rounded-sm shadow-md p-4 sm:p-8 md:p-10 flex flex-col gap-6 w-full max-w-full  md:max-w-175 border border-[#E5E5E5]!">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <label htmlFor="navn">{blok.navn_label || "Navn*"}</label>
          <input id="navn" className={inputBase} type="text" placeholder={blok.navn_placeholder || "Skriv dit fulde navn"} required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefon">Telefon*</label>
          <input id="telefon" className={inputBase} type="tel" placeholder={blok.telefon_placeholder || "+45 XX XX XX XX"} required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail*</label>
          <input id="email" className={inputBase} type="email" placeholder={blok.email_placeholder || "mail@gmail.com"} required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="adresse">Adresse*</label>
          <input id="adresse" className={inputBase} type="text" placeholder={blok.adresse_placeholder || "Adresse"} required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="postnr">Post nr.*</label>
          <input id="postnr" className={inputBase} type="text" placeholder={blok.postnr_placeholder || "Post nr."} required />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <label htmlFor="besked">Besked*</label>
          <textarea id="besked" className={inputBase} rows={3} placeholder={blok.besked_placeholder || "Fortæl os om dit projekt."} required />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button type="submit" className="mx-auto mt-8 block w-fit rounded bg-[#C84732] px-9 py-3 font-serif text-xl font-bold text-white md:mx-0 md:mt-12 md:px-10 md:py-4 md:font-sans md:font-semibold">
          Send
        </button>
      </div>
    </form>
  </div>
);
export default Formular;
