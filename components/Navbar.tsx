"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios", dropdown: true },
  { label: "Recursos", href: "#recursos", dropdown: true },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contáctenos", href: "#contactenos" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfcd] bg-white/95 shadow-sm backdrop-blur">
      <div className="site-shell flex min-h-24 items-center justify-between gap-4 py-3 lg:min-h-[116px]">
        <Link aria-label="Alaska Solutions and Associates" className="relative block h-20 w-56 shrink-0 sm:h-[88px] sm:w-72" href="#inicio">
          <Image alt="Alaska Solutions and Associates logo" className="object-contain" fill priority src="/logo-transparent.png" sizes="288px" />
        </Link>

        <nav className="hidden items-center gap-8 text-base font-extrabold uppercase tracking-normal text-ink xl:flex">
          {navItems.map((item) => (
            <a
              className="group flex items-center gap-1 transition hover:text-bronze"
              href={item.href}
              key={item.label}
            >
              {item.label}
              {item.dropdown ? (
                <ChevronDown className="h-4 w-4 text-bronze transition group-hover:translate-y-0.5" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-bronze text-bronze">
            <Phone className="h-6 w-6" />
          </span>
          <div className="leading-tight">
            <a className="block text-2xl font-extrabold text-ink transition hover:text-bronze" href="tel:+19739607538">
              (973) 960-7538
            </a>
            <span className="text-base text-[#4f463d]">Llámanos para asesoría</span>
          </div>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-14 w-14 items-center justify-center border border-paleGold text-ink transition hover:border-bronze hover:text-bronze xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#eadfcd] bg-white xl:hidden">
          <div className="site-shell grid gap-2 py-5">
            {navItems.map((item) => (
              <a
                className="flex min-h-12 items-center justify-between px-3 py-3 text-base font-extrabold uppercase text-ink transition hover:bg-parchment hover:text-bronze"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.dropdown ? <ChevronDown className="h-4 w-4 text-bronze" /> : null}
              </a>
            ))}
            <a
              className="mt-2 flex items-center gap-3 border-t border-[#eadfcd] px-2 pt-4 text-ink"
              href="tel:+19739607538"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze text-bronze">
                <Phone className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-extrabold">(973) 960-7538</span>
                <span className="text-base text-[#5f554b]">Llámanos para asesoría</span>
              </span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
