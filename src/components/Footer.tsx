import { Link } from "react-router-dom";
import { Heart, Mail, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Accompagnements",
    links: [
      { label: "Doula maternité", path: "/doula" },
      { label: "Doula ménopause", path: "/doula" },
      { label: "Accompagnement deuil", path: "/doula" },
      { label: "Yoga au féminin", path: "/yoga" },
    ],
  },
  {
    title: "Rituels & Cercles",
    links: [
      { label: "Cercles de femmes", path: "/cercles-rituels" },
      { label: "Motherblessing", path: "/cercles-rituels" },
      { label: "Rituel Rebozo", path: "/cercles-rituels" },
      { label: "Cérémonie cacao", path: "/cercles-rituels" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "À propos de moi", path: "/a-propos" },
      { label: "Témoignages", path: "/temoignages" },
      { label: "Questions fréquentes", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-nuit text-creme/90">
      {/* Main Footer */}
      <div className="container-wide mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-soleil flex items-center justify-center">
                <span className="font-display text-nuit text-xl font-semibold">S</span>
              </div>
              <div>
                <p className="font-display text-creme text-xl">Sophie</p>
                <p className="text-sm text-creme/60">Doula & Yoga</p>
              </div>
            </div>
            <p className="text-creme/70 text-sm leading-relaxed mb-6">
              Doula large spectre, je vous accompagne pour vivre une féminité zen et joyeuse dans les grands portails de votre vie.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:contact@sophie-doula.fr" className="flex items-center gap-2 text-creme/70 hover:text-soleil transition-colors">
                <Mail className="w-4 h-4" />
                sophie@sojyoti.com
              </a>
              <div className="flex items-center gap-2 text-creme/70">
                <MapPin className="w-4 h-4" />
                Présentiel & en ligne
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-lg text-creme mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-creme/70 hover:text-soleil transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-creme/10">
        <div className="container-wide mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-creme/50">
              © {new Date().getFullYear()} Sophie Julien-Perriet. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1 text-sm text-creme/50">
              Créé avec <Heart className="w-4 h-4 text-rose fill-rose" /> pour les femmes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
