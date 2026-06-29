import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for contacting us. We will get back to you shortly.');
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AHV Worldwide</title>
        <meta name="description" content="Contact AHV Worldwide for inquiries on export-import solutions, pharmaceutical consultancy, and education services." />
      </Helmet>
      {/* Section A: Page Intro */}
      <section className="relative rounded-[20px] overflow-hidden bg-[#2A2B2E] py-24 px-8 lg:px-12 flex flex-col items-center justify-center text-center shadow-xl -mt-6 h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop" alt="Contact Us Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">Contact Us</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">Get in touch with AHV Worldwide for inquiries and support.</p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mt-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info */}
          <div>
            <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Get In Touch</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight font-heading mb-6">Let's Start a Conversation</h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Whether you need export-import solutions, consultancy services, or educational training, our team is ready to assist you. Reach out to us today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#FFF4ED] w-12 h-12 rounded-2xl flex items-center justify-center text-[#FF6E14] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 text-lg">Headquarters</h4>
                  <p className="text-zinc-600 leading-relaxed">AHV Worldwide<br/>Navi Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 text-lg">Call Us</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    <a href="tel:+919921481220" className="hover:text-blue-600 transition-colors">+91 99214 81220</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 text-lg">Email Us</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    <a href="mailto:info@ahvworldwide.com" className="hover:text-emerald-600 transition-colors">info@ahvworldwide.com</a><br/>
                    <a href="mailto:support@ahvworldwide.com" className="hover:text-emerald-600 transition-colors">support@ahvworldwide.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-4 text-lg">Fast Response via WhatsApp</h4>
              <a href="https://wa.me/919921481220" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 rounded-xl font-bold transition-colors w-full justify-center">
                <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-zinc-900 mb-4 text-lg">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-sky-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-blue-700 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-pink-600 hover:text-white transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-[3rem] p-10 border border-zinc-200 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6E14]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold text-zinc-900 mb-8 font-heading relative z-10">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF6E14] focus:border-transparent transition-all bg-zinc-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF6E14] focus:border-transparent transition-all bg-zinc-50 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone Number (with Country Code)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF6E14] focus:border-transparent transition-all bg-zinc-50 focus:bg-white"
                  placeholder="+91 99214 81220"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-zinc-700 mb-2">Country / Region</label>
                <select 
                  id="country" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF6E14] focus:border-transparent transition-all bg-zinc-50 focus:bg-white"
                >
                  <option value="">Select your country...</option>
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="Australia">Australia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-zinc-700 mb-2">Nature of Inquiry</label>
                <select 
                  id="inquiry" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF6E14] focus:border-transparent transition-all bg-zinc-50 focus:bg-white"
                >
                  <option value="">Select inquiry type...</option>
                  <option value="export">Export Inquiry</option>
                  <option value="import">Import Inquiry</option>
                  <option value="pharma">Pharma Consultancy</option>
                  <option value="education">Education & Training</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF6E14] focus:border-transparent transition-all bg-zinc-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#FF6E14] hover:bg-[#E55B0C] text-white px-6 py-4 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-24 w-full">
        <div className="overflow-hidden border-y border-zinc-200 shadow-sm h-[300px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120668.08770220677!2d72.93722212971274!3d19.06830573981882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13401552093%3A0x673edcceea9f0003!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
