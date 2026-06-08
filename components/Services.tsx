import {
  BadgeCheck,
  Briefcase,
  ChevronDown,
  FileText,
  Globe2,
  Heart,
  HeartCrack,
  Scale
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Inmigración",
    description: "Te ayudamos con peticiones familiares, visas, ajuste de estatus, ciudadanía y más.",
    details: [
      "Peticiones familiares y orientación para procesos ante USCIS.",
      "Ajuste de estatus, permisos, ciudadanía y renovaciones.",
      "Revisión de documentos para presentar tu caso con más claridad."
    ]
  },
  {
    icon: Heart,
    title: "Entrevista Matrimonial",
    description: "Te preparamos para tu entrevista matrimonial con USCIS.",
    details: [
      "Preparación de preguntas frecuentes para entrevistas matrimoniales.",
      "Organización de evidencias y documentos de apoyo.",
      "Orientación para que llegues con seguridad y confianza."
    ]
  },
  {
    icon: Scale,
    title: "Servicios Legales",
    description: "Representación legal en diversas áreas del derecho. Consultas y casos legales.",
    details: [
      "Consultas legales confidenciales para evaluar tu situación.",
      "Preparación y revisión de documentos importantes.",
      "Acompañamiento profesional según las necesidades de tu caso."
    ]
  },
  {
    icon: BadgeCheck,
    title: "Bodas Civiles",
    description: "Realizamos ceremonias de matrimonio civiles legales y personalizadas.",
    details: [
      "Ceremonias civiles legales y personalizadas.",
      "Coordinación clara para la fecha, lugar y requisitos.",
      "Atención profesional para parejas que desean un proceso sencillo."
    ]
  },
  {
    icon: FileText,
    title: "Traducción de Certificados",
    description: "Traducción profesional de certificados y documentos oficiales.",
    details: [
      "Traducción de certificados, actas y documentos oficiales.",
      "Formato profesional para trámites migratorios y legales.",
      "Servicio cuidadoso para mantener la información clara y precisa."
    ]
  },
  {
    icon: Briefcase,
    title: "Registro de Negocios",
    description: "Te ayudamos a registrar tu negocio y cumplir con los requisitos legales.",
    details: [
      "Orientación para registrar tu negocio correctamente.",
      "Ayuda con documentación inicial y requisitos legales.",
      "Apoyo para comenzar con una estructura más organizada."
    ]
  },
  {
    icon: HeartCrack,
    title: "Divorcios",
    description: "Asesoría legal y representación en procesos de divorcio de manera confidencial.",
    details: [
      "Asesoría confidencial para entender tus opciones.",
      "Preparación y seguimiento de documentos del proceso.",
      "Acompañamiento con respeto en una etapa delicada."
    ]
  }
];

function getWhatsAppHref(serviceTitle: string) {
  const message = `Hola, quiero más información sobre ${serviceTitle}.`;
  return `https://wa.me/19739607538?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-ivory to-parchment py-16 sm:py-20" id="servicios">
      <div className="site-shell">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-base font-extrabold uppercase tracking-[0.08em] text-bronze sm:text-lg">
            Nuestros servicios
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-ink sm:text-6xl">
            Soluciones legales para cada etapa de tu vida
          </h2>
          <div className="mx-auto mt-4 flex w-28 items-center justify-center gap-2 text-gold">
            <span className="h-px flex-1 bg-gold" />
            <span className="h-2 w-2 rotate-45 bg-gold" />
            <span className="h-px flex-1 bg-gold" />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1320px] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article
              className="service-card group flex min-h-[300px] flex-col items-center border border-[#e1d3bc] px-7 py-9 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
              key={service.title}
            >
              <service.icon className="h-14 w-14 text-bronze transition group-hover:scale-110" strokeWidth={1.8} />
              <h3 className="mt-5 font-serif text-2xl font-bold leading-7 text-ink">{service.title}</h3>
              <p className="mt-4 flex-1 text-base leading-7 text-[#3f362e]">{service.description}</p>
              <details className="mt-6 w-full text-left">
                <summary className="flex cursor-pointer list-none items-center justify-center gap-2 text-base font-extrabold text-bronze transition hover:text-espresso [&::-webkit-details-marker]:hidden">
                  Más información
                  <ChevronDown className="h-5 w-5" />
                </summary>
                <div className="mt-5 border-t border-[#e6d7bf] pt-5">
                  <ul className="grid gap-3 text-base leading-7 text-[#3f362e]">
                    {service.details.map((detail) => (
                      <li className="flex gap-3" key={detail}>
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className="gold-button mt-5 min-h-12 w-full px-4 text-sm uppercase"
                    href={getWhatsAppHref(service.title)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Consultar este servicio
                  </a>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
