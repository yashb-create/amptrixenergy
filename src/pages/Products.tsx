import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';
import { Settings2, Zap, FileText } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'LV' | 'MV'>('LV');

  useEffect(() => {
    document.title = 'Products | LV & MV Instrument Transformers | Amptrix Energy LLP';
  }, []);

  return (
    <main className="w-full">
      {/* Page Header */}
      <div className="bg-[#F4F6F8] py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[12px] text-[#637588] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>Products</span>
          </div>
          <h1 className="text-[32px] text-[#0D1B2A] font-bold mb-4">Instrument Transformers</h1>
          <p className="text-[#637588] max-w-2xl text-[15px] leading-relaxed">
            Amptrix Energy LLP manufactures a comprehensive range of Low Voltage and Medium Voltage instrument transformers, engineered for accuracy, reliability, and long-term performance in demanding industrial environments.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#E2E8F0] bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('LV')}
              className={`py-4 text-[15px] font-semibold transition-colors relative ${
                activeTab === 'LV' ? 'text-accent' : 'text-[#637588] hover:text-[#0D1B2A]'
              }`}
            >
              Low Voltage
              {activeTab === 'LV' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('MV')}
              className={`py-4 text-[15px] font-semibold transition-colors relative ${
                activeTab === 'MV' ? 'text-accent' : 'text-[#637588] hover:text-[#0D1B2A]'
              }`}
            >
              Medium Voltage
              {activeTab === 'MV' && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      <section className="bg-white py-[60px] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeTab === 'LV' && (
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                
                {/* CT Card */}
                <div className="border border-[#E2E8F0] p-8 flex flex-col h-full hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="text-[20px] font-bold text-[#0D1B2A] leading-tight">Current Transformer (CT)</h3>
                      <span className="text-[12px] font-bold text-[#637588] tracking-widest uppercase">IS: 16228</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-[14px] text-[#2C3E50] flex-grow">
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Nominal System Voltage</span>
                      <span className="font-medium">440 Volts</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Highest System Voltage</span>
                      <span className="font-medium">720 Volts</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Primary Current</span>
                      <span className="font-medium">5 to 6300 Amp</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Secondary Current</span>
                      <span className="font-medium">5, 1, 0.577 Amp</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Rated Burden</span>
                      <span className="font-medium">2.5 to 30 VA</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Insulation Class</span>
                      <span className="font-medium">E (or Better on Request)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#637588]">STC</span>
                      <span className="font-medium">5kA for 1 second</span>
                    </li>
                  </ul>
                  
                  <Link href="/contact">
                    <button className="w-full bg-accent text-white font-semibold py-3 rounded-[3px] hover:bg-accent/90 transition-colors">
                      Request Quotation
                    </button>
                  </Link>
                </div>

                {/* PT Card */}
                <div className="border border-[#E2E8F0] p-8 flex flex-col h-full hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-6 w-6 text-[#2C3E50] shrink-0" />
                    <div>
                      <h3 className="text-[20px] font-bold text-[#0D1B2A] leading-tight">Potential Transformer (PT)</h3>
                      <span className="text-[12px] font-bold text-[#637588] tracking-widest uppercase">IS: 3156</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-[14px] text-[#2C3E50] flex-grow">
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Nominal System Voltage</span>
                      <span className="font-medium">440 Volts</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Highest System Voltage</span>
                      <span className="font-medium">720 Volts</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Primary Voltage</span>
                      <span className="font-medium">440 Volts</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Secondary Voltage</span>
                      <span className="font-medium">230, 110, 110/√3 Volts</span>
                    </li>
                    <li className="flex justify-between border-b border-[#F4F6F8] pb-2">
                      <span className="text-[#637588]">Rated Burden</span>
                      <span className="font-medium">25 to 200 VA</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#637588]">Insulation Class</span>
                      <span className="font-medium">E (or Better on Request)</span>
                    </li>
                  </ul>
                  
                  <Link href="/contact">
                    <button className="w-full bg-[#0D1B2A] text-white font-semibold py-3 rounded-[3px] hover:bg-[#1A3050] transition-colors mt-auto">
                      Request Quotation
                    </button>
                  </Link>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-[18px] font-bold text-[#0D1B2A] mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Detailed Specifications Comparison
                </h4>
                <div className="overflow-x-auto border border-border rounded-[2px]">
                  <table className="w-full eng-table text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr>
                        <th className="w-1/3">Parameter</th>
                        <th className="w-1/3">CT Value</th>
                        <th className="w-1/3">PT Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Standard Applicable</td>
                        <td>IS: 16228</td>
                        <td>IS: 3156</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Nominal System Voltage</td>
                        <td>440 Volts</td>
                        <td>440 Volts</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Highest System Voltage</td>
                        <td>720 Volts</td>
                        <td>720 Volts</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Rated Frequency</td>
                        <td>50 Hz</td>
                        <td>50 Hz</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Rated Insulation Level</td>
                        <td>0.72/3 kV</td>
                        <td>0.72/3 kV</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Insulation Class</td>
                        <td>E (or Better on Request)</td>
                        <td>E (or Better on Request)</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Rated Primary Current/Voltage</td>
                        <td>5 to 6300 Amp</td>
                        <td>440 Volts</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Rated Secondary Current/Voltage</td>
                        <td>5, 1, 0.577 Amp</td>
                        <td>230, 110, 110/√3 Volts</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Rated Burden</td>
                        <td>2.5 to 30 VA</td>
                        <td>25 to 200 VA</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Class of Accuracy</td>
                        <td>0.2, 0.2S, 0.5, 0.5S, 1, 3, 5P5, 5P10, 5P15, 5P20</td>
                        <td>0.5, 1, 3, 3P</td>
                      </tr>
                      <tr>
                        <td className="font-medium text-[#2C3E50]">Short Time Thermal Current</td>
                        <td>5kA for 1 second</td>
                        <td className="text-[#8A9BAC]">NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          )}

          {activeTab === 'MV' && (
            <FadeIn>
              <div className="bg-[#F4F6F8] p-8 border-l-4 border-accent mb-8">
                <div className="flex items-start gap-4">
                  <Settings2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-3">Medium Voltage — Custom Engineered</h3>
                    <p className="text-[#2C3E50] text-[15px] leading-relaxed">
                      The product is being Custom built (tailor made), the Ratio, Burden, Class of Accuracy, STC Rating and Dimensions are variable and depending upon the specific Project requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {[
                  { title: 'Ratio', desc: 'Primary to secondary turns ratio as per project requirement' },
                  { title: 'Burden', desc: 'VA rating customized to connected relay/meter burden' },
                  { title: 'Class of Accuracy', desc: 'Measurement and protection classes available' },
                  { title: 'STC Rating', desc: 'Short-time current rating per system fault level' },
                  { title: 'Dimensions', desc: 'Custom dimensions for panel compatibility' },
                ].map((param, idx) => (
                  <div key={idx} className="border border-[#E2E8F0] p-6 bg-white hover:border-[#CBD5E0] transition-colors">
                    <h4 className="text-[16px] font-bold text-[#0D1B2A] mb-2">{param.title}</h4>
                    <p className="text-[13px] text-[#637588] leading-relaxed">{param.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="bg-accent text-white font-semibold py-3 px-8 rounded-[3px] hover:bg-accent/90 transition-colors inline-block">
                  Discuss Your Requirement
                </button>
              </Link>
            </FadeIn>
          )}

        </div>
      </section>
    </main>
  );
}
