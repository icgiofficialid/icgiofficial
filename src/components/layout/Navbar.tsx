import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Academic Field", href: "/programs#academic" },
      { label: "Non-Academic Field", href: "/programs#non-academic" },
    ],
  },
  { label: "Competition System", href: "/competition-system" },
  { label: "Partnership", href: "/partnership" },
  { label: "Membership", href: "/membership" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="w-full px-4 sm:px-6 xl:px-16 flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24">

        {/* Kiri: Logo + Span */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <img
            src={logo}
            alt="ICGI Logo"
            className="h-7 sm:h-9 md:h-12 lg:h-14 w-auto object-contain"
          />
          <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground font-body leading-tight max-w-[120px] sm:max-w-[150px] md:max-w-[160px] lg:max-w-[200px]">
            Indonesian Centre for<br />Giftedness Innovation
          </span>
        </Link>

        {/* Desktop Nav Links (lg ke atas) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-3">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 xl:px-5 py-2 text-base xl:text-lg font-heading font-medium rounded-md transition-colors whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </Link>
                {programsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-card rounded-lg shadow-lg border border-border py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-base text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 xl:px-5 py-2 text-base xl:text-lg font-heading font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/membership" className="btn-primary ml-4 text-base py-2.5 px-7">
            Join ICGI
          </Link>
        </div>

        {/* Mobile: Join ICGI + Hamburger */}
        <div className="flex lg:hidden items-center gap-1.5">
          <Link
            to="/membership"
            className="btn-primary text-[10px] sm:text-xs py-1 sm:py-1.5 px-2 sm:px-4"
          >
            Join ICGI
          </Link>
          <button
            className="p-1.5 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="w-4 h-4 sm:w-5 sm:h-5" />
              : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm sm:text-base font-heading font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;