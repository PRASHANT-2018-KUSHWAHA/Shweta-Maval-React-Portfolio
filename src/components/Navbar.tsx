import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Vlogs", path: "/vlogs" },
  { name: "Press", path: "/press" },
  { name: "Speaking", path: "/speaking" },
  { name: "Consulting", path: "/consulting" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[999] transition-all duration-500",
      isHome ? "bg-transparent" : "bg-brand-paper/80 backdrop-blur-md border-b border-brand-ink/5"
    )}>
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-1 max-w-screen-2xl mx-auto">
        {!isHome ? (
          <Link to="/" className="text-xl md:text-2xl font-headline font-bold text-brand-ink tracking-tight">
            Eileen Grubba
          </Link>
        ) : (
          <div /> // Empty space for layout balance on Home
        )}
        
        {!isHome && (
          <div className="hidden md:flex items-center gap-8 font-medium text-[10px] uppercase tracking-widest">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "transition-colors hover:text-brand-coral",
                  location.pathname === item.path ? "text-brand-coral" : "text-brand-ink/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center transition-all",
                  isHome 
                    ? "bg-white/5 text-white hover:bg-brand-coral hover:scale-110" 
                    : "bg-brand-ink/10 text-brand-ink/60 hover:bg-brand-coral hover:text-white"
                )}
              >
                <social.icon size={8} />
              </a>
            ))}
          </div>
          {!isHome && (
            <button className="bg-brand-coral text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-coral/20">
              Booking
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
