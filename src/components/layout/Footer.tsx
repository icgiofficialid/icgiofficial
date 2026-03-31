import { Link } from "react-router-dom";
import { Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-3">ICGI</h3>
            <p className="text-secondary-foreground/70 text-sm font-body leading-relaxed">
              Indonesian Centre for Giftedness Innovation — Shaping Innovative & Cultured Global Achievers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 gold-text">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Programs", href: "/programs" },
                { label: "Competition System", href: "/competition-system" },
                { label: "Partnership", href: "/partnership" },
                { label: "Membership", href: "/membership" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 gold-text">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <Link to="/Contact" className="hover:text-accent transition-colors">
                  icgi.official.id@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Globe className="w-4 h-4 mt-0.5 shrink-0" />
                <span>www.icgi.or.id</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 gold-text">Follow Us</h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-xs font-heading font-semibold text-secondary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/50 font-body">
            © {new Date().getFullYear()} Indonesian Centre for Giftedness Innovation (ICGI). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
