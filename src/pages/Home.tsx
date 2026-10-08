import { Link } from 'wouter';
import { Shield, CheckCircle, Clock, Headphones, Check, Zap, Factory, Settings, Cpu, Building2, Database, CheckCircle2, Users } from 'lucide-react';
import { FadeIn } from '@/hooks/use-fade-in';
import { useEffect, useState, type ReactNode } from 'react';

// Put the matching images in /public/images/applications/ (or change the paths below).
const applications = [
  { name: 'Utilities', image: '/images/applications/utilities.jpg' },
  { name: 'Power Plants', image: '/images/applications/power-plants.jpg' },
  { name: 'Industrial Plants', image: '/images/applications/industrial-plants.jpg' },
  { name: 'Switchgear Manufacturers', image: '/images/applications/switchgear-manufacturers.jpg' },
  { name: 'Control Panels', image: '/images/applications/control-panels.jpg' },
  { name: 'Engineering Consultants', image: '/images/applications/engineering-consultants.jpg' },
];

// Small image shown in each tile; if the file is missing, falls back to the check icon.
function AppImage({
  src,
  alt,
  fallback,
  className = 'mx-auto mb-3',
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-14 w-14 object-cover rounded-[3px] ${className}`}
    />
  );
}

function CardImage({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="p-6 pb-0">{fallback}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full h-52 object-cover"
    />
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Amptrix Energy LLP | Instrument Transformers Manufacturer';
  }, []);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-[#0D1B2A] min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col items-start space-y-6">
              <div className="flex flex-col gap-0">
                <span className="text-accent text-[16px] font-semibold tracking-[0.12em] uppercase">
                  Emerging Designed Instrument Transformers (CTs/PTs)
                </span>

                <span className="text-accent text-[12px] font-semibold tracking-[0.12em] uppercase -mt-1">
                  conforming to National and
International Standard
                </span>
              </div>
              <h1 className="text-white text-[clamp(36px,4.4vw,58px)] font-bold leading-tight">
                Precision Engineered Instrument Transformers
              </h1>
              <p className="text-[#8A9BAC] text-[18px] leading-relaxed max-w-xl">
                Design, Development, Manufacturing and Supply the Best in Class LV/MV Instrument Transformers for Utilities, Power Industries, Switchgear & Control panel manufacturers and all other Industry Sectors
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/products">
                  <span className="border border-white text-white font-medium rounded-[3px] py-3 px-6 text-[17px] hover:bg-white/10 transition-colors cursor-pointer inline-block">
                    Explore Products
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-accent border border-accent text-white font-medium rounded-[3px] py-3 px-6 text-[17px] hover:bg-accent/90 transition-colors cursor-pointer inline-block">
                    Request a Quote
                  </span>
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#2C3E50]"></div>
                <p className="text-[13px] text-[#4A5568] tracking-wide uppercase">
                  Por, Vadodara, Gujarat · Est. 2025 · 40+ Years Engineering Experience
                </p>
              </div>
            </div>

            {/* Right: Technical Illustration */}
            <div className="w-full max-w-lg mx-auto lg:ml-auto">
              <svg viewBox="0 0 480 400" width="100%" height="auto" className="drop-shadow-xl" role="img" aria-label="Technical schematic of a current transformer">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A3050" strokeWidth="1" strokeOpacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect x="20" y="20" width="440" height="360" fill="none" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Core */}
                <rect x="140" y="100" width="200" height="200" rx="4" fill="#0F2540" stroke="#4A7AAA" strokeWidth="1.5" />
                <circle cx="240" cy="200" r="40" fill="#0D1B2A" stroke="#4A7AAA" strokeWidth="1.5" />
                
                {/* Windings (Stylized) */}
                {[...Array(24)].map((_, i) => (
                  <path key={i} d={`M ${240 + Math.cos(i * 15 * Math.PI / 180) * 40} ${200 + Math.sin(i * 15 * Math.PI / 180) * 40} L ${240 + Math.cos(i * 15 * Math.PI / 180) * 98} ${200 + Math.sin(i * 15 * Math.PI / 180) * 98}`} stroke="#8A9BAC" strokeWidth="1" opacity="0.4" />
                ))}

                {/* Terminals */}
                <rect x="170" y="80" width="20" height="20" fill="#2C3E50" stroke="#4A7AAA" strokeWidth="1" />
                <text x="180" y="94" fill="#E2E8F0" fontSize="10" textAnchor="middle" fontFamily="monospace">P1</text>
                <rect x="290" y="80" width="20" height="20" fill="#2C3E50" stroke="#4A7AAA" strokeWidth="1" />
                <text x="300" y="94" fill="#E2E8F0" fontSize="10" textAnchor="middle" fontFamily="monospace">P2</text>
                
                <rect x="190" y="300" width="16" height="16" fill="#2C3E50" stroke="#4A7AAA" strokeWidth="1" />
                <text x="198" y="311" fill="#E2E8F0" fontSize="8" textAnchor="middle" fontFamily="monospace">S1</text>
                <rect x="274" y="300" width="16" height="16" fill="#2C3E50" stroke="#4A7AAA" strokeWidth="1" />
                <text x="282" y="311" fill="#E2E8F0" fontSize="8" textAnchor="middle" fontFamily="monospace">S2</text>

                {/* Dimensions */}
                <path d="M 140 330 L 340 330" fill="none" stroke="#4A7AAA" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                <path d="M 140 325 L 140 335 M 340 325 L 340 335" fill="none" stroke="#4A7AAA" strokeWidth="1" />
                <text x="240" y="345" fill="#4A7AAA" fontSize="10" textAnchor="middle" fontFamily="monospace">OD 150mm</text>

                <path d="M 360 100 L 360 300" fill="none" stroke="#4A7AAA" strokeWidth="1" />
                <path d="M 355 100 L 365 100 M 355 300 L 365 300" fill="none" stroke="#4A7AAA" strokeWidth="1" />
                <text x="370" y="205" fill="#4A7AAA" fontSize="10" fontFamily="monospace">H 120mm</text>

                {/* Callouts */}
                <path d="M 80 150 L 160 180" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="160" cy="180" r="2" fill="#E8730A" />
                <text x="75" y="152" fill="#E8730A" fontSize="9" textAnchor="end" letterSpacing="1">MAGNETIC CORE</text>

                <path d="M 80 250 L 190 230" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="190" cy="230" r="2" fill="#E8730A" />
                <text x="75" y="252" fill="#E8730A" fontSize="9" textAnchor="end" letterSpacing="1">PRIMARY WINDING</text>

                <path d="M 400 250 L 290 230" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="290" cy="230" r="2" fill="#E8730A" />
                <text x="405" y="252" fill="#E8730A" fontSize="9" letterSpacing="1">SECONDARY WINDING</text>

                <path d="M 400 80 L 310 90" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="310" cy="90" r="2" fill="#E8730A" />
                <text x="405" y="82" fill="#E8730A" fontSize="9" letterSpacing="1">TERMINAL BLOCK</text>

                {/* Bottom Badges */}
                <text x="30" y="370" fill="#E2E8F0" fontSize="9" fontFamily="monospace" letterSpacing="1">IS: 16228 COMPLIANT</text>
                <text x="450" y="370" fill="#E2E8F0" fontSize="9" textAnchor="end" fontFamily="monospace" letterSpacing="1">LV CURRENT TRANSFORMER</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[34px] text-[#0D1B2A] font-bold mb-12">
              Engineering Expertise - Manufacturing Discipline - Professionally Managed
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-7">
              <div className="space-y-6 text-[#2C3E50] text-[18px] leading-relaxed">
                <p>
                  An Amptrix Energy LLP. is a registered Company based at Por, Dist. Vadodara, Gujarat, INDIA. The company has been established in 2025 by Engineers and Professionals having an Experience of more than FOUR decades.
                </p>
                <p>
                  They are fully competent and having a deep knowledge in the field of Design, Development, Manufacturing, Testing and Selling the Instrument Transformers used by Utilities, Power Industries and all other Sectors of Industry.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn className="lg:col-span-5">
              <div className="border border-[#E2E8F0] p-8 h-full bg-white flex flex-col justify-center">
                <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                  <div className="text-[36px] font-bold text-[#0D1B2A] leading-none mb-1">40+ Years</div>
                  <div className="text-[#8A9BAC] text-[16px]">Engineering Experience</div>
                </div>
                <div className="mb-8">
                  <div className="text-[36px] font-bold text-accent leading-none mb-1">2025</div>
                  <div className="text-[#8A9BAC] text-[16px]">Company Established</div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[12px] font-bold text-[#2C3E50] tracking-wider">
                    <span>DESIGN</span>
                    <span className="hidden sm:inline text-accent">→</span>
                    <span>DEVELOPMENT</span>
                    <span className="hidden sm:inline text-accent">→</span>
                    <span>MANUFACTURING</span>
                    <span className="hidden sm:inline text-accent">→</span>
                    <span>TESTING</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Amptrix */}
      <section className="bg-[#F4F6F8] py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[28px] text-[#0D1B2A] font-bold mb-10">Why Amptrix?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md">
                <Shield className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[18px] mb-2">Experience</h3>
                <p className="text-[#4A5568] text-[16px] leading-relaxed">
                  Four Decades of Industry experience and having deep knowledge in the field of Instrument Transformers Business
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md" style={{ transitionDelay: '100ms' }}>
                <CheckCircle className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[18px] mb-2">Quality</h3>
                <p className="text-[#4A5568] text-[16px] leading-relaxed">
                  Each and Every product has to undergo strict Quality checks and strong QMS system.  They are 100% Tested for all the Routine tests before Dispatch from the factory
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md" style={{ transitionDelay: '200ms' }}>
                <Clock className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[18px] mb-2">Delivery</h3>
                <p className="text-[#4A5568] text-[16px] leading-relaxed">
                  Supply On time Delivery as per the committed Scheduled to the Customers and Honor the Project Time line across the Pan India
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md" style={{ transitionDelay: '300ms' }}>
                <Headphones className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[18px] mb-2">Support & Services</h3>
                <p className="text-[#4A5568] text-[16px] leading-relaxed">
                  Our objective is to provide Expert Technical Solutions and Support for selection of the Right Product by the Expert Engineers and Promptly attend the Services required
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Distinct Features */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[28px] text-[#0D1B2A] font-bold mb-10">Built for Industrial Demands</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#E2E8F0]">
            {[
              { title: 'Meets all Applications', desc: 'Suitable for metering, protection and control panel applications' },
              { title: 'Trusted and Durable', desc: 'Reliable performance under industrial operating conditions' },
              { title: 'Single Stage Molding', desc: 'APG technology ensures uniform insulation and compact form factor' },
              { title: 'Compact and Robust', desc: 'Designed for space-constrained panel installations' },
              { title: 'Best Tracking Index', desc: 'Superior CTI rating for safety in humid and polluted environments' },
              { title: 'Responsive and Timely Support', desc: 'Technical assistance from experienced engineers' },
              { title: 'ROHS Compliant', desc: 'Manufactured with restricted hazardous substances compliance' },
              { title: 'Aesthetically Appealing', desc: 'Clean finish suitable for visible panel installations' },
              { title: 'Conforms to National & International Standard', desc: 'Fully type tested per IS: 16228 and IS: 3156' },
            ].map((feature, idx) => (
              <FadeIn key={idx} className="border-r border-b border-[#E2E8F0] p-6 bg-white hover:bg-[#F4F6F8]/50 transition-colors">
                <div className="flex gap-3">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                  <div>
                    <h4 className="text-[#0D1B2A] font-bold text-[16px] mb-1">{feature.title}</h4>
                    <p className="text-[#4A5568] text-[13px] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Applications (with images) */}
      <section className="bg-[#F4F6F8] py-[80px]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeIn>
      <h2 className="text-[28px] text-[#0D1B2A] font-bold mb-10">Where Our Product Works</h2>
    </FadeIn>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: Zap, title: 'Utilities', desc: 'For Reliable Revenue measurement and Protections', image: '/images/applications/utilities.jpeg' },
        { icon: Factory, title: 'Power Industries', desc: 'For Reliable Metering and various Protection Applications', image: '/images/applications/power-plants.jpeg' },
        { icon: Settings, title: 'Switchgear & Control Panels', desc: 'Compact in size for Industrial Controls and Protection', image: '/images/applications/control-panels.jpeg' },
        { icon: Cpu, title: 'Solar Projects', desc: 'Monitoring Energy Measurements and Protection of Solar & Wind projects', image: '/images/applications/switchgear-manufacturers.jpeg' },
        { icon: Building2, title: 'Light & Heavy Industry', desc: 'Versatile instrument transformers across manufacturing and process industries', image: '/images/applications/industrial-plants.jpeg' },
        { icon: Database, title: 'Data Center', desc: 'Monitoring the total Power Supply and Protection', image: '/images/applications/data-center.jpeg' },
      ].map((app, idx) => {
        const Icon = app.icon;
        return (
          <FadeIn
            key={idx}
            className="bg-white border border-[#E2E8F0] rounded-[2px] overflow-hidden h-full"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <CardImage
              src={app.image}
              alt={app.title}
              fallback={<Icon className="h-6 w-6 text-[#2C3E50]" strokeWidth={1.5} />}
            />
            <div className="p-6">
              <h4 className="text-[#0D1B2A] font-bold text-[17px] mb-2">{app.title}</h4>
              <p className="text-[#4A5568] text-[15px] leading-relaxed">{app.desc}</p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </div>
</section>

      

      {/* CTA Banner */}
      <section className="bg-[#0D1B2A] py-[60px] border-t border-[#1A3050]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-white text-[30px] font-bold mb-4">Ready to Discuss Your Requirement?</h2>
            <p className="text-[#8A9BAC] text-[17px] mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to assist you with standard products or custom specifications.
            </p>
            <Link href="/contact">
              <span className="border border-white text-white font-semibold rounded-[3px] py-3 px-8 text-[17px] hover:bg-white hover:text-[#0D1B2A] transition-colors cursor-pointer inline-block">
                Get in Touch
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}