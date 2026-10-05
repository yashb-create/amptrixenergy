import { useEffect } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';
import { FileText } from 'lucide-react';

export default function Technical() {
  useEffect(() => {
    document.title =
      'Technical Specifications | Instrument Transformers | Amptrix Energy LLP';
  }, []);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY - 140;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'applications', label: 'Application Matrix' },
    { id: 'guidelines', label: 'CT Selection Guidelines' },
    { id: 'custom', label: 'Custom Requirements' },
  ];

  const instrumentBurdenTable = [
    ['Moving iron ammeter', '1.0 VA'],
    ['Bimetal instruments (.../5A)', '3.0 VA'],
    ['Wattmeter', '5.5 VA'],
    ['Power factor meter', '4.0 VA'],
    ['Current transducer', '0.5 VA'],
    ['Power transducer', '0.5 VA'],
    ['kWh-meter', '2.5 VA'],
    ['Trivector meter', '5.0 VA'],
  ];

  const guidelineTopics = [
    {
      num: '1',
      title: 'CT Ratio Selection',
      body: [
        'The CT ratio shall be selected based on the maximum load current to be measured and/or controlled, which flows through the primary winding of the CT. During manufacture, the CT is designed and calibrated to achieve the specified accuracy class at its rated primary current.',

        'For accurate measurement, the rated primary current should be selected as close as practicable to the actual load current. As a general guideline, the rated primary current should not normally exceed approximately 120% of the actual load current — an excessively high CT ratio can reduce measurement accuracy.',

        'The rated secondary current shall be selected based on the requirements of the connected measuring, metering, protection, or control equipment. Commonly used secondary ratings are 1 A and 5 A, subject to the applicable standards.',

        'The selected CT ratio and accuracy class shall be appropriate for the intended application and shall ensure satisfactory performance over the required operating current range.',
      ],
    },

    {
      num: '2',
      title: 'Rated Burden',
      body: [
        'The rated burden of a Current Transformer (CT) shall be selected based on the actual requirements of the connected measuring, metering, protection, or control equipment, including the burden of the associated secondary wiring and other connected devices.',

        'It is sometimes assumed that specifying a CT with a rated burden substantially higher than the actual connected burden provides additional safety or improves CT performance. However, specifying an unnecessarily high burden does not, in itself, provide a corresponding improvement in CT accuracy or operational safety. It may instead result in higher CT size and cost and may lead to specifications that are unnecessarily stringent or commercially non-viable.',

        'A CT is designed and tested to achieve its specified class of accuracy under defined operating conditions, including the specified burden and rated secondary current. The accuracy performance of the CT is dependent on the relationship between the actual operating conditions and the conditions for which the CT has been designed and calibrated.',

        'Therefore, the rated burden should be selected to adequately cover the actual connected burden, including the burden of the measuring/protection device, secondary leads, terminals, and other accessories connected in the CT secondary circuit. The rated burden should not be unnecessarily increased beyond the required value.',

        'Where the actual connected burden is substantially different from the burden considered during CT selection or specified for the accuracy performance, the CT may not operate at its optimum accuracy over the required operating range. Consequently, an incorrectly selected burden can adversely affect the measurement accuracy and may defeat the intended purpose of specifying a particular accuracy class.',
      ],
      burdenGuide: true,
    },

    {
      num: '3',
      title: 'Accuracy Class',
      body: [
        'The accuracy class of the Current Transformer (CT) shall be selected in accordance with the intended application and required measurement or protection performance. The selected accuracy class should be adequate to meet the functional requirements of the application without unnecessarily specifying a higher accuracy class.',

        'Selection of an appropriate accuracy class is important to ensure a proper balance between measurement & protection performance, reliability, and overall cost. An unnecessarily stringent Accuracy requirement may increase the size and cost of the CT without providing any practical benefit to the intended application.',
        'Accordingly, the accuracy class should be specified based on the relative application of the CT, the required accuracy over the operating current range, the connected burden, and the requirements of the associated measuring, metering, protection, or control equipment.'
      ],
    },

    {
      num: '4',
      title: 'Instrument Security Factor (ISF)',
      body: [
        'The Instrument Security Factor (ISF) is an important consideration in the selection and design of a metering Current Transformer (CT), particularly where protection of connected measuring instruments under excessive primary current conditions is required.',

        'It is often preferred to specify an ISF of less than 5 for metering CTs. However, the achievable ISF is dependent on the CT\'s core design, core material and cross-sectional area, as well as the required accuracy class, rated burden, and ampere-turns (AT) corresponding to the operating current.',
        'During the design of a metering CT, the core cross-sectional area and magnetic characteristics must be appropriately selected to achieve the required accuracy while also maintaining the desired ISF. These two requirements can impose competing design considerations. Increasing the core section area may improve accuracy but can also influence the saturation characteristics and consequently the achievable ISF.',
        'Where the operating ampere-turns (AT) are relatively low, achieving both a stringent accuracy class and a low ISF can become technically challenging.   In such cases, the CT design may require a suitable compromise between accuracy performance and instrument protection, depending on the specific application and its functional requirements.',
        'For applications where both high accuracy and a low ISF are essential, the use of nanocrystalline core materials, such as Nano-Crystalline (Nanocrystalline) alloy cores, may provide improved magnetic performance and enable both requirements to be achieved more effectively. However, such core materials are generally more expensive than conventional core materials and may therefore result in a higher overall CT cost.',
        'Accordingly, the ISF requirement should be specified based on the actual application and the protection requirements of the connected instruments, rather than adopting a uniformly stringent value for all metering CT applications. This approach helps achieve an appropriate balance between accuracy, instrument protection, technical feasibility, and cost.'
      ],
    },

    {
      num: '5',
      title: 'Accuracy Limiting Factor (ALF)',
      body: [
        'The Accuracy Limiting Factor (ALF) of a protection-class Current Transformer (CT) shall be selected according to the requirements of the protection scheme and the application in which the CT is installed.',

        'For conventional Overcurrent (O/C) and Earth Fault (E/F) protection in distribution systems, an ALF of 10 is generally adequate for normal protection applications, subject to the system fault level, relay characteristics, CT secondary burden, and the requirements of the protection scheme.',
        'For CTs used in power generation systems and critical protection applications, such as Restricted Earth Fault (REF), differential protection, and backup protection, a higher ALF may be required. The required ALF shall be determined based on the maximum prospective fault current, relay operating requirements, CT secondary circuit burden, and the applicable protection coordination requirements.',
        'The effective ALF of a protection CT is influenced by the actual connected secondary burden. For a given CT design, when the actual connected burden is lower than the rated/design burden, the CT can generally support a higher effective accuracy-limiting factor, subject to the CT design characteristics and applicable standard.',
        'Therefore, the rated burden and ALF should be specified together, based on the actual secondary circuit requirements. An unnecessarily high burden specification may result in a lower specified ALF or require a larger and more expensive CT design than is technically necessary',
        'Example:',
        'A protection CT specified as 20 VA, Class 5P, ALF 15 may, subject to the manufacturer\'s guaranteed performance and the applicable standard, be capable of achieving a higher effective ALF when operated at a lower actual burden. Accordingly, a CT designed for a higher burden and a specified ALF may provide equivalent or improved performance at a lower connected burden.',
        'For example, a CT designed and specified for 20 VA, 5P15 may be suitable for an application requiring 15 VA, 5P20, provided that the manufacturer confirms the required performance and the CT complies with the applicable standard.'
      ],
    },

    {
      num: '6',
      title: 'Short-Time Thermal Current (STC)',
      body: [
        'The Short-Time Thermal Current (STC) rating of a Current Transformer (CT) shall be selected based on the maximum prospective short-circuit current at the CT installation point, together with the specified short-circuit duration and the requirements of the electrical system.',
        'In a typical distribution system, the available short-circuit level is primarily determined by the rating and impedance of the upstream power transformer, the utility/system source, and the impedance of the intervening network. Accordingly, the STC requirement for the CTs installed on the incomer and main bus sections may be governed by the maximum fault level available from the upstream source.',
        'The STC requirement of CTs installed on outgoing feeders may be different from that of the incomer CTs, depending on the fault level at the respective feeder location. The available fault current generally decreases as the electrical distance and impedance between the source and the point of fault increase. Therefore, the CTs used on outgoing feeders need not necessarily have the same STC rating as the CTs installed at the incomer or main bus, provided that the calculated fault level at each installation point is adequately considered.',
        'The main busbar, incomer circuit breaker, bus-coupler, and associated switchgear shall be designed and rated to withstand the specified system short-circuit level for the applicable short-circuit duration. The CTs installed at these locations shall likewise have an adequate STC rating corresponding to the maximum prospective fault current at the respective installation point.',
        'The STC requirement shall therefore be established through the system short-circuit study and shall be specified separately, where appropriate, for incomer, bus-coupler, and outgoing feeder CTs',
        'The specified STC rating shall be coordinated with the applicable short-circuit withstand ratings of the associated switchgear, busbars, and other primary equipment, ensuring that the complete installation is capable of safely withstanding the prospective fault current for the specified duration.',
      ],
    },

    {
      num: '7',
      title: 'Inner Dimensions of Ring-Type CTs',
      body: [
        'While specifying the limiting dimensions of a Current Transformer (CT), particular attention should be given to the minimum practical inner diameter (ID), especially for ring-type CTs rated 200 A and below.',
        'For a ring-type CT, an increase in the specified inner diameter requires a corresponding increase in the core diameter and, consequently, increases the mean of a magnetic path of the core. This has a significant impact on the magnetic performance in case of low-current CTs.',
        'In CTs rated 200 A and below, the primary winding generally consists of a single primary turn. Hence, the available working Ampere-Turns (AT) are relatively low. To achieve the specified accuracy under these conditions, a suitable core cross-sectional area is required. An unnecessarily large inner diameter further increases the magnetic path length and may require a larger core cross-section to maintain the required magnetic performance.',
        'Therefore, it is recommended that the specified inner dimensions of the a Ring-type CT be limited to the minimum dimension necessary to accommodate the primary conductor, including the required installation clearance.',
      ],

      bullets: [
        'Increased core dimensions and magnetic material requirement',
        'Greater mean length of the magnetic path',
        'Greater difficulty achieving required accuracy for low-primary-current CTs',
        'Unnecessarily increased overall CT size, weight, and manufacturing cost',
      ],
    },
  ];

  const applicationMatrix = [
    ['1', 'Tariff / Revenue Metering', 'Class of Accuracy: 0.2S, 0.5S'],
    ['2', 'Precise Measurement (Laboratory)', 'Class of Accuracy: 0.2, 0.5, 1.0'],
    ['3', 'Metering (Indicative)', 'Class of Accuracy: 1.0, 3.0, 5.0'],
    ['4', 'Over Current / Earth Fault Protection', 'Class of Accuracy: 5P10/15/20'],
    ['5', 'Differential / REF / Bus Zone Protection', 'Class of Accuracy: PS'],
    ['6', 'Rated Primary Current', '5 to 6300 Amp'],
    ['7', 'Rated Secondary Current', '5, 1, 0.577'],
    ['8', 'Basic Insulation Level', 'As per Relative System Voltage'],
    ['9', 'Insulation Class', "E (or Better on request)"],
  ];

  return (
    <main className="w-full relative">

      {/* Page Header */}
      <div className="bg-[#0D1B2A] text-white py-12 border-b border-[#1A3050]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-[13px] text-[#8A9BAC] mb-2 font-medium tracking-wide">
            <Link href="/">
              <span className="hover:text-accent cursor-pointer transition-colors">
                Home
              </span>
            </Link>

            {' > '}

            <span>Technical</span>
          </div>

          <h1 className="text-[36px] font-bold">
            Technical Specifications
          </h1>

        </div>
      </div>

      <div className="bg-white py-[60px]">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Technical Guidelines */}
          <FadeIn>

            {/* Applications Matrix */}
          <FadeIn>

            <section
              id="applications"
              className="scroll-mt-[160px]"
            >

              <h2 className="text-[25px] font-bold text-[#0D1B2A] mb-6 border-b border-[#E2E8F0] pb-2">
                Application Matrix
              </h2>

              <div className="overflow-x-auto border border-border rounded-[2px]">

                <table className="w-full eng-table text-left border-collapse">

                  <thead>
                    <tr>

                      <th className="w-[10%]">
                        SN
                      </th>

                      <th className="w-[45%]">
                        Application
                      </th>

                      <th className="w-[45%]">
                        Specifications
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {applicationMatrix.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </section>

          </FadeIn>

            <section
              id="guidelines"
              className="scroll-mt-[160px]"
            >

              <h2 className="text-[25px] font-bold text-[#0D1B2A] mb-3 border-b border-[#E2E8F0] pb-2">
                Technical Exposure on Selection of CT Specifications
              </h2>

              <p className="text-[16px] text-[#4A5568] mb-8 leading-relaxed">
                Practical guidance for correctly selecting Current Transformer
                ratio, burden, accuracy class, ISF, ALF, STC rating, and
                ring-type CT dimensions — helping avoid over-specification
                while ensuring the CT performs to its intended application.
              </p>

              <div className="space-y-8">

                {guidelineTopics.map((topic) => (

                  <div
                    key={topic.num}
                    className="border border-[#E2E8F0] rounded-[2px] p-6 bg-[#F9FAFB]"
                  >

                    {/* Topic Header */}
                    <div className="flex items-start gap-4 mb-3">

                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0D1B2A] text-white text-[15px] font-bold flex items-center justify-center">
                        {topic.num}
                      </span>

                      <h3 className="text-[18px] font-bold text-[#0D1B2A] pt-1">
                        {topic.title}
                      </h3>

                    </div>

                    {/* Topic Content */}
                    <div className="pl-12 space-y-3">

                      {topic.body.map((para, i) => (
                        <p
                          key={i}
                          className="text-[16px] text-[#2C3E50] leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}

                      {/* Existing Bullets */}
                      {topic.bullets && (
                        <ul className="list-disc pl-5 space-y-1 pt-1">

                          {topic.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="text-[16px] text-[#2C3E50] leading-relaxed"
                            >
                              {b}
                            </li>
                          ))}

                        </ul>
                      )}

                      {/* ================================
                          BURDEN SELECTION GUIDE
                         ================================ */}
                      {topic.burdenGuide && (
  <div className="mt-6 space-y-6">

    {/* Burden Selection Guide */}
    <div className="border border-[#E2E8F0] bg-white p-5 rounded-[2px]">

      <h4 className="text-[16px] font-bold text-[#0D1B2A] mb-3">
        Burden Selection Guide
      </h4>

      <p className="text-[15px] text-[#4A5568] mb-3 leading-relaxed">
        The guideline for the selection of the burden of various devices
        and the lead burden is given below.
      </p>

      <div className="bg-[#F4F6F8] border-l-4 border-accent px-4 py-3">

        <p className="text-[16px] font-semibold text-[#0D1B2A]">
          Rated Burden
        </p>

        <p className="text-[16px] text-[#2C3E50] mt-1 leading-relaxed">
          = Burden of the Devices to be connected + Burden of the wire
          used for connection
        </p>

      </div>

    </div>


    {/* Instrument Burden Table */}
    <div>

      <h4 className="text-[16px] font-bold text-[#0D1B2A] mb-3">
        Instrument Burden
      </h4>

      <div className="overflow-x-auto border border-[#E2E8F0] rounded-[2px]">

        <table className="w-full eng-table text-left border-collapse">

          <thead>
            <tr>
              <th className="w-2/3">
                Instrument / Device
              </th>

              <th className="w-1/3">
                Burden
              </th>
            </tr>
          </thead>

          <tbody>

            {instrumentBurdenTable.map(
              ([instrument, burden]) => (
                <tr key={instrument}>
                  <td>{instrument}</td>
                  <td className="font-medium">{burden}</td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>


    {/* Lead Burden */}
    <div>

      <div className="flex items-start gap-2 mb-4">

        <span className="text-accent text-lg leading-none">
          ✓
        </span>

        <p className="text-[16px] font-semibold text-[#0D1B2A] leading-relaxed">
          Calculate the lead burden based on the distance between the
          Device and CT terminals and the size of conductor used from
          the table given below.
        </p>

      </div>


      <div className="w-full border border-[#E2E8F0] rounded-[2px]">
  <table className="w-full table-fixed text-[10px] text-center border-collapse">
          <thead>

            {/* Main Heading */}
            <tr className="bg-[#0D1B2A] text-white">

              <th
                rowSpan={3}
                className="px-3 py-3 border-r border-white/20 text-center"
              >
                Cross
                <br />
                Section
                <br />
                mm²
              </th>

              <th
                colSpan={7}
                className="px-3 py-3 text-center border-r border-white/20"
              >
                For CT having Secondary Current 1 Amp
              </th>

              <th
                colSpan={5}
                className="px-3 py-3 text-center"
              >
                For CT having Secondary Current 5 Amp
              </th>

            </tr>

            {/* Distance */}
            <tr className="bg-[#F4F6F8] text-[#0D1B2A]">

              <th
                colSpan={12}
                className="px-3 py-3 text-center"
              >
                Distance between CT and Measuring Instrument / Device
                in meters
              </th>

            </tr>

            {/* Distance Values */}
            <tr className="bg-[#E2E8F0] text-[#0D1B2A]">

              <th className="px-3 py-2 text-center">2 × 2</th>
              <th className="px-3 py-2 text-center">2 × 4</th>
              <th className="px-3 py-2 text-center">2 × 6</th>
              <th className="px-3 py-2 text-center">2 × 8</th>
              <th className="px-3 py-2 text-center">2 × 10</th>
              <th className="px-3 py-2 text-center">2 × 15</th>
              <th className="px-3 py-2 text-center">2 × 20</th>

              <th className="px-3 py-2 text-center">2 × 2</th>
              <th className="px-3 py-2 text-center">2 × 4</th>
              <th className="px-3 py-2 text-center">2 × 6</th>
              <th className="px-3 py-2 text-center">2 × 8</th>
              <th className="px-3 py-2 text-center">2 × 10</th>

            </tr>

          </thead>

          <tbody>

            {/* 1.5 mm² */}
            <tr>
              <td className="font-semibold text-center">1.5</td>

              <td>0.053</td>
              <td>0.106</td>
              <td>0.159</td>
              <td>0.213</td>
              <td>0.266</td>
              <td>0.399</td>
              <td>0.532</td>

              <td>1.33</td>
              <td>2.66</td>
              <td>3.99</td>
              <td>5.32</td>
              <td>6.65</td>
            </tr>

            {/* 2.5 mm² */}
            <tr>
              <td className="font-semibold text-center">2.5</td>

              <td>0.032</td>
              <td>0.064</td>
              <td>0.095</td>
              <td>0.12</td>
              <td>0.16</td>
              <td>0.24</td>
              <td>0.32</td>

              <td>0.79</td>
              <td>1.59</td>
              <td>2.40</td>
              <td>3.19</td>
              <td>3.99</td>
            </tr>

            {/* 4.0 mm² */}
            <tr>
              <td className="font-semibold text-center">4.0</td>

              <td>0.02</td>
              <td>0.039</td>
              <td>0.059</td>
              <td>0.079</td>
              <td>0.099</td>
              <td>0.148</td>
              <td>0.19</td>

              <td>0.495</td>
              <td>0.99</td>
              <td>1.485</td>
              <td>1.98</td>
              <td>2.48</td>
            </tr>

            {/* 6.0 mm² */}
            <tr>
              <td className="font-semibold text-center">6.0</td>

              <td>0.013</td>
              <td>0.026</td>
              <td>0.04</td>
              <td>0.053</td>
              <td>0.066</td>
              <td>0.099</td>
              <td>0.132</td>

              <td>0.33</td>
              <td>0.66</td>
              <td>0.99</td>
              <td>1.32</td>
              <td>1.65</td>
            </tr>

          </tbody>

        </table>

      </div>

      <p className="text-[12px] text-[#4A5568] mt-2">
        Lead burden of the respective wire size used for connection [VA].
      </p>

    </div>

  </div>
)}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          </FadeIn>

          

          {/* Custom Requirements */}
          <FadeIn>

            <section
              id="custom"
              className="scroll-mt-[160px] bg-[#0D1B2A] p-8 text-white rounded-[2px]"
            >

              <h2 className="text-[25px] font-bold mb-4">
                Custom Requirements
              </h2>

              <p className="text-[#8A9BAC] text-[17px] mb-8 max-w-2xl leading-relaxed">
                Need a specific dimensional constraint or non-standard
                electrical rating? Our engineering team has decades of
                experience modifying and custom-designing instrument
                transformers to fit legacy panels or unique industrial
                applications.
              </p>

              <Link href="/contact">

                <span className="bg-accent text-white font-semibold rounded-[3px] py-3 px-6 text-[16px] hover:bg-accent/90 transition-colors cursor-pointer inline-block">
                  Request Technical Consultation
                </span>

              </Link>

            </section>

          </FadeIn>

          {/* Technical Brochure */}
          <FadeIn>

            <div className="border border-[#E2E8F0] p-6 flex items-center justify-between bg-[#F4F6F8] rounded-[2px] mt-12 flex-col sm:flex-row gap-4">

              <div className="flex items-center gap-4">

                <div className="bg-white p-3 border border-[#E2E8F0] rounded-[2px]">

                  <FileText className="h-6 w-6 text-[#2C3E50]" />

                </div>

                <div>

                  <h4 className="text-[18px] font-bold text-[#0D1B2A]">
                    Technical Brochure
                  </h4>

                  <p className="text-[15px] text-[#4A5568]">
                    Amptrix Energy LLP (PDF)
                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  alert(
                    'Brochure download will be available shortly. Please contact us at info@amptrixenergy.com'
                  )
                }
                className="border border-[#0D1B2A] text-[#0D1B2A] font-semibold py-2 px-6 rounded-[3px] hover:bg-[#0D1B2A] hover:text-white transition-colors text-[16px] whitespace-nowrap w-full sm:w-auto"
              >
                Download Brochure
              </button>

            </div>

          </FadeIn>

        </div>

      </div>

    </main>
  );
}