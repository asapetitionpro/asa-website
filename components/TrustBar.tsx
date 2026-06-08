import { CheckCircle2, Scale, ShieldCheck, UsersRound } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Confidencialidad",
    text: "Manejamos tu información con total discreción."
  },
  {
    icon: UsersRound,
    title: "Atención Personalizada",
    text: "Escuchamos tu caso y te damos la mejor solución."
  },
  {
    icon: Scale,
    title: "Experiencia",
    text: "Años de experiencia resolviendo casos con éxito."
  },
  {
    icon: CheckCircle2,
    title: "Resultados",
    text: "Trabajamos con compromiso para obtener los mejores resultados."
  }
];

export default function TrustBar() {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#1f1d1a] via-[#282521] to-[#1b1917] text-white">
      <div className="site-shell grid gap-6 pb-8 pt-10 md:grid-cols-2 md:pt-12 lg:py-8 xl:grid-cols-4 xl:gap-0">
        {trustItems.map((item) => (
          <article
            className="flex items-start gap-4 border-[#8b8174] py-2 sm:items-center sm:gap-5 xl:border-r xl:px-8 last:xl:border-r-0"
            key={item.title}
          >
            <item.icon className="h-12 w-12 shrink-0 text-gold sm:h-14 sm:w-14" strokeWidth={1.8} />
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl lg:text-xl">{item.title}</h2>
              <p className="mt-2 text-base leading-7 text-[#f1eee8] sm:text-lg lg:text-base">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
