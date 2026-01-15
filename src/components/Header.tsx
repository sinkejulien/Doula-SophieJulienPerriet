import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Accompagnements Doula", path: "/doula" },
  { label: "Yoga au féminin", path: "/yoga" },
  { label: "Cercles & Rituels", path: "/cercles-rituels" },
  { label: "À propos", path: "/a-propos" },
  { label: "Témoignages", path: "/temoignages" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container-wide mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soleil flex items-center justify-center shadow-soft group-hover:shadow-lg transition-shadow duration-300">
              <span className="font-display text-terre text-lg md:text-xl font-semibold">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-terre text-lg md:text-xl leading-tight">Sophie</p>
              <p className="text-xs text-muted-foreground -mt-0.5">Doula & Yoga</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-soleil/30 text-terre"
                    : "text-terre-light hover:bg-sable/50 hover:text-terre"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Appel découverte
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-sable/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-terre" />
            ) : (
              <Menu className="w-6 h-6 text-terre" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                    location.pathname === item.path
                      ? "bg-soleil/30 text-terre"
                      : "text-terre-light hover:bg-sable/50 hover:text-terre"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Réserver un appel découverte
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
