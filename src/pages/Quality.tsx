import { useEffect } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';
import { Check } from 'lucide-react';

export default function Quality() {
  useEffect(() => {
    document.title = 'Quality Assurance | Amptrix Energy LLP';
  }, []);

  return (
    <main className="w-full">
      {/* Page Header */}
      <div className="bg-[#F4F6F8] py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[12px] text-[#637588] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>Quality Assurance</span>
          </div>
          <h1 className="text-[32px] text-[#0D1B2A] font-bold">Quality Built Into Every Unit</h1>
        </div>
      </div>

      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <FadeIn>
              <h2 className="text-[24px] font-bold text-[#0D1B2A] mb-8">Our Quality Philosophy</h2>
              <div className="space-y-6">
                <div className="border-l-[3px] border-accent pl-4">
                  <p className="text-[17px] text-[#2C3E50] leading-[1.8] font-medium">
                    All Designs are fully Type Tested as per the National & International Standard.
                  </p>
                </div>
                <div className="border-l-[3px] border-accent pl-4">
                  <p className="text-[17px] text-[#2C3E50] leading-[1.8] font-medium">
                    Every unit dispatched from the factory has to undergo the strengthen Quality checks and successfully passed all the Routine Tests.
                  </p>
                </div>
                <div className="border-l-[3px] border-accent pl-4">
                  <p className="text-[17px] text-[#2C3E50] leading-[1.8] font-medium">
                    Technical requirements and dimensions are carefully considered to accommodate different LV/MV control and switchgear panels.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="bg-[#F4F6F8] p-8 border border-[#E2E8F0]">
              <h3 className="text-[18px] font-bold text-[#0D1B2A] mb-6 uppercase tracking-wide">Quality Commitments</h3>
              <ul className="space-y-4">
                {[
                  'Full Type Testing per National & International Standards',
                  '100% Routine Testing before dispatch',
                  'Dimensional compatibility with LV/MV switchgear panels',
                  'ROHS Compliant materials',
                  'Single Stage Molding (APG Technology)',
                  'PD Free (Partial Discharge Free)',
                  'Higher Tracking Index (CTI)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#2C3E50] font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* APG Technology */}
      <section className="bg-white border-t border-[#E2E8F0] py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[28px] font-bold text-[#0D1B2A] mb-4">APG Technology Manufacturing</h2>
            <p className="text-[#637588] text-[16px] leading-relaxed">
              The Products have been designed and developed with an Innovative Design concept, Emerging Technology and manufactured using latest APG Technology.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#E2E8F0]">
            {[
              { title: 'APG Technology', desc: 'Automated Pressure Gelation for defect-free epoxy molding' },
              { title: 'Single Stage Molding', desc: 'Uniform insulation integrity in a single manufacturing step' },
              { title: 'PD Free', desc: 'Partial discharge free design for long service life' },
              { title: 'Higher Tracking Index', desc: 'Superior CTI for safe operation in contaminated environments' },
              { title: 'Dimensional Compatibility', desc: 'Precision dimensions for drop-in replacement in existing panels' },
              { title: 'Routine Testing', desc: 'Every unit electrically tested before leaving the factory' },
            ].map((box, idx) => (
              <FadeIn key={idx} className="border-r border-b border-[#E2E8F0] p-8 bg-white hover:bg-[#F4F6F8]/50 transition-colors">
                <div className="h-10 w-10 bg-[#0D1B2A] text-white flex items-center justify-center font-bold text-[14px] mb-6 rounded-[2px]">
                  0{idx + 1}
                </div>
                <h4 className="text-[16px] font-bold text-[#0D1B2A] mb-2">{box.title}</h4>
                <p className="text-[#637588] text-[14px] leading-relaxed">{box.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
