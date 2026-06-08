import { CalendarDays } from "lucide-react";

export default function FloatingAppointment() {
  return (
    <a
      aria-label="Agenda tu cita por teléfono"
      className="fixed bottom-5 left-4 z-[60] flex min-h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[#d4aa5b] via-[#b8862d] to-[#9a681f] px-4 py-3 text-white shadow-[0_18px_45px_rgba(184,136,45,0.35)] transition hover:-translate-y-1 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-[#b8862d]/30 sm:bottom-7 sm:left-7 sm:min-h-16 sm:gap-3 sm:px-6"
      href="tel:+19739607538"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-11 sm:w-11">
        <CalendarDays className="h-6 w-6" strokeWidth={2.4} />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.65rem] font-extrabold uppercase tracking-wide text-white/85 sm:text-xs">
          Agenda
        </span>
        <span className="block text-sm font-extrabold uppercase sm:text-base">Tu cita</span>
      </span>
    </a>
  );
}
