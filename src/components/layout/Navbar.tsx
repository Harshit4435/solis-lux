import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Calendar } from 'lucide-react';
import { Button } from '../common/Button';
import { VittorisLogo } from '../common/VittorisLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  theme,
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solar Panels', path: '/projects' },
    { name: 'Project Owner', path: '/owners' },
    { name: 'Contact Desk', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#08090A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group select-none">
            <VittorisLogo size="md" subtitleText="Solar Estates & EPC" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="w-9 h-9 rounded-full border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center text-white/70 hover:text-[#D4AF37] bg-white/5 transition-all"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Direct Meeting Consultation Button */}
            <Button
              variant="gold"
              size="sm"
              onClick={onOpenConsultation}
              icon={<Calendar size={13} />}
            >
              Meet Project Owner
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1 hover:text-[#D4AF37] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#08090A]/95 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-serif tracking-[0.2em] uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Button
                variant="gold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                icon={<Calendar size={15} />}
              >
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
