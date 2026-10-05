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
          <div className="text-[13px] text-[#4A5568] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>Quality Assurance</span>
          </div>
          <h1 className="text-[36px] text-[#0D1B2A] font-bold">Quality Built Into Every Unit</h1>
        </div>
      </div>

      {/* Philosophy & Commitments */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="text-[28px] font-bold text-[#0D1B2A] mb-8">Our Philosophy on Quality</h2>
              <div className="space-y-6">
                <div className="border-l-[3px] border-accent pl-4">
                  <p className="text-[19px] text-[#2C3E50] leading-[1.8] font-medium">
                    All Designs are fully Type Tested as per the National & International Standard.
                  </p>
                </div>
                <div className="border-l-[3px] border-accent pl-4">
                  <p className="text-[19px] text-[#2C3E50] leading-[1.8] font-medium">
                    Every unit dispatched from the factory has to undergo the strengthen Quality checks and successfully passed all the Routine Tests.
                  </p>
                </div>
                <div className="border-l-[3px] border-accent pl-4">
                  <p className="text-[19px] text-[#2C3E50] leading-[1.8] font-medium">
                    Technical requirements and dimensions are carefully considered to accommodate different LV/MV control and switchgear panels.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="bg-[#F4F6F8] p-8 border border-[#E2E8F0]">
              <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-6 uppercase tracking-wide">Our Commitments on Quality</h3>
              <ul className="space-y-4">
                {[
                  'All Routine Tests are performed successfully and supplied with the Test Report',
                  'Products are durable and ease of Installation',
                  'Compatibility to accommodate in the Control/Switchgear panel',
                  'Material used are RoHS Compliant',
                  'Single Stage Encapsulation process',
                  'MV Products are molded using Latest APG Technology',
                  'Surface finish is Aesthetically appealing',
                  'Higher Tracing Index and Negligible Partial Discharge',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[#2C3E50] font-medium text-[17px]">{item}</span>
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
            <h2 className="text-[32px] font-bold text-[#0D1B2A] mb-4">APG Technology Manufacturing</h2>
            <p className="text-[#4A5568] text-[18px] leading-relaxed">
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
                <div className="h-10 w-10 bg-[#0D1B2A] text-white flex items-center justify-center font-bold text-[16px] mb-6 rounded-[2px]">
                  0{idx + 1}
                </div>
                <h4 className="text-[18px] font-bold text-[#0D1B2A] mb-2">{box.title}</h4>
                <p className="text-[#4A5568] text-[16px] leading-relaxed">{box.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="bg-[#F4F6F8] border-t border-[#E2E8F0] py-[80px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-accent text-[12px] font-bold tracking-[0.15em] mb-3 uppercase">
                POLICY
              </div>
              <h2 className="text-[32px] font-bold text-[#0D1B2A]">
                Our Quality Policy
              </h2>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="border border-[#E2E8F0] bg-white p-8 md:p-12">

              <div className="border-l-[3px] border-accent pl-6 mb-8">
                <p className="text-[19px] text-[#2C3E50] leading-[1.8] font-medium">
                  We at Amptrix Energy LLP are emerging as a trustworthy source for the
                  Design, Manufacture and Supply of Instrument Transformers conforming to
                  National or International Standards.
                </p>
              </div>

              <p className="text-[17px] text-[#4A5568] leading-[1.9] mb-6">
                Further, we are committed to continually improving Total Customer
                Satisfaction by:
              </p>

              <ul className="space-y-4">
                {[
                  'Supplying Quality and Cost-effective products with on-time Delivery and providing better Services',
                  'Strictly adhering to the Quality Management System',
                  'Enhancing the Competency level of the employees',
                  'Continuous growth of productivity',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="h-8 w-8 shrink-0 bg-[#0D1B2A] text-white flex items-center justify-center font-bold text-[14px] rounded-[2px]">
                      {String.fromCharCode(97 + idx)}
                    </span>
                    <span className="text-[#2C3E50] font-medium text-[17px] leading-relaxed pt-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div>
                  <div className="text-[13px] text-[#8A9BAC] tracking-wide uppercase mb-2">
                    Amptrix Energy LLP
                  </div>
                  <div className="text-[17px] font-bold text-[#0D1B2A]">
                    Ranjitsinh Chhasatia
                  </div>
                  <div className="text-[12px] text-accent font-bold tracking-[0.12em] uppercase">
                    Founder and CEO
                  </div>
                </div>
                <div className="text-[15px] text-[#4A5568]">
                  Date: 1st August, 2026
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* Declaration by the Founders */}
      <section className="bg-white py-[80px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-accent text-[12px] font-bold tracking-[0.15em] mb-3 uppercase">
                FROM THE FOUNDERS
              </div>

              <h2 className="text-[32px] font-bold text-[#0D1B2A]">
                Declaration by the Founders
              </h2>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="border border-[#E2E8F0] bg-white p-8 md:p-12">

              <div className="border-l-[3px] border-accent pl-6 mb-8">
                <p className="text-[19px] text-[#2C3E50] leading-[1.8] font-medium">
                  Amptrix operates with a dynamic, dedicated, and technically
                  competent team of experienced professionals who are committed to
                  delivering <strong>high-quality, reliable, and technically
                  compliant products</strong> to our valued customers.
                </p>
              </div>

              <div className="space-y-6">

                <p className="text-[17px] text-[#4A5568] leading-[1.9]">
                  Our team possesses extensive experience in the field of
                  <strong className="text-[#2C3E50]">
                    {' '}Instrument Transformers and associated electrical solutions
                  </strong>, enabling us to understand customer requirements and
                  recommend suitable products based on technical specifications,
                  application conditions, system requirements, and operational needs.
                </p>

                <p className="text-[17px] text-[#4A5568] leading-[1.9]">
                  We are committed not only to supplying quality products but also
                  to providing
                  <strong className="text-[#2C3E50]">
                    {' '}complete technical support and professional engineering solutions
                  </strong>
                  {' '}throughout the customer engagement. Our experienced engineers
                  work closely with customers to understand their specific
                  requirements, assist in product selection, clarify technical
                  aspects, and provide appropriate solutions for challenging
                  applications.
                </p>

                <p className="text-[17px] text-[#4A5568] leading-[1.9]">
                  We further assure our customers of
                  <strong className="text-[#2C3E50]">
                    {' '}prompt, responsive, and dependable services
                  </strong>
                  {' '}at every stage—from initial technical discussions and product
                  selection to order execution, installation support,
                  troubleshooting, and after-sales service.
                </p>

                <p className="text-[17px] text-[#4A5568] leading-[1.9]">
                  At Amptrix, we continuously strive to improve our products,
                  services, and technical capabilities. We believe that our
                  combination of
                  <strong className="text-[#2C3E50]">
                    {' '}quality products, experienced professionals, engineering
                    expertise, and prompt customer support
                  </strong>
                  {' '}enables us to provide reliable and value-added solutions to
                  our customers.
                </p>

              </div>

              <div className="mt-10 pt-8 border-t border-[#E2E8F0]">

                <p className="text-[18px] text-[#2C3E50] leading-[1.8] font-semibold mb-8">
                  Our objective is to establish long-term relationships with
                  customers through consistent quality, technical expertise,
                  transparency, and timely support.
                </p>

                <div className="flex items-center gap-4">

                  <div className="h-10 w-10 bg-[#0D1B2A] text-white flex items-center justify-center rounded-[2px]">
                    <span className="text-[15px] font-bold">
                      RC
                    </span>
                  </div>

                  <div>
                    <div className="text-[17px] font-bold text-[#0D1B2A]">
                      Ranjitsinh Chhasatia
                    </div>

                    <div className="text-[12px] text-accent font-bold tracking-[0.12em] uppercase">
                      Founder-CEO
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </FadeIn>

        </div>
      </section>
    </main>
  );
}