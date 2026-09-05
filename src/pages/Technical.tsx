import { useEffect } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';
import { FileText } from 'lucide-react';

export default function Technical() {
  useEffect(() => {
    document.title = 'Technical Specifications | Instrument Transformers | Amptrix Energy LLP';
  }, []);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky navs
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'general', label: 'General' },
    { id: 'lv-ct', label: 'LV Current Transformer' },
    { id: 'lv-pt', label: 'LV Potential Transformer' },
    { id: 'mv', label: 'Medium Voltage' },
    { id: 'guidelines', label: 'CT Selection Guidelines' },
    { id: 'applications', label: 'Applications' },
    { id: 'custom', label: 'Custom Requirements' }
  ];

  const guidelineTopics = [
    {
      num: '1',
      title: 'CT Ratio Selection',
      body: [
        'The CT ratio shall be selected based on the maximum load current to be measured and/or controlled, which flows through the primary winding of the CT. During manufacture, the CT is designed and calibrated to achieve the specified accuracy class at its rated primary current.',
        'For accurate measurement, the rated primary current should be selected as close as practicable to the actual load current. As a general guideline, the rated primary current should not normally exceed approximately 120% of the actual load current — an excessively high CT ratio can reduce measurement accuracy.',
        'The rated secondary current shall be selected based on the requirements of the connected measuring, metering, protection, or control equipment. Commonly used secondary ratings are 1 A and 5 A, subject to the applicable standards.'
      ]
    },
    {
      num: '2',
      title: 'Rated Burden',
      body: [
        'The rated burden shall be selected based on the actual requirements of the connected measuring, metering, protection, or control equipment, including the burden of the associated secondary wiring.',
        'Specifying a burden substantially higher than the actual connected burden does not improve accuracy or safety — it typically increases CT size, cost, and may result in a specification that is unnecessarily stringent or commercially non-viable.',
        'Rated Burden = Burden of the connected devices + Burden of the connecting wire. Where the actual connected burden differs substantially from the burden used for selection, the CT may not operate at its optimum accuracy, which can defeat the intended purpose of the specified accuracy class.'
      ]
    },
    {
      num: '3',
      title: 'Accuracy Class',
      body: [
        'The accuracy class shall be selected in accordance with the intended application and required measurement or protection performance, without unnecessarily specifying a higher class than needed.',
        'Selection of an appropriate accuracy class balances measurement/protection performance, reliability, and overall cost. An unnecessarily stringent requirement increases CT size and cost without practical benefit.'
      ]
    },
    {
      num: '4',
      title: 'Instrument Security Factor (ISF)',
      body: [
        'ISF is an important consideration for metering CTs, particularly where connected instruments need protection under excessive primary current conditions. An ISF of less than 5 is often preferred, though the achievable value depends on core design, material, cross-sectional area, accuracy class, burden, and operating ampere-turns.',
        'Increasing core section area can improve accuracy but also affects saturation characteristics and the achievable ISF — at low operating ampere-turns, achieving both a stringent accuracy class and a low ISF together can be technically challenging.',
        'Where both high accuracy and low ISF are essential, nanocrystalline core materials can improve magnetic performance, though at a higher overall cost. ISF should be specified based on the actual application rather than a uniformly stringent value for all metering CTs.'
      ]
    },
    {
      num: '5',
      title: 'Accuracy Limiting Factor (ALF)',
      body: [
        'The ALF of a protection-class CT shall be selected according to the protection scheme requirements. An ALF of 10 is generally adequate for conventional O/C and E/F protection in distribution systems.',
        'CTs used in power generation and critical protection applications (REF, differential, backup protection) may require a higher ALF, determined from the maximum prospective fault current, relay requirements, and secondary burden.',
        'The effective ALF is influenced by the actual connected burden — when the actual burden is lower than the rated/design burden, the CT can generally support a higher effective ALF. For example, a CT specified as 20 VA, 5P15 may suit an application requiring 15 VA, 5P20, subject to manufacturer confirmation and applicable standards.'
      ]
    },
    {
      num: '6',
      title: 'Short-Time Thermal Current (STC)',
      body: [
        'The STC rating shall be selected based on the maximum prospective short-circuit current at the CT installation point, the specified short-circuit duration, and system requirements.',
        'STC requirements for incomer and main bus CTs are typically governed by the upstream fault level, while outgoing feeder CTs may have different requirements depending on the fault level at that location, since available fault current generally decreases with electrical distance from the source.',
        'The STC rating shall be coordinated with the short-circuit withstand ratings of associated switchgear, busbars, and primary equipment, and established through a system short-circuit study.'
      ]
    },
    {
      num: '7',
      title: 'Inner Dimensions of Ring-Type CTs',
      body: [
        'Particular attention should be given to the minimum practical inner diameter (ID) for ring-type CTs rated 200 A and below. Increasing the specified ID increases the core diameter and mean magnetic path length, which significantly affects magnetic performance at low currents.',
        'In CTs rated 200 A and below, the primary winding is generally a single turn, so available ampere-turns are relatively low — an unnecessarily large inner diameter increases the magnetic path length and may require a larger core cross-section.'
      ],
      bullets: [
        'Increased core dimensions and magnetic material requirement',
        'Greater mean length of the magnetic path',
        'Greater difficulty achieving required accuracy for low-primary-current CTs',
        'Unnecessarily increased overall CT size, weight, and manufacturing cost'
      ]
    }
  ];

  return (
    <main className="w-full relative">
      {/* Page Header */}
      <div className="bg-[#0D1B2A] text-white py-12 border-b border-[#1A3050]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[12px] text-[#8A9BAC] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>Technical</span>
          </div>
          <h1 className="text-[32px] font-bold">Technical Specifications</h1>
        </div>
      </div>

      {/* Sticky Top Anchor Nav */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-20 z-40 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-6 min-w-max py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToAnchor(item.id)}
                  className="text-[13px] font-bold text-[#637588] hover:text-[#0D1B2A] uppercase tracking-wide transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white py-[60px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <FadeIn>
            <section id="general" className="scroll-mt-[160px]">
              <h2 className="text-[22px] font-bold text-[#0D1B2A] mb-6 border-b border-[#E2E8F0] pb-2">General Specifications</h2>
              <div className="overflow-x-auto border border-border rounded-[2px]">
                <table className="w-full eng-table text-left border-collapse">
                  <tbody>
                    <tr><td className="font-medium text-[#2C3E50] w-1/2">Rated Frequency</td><td>50 Hz</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Standards CT</td><td>IS: 16228</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Standards PT</td><td>IS: 3156</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Insulation Class</td><td>E (or Better on Request)</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Dielectric Strength</td><td>Per IS standards</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Mounting</td><td>As per panel requirements</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section id="lv-ct" className="scroll-mt-[160px]">
              <h2 className="text-[22px] font-bold text-[#0D1B2A] mb-6 border-b border-[#E2E8F0] pb-2">LV Current Transformer (CT)</h2>
              <div className="overflow-x-auto border border-border rounded-[2px]">
                <table className="w-full eng-table text-left border-collapse">
                  <tbody>
                    <tr><td className="font-medium text-[#2C3E50] w-1/2">Nominal System Voltage</td><td>440 Volts</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Highest System Voltage</td><td>720 Volts</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Rated Primary Current</td><td>5 to 6300 Amp</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Rated Secondary Current</td><td>5, 1, 0.577 Amp</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Rated Burden</td><td>2.5 to 30 VA</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Class of Accuracy</td><td>0.2, 0.2S, 0.5, 0.5S, 1, 3, 5P5, 5P10, 5P15, 5P20</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Short Time Thermal Current</td><td>5kA for 1 second</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section id="lv-pt" className="scroll-mt-[160px]">
              <h2 className="text-[22px] font-bold text-[#0D1B2A] mb-6 border-b border-[#E2E8F0] pb-2">LV Potential Transformer (PT)</h2>
              <div className="overflow-x-auto border border-border rounded-[2px]">
                <table className="w-full eng-table text-left border-collapse">
                  <tbody>
                    <tr><td className="font-medium text-[#2C3E50] w-1/2">Nominal System Voltage</td><td>440 Volts</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Highest System Voltage</td><td>720 Volts</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Rated Primary Voltage</td><td>440 Volts</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Rated Secondary Voltage</td><td>230, 110, 110/√3 Volts</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Rated Burden</td><td>25 to 200 VA</td></tr>
                    <tr><td className="font-medium text-[#2C3E50]">Class of Accuracy</td><td>0.5, 1, 3, 3P</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section id="mv" className="scroll-mt-[160px]">
              <h2 className="text-[22px] font-bold text-[#0D1B2A] mb-6 border-b border-[#E2E8F0] pb-2">Medium Voltage (Custom Engineered)</h2>
              <div className="bg-[#F4F6F8] p-6 border border-[#E2E8F0] mb-6">
                <p className="text-[14px] text-[#2C3E50] font-medium">
                  The product is being Custom built (tailor made), the Ratio, Burden, Class of Accuracy, STC Rating and Dimensions are variable and depending upon the specific Project requirements.
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Ratio', desc: 'Primary to secondary turns ratio as per project requirement' },
                  { title: 'Burden', desc: 'VA rating customized to connected relay/meter burden' },
                  { title: 'Class of Accuracy', desc: 'Measurement and protection classes available' },
                  { title: 'STC Rating', desc: 'Short-time current rating per system fault level' },
                  { title: 'Dimensions', desc: 'Custom dimensions for panel compatibility' },
                ].map((item, i) => (
                  <li key={i} className="border border-[#E2E8F0] p-4 text-[13px]">
                    <span className="font-bold text-[#0D1B2A] block mb-1">{item.title}</span>
                    <span className="text-[#637588]">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section id="guidelines" className="scroll-mt-[160px]">
              <h2 className="text-[22px] font-bold text-[#0D1B2A] mb-3 border-b border-[#E2E8F0] pb-2">
                Technical Exposure on Selection of CT Specifications
              </h2>
              <p className="text-[14px] text-[#637588] mb-8 leading-relaxed">
                Practical guidance for correctly selecting Current Transformer ratio, burden, accuracy class, ISF, ALF, STC rating, and ring-type CT dimensions — helping avoid over-specification while ensuring the CT performs to its intended application.
              </p>

              <div className="space-y-8">
                {guidelineTopics.map((topic) => (
                  <div key={topic.num} className="border border-[#E2E8F0] rounded-[2px] p-6 bg-[#F9FAFB]">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0D1B2A] text-white text-[13px] font-bold flex items-center justify-center">
                        {topic.num}
                      </span>
                      <h3 className="text-[16px] font-bold text-[#0D1B2A] pt-1">{topic.title}</h3>
                    </div>
                    <div className="pl-12 space-y-3">
                      {topic.body.map((para, i) => (
                        <p key={i} className="text-[14px] text-[#2C3E50] leading-relaxed">{para}</p>
                      ))}
                      {topic.bullets && (
                        <ul className="list-disc pl-5 space-y-1 pt-1">
                          {topic.bullets.map((b, i) => (
                            <li key={i} className="text-[14px] text-[#2C3E50] leading-relaxed">{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section id="applications" className="scroll-mt-[160px]">
              <h2 className="text-[22px] font-bold text-[#0D1B2A] mb-6 border-b border-[#E2E8F0] pb-2">Applications Matrix</h2>
              <div className="overflow-x-auto border border-border rounded-[2px]">
                <table className="w-full eng-table text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/3">Application</th>
                      <th className="w-1/3">Type</th>
                      <th className="w-1/3">Accuracy Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Utility Metering</td><td>CT / PT</td><td>0.2, 0.5</td></tr>
                    <tr><td>Protection</td><td>CT</td><td>5P10, 5P20</td></tr>
                    <tr><td>Switchgear</td><td>CT / PT</td><td>Per panel specs</td></tr>
                    <tr><td>Control Panels</td><td>CT</td><td>5 to 600 Amp primary</td></tr>
                    <tr><td>Power Industry</td><td>CT / PT</td><td>Custom</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section id="custom" className="scroll-mt-[160px] bg-[#0D1B2A] p-8 text-white rounded-[2px]">
              <h2 className="text-[22px] font-bold mb-4">Custom Requirements</h2>
              <p className="text-[#8A9BAC] text-[15px] mb-8 max-w-2xl leading-relaxed">
                Need a specific dimensional constraint or non-standard electrical rating? Our engineering team has decades of experience modifying and custom-designing instrument transformers to fit legacy panels or unique industrial applications.
              </p>
              <Link href="/contact">
                <span className="bg-accent text-white font-semibold rounded-[3px] py-3 px-6 text-[14px] hover:bg-accent/90 transition-colors cursor-pointer inline-block">
                  Request Technical Consultation
                </span>
              </Link>
            </section>
          </FadeIn>

          <FadeIn>
            <div className="border border-[#E2E8F0] p-6 flex items-center justify-between bg-[#F4F6F8] rounded-[2px] mt-12 flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 border border-[#E2E8F0] rounded-[2px]">
                  <FileText className="h-6 w-6 text-[#2C3E50]" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0D1B2A]">Technical Brochure</h4>
                  <p className="text-[13px] text-[#637588]">Amptrix Energy LLP (PDF)</p>
                </div>
              </div>
              <button
                onClick={() => alert('Brochure download will be available shortly. Please contact us at info@amptrixenergy.com')}
                className="border border-[#0D1B2A] text-[#0D1B2A] font-semibold py-2 px-6 rounded-[3px] hover:bg-[#0D1B2A] hover:text-white transition-colors text-[14px] whitespace-nowrap w-full sm:w-auto"
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