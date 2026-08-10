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
    { id: 'applications', label: 'Applications' },
    { id: 'custom', label: 'Custom Requirements' }
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
                  className="text-[13px] font-bold text-[#637588] hover:text-[#0D1B2A] uppercase tracking-wide transition-colors"
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
