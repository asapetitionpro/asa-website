import Script from "next/script";

const instagramSection = {
  id: "recursos",
  eyebrow: "Síguenos",
  title: "Conecta con nosotros en Instagram",
  description:
    "Mira novedades, contenido educativo y actualizaciones importantes desde nuestra cuenta oficial.",
  className: "elfsight-app-d8b9b7be-07e1-42cc-8e8f-b9af1a346f9f",
  tone: "cream"
};

const reviewsSection = {
  id: "testimonios",
  eyebrow: "Testimonios",
  title: "Lo que dicen nuestros clientes",
  description:
    "Lee reseñas reales de personas que confiaron en Alaska Solutions and Associates para manejar sus casos con seriedad, respeto y compromiso.",
  className: "elfsight-app-35f36dd7-9eff-482a-b22d-18e4d7bd24f4",
  tone: "light"
};

const contactSection = {
  id: "contactenos",
  eyebrow: "Contacto",
  title: "Cuéntanos sobre tu caso",
  description:
    "Completa el formulario y nuestro equipo se comunicará contigo para orientarte sobre los próximos pasos.",
  className: "elfsight-app-aac98a17-c451-4883-8a4b-5a901150ddb2",
  tone: "light"
};

function WidgetSection({
  section
}: {
  section: {
    className: string;
    description: string;
    eyebrow: string;
    id: string;
    title: string;
    tone: string;
  };
}) {
  return (
    <section
      className={section.tone === "cream" ? "bg-parchment py-16 sm:py-20" : "bg-ivory py-16 sm:py-20"}
      id={section.id}
    >
      <div className="site-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-extrabold uppercase tracking-[0.08em] text-bronze sm:text-lg">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#4d4238]">{section.description}</p>
        </div>
        <div className="mx-auto mt-9 max-w-6xl border border-[#e2d4bd] bg-white p-4 shadow-card sm:p-6">
          <div className={section.className} data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}

export function ElfsightScript() {
  return <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />;
}

export function InstagramWidget() {
  return <WidgetSection section={instagramSection} />;
}

export function ReviewsWidget() {
  return <WidgetSection section={reviewsSection} />;
}

export function ContactFormWidget() {
  return <WidgetSection section={contactSection} />;
}
