import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight, 
  Pill, 
  Microscope,
  FlaskConical,
  Activity,
  Coffee,
  Cpu,
  Search,
  Handshake,
  FileText,
  ShieldCheck,
  Ship,
  PackageCheck,
  CheckCircle,
  Download
} from 'lucide-react';

export default function Import() {
  const { setIsLeadFormOpen } = useOutletContext<{ setIsLeadFormOpen: (open: boolean) => void }>();

  return (
    <>
      <Helmet>
        <title>Import Services | AHV Worldwide</title>
        <meta name="description" content="Discover AHV Worldwide's import services, ensuring seamless sourcing and distribution of high-quality products from global markets to India." />
      </Helmet>
      {/* Section A: Page Intro */}
      <section className="relative rounded-[20px] overflow-hidden bg-[#2A2B2E] py-24 px-8 lg:px-12 flex flex-col items-center justify-center text-center shadow-xl h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop" alt="Import Logistics Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">Import with Expertise – AHV Worldwide</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">Bringing the World's Best Products to India – Trusted Import Partner</p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Import</span>
          </div>
        </div>
      </section>

      {/* Section B: Import Categories */}
      <section className="mt-24">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Categories</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">Import Product Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-blue-600">
              <Pill className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Pharmaceutical Raw Materials</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">High-quality APIs and essential raw materials for pharmaceutical manufacturing.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-indigo-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Laboratory Equipment</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Precision instruments for chemical and microbiology laboratories.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-purple-600">
              <FlaskConical className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Industrial Chemicals</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Specialized chemicals for diverse industrial applications.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-emerald-600">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Medical Devices</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Advanced medical equipment and healthcare devices.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-amber-600">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Specialty Food Ingredients</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Premium food additives and specialized nutritional ingredients.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors text-stone-600">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">Technology & Machinery</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Industrial machinery, components, and technological equipment.</p>
          </div>
        </div>
      </section>

      {/* Section C: Import Process */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Workflow</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">The Import Journey</h2>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-zinc-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {[
              { step: 1, title: "Requirement & Vendor ID", icon: Search },
              { step: 2, title: "Price & Contract Finalization", icon: Handshake },
              { step: 3, title: "Documentation Preparation", icon: FileText },
              { step: 4, title: "Customs Duty & Compliance", icon: ShieldCheck },
              { step: 5, title: "Freight & Insurance", icon: Ship },
              { step: 6, title: "Port Clearance & Delivery", icon: PackageCheck }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-zinc-100 hover:-translate-y-2 transition-transform relative">
                <div className="w-12 h-12 bg-[#FF6E14] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg shadow-[#FF6E14]/20 border-4 border-white">
                  {item.step}
                </div>
                <div className="text-zinc-400 mb-4 flex justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mb-2 leading-snug">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Import Documentation Checklist */}
      <section className="mt-32 mb-12">
        <div className="bg-[#F4F6F8] rounded-[3rem] p-10 lg:p-16 border border-zinc-200 shadow-sm max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <div>
              <div className="text-sm font-medium text-[#FF6E14] mb-2 tracking-wide uppercase">/ Checklist</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight font-heading">Import Documentation</h2>
              <p className="text-zinc-500 mt-2">Essential documents for smooth import clearance.</p>
            </div>
            <button className="flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-zinc-50 transition-colors border border-zinc-200 shrink-0">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {[
              "Bill of Entry",
              "Commercial Invoice from Supplier",
              "Packing List",
              "Bill of Lading / Airway Bill",
              "Certificate of Origin",
              "Import License (if applicable)",
              "FSSAI / Drug License (for regulated goods)",
              "Bank Remittance Documents (SWIFT / LC)",
              "Customs Duty Payment Challan"
            ].map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                <CheckCircle className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-zinc-700 leading-tight">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
