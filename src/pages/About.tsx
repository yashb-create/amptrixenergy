import { useEffect } from 'react';
import { Link } from 'wouter';
import { Compass, Layers, Factory, FlaskConical, Headphones } from 'lucide-react';
import { FadeIn } from '@/hooks/use-fade-in';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Amptrix Energy LLP';
  }, []);

  return (
    <main className="w-full">
      {/* Page Header */}
      <div className="bg-[#F4F6F8] py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[12px] text-[#637588] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>About Us</span>
          </div>
          <h1 className="text-[32px] text-[#0D1B2A] font-bold">Built on Engineering Experience</h1>
        </div>
      </div>

      {/* Company Background */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6 text-[#2C3E50] text-[16px] leading-relaxed mb-10">
                <p>
                  An Amptrix Energy LLP. is a registered Company based at Por, Dist. Vadodara, Gujarat, INDIA. The company has been established in 2025 by Engineers and Professionals having an Experience of more than FOUR decades.
                </p>
                <p>
                  They are fully competent and having a deep knowledge in the field of Design, Development, Manufacturing, Testing and Selling the Instrument Transformers used by Utilities, Power Industries and all other Sectors of Industry.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-[#E2E8F0] p-4 text-center">
                  <div className="text-[14px] font-bold text-[#0D1B2A] mb-1">Por, Vadodara</div>
                  <div className="text-[11px] text-[#637588] uppercase tracking-wide">Gujarat, INDIA</div>
                </div>
                <div className="border border-[#E2E8F0] p-4 text-center">
                  <div className="text-[14px] font-bold text-[#0D1B2A] mb-1">Est. 2025</div>
                  <div className="text-[11px] text-[#637588] uppercase tracking-wide">Registered Company</div>
                </div>
                <div className="border border-[#E2E8F0] p-4 text-center border-l-4 border-l-accent">
                  <div className="text-[14px] font-bold text-[#0D1B2A] mb-1">40+ Years</div>
                  <div className="text-[11px] text-[#637588] uppercase tracking-wide">Engineering Experience</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="hidden lg:block">
              <svg viewBox="0 0 400 400" width="100%" height="auto" className="border border-[#E2E8F0]">
                <rect width="400" height="400" fill="#F4F6F8" />
                <defs>
                  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.5" fill="#CBD5E0" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#smallGrid)" />
                
                {/* Toroidal Core Outline */}
                <circle cx="200" cy="200" r="120" fill="none" stroke="#2C3E50" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="80" fill="none" stroke="#2C3E50" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Windings Representation */}
                {[...Array(36)].map((_, i) => (
                  <path 
                    key={i} 
                    d={`M ${200 + Math.cos(i * 10 * Math.PI / 180) * 80} ${200 + Math.sin(i * 10 * Math.PI / 180) * 80} 
                       L ${200 + Math.cos(i * 10 * Math.PI / 180) * 120} ${200 + Math.sin(i * 10 * Math.PI / 180) * 120}`} 
                    stroke="#8A9BAC" strokeWidth="1.5" opacity="0.6" 
                  />
                ))}

                {/* Annotation Lines */}
                <path d="M 80 200 L 40 200 M 40 200 L 40 180" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="80" cy="200" r="2" fill="#E8730A" />
                <text x="40" y="170" fill="#E8730A" fontSize="10" textAnchor="middle" letterSpacing="1">CORE</text>

                <path d="M 280 140 L 320 100 L 350 100" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="280" cy="140" r="2" fill="#E8730A" />
                <text x="350" y="95" fill="#E8730A" fontSize="10" textAnchor="end" letterSpacing="1">PRIMARY</text>

                <path d="M 280 260 L 320 300 L 350 300" fill="none" stroke="#E8730A" strokeWidth="1" />
                <circle cx="280" cy="260" r="2" fill="#E8730A" />
                <text x="350" y="315" fill="#E8730A" fontSize="10" textAnchor="end" letterSpacing="1">SECONDARY</text>
              </svg>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F4F6F8] py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E2E8F0] shadow-sm">
            <FadeIn className="bg-white p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#E2E8F0]">
              <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-4 uppercase">MISSION</div>
              <p className="text-[#2C3E50] text-[16px] leading-relaxed">
                To deliver the High Quality and Reliable Products through Efficient Manufacturing and strong Technical Support. To Responsive Customer support, On Time delivery ensuring Total Customer Satisfaction.
              </p>
            </FadeIn>
            <FadeIn className="bg-white p-8 md:p-12">
              <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-4 uppercase">VISION</div>
              <p className="text-[#2C3E50] text-[16px] leading-relaxed">
                We further Endeavour to Knowledge sharing, providing Technical Solutions, and exploring the Emerging Product design, Latest Manufacturing Techniques and the Unique Process Controls to produce and supply the Best in Class Products.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[24px] text-[#0D1B2A] font-bold mb-10 text-center">Our Capabilities</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Compass, title: 'Design', desc: 'Precision engineering design for LV and MV applications' },
              { icon: Layers, title: 'Development', desc: 'Iterative prototype and product development' },
              { icon: Factory, title: 'Manufacturing', desc: 'APG Technology single-stage molding process' },
              { icon: FlaskConical, title: 'Testing', desc: 'Full type testing and routine testing per IS standards' },
              { icon: Headphones, title: 'Technical Support', desc: 'On-call engineering support for all customers' },
            ].map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <FadeIn key={idx} className="border border-[#E2E8F0] p-6 bg-white hover:border-[#CBD5E0] transition-colors" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <Icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                  <h4 className="text-[#0D1B2A] font-bold text-[15px] mb-2">{cap.title}</h4>
                  <p className="text-[#637588] text-[13px] leading-relaxed">{cap.desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="bg-[#F4F6F8] py-[80px] border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-[24px] text-[#0D1B2A] font-bold mb-12">Our Manufacturing Process</h2>
          </FadeIn>
          <div className="relative border-l-2 border-[#CBD5E0] ml-4 md:ml-0">
            {[
              { title: 'DESIGN', desc: 'Engineering design with precise specifications' },
              { title: 'DEVELOPMENT', desc: 'Prototype development and validation' },
              { title: 'APG MANUFACTURING', desc: 'Automated Pressure Gelation molding process' },
              { title: 'QUALITY CHECK', desc: 'Dimensional and visual inspection' },
              { title: 'ROUTINE TESTING', desc: 'Electrical tests per IS: 16228 / IS: 3156' },
              { title: 'DISPATCH', desc: 'Packaged and delivered on schedule' },
            ].map((step, idx) => (
              <FadeIn key={idx} className="mb-10 ml-8 relative">
                <div className="absolute -left-[45px] top-0 h-[28px] w-[28px] rounded-full bg-accent text-white flex items-center justify-center font-bold text-[13px] ring-4 ring-[#F4F6F8]">
                  {idx + 1}
                </div>
                <h4 className="text-[15px] font-bold text-[#0D1B2A] mb-1">{step.title}</h4>
                <p className="text-[13px] text-[#637588]">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
