import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight, 
  Target, 
  Eye, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const { setIsLeadFormOpen } = useOutletContext<{ setIsLeadFormOpen: (open: boolean) => void }>();

  return (
    <>
      <Helmet>
        <title>About Us | AHV Worldwide</title>
        <meta name="description" content="Learn about AHV Worldwide, built on decades of industrial and academic experience, driving excellence in global trade, pharma consultancy, and education." />
      </Helmet>
      {/* Section A: Page Banner */}
      <section className="relative rounded-[20px] overflow-hidden bg-[#2A2B2E] py-24 px-8 lg:px-12 flex flex-col items-center justify-center text-center shadow-xl h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">About AHV Worldwide</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Section B: Company Overview */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Company Overview</div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-zinc-900 tracking-tight font-heading">AHV Worldwide – Built on Expertise, Driven by Trust</h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          AHV Worldwide is a globally-oriented import-export firm and multi-domain consultancy, founded by a professional with decades of combined Industrial and Academic experience. We are uniquely positioned with a dual importer-exporter identity, bringing specialized pharmaceutical expertise and an unwavering commitment to quality. Our profound understanding of international trade, coupled with our rigorous adherence to global standards, empowers us to seamlessly bridge markets and deliver excellence in every transaction.
        </p>
      </section>

      {/* Section C: Vision & Mission */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-zinc-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#FF6E14]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FF6E14]">
            <Eye className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-heading">Our Vision</h3>
          <p className="text-zinc-600 leading-relaxed">
            To become a globally recognized partner in international trade, pharmaceutical expertise, and education – enabling businesses and individuals to Go global with confidence.
          </p>
        </div>
        
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-zinc-100 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#FF6E14]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FF6E14]">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-heading">Our Mission</h3>
          <p className="text-zinc-600 leading-relaxed">
            To deliver world-class import-export services, specialized consultancy in Pharma & Ayurveda, and quality education that empowers our clients to achieve excellence across borders.
          </p>
        </div>
      </section>

      {/* Section D: Founder's Profile & Credentials */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Leadership</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">Founder's Profile & Credentials</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Qualifications & Domain */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#2A2B2E] text-white rounded-[2rem] p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-[#FFD700]" />
                <h3 className="text-xl font-bold font-heading">Academic Qualifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span>M.Sc. (Science)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span>DBM (Diploma in Business Management)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span>MBA – Production</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span>AIC (Associate of Insurance Centre)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span>DCM (Diploma in Commercial Management)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span>Ph.D. in Management – Admitted at 56 years of age (Research ongoing; 8 papers written, 4 published; 1 book published)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-[#FF6E14]" />
                <h3 className="text-xl font-bold font-heading">Domain Expertise</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6E14] mt-2 shrink-0"></div>
                  <span><strong>Pharmaceuticals:</strong> Chemical & Instrumental Analysis, Microbiology Analysis (as per FDA India standards)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6E14] mt-2 shrink-0"></div>
                  <span><strong>Ayurveda:</strong> Chemical & Instrumental Analysis, Microbiology Analysis, Production (as per FDA India)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6E14] mt-2 shrink-0"></div>
                  <span><strong>Management Representative:</strong> ISO 9000</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#EAF0F6] p-4 rounded-2xl text-blue-600 shrink-0">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-zinc-900">Industrial Experience</h3>
                  <p className="text-zinc-500 font-medium">33+ Years of Excellence</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div className="bg-[#F4F6F8] p-6 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 mb-2">Leadership</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">33 years in Pharmaceutical industries, ascending to General Manager positions.</p>
                </div>
                <div className="bg-[#F4F6F8] p-6 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 mb-2">Global Exposure</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">Extensive experience collaborating with Multinationals, Indian corporations, and Ayurvedic enterprises.</p>
                </div>
                <div className="bg-[#F4F6F8] p-6 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 mb-2">Quality & Compliance</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">Expert trainer & implementer for WHO-GMP, USFDA, EDQM, and ISO certifications.</p>
                </div>
                <div className="bg-[#F4F6F8] p-6 rounded-2xl">
                  <h4 className="font-bold text-zinc-900 mb-2">Audit & Testing</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">Authority in Audit Documentation, Validation & Testing for Pharma & Ayurveda.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 flex flex-col">
               <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#EAF0F6] p-4 rounded-2xl text-emerald-600 shrink-0">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-zinc-900">Educational Experience</h3>
                  <p className="text-zinc-500 font-medium">25+ Years of Mentorship</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
                  <h4 className="font-bold text-zinc-900 mb-2">Higher Education</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">20+ years teaching up to MBA level at Management Colleges (Faculty, Paper Setter, Moderator).</p>
                </div>
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
                  <h4 className="font-bold text-zinc-900 mb-2">School Education</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">25+ years teaching Science and Math up to Class 12 across CBSE, IB, ICSE, and SSC boards.</p>
                </div>
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
                  <h4 className="font-bold text-zinc-900 mb-2">Personalised Tuition</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">Specialised 1-to-1 online tuition for Classes 8, 9, 10 with assured improvement in marks and grades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section E: Our Core Values */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-[#FF6E14] mb-4 tracking-wide uppercase">/ Principles</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Integrity", desc: "Honest and transparent in every trade and consultation." },
            { title: "Excellence", desc: "WHO/ISO standard processes applied to every engagement." },
            { title: "Commitment", desc: "Assured results for clients and students alike." },
            { title: "Global Vision", desc: "Building bridges between Indian capabilities and global markets." },
            { title: "Innovation", desc: "Combining academic depth with industrial pragmatism." }
          ].map((value, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-zinc-100 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-[#FF6E14]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF6E14] font-black text-xl">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">{value.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section F: Company Timeline / Milestones */}
      <section className="mt-32 mb-12">
        <div className="bg-[#EAF0F6] rounded-[3rem] p-12 lg:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-heading mb-4">Milestones of Excellence</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">A legacy built on continuous learning and global expansion.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="text-4xl font-black text-[#FF6E14] mb-2 font-heading">33+</div>
              <div className="text-sm font-bold text-zinc-900">Years Industry Experience</div>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="text-4xl font-black text-[#FF6E14] mb-2 font-heading">25+</div>
              <div className="text-sm font-bold text-zinc-900">Years in Education</div>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="text-4xl font-black text-[#FF6E14] mb-2 font-heading">4+</div>
              <div className="text-sm font-bold text-zinc-900">Research Publications</div>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="text-4xl font-black text-[#FF6E14] mb-2 font-heading">500+</div>
              <div className="text-sm font-bold text-zinc-900">Clients & Students Reached</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
