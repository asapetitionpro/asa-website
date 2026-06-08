import { CalendarCheck2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#a77421] via-[#d2a14a] to-[#b6812a] text-white">
      <div className="site-shell grid items-center gap-7 py-10 md:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-5">
          <span className="hidden h-16 w-16 shrink-0 items-center justify-center border-2 border-white/80 sm:flex">
            <CalendarCheck2 className="h-9 w-9" />
          </span>
          <div>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">¿Listo para resolver tu caso?</h2>
            <p className="mt-3 text-lg font-medium text-white/95 sm:text-xl">
              Agenda tu cita hoy mismo y recibe la asesoría que necesitas.
            </p>
          </div>
        </div>
        <a
          className="inline-flex min-h-16 items-center justify-center bg-[#2b1a09] px-9 text-base font-extrabold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-ink hover:shadow-xl sm:text-lg"
          href="tel:+19739607538"
        >
          Agenda tu cita ahora
        </a>
      </div>
    </section>
  );
}
