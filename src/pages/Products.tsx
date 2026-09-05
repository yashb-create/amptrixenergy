import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';
import {
  Settings2,
  Zap,
  FileText,
  Target,
  ShieldCheck,
  Boxes,
  Factory,
  FlaskConical,
  PackageCheck,
  Headphones,
  CheckCircle2,
  Ruler,
  Eye,
  Activity,
  Leaf,
  Truck,
  Users,
  ClipboardCheck,
} from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'LV' | 'MV'>('LV');

  useEffect(() => {
    document.title =
      'Products | LV & MV Instrument Transformers | Amptrix Energy LLP';
  }, []);

  const industrialFeatures = [
    {
      icon: Target,
      title: 'Applications',
      desc: 'Available to meet all desired applications of metering, tariff metering and all types of protection required by project systems.',
    },
    {
      icon: Ruler,
      title: 'Compact & Robust',
      desc: 'Designed to overcome space constraints for installation in panels while maintaining high mechanical strength.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted & Durable',
      desc: 'Conceptually reliable designs produced under strict process parameters for demanding industrial operating conditions.',
    },
    {
      icon: Factory,
      title: 'Molding',
      desc: 'Single-stage molding is used for encapsulation. MV products use the latest APG Technology to ensure uniform insulation, void-free casting and negligible partial discharges.',
    },
    {
      icon: Eye,
      title: 'Aesthetically Appealing',
      desc: 'The product surface is glossy finished, helping avoid tracking while providing a clean and aesthetically appealing appearance.',
    },
    {
      icon: Activity,
      title: 'Tracking Index',
      desc: 'The glossy surface restricts surface tracking caused by over-voltages and helps avoid operational failure.',
    },
    {
      icon: Leaf,
      title: 'RoHS Compliant',
      desc: 'Manufactured using raw materials with restricted hazardous substances for RoHS compliance.',
    },
    {
      icon: Headphones,
      title: 'Responsive & Support',
      desc: 'Technical assistance is available on call from experienced engineers whenever required.',
    },
    {
      icon: ClipboardCheck,
      title: 'Standards',
      desc: 'Products are manufactured on a need-based basis in compliance with applicable national and international standards.',
    },
  ];

  const distinctFeatures = [
    'Meets all Applications',
    'Trusted and Durable',
    'Single Stage Molding',
    'Compact and Robust',
    'Best Tracking Index',
    'ROHS Compliant',
    'Aesthetically Appealing',
    'Conforms to National & International Standard',
  ];

  const manufacturingProcess = [
    {
      icon: Ruler,
      title: 'Design',
      desc: 'On receipt of PO, technical design parameters are worked out as per the order specifications.',
    },
    {
      icon: ClipboardCheck,
      title: 'Planning',
      desc: 'Scheduling and material arrangement are planned while taking care of other priorities.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      desc: 'Manufacturing starts with winding and proper insulation according to the defined process control.',
    },
    {
      icon: FlaskConical,
      title: 'Testing',
      desc: 'Routine tests are carried out at every stage to ensure the committed performance as per the PO and applicable standard.',
    },
    {
      icon: CheckCircle2,
      title: 'QC Checks',
      desc: 'Strict inspection is performed according to quality checks defined by the QMS at every stage of manufacturing.',
    },
    {
      icon: PackageCheck,
      title: 'Packing',
      desc: 'Products are packed with proper cushioning to restrict transit damage.',
    },
    {
      icon: Truck,
      title: 'Dispatch',
      desc: 'Dispatches are arranged with an approved transporter according to the terms specified in the order.',
    },
  ];

  const applications = [
    'Utilities',
    'Power Industries',
    'Switchgear & Control Panels',
    'Solar Projects',
    'Light & Heavy Industry',
    'Data Centre',
  ];

  return (
    <main className="w-full">

      {/* Page Header */}
      <div className="bg-[#F4F6F8] py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-[12px] text-[#637588] mb-2 font-medium tracking-wide">
            <Link href="/">
              <span className="hover:text-accent cursor-pointer transition-colors">
                Home
              </span>
            </Link>{' '}
            &gt; <span>Products</span>
          </div>

          <h1 className="text-[32px] text-[#0D1B2A] font-bold mb-4">
            Products
          </h1>

          <p className="text-[#637588] max-w-3xl text-[15px] leading-relaxed">
            Amptrix Energy LLP. designs, manufactures and supplies a
            comprehensive range of Low Voltage and Medium Voltage Instrument
            Transformers. They are engineered for precision accuracy, compact
            size and reliability for long-term performance in demanding
            industrial environments.
          </p>

        </div>
      </div>


      {/* Product Built for Industrial Demands */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mb-12">
              <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                PRODUCT BUILT FOR
              </div>

              <h2 className="text-[28px] text-[#0D1B2A] font-bold">
                Industrial Demands
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industrialFeatures.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <FadeIn
                  key={idx}
                  className="border border-[#E2E8F0] p-7 bg-white hover:border-[#CBD5E0] transition-colors"
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  <Icon
                    className="h-6 w-6 text-accent mb-5"
                    strokeWidth={1.5}
                  />

                  <h3 className="text-[16px] font-bold text-[#0D1B2A] mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-[13px] text-[#637588] leading-relaxed">
                    {feature.desc}
                  </p>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>


      {/* Distinct Features */}
      <section className="bg-[#F4F6F8] py-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-10">
              <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                DISTINCT FEATURES
              </div>

              <h2 className="text-[26px] font-bold text-[#0D1B2A]">
                Engineered for Reliability
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {distinctFeatures.map((feature, idx) => (
              <FadeIn
                key={idx}
                className="bg-white border border-[#E2E8F0] p-5 flex items-start gap-3"
              >
                <CheckCircle2
                  className="h-5 w-5 text-accent shrink-0"
                  strokeWidth={1.7}
                />

                <span className="text-[13px] font-semibold text-[#2C3E50] leading-relaxed">
                  {feature}
                </span>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>


      {/* Product Tabs */}
      <div className="border-b border-[#E2E8F0] bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex gap-8">

            <button
              onClick={() => setActiveTab('LV')}
              className={`py-4 text-[15px] font-semibold transition-colors relative ${
                activeTab === 'LV'
                  ? 'text-accent'
                  : 'text-[#637588] hover:text-[#0D1B2A]'
              }`}
            >
              Low Voltage

              {activeTab === 'LV' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('MV')}
              className={`py-4 text-[15px] font-semibold transition-colors relative ${
                activeTab === 'MV'
                  ? 'text-accent'
                  : 'text-[#637588] hover:text-[#0D1B2A]'
              }`}
            >
              Medium Voltage

              {activeTab === 'MV' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
              )}
            </button>

          </div>
        </div>
      </div>


      {/* Product Details */}
      <section className="bg-white py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* LOW VOLTAGE */}
          {activeTab === 'LV' && (
            <FadeIn>

              <div className="mb-10">
                <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                  LOW VOLTAGE PRODUCT
                </div>

                <h2 className="text-[26px] font-bold text-[#0D1B2A]">
                  General Technical Requirements
                </h2>
              </div>

              {/* CT / PT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

                {/* CT */}
                <div className="border border-[#E2E8F0] p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-6 w-6 text-accent" />

                    <div>
                      <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                        Current Transformer (CT)
                      </h3>

                      <span className="text-[12px] font-bold text-[#637588] tracking-widest uppercase">
                        IS: 16227
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-[14px] text-[#2C3E50]">

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Nominal System Voltage</span>
                      <span>440 Volts</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Highest System Voltage</span>
                      <span>720 Volts</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Rated Frequency</span>
                      <span>50 Hz</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Rated Primary Current</span>
                      <span>5 to 6300 Amp</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Rated Secondary Current</span>
                      <span>5, 1, 0.577 Amp</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#637588]">Rated Burden</span>
                      <span>2.5 to 30 VA</span>
                    </div>

                  </div>
                </div>


                {/* PT */}
                <div className="border border-[#E2E8F0] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-6 w-6 text-[#2C3E50]" />

                    <div>
                      <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                        Potential Transformer (PT)
                      </h3>

                      <span className="text-[12px] font-bold text-[#637588] tracking-widest uppercase">
                        IS: 3156
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-[14px] text-[#2C3E50]">

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Nominal System Voltage</span>
                      <span>440 Volts</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Highest System Voltage</span>
                      <span>720 Volts</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Rated Frequency</span>
                      <span>50 Hz</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Primary Voltage</span>
                      <span>440 Volts</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Secondary Voltage</span>
                      <span>230, 110, 110/√3 Volts</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#637588]">Rated Burden</span>
                      <span>25 to 200 VA</span>
                    </div>

                  </div>
                </div>

              </div>


              {/* Product Images */}
              <div className="mb-16">

                <div className="flex items-center gap-2 mb-6">
                  <Eye className="h-5 w-5 text-accent" />

                  <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                    Product Pictures
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {[1, 2, 3].map((image) => (
                    <div
                      key={image}
                      className="aspect-[4/3] bg-[#F4F6F8] border border-[#E2E8F0] overflow-hidden"
                    >
                      <img
                        src={`/images/products/lv-${image}.jpg`}
                        alt={`Low Voltage Product ${image}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                </div>

              </div>


              {/* Full LV Table */}
              <div className="mt-12">

                <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  General Technical Requirements
                </h3>

                <div className="overflow-x-auto border border-[#E2E8F0]">

                  <table className="w-full text-left border-collapse min-w-[800px]">

                    <thead className="bg-[#F4F6F8]">
                      <tr>
                        <th className="p-4 text-[13px] font-bold">Sl. No.</th>
                        <th className="p-4 text-[13px] font-bold">Specifications</th>
                        <th className="p-4 text-[13px] font-bold">CTs</th>
                        <th className="p-4 text-[13px] font-bold">PTs</th>
                      </tr>
                    </thead>

                    <tbody className="text-[13px] text-[#2C3E50]">

                      {[
                        ['1', 'Standard Applicable', 'IS: 16227', 'IS: 3156'],
                        ['2', 'Nominal System Voltage', '440 Volts', '440 Volts'],
                        ['3', 'Highest System Voltage', '720 Volts', '720 Volts'],
                        ['4', 'Rated Frequency', '50 Hz.', '50 Hz.'],
                        ['5', 'Rated Insulation Level', '0.72/3 kV', '0.72/3 kV'],
                        ['6', 'Insulation Class', 'E (or Better on Request)', 'E (or Better on Request)'],
                        ['7', 'Rated Primary Current/Voltage', '5 to 6300 Amp', '440 Volts'],
                        ['8', 'Rated Secondary Current/Voltage', '5, 1, 0.577 Amp', '230, 110, 110/√3 Volts'],
                        ['9', 'Rated Burden', '2.5 to 30 VA', '25 to 200 VA'],
                        ['10', 'Class of Accuracy', '0.2, 0.2S, 0.5, 0.5S, 1, 3, 5P5, 5P10, 5P15, 5P20', '0.5, 1, 3, 3P'],
                        ['11', 'Short Time Thermal Current', '5kA for 1 second', 'NA'],
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-t border-[#E2E8F0]"
                        >
                          {row.map((cell, cellIdx) => (
                            <td
                              key={cellIdx}
                              className={`p-4 ${
                                cellIdx === 1
                                  ? 'font-medium'
                                  : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}

                    </tbody>

                  </table>

                </div>
              </div>

            </FadeIn>
          )}


          {/* MEDIUM VOLTAGE */}
          {activeTab === 'MV' && (
            <FadeIn>

              <div className="mb-10">
                <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                  MEDIUM VOLTAGE PRODUCT
                </div>

                <h2 className="text-[26px] font-bold text-[#0D1B2A] mb-4">
                  General Technical Requirements
                </h2>

                <p className="text-[#637588] max-w-4xl text-[15px] leading-relaxed">
                  The specifications of the product are custom built. The
                  ratio, burden, class of accuracy, STC rating, installation
                  and dimensions are variable and depend upon the project
                  requirements.
                </p>
              </div>


              {/* MV Custom Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">

                {[
                  ['Ratio', 'Customized according to project requirements'],
                  ['Burden', 'Customized according to connected relay/meter requirements'],
                  ['Class of Accuracy', 'Selected according to measurement and protection requirements'],
                  ['STC Rating', 'Designed according to system fault level'],
                  ['Installation', 'Configuration based on project installation requirements'],
                  ['Dimensions', 'Variable dimensions based on project requirements'],
                ].map(([title, desc], idx) => (
                  <div
                    key={idx}
                    className="border border-[#E2E8F0] p-6 bg-white"
                  >
                    <h4 className="font-bold text-[#0D1B2A] text-[15px] mb-2">
                      {title}
                    </h4>

                    <p className="text-[#637588] text-[13px] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}

              </div>


              {/* MV Product Pictures */}
              <div>

                <div className="flex items-center gap-2 mb-6">
                  <Eye className="h-5 w-5 text-accent" />

                  <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                    Product Pictures
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {[1, 2, 3].map((image) => (
                    <div
                      key={image}
                      className="aspect-[4/3] bg-[#F4F6F8] border border-[#E2E8F0] overflow-hidden"
                    >
                      <img
                        src={`/images/products/mv-${image}.jpg`}
                        alt={`Medium Voltage Product ${image}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                </div>

              </div>

            </FadeIn>
          )}

        </div>
      </section>


      {/* Manufacturing Process */}
      <section className="bg-[#F4F6F8] py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="mb-12">
              <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                MANUFACTURING PROCESS
              </div>

              <h2 className="text-[28px] font-bold text-[#0D1B2A]">
                From Design to Dispatch
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {manufacturingProcess.map((step, idx) => {
              const Icon = step.icon;

              return (
                <FadeIn
                  key={idx}
                  className="bg-white border border-[#E2E8F0] p-6"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <Icon
                      className="h-6 w-6 text-accent"
                      strokeWidth={1.5}
                    />

                    <span className="text-[11px] font-bold text-[#CBD5E0]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-[#0D1B2A] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[13px] text-[#637588] leading-relaxed">
                    {step.desc}
                  </p>
                </FadeIn>
              );
            })}

          </div>

        </div>
      </section>


      {/* Applications / Users */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-12">

              <Users
                className="h-7 w-7 text-accent mx-auto mb-4"
                strokeWidth={1.5}
              />

              <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                APPLICATIONS
              </div>

              <h2 className="text-[28px] font-bold text-[#0D1B2A]">
                Industries We Serve
              </h2>

            </div>
          </FadeIn>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {applications.map((application, idx) => (
              <FadeIn
                key={idx}
                className="border border-[#E2E8F0] p-6 min-h-[120px] flex items-center justify-center text-center hover:border-accent transition-colors"
              >
                <div>
                  <CheckCircle2
                    className="h-5 w-5 text-accent mx-auto mb-3"
                    strokeWidth={1.5}
                  />

                  <span className="text-[13px] font-semibold text-[#2C3E50] leading-relaxed">
                    {application}
                  </span>
                </div>
              </FadeIn>
            ))}

          </div>

        </div>
      </section>


    </main>
  );
}