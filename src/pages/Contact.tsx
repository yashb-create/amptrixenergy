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
          <div className="text-[13px] text-[#4A5568] mb-2 font-medium tracking-wide">
            <Link href="/"><span className="hover:text-accent cursor-pointer transition-colors">Home</span></Link> &gt; <span>Contact</span>
          </div>
          <h1 className="text-[36px] text-[#0D1B2A] font-bold">Let's Discuss Your Requirement</h1>
        </div>
      </div>

      <section className="py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left - Contact Info */}
            <FadeIn>
              <div className="bg-white p-8 border border-[#E2E8F0] shadow-sm h-full">
                <h2 className="font-bold text-[#0D1B2A] text-[20px] mb-8 pb-4 border-b border-[#E2E8F0]">
                  AMPTRIX ENERGY LLP
                </h2>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[17px] leading-relaxed">
                      56, Mini Por Industrial Park, NH-48,<br />
                      Behind Sahyog Hotel, Por,<br />
                      Vadodara - 391243, Gujarat, INDIA
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[17px] font-medium tracking-wide">
                      +91 98255 81168 <span className="text-[#8A9BAC] mx-2">|</span> +91 94268 88222 <span className="text-[#8A9BAC] mx-2">|</span> +91 99095 3531
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[17px] font-medium">
                      info@amptrixenergy.com
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-[#F4F6F8] p-3 rounded-[2px] border border-[#E2E8F0] shrink-0">
                      <Globe className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-[#2C3E50] text-[17px] font-medium">
                      www.amptrixenergy.com
                    </span>
                  </li>
                </ul>

                {/* Map */}
                <div className="h-[200px] border border-[#E2E8F0] rounded-[2px] overflow-hidden relative">
                  <iframe
                    title="Amptrix Energy LLP Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.146397225944!2d73.17711357551856!3d22.12039327981633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc10003e7736f%3A0x69a04ce799a1c593!2sAmptrix%20energy%20llp!5e0!3m2!1sen!2sin!4v1788772173215!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right - Enquiry Form */}
            <FadeIn>
              <div className="bg-white p-8 border border-[#E2E8F0] shadow-sm h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <CheckCircle className="h-16 w-16 text-accent mb-6" />
                    <h3 className="text-[22px] font-bold text-[#0D1B2A] mb-3">Enquiry Submitted Successfully</h3>
                    <p className="text-[#4A5568] text-[17px] max-w-sm mx-auto">
                      Thank you for your enquiry. Our team will contact you shortly. We typically respond within 1 business day.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: '', company: '', email: '', phone: '', product: 'General Enquiry', message: ''
                        });
                      }}
                      className="mt-8 border border-[#E2E8F0] text-[#2C3E50] font-medium py-2 px-6 rounded-[3px] hover:bg-[#F4F6F8] transition-colors text-[16px]"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-bold text-[#0D1B2A] text-[20px] mb-6">Send an Enquiry</h2>
                    
                    <div>
                      <label className="block text-[15px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full border p-[10px_12px] text-[16px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${errors.name ? 'border-red-500' : 'border-[#E2E8F0] hover:border-[#CBD5E0]'}`} 
                      />
                      {errors.name && <p className="text-red-500 text-[13px] mt-1">Name is required</p>}
                    </div>

                    <div>
                      <label className="block text-[15px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Company *</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className={`w-full border p-[10px_12px] text-[16px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${errors.company ? 'border-red-500' : 'border-[#E2E8F0] hover:border-[#CBD5E0]'}`} 
                      />
                      {errors.company && <p className="text-red-500 text-[13px] mt-1">Company is required</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[15px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full border p-[10px_12px] text-[16px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent ${errors.email ? 'border-red-500' : 'border-[#E2E8F0] hover:border-[#CBD5E0]'}`} 
                        />
                        {errors.email && <p className="text-red-500 text-[13px] mt-1">Email is required</p>}
                      </div>
                      <div>
                        <label className="block text-[15px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full border border-[#E2E8F0] hover:border-[#CBD5E0] p-[10px_12px] text-[16px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[15px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Product Requirement</label>
                      <select 
                        name="product"
                        value={formState.product}
                        onChange={handleChange}
                        className="w-full border border-[#E2E8F0] hover:border-[#CBD5E0] p-[10px_12px] text-[16px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent"
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
                      <label className="block text-[15px] font-bold text-[#2C3E50] mb-1.5 uppercase tracking-wide">Message</label>
                      <textarea 
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full border border-[#E2E8F0] hover:border-[#CBD5E0] p-[10px_12px] text-[16px] rounded-[3px] bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-[3px] hover:bg-accent/90 transition-colors text-[17px]"
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
