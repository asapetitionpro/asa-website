import Image from "next/image";
import { CalendarDays, ChevronDown, Scale } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-legal-bg relative overflow-visible lg:overflow-hidden" id="inicio">
      <div className="absolute right-[5%] top-12 hidden text-[#9f8d78]/20 lg:block" aria-hidden="true">
        <Scale className="h-72 w-72 xl:h-96 xl:w-96" strokeWidth={1.1} />
      </div>
      <div className="site-shell grid min-h-[560px] items-center gap-6 pb-0 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-0 xl:min-h-[620px]">
        <div className="relative z-10 max-w-4xl text-center lg:text-left">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-bronze sm:text-lg">
            Soluciones legales confiables
          </p>
          <h1 className="font-serif text-[2.75rem] font-bold leading-[1.02] text-ink sm:text-6xl xl:text-7xl">
            Estamos aquí para ayudarte
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#453a31] sm:text-xl sm:leading-9 lg:mx-0">
            Brindamos servicios legales y de inmigración con profesionalismo, experiencia y compromiso.
            Tu caso es nuestra prioridad.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <a className="gold-button min-h-14 px-7 text-base uppercase sm:min-h-16 sm:px-8 sm:text-lg" href="tel:+19739607538">
              <CalendarDays className="h-6 w-6" />
              AGENDA TU CITA
            </a>
            <a className="outline-button min-h-14 px-7 text-base uppercase sm:min-h-16 sm:px-8 sm:text-lg" href="#servicios">
              Conoce nuestros servicios
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative z-20 flex min-h-[310px] items-end justify-center sm:min-h-[460px] lg:min-h-[560px] lg:justify-end xl:min-h-[620px]">
          <div className="absolute bottom-8 right-12 hidden h-96 w-96 rounded-full bg-white/60 blur-3xl lg:block" aria-hidden="true" />
          <Image
            alt="Alaska y Andres de Alaska Solutions and Associates"
            className="relative z-10 h-auto max-h-[390px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_18px_22px_rgba(45,29,13,0.2)] sm:max-h-[510px] lg:max-h-[560px] lg:drop-shadow-[0_24px_34px_rgba(45,29,13,0.18)] xl:max-h-[620px]"
            height={958}
            priority
            src="/team-hero-alaska-front-v2.png"
            width={876}
            sizes="(min-width: 1280px) 620px, (min-width: 1024px) 560px, 92vw"
          />
        </div>
      </div>
    </section>
  );
}
