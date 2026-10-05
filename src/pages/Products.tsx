import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';

import {
  Target,
  ShieldCheck,
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
  Zap,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Products() {
  useEffect(() => {
    document.title = 'Products | Amptrix Energy LLP';
  }, []);

  const [activeTab, setActiveTab] = useState('LV');

  /*
   * ============================================================
   * PRODUCT IMAGES
   * ============================================================
   *
   * Just add a new image path whenever you want.
   *
   * Example:
   *
   * "/images/products/lv-4.jpg",
   * "/images/products/lv-5.jpg",
   *
   */

  const lvProductImages = [
    '/images/products/lv-1.jpeg',
    '/images/products/lv-2.jpeg',
    '/images/products/lv-3.jpeg',
    '/images/products/lv-4.jpeg',
    '/images/products/lv-5.jpeg',
    '/images/products/lv-6.jpeg',
  ];

  const mvProductImages = [
    '/images/products/mv-1.jpeg',
    '/images/products/mv-2.jpeg',
    '/images/products/mv-3.jpeg',
    '/images/products/mv-4.jpeg',
    '/images/products/mv-5.jpeg',
    '/images/products/mv-6.jpeg',
    '/images/products/mv-7.jpeg',
    '/images/products/mv-8.jpeg',
  ];

  /*
   * Separate slideshow states for LV and MV
   */
  const [lvCurrentImage, setLvCurrentImage] = useState(0);
  const [mvCurrentImage, setMvCurrentImage] = useState(0);

  /*
   * ============================================================
   * INDUSTRIAL FEATURES
   * ============================================================
   */

  const industrialFeatures = [
    {
      icon: Target,
      title: 'Applications',
      desc: 'Available to meet all desired applications of Metering, Tariff metering and all types of Protections required by Project Systems.',
    },
    {
      icon: Ruler,
      title: 'Compact & Robust',
      desc: 'Designed to overcome space constraints for installation in panels while remaining mechanically strong.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted & Durable',
      desc: 'The design is conceptually reliable and produced under strict process parameters for demanding industrial operating conditions.',
    },
    {
      icon: Factory,
      title: 'Molding',
      desc: 'Encapsulation is by Single Stage molding using the latest APG Technology for MV products, ensuring uniform insulation, void-free casting and negligible Partial Discharges.',
    },
    {
      icon: Eye,
      title: 'Aesthetically Appealing',
      desc: 'The surface of the product is glossy finished, helping avoid tracking while providing a clean and aesthetically appealing appearance.',
    },
    {
      icon: Activity,
      title: 'Tracking Index',
      desc: 'The glossy surface restricts surface tracking due to over voltages and helps avoid failure.',
    },
    {
      icon: Leaf,
      title: 'RoHS Compliant',
      desc: 'Manufactured using raw materials with restricted hazardous substances for compliance.',
    },
    {
      icon: Headphones,
      title: 'Responsive & Support',
      desc: 'Technical assistance is available on call from experienced engineers whenever required.',
    },
    {
      icon: ClipboardCheck,
      title: 'Standards',
      desc: 'Products are manufactured need-based in compliance with applicable National & International Standards.',
    },
  ];

  /*
   * ============================================================
   * DISTINCT FEATURES
   * ============================================================
   */

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

  /*
   * ============================================================
   * LV TECHNICAL SPECIFICATIONS
   * ============================================================
   */

  const technicalSpecifications = [
    ['1', 'STANDARD APPLICABLE', 'IS: 16227', 'IS: 3156'],
    ['2', 'Nominal System Voltage', '440 Volts', '440 Volts'],
    ['3', 'Highest System Voltage', '720 Volts', '720 Volts'],
    ['4', 'Rated Frequency', '50 Hz.', '50 Hz.'],
    ['5', 'Rated Insulation Level', '0.72/3 kV', '0.72/3 kV'],
    [
      '6',
      'Insulation Class',
      'E (or Better is offered on Request)',
      'E (or Better is offered on Request)',
    ],
    ['7', 'Rated Primary Current/Voltage', '5 to 6300 Amp', '440 Volts'],
    [
      '8',
      'Rated Secondary Current/Voltage',
      '5, 1, 0.577 Amp',
      '230, 110, 110/√3 Volts',
    ],
    ['9', 'Rated Burden', '2.5 to 30 VA', '25 to 200 VA'],
    [
      '10',
      'Class of Accuracy',
      '0.2, 0.2S, 0.5, 0.5S, 1, 3, 5P5, 5P10, 5P15, 5P20',
      '0.5, 1, 3, 3P',
    ],
    ['11', 'Short Time Thermal Current', '5kA for 1 second', 'NA'],
  ];

  /*
   * ============================================================
   * MV CUSTOM PARAMETERS
   * ============================================================
   */

  const mvParameters = [
    {
      title: 'Ratio',
      desc: 'Custom built according to project requirements.',
    },
    {
      title: 'Burden',
      desc: 'Variable according to the specific project requirements.',
    },
    {
      title: 'Class of Accuracy',
      desc: 'Selected according to the required metering and protection application.',
    },
    {
      title: 'STC Rating',
      desc: 'Variable and designed according to the project requirements.',
    },
    {
      title: 'Installation',
      desc: 'Configuration depends upon the required installation arrangement.',
    },
    {
      title: 'Dimensions',
      desc: 'Dimensions are variable and customized according to project requirements.',
    },
  ];

  /*
   * ============================================================
   * MANUFACTURING PROCESS
   * ============================================================
   */

  const manufacturingProcess = [
    {
      icon: Ruler,
      title: 'Design',
      desc: 'On receipt of PO, technical design parameters are worked out as per the Order Specifications.',
    },
    {
      icon: ClipboardCheck,
      title: 'Planning',
      desc: 'Scheduling and material arrangement are carried out while taking care of other priorities.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      desc: 'Manufacturing starts with winding and proper insulation as per the defined Process Control.',
    },
    {
      icon: FlaskConical,
      title: 'Testing',
      desc: 'Routine Tests are carried out at every stage to ensure the performance committed as per the PO and Standard.',
    },
    {
      icon: CheckCircle2,
      title: 'QC Checks',
      desc: 'Strict inspection is carried out as per the quality checks defined by the QMS at every stage of manufacturing.',
    },
    {
      icon: PackageCheck,
      title: 'Packing',
      desc: 'Products are packed with proper cushioning to restrict transit damages.',
    },
    {
      icon: Truck,
      title: 'Dispatch',
      desc: 'Dispatch is arranged with the approved Transporter as per the Terms given in the Order.',
    },
  ];

  /*
   * ============================================================
   * APPLICATIONS / USERS
   * ============================================================
   */

  const applications = [
    'Utilities',
    'Power Industries',
    'Switchgear & Control Panels',
    'Solar Projects',
    'Light & Heavy Industry',
    'Data Centre',
  ];

  /*
   * ============================================================
   * SIMPLE SLIDESHOW COMPONENT
   * ============================================================
   */

  const ProductSlideshow = ({
    images,
    currentImage,
    setCurrentImage,
    title,
  }) => {
    /*
     * If no images have been added, show a simple placeholder.
     */
    if (!images || images.length === 0) {
      return (
        <div className="border border-[#E2E8F0] bg-[#F4F6F8] h-[400px] flex items-center justify-center">
          <p className="text-[#637588] text-[14px]">
            Product images will appear here.
          </p>
        </div>
      );
    }

    const nextImage = () => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    };

    const previousImage = () => {
      setCurrentImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    };

    return (
      <div>

        {/* Slideshow */}
        <div className="relative border border-[#E2E8F0] bg-[#F4F6F8] overflow-hidden">

          <img
            src={images[currentImage]}
            alt={`${title} ${currentImage + 1}`}
            className="w-full h-[400px] md:h-[500px] object-contain"
          />

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2
                         w-10 h-10 bg-white border border-[#E2E8F0]
                         flex items-center justify-center
                         text-[#2C3E50]
                         hover:border-accent hover:text-accent
                         transition-colors"
            >
              <ChevronLeft
                size={20}
                strokeWidth={1.5}
              />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2
                         w-10 h-10 bg-white border border-[#E2E8F0]
                         flex items-center justify-center
                         text-[#2C3E50]
                         hover:border-accent hover:text-accent
                         transition-colors"
            >
              <ChevronRight
                size={20}
                strokeWidth={1.5}
              />
            </button>
          )}

        </div>

        {/* Image Counter */}
        <div className="flex items-center justify-between mt-4">

          <span className="text-[12px] text-[#637588]">
            Product {currentImage + 1} of {images.length}
          </span>

          {/* Dots */}
          {images.length > 1 && (
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentImage === index
                      ? 'bg-accent w-5'
                      : 'bg-[#CBD5E0]'
                  }`}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    );
  };

  return (
    <main className="w-full">

      {/* ========================================================
          PAGE HEADER
      ======================================================== */}

      <section className="bg-[#F4F6F8] py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-[12px] text-[#637588] mb-2 font-medium tracking-wide">
            <Link href="/">
              <span className="hover:text-accent cursor-pointer transition-colors">
                Home
              </span>
            </Link>

            {' > '}

            <span>Products</span>
          </div>

          <h1 className="text-[32px] text-[#0D1B2A] font-bold mb-4">
            Products Built in the Industrial Demands
          </h1>

          <p className="text-[#637588] max-w-4xl text-[15px] leading-relaxed">
            Amptrix Energy LLP. designs, manufactures and supplies a
            comprehensive range of Low Voltage and Medium Voltage
            Instrument Transformers. They are engineered for precision
            accuracy, compact in size and reliability for long-term
            performance in demanding industrial environments.
          </p>

        </div>
      </section>


      {/* ========================================================
          PRODUCT BUILT FOR INDUSTRIAL DEMANDS
      ======================================================== */}

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
                  style={{
                    transitionDelay: `${idx * 70}ms`,
                  }}
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


      {/* ========================================================
          DISTINCT FEATURES
      ======================================================== */}

      <section className="bg-[#F4F6F8] py-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-10">

              <div className="text-accent text-[18px] font-bold tracking-[0.15em] mb-3 uppercase">
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


      {/* ========================================================
          PRODUCT TABS
      ======================================================== */}

      <div className="border-b border-[#E2E8F0] bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex gap-8">

            <button
              type="button"
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
              type="button"
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


      {/* ========================================================
          PRODUCT DETAILS
      ======================================================== */}

      <section className="bg-white py-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* ====================================================
              LOW VOLTAGE
          ==================================================== */}

          {activeTab === 'LV' && (
            <FadeIn>

              


              

              {/* =================================================
                  LV FULL TECHNICAL TABLE
              ================================================= */}

              <div>

                <div className="flex items-center gap-2 mb-6">

                  <FileText
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.5}
                  />

                  <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                    General Technical Requirements
                  </h3>

                </div>


                <div className="overflow-x-auto border border-[#E2E8F0]">

                  <table className="w-full text-left border-collapse min-w-[850px]">

                    <thead className="bg-[#F4F6F8]">

                      <tr>

                        <th className="p-4 text-[13px] font-bold text-[#0D1B2A]">
                          Sl. No.
                        </th>

                        <th className="p-4 text-[13px] font-bold text-[#0D1B2A]">
                          Specifications
                        </th>

                        <th className="p-4 text-[13px] font-bold text-[#0D1B2A]">
                          CTs
                        </th>

                        <th className="p-4 text-[13px] font-bold text-[#0D1B2A]">
                          PTs
                        </th>

                      </tr>

                    </thead>


                    <tbody className="text-[13px] text-[#2C3E50]">

                      {technicalSpecifications.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-t border-[#E2E8F0]"
                        >

                          <td className="p-4">
                            {row[0]}
                          </td>

                          <td className="p-4 font-medium">
                            {row[1]}
                          </td>

                          <td className="p-4">
                            {row[2]}
                          </td>

                          <td className="p-4">
                            {row[3]}
                          </td>

                        </tr>
                      ))}

                    </tbody>

                  </table>

                </div>


                {/* =================================================
                  LV PRODUCT SLIDESHOW
              ================================================= */}

              <div className="mb-16">

                <div className="flex items-center gap-2 mb-6">

                  <Eye
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.5}
                  />

                  <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                    Product Pictures
                  </h3>

                </div>


                <ProductSlideshow
                  images={lvProductImages}
                  currentImage={lvCurrentImage}
                  setCurrentImage={setLvCurrentImage}
                  title="Low Voltage Product"
                />

              </div>

              </div>

            </FadeIn>
          )}


          {/* ====================================================
              MEDIUM VOLTAGE
          ==================================================== */}

          {activeTab === 'MV' && (
            <FadeIn>

              <div className="mb-12">

                <div className="text-accent text-[11px] font-bold tracking-[0.15em] mb-3 uppercase">
                  MEDIUM VOLTAGE PRODUCT
                </div>

                <h2 className="text-[28px] font-bold text-[#0D1B2A] mb-5">
                  General Technical Requirements
                </h2>

                <p className="text-[#637588] max-w-4xl text-[15px] leading-relaxed">
                  The specifications of the product are custom built. The
                  Ratio, Burden, Class of Accuracy, STC Rating, Installation
                  and Dimensions are variable and depend upon the Project
                  requirements.
                </p>

              </div>


              {/* MV PARAMETERS */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">

                {mvParameters.map((parameter, idx) => (
                  <FadeIn
                    key={idx}
                    className="border border-[#E2E8F0] p-7 bg-white"
                  >

                    <div className="text-[11px] text-accent font-bold tracking-[0.15em] mb-4">
                      0{idx + 1}
                    </div>

                    <h3 className="text-[16px] font-bold text-[#0D1B2A] mb-3">
                      {parameter.title}
                    </h3>

                    <p className="text-[13px] text-[#637588] leading-relaxed">
                      {parameter.desc}
                    </p>

                  </FadeIn>
                ))}

              </div>


              {/* =================================================
                  MV PRODUCT SLIDESHOW
              ================================================= */}

              <div>

                <div className="flex items-center gap-2 mb-6">

                  <Eye
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.5}
                  />

                  <h3 className="text-[20px] font-bold text-[#0D1B2A]">
                    Product Pictures
                  </h3>

                </div>


                <ProductSlideshow
                  images={mvProductImages}
                  currentImage={mvCurrentImage}
                  setCurrentImage={setMvCurrentImage}
                  title="Medium Voltage Product"
                />

              </div>

            </FadeIn>
          )}

        </div>
      </section>


      {/* ========================================================
          MANUFACTURING PROCESS
      ======================================================== */}

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
                  style={{
                    transitionDelay: `${idx * 80}ms`,
                  }}
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


      {/* ========================================================
          APPLICATIONS / USERS
      ======================================================== */}

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
                Applications & Users
              </h2>

            </div>

          </FadeIn>

          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {applications.map((application, idx) => (
              <FadeIn
                key={idx}
                className="border border-[#E2E8F0] p-6 min-h-[130px] flex items-center justify-center text-center hover:border-accent transition-colors"
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