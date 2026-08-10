import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { FadeIn } from '@/hooks/use-fade-in';
import { MapPin, Phone, Mail, Globe, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'General Enquiry',
    message: ''
  });
  
  const [errors, setErrors] = useState<{name?: boolean; company?: boolean; email?: boolean}>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Amptrix Energy LLP';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {
      name: !formState.name.trim(),
      company: !formState.company.trim(),
      email: !formState.email.trim()
    };
    
    if (newErrors.name || newErrors.company || newErrors.email) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate API call
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    // Clear error for field when typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: false
      });
    }
  };

  return (
    <main className="w-full bg-[#F4F6F8] min-h-[calc(100vh-80px)]">
      {/* Page Header */}
      <div className="bg-white py-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[12px] text-[#637588] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>Contact</span>
          </div>
          <h1 className="text-[32px] text-[#0D1B2A] font-bold">Let's Discuss Your Requirement</h1>
        </div>
      </div>

      <section className="py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left - Contact Info */}
            <FadeIn>
              <div className="bg-white p-8 border border-[#E2E8F0] shadow-sm h-full">
                <h2 className="font-bold text-[#0D1B2A] text-[18px] mb-8 pb-4 border-b border-[#E2E8F0]">
                  AMPTRIX ENERGY LLP
                </h2>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[15px] leading-relaxed">
                      56, Mini Por Industrial Park, NH-48,<br />
                      Behind Sahyog Hotel, Por,<br />
                      Vadodara - 391243, Gujarat, INDIA
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[15px] font-medium tracking-wide">
                      +91 98255 81168 <span className="text-[#8A9BAC] mx-2">|</span> +91 94268 88222
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[15px] font-medium">
                      info@amptrixenergy.com
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[15px] font-medium">
                      www.amptrix.com
                    </span>
                  </li>
                </ul>

                {/* Map Placeholder */}
                <div className="h-[200px] border border-[#E2E8F0] bg-[#F4F6F8] rounded-[2px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                  {/* Grid pattern background for map feel */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0D1B2A 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                  <MapPin className="h-8 w-8 text-accent mb-2 relative z-10" />
                  <div className="font-bold text-[#0D1B2A] text-[14px] relative z-10">Por Industrial Area</div>
                  <div className="text-[#637588] text-[12px] relative z-10">Vadodara, Gujarat - 391243</div>
                </div>
              </div>
            </FadeIn>

            {/* Right - Enquiry Form */}
            <FadeIn>
              <div className="bg-white p-8 border border-[#E2E8F0] shadow-sm h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <CheckCircle className="h-16 w-16 text-accent mb-6" />
                    <h3 className="text-[20px] font-bold text-[#0D1B2A] mb-3">Enquiry Submitted Successfully</h3>
                    <p className="text-[#637588] text-[15px] max-w-sm mx-auto">
                      Thank you for your enquiry. Our team will contact you shortly. We typically respond within 1 business day.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: '', company: '', email: '', phone: '', product: 'General Enquiry', message: ''
                        });
                      }}
                      className="mt-8 border border-[#E2E8F0] text-[#2C3E50] font-medium py-2 px-6 rounded-[3px] hover:bg-[#F4F6F8] transition-colors text-[14px]"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-bold text-[#0D1B2A] text-[18px] mb-6">Send an Enquiry</h2>
                    
                    <div>
                      <label className="block text-[13px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full border p-[10px_12px] text-[14px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${errors.name ? 'border-red-500' : 'border-[#E2E8F0] hover:border-[#CBD5E0]'}`} 
                      />
                      {errors.name && <p className="text-red-500 text-[12px] mt-1">Name is required</p>}
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Company *</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className={`w-full border p-[10px_12px] text-[14px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${errors.company ? 'border-red-500' : 'border-[#E2E8F0] hover:border-[#CBD5E0]'}`} 
                      />
                      {errors.company && <p className="text-red-500 text-[12px] mt-1">Company is required</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[13px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full border p-[10px_12px] text-[14px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${errors.email ? 'border-red-500' : 'border-[#E2E8F0] hover:border-[#CBD5E0]'}`} 
                        />
                        {errors.email && <p className="text-red-500 text-[12px] mt-1">Email is required</p>}
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full border border-[#E2E8F0] hover:border-[#CBD5E0] p-[10px_12px] text-[14px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Product Requirement</label>
                      <select 
                        name="product"
                        value={formState.product}
                        onChange={handleChange}
                        className="w-full border border-[#E2E8F0] hover:border-[#CBD5E0] p-[10px_12px] text-[14px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
                      >
                        <option value="Low Voltage Current Transformer CT">Low Voltage Current Transformer CT</option>
                        <option value="Low Voltage Potential Transformer PT">Low Voltage Potential Transformer PT</option>
                        <option value="Medium Voltage Current Transformer">Medium Voltage Current Transformer</option>
                        <option value="Medium Voltage Potential Transformer">Medium Voltage Potential Transformer</option>
                        <option value="Custom Requirement">Custom Requirement</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Message</label>
                      <textarea 
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full border border-[#E2E8F0] hover:border-[#CBD5E0] p-[10px_12px] text-[14px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-[3px] hover:bg-accent/90 transition-colors text-[15px]"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>
    </main>
  );
}
