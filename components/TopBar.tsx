import { CalendarDays, Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Youtube } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    href: "https://maps.google.com/?q=714+Broadway,+Paterson,+NJ+07514",
    label: "714 Broadway, Paterson, NJ 07514"
  },
  {
    icon: Mail,
    href: "mailto:servicioslegales@alaskasolutions.org",
    label: "servicioslegales@alaskasolutions.org"
  }
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/alaskasolutionsllc/",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/alaskasolutionsassociates/",
    label: "Instagram"
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@alaskasolutions",
    label: "YouTube"
  },
  {
    icon: Music2,
    href: "https://www.tiktok.com/@alaskasolutionsll",
    label: "TikTok"
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/19739607538",
    label: "WhatsApp"
  }
];

export default function TopBar() {
  return (
    <section className="bg-gradient-to-r from-[#2b1a09] via-[#3a250f] to-[#1d1207] text-white">
      <div className="site-shell grid gap-3 py-3 lg:hidden">
        <div className="grid gap-2 text-[0.95rem] font-semibold leading-snug">
          {contactItems.map((item) => (
            <a className="flex min-w-0 items-center gap-3 break-words transition hover:text-paleGold" href={item.href} key={item.label}>
              <item.icon className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="shrink-0 font-serif text-xl font-bold">Síguenos:</span>
          <div className="flex flex-wrap justify-end gap-2">
            {socialLinks.map((item) => (
              <a
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 transition hover:border-paleGold hover:text-paleGold"
                href={item.href}
                key={item.label}
                rel="noreferrer"
                target="_blank"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <a className="gold-button min-h-12 w-full px-5 text-sm uppercase" href="tel:+19739607538">
          <CalendarDays className="h-5 w-5" />
          AGENDA TU CITA
        </a>
      </div>

      <div className="site-shell hidden min-h-12 items-center justify-between gap-6 text-sm font-semibold lg:flex xl:text-base">
        <div className="flex items-center gap-6">
          {contactItems.map((item) => (
            <a className="flex min-w-0 items-center gap-2 transition hover:text-paleGold" href={item.href} key={item.label}>
              <item.icon className="h-5 w-5 shrink-0 text-white" strokeWidth={2} />
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4">
          <span className="font-bold">Síguenos:</span>
          {socialLinks.map((item) => (
            <a
              aria-label={item.label}
              className="transition hover:text-paleGold"
              href={item.href}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
          <a className="gold-button -my-3 ml-2 min-h-12 px-6 text-sm uppercase xl:px-8" href="tel:+19739607538">
            <CalendarDays className="h-5 w-5" />
            AGENDA TU CITA
          </a>
        </div>
      </div>
    </section>
  );
}
