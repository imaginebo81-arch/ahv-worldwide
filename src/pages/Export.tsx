import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight, 
  Pill, 
  Leaf, 
  Wheat, 
  FlaskConical, 
  Coffee, 
  HardHat,
  Search,
  CheckCircle,
  FileText,
  Ship,
  FileCheck,
  PackageCheck,
  Download,
  Award
} from 'lucide-react';

export default function Export() {
  const { setIsLeadFormOpen } = useOutletContext<{ setIsLeadFormOpen: (open: boolean) => void }>();

  return (
    <>
      <Helmet>
        <title>Export Services | AHV Worldwide</title>
        <meta name="description" content="Explore AHV Worldwide's export services, from pharmaceutical products and agricultural produce to comprehensive export documentation." />
      </Helmet>
      {/* Section A: Page Intro */}
      <section className="relative rounded-[20px] overflow-hidden bg-[#2A2B2E] py-24 px-8 lg:px-12 flex flex-col items-center justify-center text-center shadow-xl h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop" alt="Cargo Ship Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">Export with Confidence – AHV Worldwide</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">From India to the World – Premium Quality Products for Global Markets</p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Export</span>
          </div>
        </div>
      </section>

      {/* Section B: Export Product Categories */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Categories</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">Export Product Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-blue-600">
              <Pill className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Pharmaceutical Products</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">WHO-GMP / USFDA grade medicines, APIs, formulations.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-emerald-600">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Ayurvedic Products</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Herbal formulations, Ayurvedic medicines, herbal extracts.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-amber-600">
              <Wheat className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Agricultural Produce</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Fresh vegetables, fruits, spices, grains, pulses.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-purple-600">
              <FlaskConical className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Chemical Products</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Industrial & lab-grade chemicals.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-orange-600">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Food & Processed Items</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Dehydrated products, powders, spice blends.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-stone-600">
              <HardHat className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Construction Materials</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Raw materials, aggregates, industrial goods.</p>
          </div>
        </div>
      </section>

      {/* Section C: Export Process */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Workflow</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">The Export Journey</h2>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-zinc-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {[
              { step: 1, title: "Product Selection & Sourcing", icon: Search },
              { step: 2, title: "Quality Testing & Compliance", icon: CheckCircle, desc: "WHO-GMP / FDA / ISO" },
              { step: 3, title: "Documentation Preparation", icon: FileText, desc: "IEC, GSP, Phytosanitary, etc." },
              { step: 4, title: "Freight Booking & Logistics", icon: Ship },
              { step: 5, title: "Customs Clearance & Shipping", icon: FileCheck },
              { step: 6, title: "Delivery & Follow-up", icon: PackageCheck }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-zinc-100 hover:-translate-y-2 transition-transform relative">
                <div className="w-12 h-12 bg-[#FF6E14] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg shadow-[#FF6E14]/20 border-4 border-white">
                  {item.step}
                </div>
                <div className="text-zinc-400 mb-4 flex justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mb-2 leading-snug">{item.title}</h3>
                {item.desc && <p className="text-xs text-zinc-500">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D & E container */}
      <section className="mt-32 mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Section D: Export Documentation Checklist */}
        <div className="lg:col-span-2 bg-[#F4F6F8] rounded-[3rem] p-10 border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="text-sm font-medium text-[#FF6E14] mb-2 tracking-wide uppercase">/ Checklist</div>
              <h2 className="text-3xl font-bold text-zinc-900 tracking-tight font-heading">Export Documentation</h2>
            </div>
            <button className="flex items-center gap-2 bg-white text-zinc-900 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-zinc-50 transition-colors border border-zinc-200">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "IEC (Import Export Code) Certificate",
              "Commercial Invoice",
              "Packing List",
              "Bill of Lading / Airway Bill",
              "Certificate of Origin",
              "GSP (Generalised System of Preferences)",
              "Phytosanitary / Health Certificate (as applicable)",
              "AD Code Letter from Bank",
              "ARE-1 / ARE-3 Form (for excisable goods)",
              "Shipping Bill",
              "Drawback / RODTEP / IGST Refund Documents"
            ].map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-zinc-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section E: Export Certifications Held */}
        <div className="lg:col-span-1 bg-[#2A2B2E] rounded-[3rem] p-10 text-white shadow-xl flex flex-col">
          <div className="mb-8">
            <div className="text-sm font-medium text-[#FFD700] mb-2 tracking-wide uppercase">/ Quality</div>
            <h2 className="text-3xl font-bold text-white tracking-tight font-heading">Certifications Held</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {[
              { name: "WHO-GMP Certification", icon: Award },
              { name: "USFDA Compliance", icon: Award },
              { name: "EDQM Standards", desc: "European Directorate for Quality of Medicines", icon: Award },
              { name: "ISO 9000", desc: "Management Representative", icon: Award },
              { name: "FDA India", icon: Award }
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="bg-[#FFD700]/20 p-2.5 rounded-xl text-[#FFD700] shrink-0">
                  <cert.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{cert.name}</div>
                  {cert.desc && <div className="text-xs text-white/60 mt-1">{cert.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
