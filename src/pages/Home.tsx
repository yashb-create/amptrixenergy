import { useEffect } from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, Clock, Headphones, Check, Zap, Factory, Settings, Cpu, Building2 } from 'lucide-react';
import { FadeIn } from '@/hooks/use-fade-in';

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
              <span className="text-accent text-[11px] font-semibold tracking-[0.12em] uppercase">
                INSTRUMENT TRANSFORMERS · CT / PT · LV / MV
              </span>
              <h1 className="text-white text-[clamp(32px,4vw,52px)] font-bold leading-tight">
                Precision Engineered Instrument Transformers
              </h1>
              <p className="text-[#8A9BAC] text-[16px] leading-relaxed max-w-xl">
                Design, development and manufacturing of reliable Instrument Transformers for utilities, power industries, control panels and industrial applications.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/products">
                  <span className="border border-white text-white font-medium rounded-[3px] py-3 px-6 text-[15px] hover:bg-white/10 transition-colors cursor-pointer inline-block">
                    Explore Products
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="bg-accent border border-accent text-white font-medium rounded-[3px] py-3 px-6 text-[15px] hover:bg-accent/90 transition-colors cursor-pointer inline-block">
                    Request a Quote
                  </span>
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#2C3E50]"></div>
                <p className="text-[12px] text-[#637588] tracking-wide uppercase">
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
            <h2 className="text-[30px] text-[#0D1B2A] font-bold mb-12">
              Engineering Experience. Manufacturing Discipline.
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-7">
              <div className="space-y-6 text-[#2C3E50] text-[16px] leading-relaxed">
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
                  <div className="text-[32px] font-bold text-[#0D1B2A] leading-none mb-1">40+ Years</div>
                  <div className="text-[#8A9BAC] text-[14px]">Engineering Experience</div>
                </div>
                <div className="mb-8">
                  <div className="text-[32px] font-bold text-accent leading-none mb-1">2025</div>
                  <div className="text-[#8A9BAC] text-[14px]">Company Established</div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[11px] font-bold text-[#2C3E50] tracking-wider">
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
            <h2 className="text-[24px] text-[#0D1B2A] font-bold mb-10">Why Prioritise Amptrix</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md">
                <Shield className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[16px] mb-2">Over Four Decades Experience</h3>
                <p className="text-[#637588] text-[14px] leading-relaxed">
                  Decades of deep engineering knowledge in instrument transformer design and manufacturing.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md" style={{ transitionDelay: '100ms' }}>
                <CheckCircle className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[16px] mb-2">Consistent Quality</h3>
                <p className="text-[#637588] text-[14px] leading-relaxed">
                  Every unit undergoes strict quality checks and routine testing before dispatch.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md" style={{ transitionDelay: '200ms' }}>
                <Clock className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[16px] mb-2">On Time Delivery</h3>
                <p className="text-[#637588] text-[14px] leading-relaxed">
                  Reliable supply commitments to utilities and industrial customers across India.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-white border border-[#E2E8F0] p-6 h-full transition-shadow hover:shadow-md" style={{ transitionDelay: '300ms' }}>
                <Headphones className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-[#0D1B2A] font-bold text-[16px] mb-2">Strong Technical Support</h3>
                <p className="text-[#637588] text-[14px] leading-relaxed">
                  Expert technical support and solutions from experienced engineers.
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
            <h2 className="text-[24px] text-[#0D1B2A] font-bold mb-10">Built for Industrial Demands</h2>
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
                    <h4 className="text-[#0D1B2A] font-bold text-[14px] mb-1">{feature.title}</h4>
                    <p className="text-[#637588] text-[12px] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#F4F6F8] py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[24px] text-[#0D1B2A] font-bold mb-10">Where Our Transformers Work</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Zap, title: 'Utilities', desc: 'Metering and protection for power distribution networks' },
              { icon: Factory, title: 'Power Industries', desc: 'Reliable measurement in generation and transmission facilities' },
              { icon: Settings, title: 'Control Panels', desc: 'Compact LV transformers for industrial control systems' },
              { icon: Cpu, title: 'Switchgears', desc: 'Accurate current and voltage measurement in switchgear assemblies' },
              { icon: Building2, title: 'Industrial Sectors', desc: 'Versatile instrument transformers across manufacturing and process industries' },
            ].map((app, idx) => {
              const Icon = app.icon;
              return (
                <FadeIn key={idx} className="bg-white border border-[#E2E8F0] p-6 rounded-[2px]" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <Icon className="h-6 w-6 text-[#2C3E50] mb-4" strokeWidth={1.5} />
                  <h4 className="text-[#0D1B2A] font-bold text-[15px] mb-2">{app.title}</h4>
                  <p className="text-[#637588] text-[13px] leading-relaxed">{app.desc}</p>
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
            <h2 className="text-white text-[26px] font-bold mb-4">Ready to Discuss Your Requirement?</h2>
            <p className="text-[#8A9BAC] text-[15px] mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to assist you with standard products or custom specifications.
            </p>
            <Link href="/contact">
              <span className="border border-white text-white font-semibold rounded-[3px] py-3 px-8 text-[15px] hover:bg-white hover:text-[#0D1B2A] transition-colors cursor-pointer inline-block">
                Get in Touch
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
