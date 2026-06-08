import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      aria-label="Escríbenos por WhatsApp al 973-960-7538"
      className="fixed bottom-5 right-5 z-[60] flex min-h-16 items-center gap-3 rounded-full bg-[#1f8f4d] px-5 py-3 text-white shadow-[0_18px_45px_rgba(31,143,77,0.35)] transition hover:-translate-y-1 hover:bg-[#167a40] focus:outline-none focus:ring-4 focus:ring-[#1f8f4d]/30 sm:bottom-7 sm:right-7 sm:px-6"
      href="https://wa.me/19739607538"
      target="_blank"
      rel="noreferrer"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-7 w-7" strokeWidth={2.4} />
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-extrabold uppercase tracking-wide text-white/85">
          WhatsApp
        </span>
        <span className="block text-base font-extrabold sm:text-lg">973-960-7538</span>
      </span>
    </a>
  );
}
