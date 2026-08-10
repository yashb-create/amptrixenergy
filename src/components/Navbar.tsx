import { Link, useLocation } from 'wouter';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [pathname] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/technical', label: 'Technical' },
    { href: '/quality', label: 'Quality' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <img src="images/logo.jpg" alt="AMPTRIX ENERGY LLP Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-[#0D1B2A] font-bold text-[15px] tracking-[0.05em] leading-tight">
                AMPTRIX ENERGY LLP
              </span>
              <span className="text-[#8A9BAC] text-[11px] leading-tight mt-[2px]">
                Instrument Transformers
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-[14px] font-medium transition-colors duration-150 cursor-pointer ${
                      isActive
                        ? 'text-accent border-b-2 border-accent pb-1'
                        : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <span className="bg-accent text-white font-semibold rounded-[3px] py-2 px-4 text-[14px] hover:bg-accent/90 transition-colors cursor-pointer">
                Request a Quote
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-foreground focus:outline-none p-2"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  onClick={() => setIsMobileOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium cursor-pointer ${
                    pathname === link.href
                      ? 'text-accent bg-accent/5'
                      : 'text-foreground hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link href="/contact">
                <span 
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-center bg-accent text-white font-semibold rounded-[3px] py-3 px-4 hover:bg-accent/90 cursor-pointer"
                >
                  Request a Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
