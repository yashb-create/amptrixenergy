import { Link } from 'wouter';
import { Zap, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-16 pb-8 border-t border-[#1A3050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="images/logo.jpg" alt="AMPTRIX ENERGY LLP Logo" className="h-10 w-auto" />
              <span className="font-bold text-[16px] tracking-wide">AMPTRIX ENERGY LLP</span>
            </div>
            <p className="text-[#8A9BAC] text-sm leading-relaxed max-w-sm">
              Precision Engineering for Reliable Power Systems. Design, development, and manufacturing of instrument transformers for utilities and industry.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-[#8A9BAC] hover:text-white transition-colors cursor-pointer text-sm">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-[#8A9BAC] hover:text-white transition-colors cursor-pointer text-sm">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-[#8A9BAC] hover:text-white transition-colors cursor-pointer text-sm">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/technical">
                  <span className="text-[#8A9BAC] hover:text-white transition-colors cursor-pointer text-sm">Technical Data</span>
                </Link>
              </li>
              <li>
                <Link href="/quality">
                  <span className="text-[#8A9BAC] hover:text-white transition-colors cursor-pointer text-sm">Quality Assurance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-[#8A9BAC] text-sm leading-relaxed">
                  56, Mini Por Industrial Park, NH-48,<br />
                  Behind Sahyog Hotel, Por,<br />
                  Vadodara - 391243, Gujarat, INDIA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-[#8A9BAC] text-sm">+91 98255 81168 / +91 94268 88222</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-[#8A9BAC] text-sm">info@amptrixenergy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A3050] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8A9BAC]">
            © {new Date().getFullYear()} Amptrix Energy LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
