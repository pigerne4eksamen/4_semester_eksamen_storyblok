"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const serviceLinks = [
  { href: "/badevaerelse", label: "Badeværelse" },
  { href: "/renovering", label: "Renovering" },
  { href: "/facade", label: "Facade" },
  { href: "/restaurering", label: "Restaurering" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary px-6 shadow-md md:px-20">
      <div className="flex items-center justify-between py-3 md:py-1">
        <a href="/" aria-label="Kongsbro og Machado forsiden">
          <img src="/MKMlogo-09.png" alt="Kongsbro og Machado" className="w-[100px] object-contain md:w-[90px]" />
        </a>

        <button type="button" onClick={() => setIsOpen(true)} aria-label="Aabn menu" className="flex flex-col gap-1 md:hidden">
          <span className="h-0.5 w-6 bg-tekst1" />
          <span className="h-0.5 w-6 bg-tekst1" />
          <span className="h-0.5 w-6 bg-tekst1" />
        </button>

        {/* Desktopmenu */}
        <nav className="hidden items-center gap-20 text-tekst1 md:flex">
          {/* Dropdown med ydelsessider */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button type="button" className="flex cursor-pointer items-center gap-1 hover:text-secondary">
              Murerarbejde <IoIosArrowDown />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-0 flex min-w-44 flex-col bg-primary shadow-md">
                {serviceLinks.map((link) => (
                  <a key={link.href} href={link.href} className="p-4 hover:bg-tertiary">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/om-os" className="hover:text-secondary">
            Om os
          </a>
          <a href="/galleri" className="hover:text-secondary">
            Galleri
          </a>
          <a href="/kontakt-os" className="hover:text-secondary">
            Kontakt
          </a>
        </nav>
      </div>

      {/* Mobilmenu */}
      <nav className={`fixed right-0 top-0 z-40 flex h-full w-[80%] max-w-sm flex-col gap-6 bg-primary p-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button type="button" onClick={() => setIsOpen(false)} aria-label="Luk menu" className="self-end text-3xl">
          x
        </button>

        {/* Mobil dropdown med ydelsessider */}
        <div>
          <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 text-lg font-semibold">
            Murerarbejde <IoIosArrowDown />
          </button>

          {dropdownOpen && (
            <div className="mt-3 flex flex-col gap-3 pl-4">
              {serviceLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/om-os" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
          Om os
        </a>
        <a href="/galleri" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
          Galleri
        </a>
        <a href="/kontakt-os" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
          Kontakt
        </a>
      </nav>
    </header>
  );
}
