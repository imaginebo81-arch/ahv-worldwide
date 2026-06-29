import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight, 
  ClipboardCheck,
  Award,
  Globe,
  FileCheck,
  ShieldAlert,
  TestTube,
  Microscope,
  CheckCircle,
  GraduationCap,
  Leaf,
  Activity,
  Briefcase,
  Users,
  Search,
  Map,
  CreditCard
} from 'lucide-react';

export default function Consultancy() {
  const { setIsLeadFormOpen } = useOutletContext<{ setIsLeadFormOpen: (open: boolean) => void }>();

  return (
    <>
      <Helmet>
        <title>Pharma & Ayurveda Consultancy | AHV Worldwide</title>
        <meta name="description" content="Expert pharmaceutical and Ayurveda consultancy services by AHV Worldwide, ensuring compliance with WHO-GMP, USFDA, EDQM, and ISO standards." />
      </Helmet>
      {/* Section A: Page Intro */}
      <section className="relative rounded-[20px] overflow-hidden bg-[#2A2B2E] py-24 px-8 lg:px-12 flex flex-col items-center justify-center text-center shadow-xl h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop" alt="Consultancy Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">Expert Pharma & Ayurveda Consultancy</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">Backed by 33 Years of Industry Expertise – WHO-GMP, USFDA, EDQM, ISO</p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Consultancy</span>
          </div>
        </div>
      </section>

      {/* Section C: Why Choose Our Pharma Consultancy */}
      <section className="mt-24">
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-zinc-100 shadow-xl max-w-6xl mx-auto relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6E14]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Why Choose Us</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight font-heading mb-6">33 Years of Direct Industry Leadership</h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                We bring decades of hands-on experience at the highest levels of the pharmaceutical and Ayurvedic sectors, ensuring your operations meet the most stringent global standards.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Extensive Experience", desc: "33 years of direct industry experience including at General Manager level.", icon: Briefcase },
                  { title: "Global & Domestic Reach", desc: "Worked with Multinational and Indian pharmaceutical companies.", icon: Globe },
                  { title: "Academic & Research Excellence", desc: "Research-backed approach: 4 published papers, 1 book published.", icon: GraduationCap }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-[#EAF0F6] w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 shrink-0 mt-1">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#F4F6F8] rounded-3xl p-8 lg:p-10 border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 font-heading">Core Competencies</h3>
              <ul className="space-y-4">
                {[
                  "Hands-on trainer for WHO-GMP, USFDA, EDQM, and ISO certifications.",
                  "Deep expertise in Ayurvedic & Pharmaceutical analysis as per FDA India.",
                  "Comprehensive audit preparation and mock inspections.",
                  "Implementation of Quality Management Systems (QMS)."
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                    <Award className="w-6 h-6 text-[#FF6E14] shrink-0" />
                    <span className="text-sm font-medium text-zinc-700 leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Consultancy Services Offered */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Services</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">Our Consultancy Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "WHO-GMP Audit Prep", desc: "Preparation & comprehensive documentation for WHO-GMP compliance.", icon: ClipboardCheck, color: "text-blue-600" },
            { title: "USFDA Compliance", desc: "Inspection readiness and full compliance strategy for USFDA.", icon: ShieldAlert, color: "text-red-600" },
            { title: "EDQM Certification", desc: "European Directorate for Quality of Medicines certification guidance.", icon: Award, color: "text-amber-500" },
            { title: "ISO 9000 Integration", desc: "End-to-end documentation & implementation for ISO standards.", icon: FileCheck, color: "text-emerald-600" },
            { title: "FDA India Compliance", desc: "Regulatory adherence for Drug & Ayurveda manufacturing.", icon: CheckCircle, color: "text-purple-600" },
            { title: "Analytical Guidance", desc: "Chemical & Instrumental Analysis methodologies and validation.", icon: TestTube, color: "text-indigo-600" },
            { title: "Microbiology Lab Setup", desc: "Facility design and SOP development for microbiology labs.", icon: Microscope, color: "text-teal-600" },
            { title: "Process Validation", desc: "Validation protocols for processes, cleaning, and equipment.", icon: Activity, color: "text-rose-600" },
            { title: "Ayurvedic Manufacturing", desc: "Consultancy for process review, optimization, and scaling.", icon: Leaf, color: "text-green-600" }
          ].map((service, idx) => (
             <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className={`bg-[#EAF0F6] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6E14] group-hover:text-white transition-colors ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3 font-heading">{service.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-grow">{service.desc}</p>
            </div>
          ))}
          
          {/* Special Training Card */}
          <div className="bg-[#2A2B2E] rounded-[2rem] p-8 shadow-sm border border-[#3A3B3E] hover:shadow-md transition-shadow group flex flex-col h-full text-white md:col-span-2 lg:col-span-3">
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#FFD700] shrink-0">
                  <Users className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-2 font-heading">Training Programs for Pharma Teams</h3>
                 <p className="text-white/80 leading-relaxed max-w-3xl">We offer specialized, hands-on training sessions for your workforce to ensure strict adherence to GMP, GLP, and overall quality culture within your organization.</p>
               </div>
               <button onClick={() => setIsLeadFormOpen(true)} className="mt-4 md:mt-0 md:ml-auto whitespace-nowrap bg-[#FF6E14] hover:bg-[#E55B0C] text-white px-6 py-3 rounded-xl font-bold transition-colors">
                 Request Training
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Section D: Process / How It Works */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Methodology</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">How We Work</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { step: "01", title: "Initial Consultation (Free)", desc: "We begin by understanding your specific compliance needs, current operational state, and regulatory goals." },
              { step: "02", title: "Gap Analysis", desc: "A thorough review of your facility and processes to identify any areas of non-compliance with target standards." },
              { step: "03", title: "Action Plan", desc: "Development of a customized roadmap with clear milestones, responsibilities, and timelines for remediation." },
              { step: "04", title: "Implementation Support", desc: "Hands-on assistance with documentation drafting, SOP creation, and personnel training." },
              { step: "05", title: "Audit Readiness Review", desc: "A rigorous mock audit and final check before the actual regulatory inspection." },
              { step: "06", title: "Post-Audit Support", desc: "Assistance with addressing audit observations, formulating CAPAs, and corrective action responses." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-8 bg-white p-6 md:p-8 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-4xl md:text-5xl font-black text-zinc-100 group-hover:text-[#FF6E14]/20 transition-colors font-heading shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 font-heading">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: Payment Terms Note */}
      <section className="mt-24 mb-12">
        <div className="bg-[#FFF4ED] border border-[#FFD5BC] rounded-[2rem] p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
            <CreditCard className="w-8 h-8 text-[#FF6E14]" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-zinc-900 mb-1">Payment Terms</h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Advance payment required depending on the nature and scope of services. <button onClick={() => setIsLeadFormOpen(true)} className="font-bold text-[#FF6E14] hover:underline">Contact us</button> for a detailed proposal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
