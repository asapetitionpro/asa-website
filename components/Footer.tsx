import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[#18120c] pb-28 pt-12 text-[#eee4d4] sm:pb-24">
      <div className="site-shell grid gap-9 md:grid-cols-[0.9fr_1.3fr] md:items-center">
        <div className="text-center md:text-left">
          <div className="relative mx-auto h-24 w-72 max-w-full md:mx-0">
            <Image
              alt="Alaska Solutions and Associates logo"
              className="object-contain"
              fill
              src="/logo-transparent.png"
              sizes="288px"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            {socialLinks.map((item) => (
              <a
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition hover:bg-gold hover:text-[#18120c]"
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
        <div className="grid gap-4 text-base lg:text-lg">
          <a className="flex items-center gap-3 transition hover:text-paleGold" href="tel:+19739607538">
            <Phone className="h-5 w-5 shrink-0 text-gold" />
            (973) 960-7538
          </a>
          <a className="flex min-w-0 items-center gap-3 break-all transition hover:text-paleGold" href="mailto:servicioslegales@alaskasolutions.org">
            <Mail className="h-5 w-5 shrink-0 text-gold" />
            servicioslegales@alaskasolutions.org
          </a>
          <span className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-gold" />
            714 Broadway, Paterson, NJ 07514
          </span>
        </div>
      </div>
      <div className="site-shell mt-9 border-t border-gold/20 pt-5 text-center text-sm text-[#cfc3b3] md:text-left">
        © 2026 Alaska Solutions and Associates. Todos los derechos reservados.
      </div>
    </footer>
  );
}
