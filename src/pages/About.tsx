import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Compass, Layers, Factory, FlaskConical, PackageCheck, Headphones, BadgeCheck, Zap } from 'lucide-react';
import { FadeIn } from '@/hooks/use-fade-in';
import { Target, Eye } from "lucide-react";


export default function About() {
  useEffect(() => {
    document.title = 'About Us | Amptrix Energy LLP';
  }, []);

  function InfraImage({
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
    return <div className="pt-8">{fallback}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="w-full h-48 object-cover"
    />
  );
}

  return (
    <main className="w-full">
      {/* Page Header */}
      <div className="bg-[#F4F6F8] py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[13px] text-[#4A5568] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>About Us</span>
          </div>
          <h1 className="text-[36px] text-[#0D1B2A] text-center font-bold">Built on Engineering Experience</h1>
        </div>
      </div>

      {/* Company Background */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6 text-[#2C3E50] text-[18px] leading-relaxed mb-10">
                <p>
                  An Amptrix Energy LLP. is a registered Company based at Por, Dist. Vadodara, Gujarat, INDIA. The company has been established in 2025 by the Engineers and Professionals having an Experience of more than FOUR decades. They are fully competent and having a deep knowledge in the field of Design, Development, Manufacturing, Testing and Selling the INSTRUMENT TRANSFORMERS used by the Utilities, Power Industries, Control & Switchgears Panels and all other Sectors of Industry.  
                </p>
                <p>
                  The Products have been designed and developed with an Innovative Design concept, Emerging Technology and manufactured using latest APG Technology. Thereby, the Products are aesthetically appealing, PD Free and Offers higher Tracking Index. All Designs are fully Type Tested as per the National / International Standard. Every unit dispatched from the factory have undergone the strengthen Quality checks and successfully passed all the Routine Tests. Enough care is taken during development to cover all technical requirements and made dimensionally universal to accommodate in all types of the LV/MV Control and Switchgears panels.  
                </p>
              </div>
              
              
            </FadeIn>

            {/* <FadeIn className="hidden lg:block">
              <div className="w-full aspect-square border border-[#E2E8F0] bg-[#F4F6F8] overflow-hidden">
                <img
                  src="/images/aboutimage.jpg"
                  alt="Toroidal core transformer"
                  className="w-full h-full object-cover"
                />
              </div>
          </FadeIn> */}
          <FadeIn className="hidden lg:block">
  <div className="border border-[#E2E8F0] bg-[#F4F6F8] overflow-hidden">
    <img
      src="/images/aboutimage.jpg"
      alt="Toroidal core transformer"
      className="w-full h-auto object-cover"
    />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-[#E2E8F0] p-4 text-center">
                  <div className="text-[16px] font-bold text-[#0D1B2A] mb-1">Por, Vadodara</div>
                  <div className="text-[12px] text-[#4A5568] uppercase tracking-wide">Gujarat, INDIA</div>
                </div>
                <div className="border border-[#E2E8F0] p-4 text-center">
                  <div className="text-[16px] font-bold text-[#0D1B2A] mb-1">Est. 2025</div>
                  <div className="text-[12px] text-[#4A5568] uppercase tracking-wide">Registered Company</div>
                </div>
                <div className="border border-[#E2E8F0] p-4 text-center border-l-4 border-l-accent">
                  <div className="text-[16px] font-bold text-[#0D1B2A] mb-1">40+ Years</div>
                  <div className="text-[12px] text-[#4A5568] uppercase tracking-wide">Engineering Experience</div>
                </div>
              </div>
  
</FadeIn>

          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-[80px]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0] shadow-sm">

      {/* Mission */}
      <FadeIn className="bg-white p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#E2E8F0]">
        <div className="mb-5">
          <Target
            size={64}
            strokeWidth={1.5}
            className="text-accent"
          />
        </div>

        <div className="text-accent text-[12px] font-bold tracking-[0.15em] mb-4 uppercase">
          MISSION
        </div>

        <p className="text-[#2C3E50] text-[17px] leading-relaxed">
          To deliver High Quality and Reliable Products through Efficient
          Manufacturing and strong Technical Support. On
Time delivery and Responsive Customer support ensuring Total Customer Satisfaction
        </p>
      </FadeIn>

      {/* Vision */}
      <FadeIn className="bg-white p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#E2E8F0]">
        <div className="mb-5">
          <Eye
            size={64}
            strokeWidth={1.5}
            className="text-accent"
          />
        </div>

        <div className="text-accent text-[12px] font-bold tracking-[0.15em] mb-4 uppercase">
          VISION
        </div>

        <p className="text-[#2C3E50] text-[17px] leading-relaxed">
          We further Endeavour to Knowledge sharing, providing Technical
          Solutions, and exploring the Emerging Product design, Latest
          Manufacturing Techniques and the Unique Process Controls to produce
          and supply the Best in Class Products.
        </p>
      </FadeIn>

      {/* Competency */}
      <FadeIn className="bg-white p-8 md:p-10">
        <div className="mb-5">
          <BadgeCheck
            size={64}
            strokeWidth={1.5}
            className="text-accent"
          />
        </div>

        <div className="text-accent text-[12px] font-bold tracking-[0.15em] mb-4 uppercase">
          COMPETENCY
        </div>

        <p className="text-[#2C3E50] text-[17px] leading-relaxed">
          Team of Apmtrix is competent in the field of Instrument Transformers, offering best-in-class Quality
product backed by competent engineers to provide expert solutions, prompt services, and On call support. We are
committed to recommending the best-fit solutions and optimized versions based on customer’s operational
requirements and technical specific.
        </p>
      </FadeIn>

    </div>
  </div>
</section>
      {/* Core Capabilities */}
<section className="bg-white py-[80px]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <FadeIn>
      <h2 className="text-[28px] text-[#0D1B2A] font-bold mb-10 text-center">
        Our Capabilities
      </h2>
    </FadeIn>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

      {[
        {
          icon: Compass,
          title: 'Design & Development',
          desc: 'Precision Engineered, Compact and Emerging Products are Designed and Developed for LV & MV applications using the material available from the Latest Sources. '
        },
        {
          icon: Factory,
          title: 'Manufacturing',
          desc: 'Products are manufactured using the Quality Raw Material procured from the approved Vendors. Product is Molded by Single stage casting process (MV Products are encapsulated by the latest APG Technology). Thereby the Product finish is Aesthetically appealing and Glossy.'
        },
        {
          icon: FlaskConical,
          title: 'Quality & Testing',
          desc: 'All products are undergone for stringent quality checks at every stage of manufacturing as per defined Process Control. Every product is tested for all the Routine tests as per the Order Specifications and the Test Report is provided before dispatched from the factory.'
        },
        {
          icon: PackageCheck,
          title: 'Supply',
          desc: 'Products are properly packed and dispatched with the Tax Invoice through a nominated transporter as per the agreed terms.'
        },
        {
          icon: Headphones,
          title: 'Support After Sales',
          desc: 'We undertake to provide the necessary technical support to our customers promptly on demand.'
        },
      ].map((cap, idx) => {
        const Icon = cap.icon;

        return (
          <FadeIn
            key={idx}
            className="border border-[#E2E8F0] p-6 bg-white hover:border-[#CBD5E0] transition-colors"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <Icon
              className="h-6 w-6 text-accent mb-5"
              strokeWidth={1.5}
            />

            <h4 className="text-[#0D1B2A] font-bold text-[17px] mb-3 leading-snug">
              {cap.title}
            </h4>

            <p className="text-[#4A5568] text-[15px] leading-relaxed">
              {cap.desc}
            </p>
          </FadeIn>
        );
      })}

    </div>
  </div>
</section>

      {/* Infrastructure */}
      <section className="bg-[#F4F6F8] py-[80px]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <FadeIn>
      <h2 className="text-[28px] text-[#0D1B2A] font-bold mb-10 text-center">
        Infrastructure
      </h2>
    </FadeIn>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        {
          icon: Layers,
          title: 'Winding Station',
          desc: 'Precision Winding and Finishing as per the Process control.',
          image: '/images/infrastructure/winding-station.jpeg',
        },
        {
          icon: Zap,
          title: 'Molding Station',
          desc: 'Single Stage molding is done as per defined Procedure.',
          image: '/images/infrastructure/molding-station.jpeg',
        },
        {
          icon: FlaskConical,
          title: 'Test Laboratory',
          desc: 'In-house Testing facility is established to perform all Routine Tests as per the Standard and the Test Report is provided.',
          image: '/images/infrastructure/test-laboratory.jpeg',
        },
      ].map((item, idx) => {
        const Icon = item.icon;
        return (
          <FadeIn
            key={idx}
            className="bg-white border border-[#E2E8F0] overflow-hidden text-center hover:border-[#CBD5E0] transition-colors"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <InfraImage
              src={item.image}
              alt={item.title}
              fallback={<Icon className="h-8 w-8 text-accent mx-auto" strokeWidth={1.5} />}
            />
            <div className="p-8">
              <h4 className="text-[#0D1B2A] font-bold text-[17px] mb-3">{item.title}</h4>
              <p className="text-[#4A5568] text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        );
      })}
    </div>

  </div>
</section>

    </main>
  );
}
