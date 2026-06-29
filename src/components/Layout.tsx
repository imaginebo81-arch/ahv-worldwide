import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Search,
  ChevronDown,
  CheckCircle2,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  X,
  Menu
} from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'af', name: 'Afrikaans' },
  { code: 'sq', name: 'Albanian' },
  { code: 'am', name: 'Amharic' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hy', name: 'Armenian' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'eu', name: 'Basque' },
  { code: 'be', name: 'Belarusian' },
  { code: 'bn', name: 'Bengali' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'ca', name: 'Catalan' },
  { code: 'ceb', name: 'Cebuano' },
  { code: 'ny', name: 'Chichewa' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'co', name: 'Corsican' },
  { code: 'hr', name: 'Croatian' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'eo', name: 'Esperanto' },
  { code: 'et', name: 'Estonian' },
  { code: 'tl', name: 'Filipino' },
  { code: 'fi', name: 'Finnish' },
  { code: 'fr', name: 'French' },
  { code: 'fy', name: 'Frisian' },
  { code: 'gl', name: 'Galician' },
  { code: 'ka', name: 'Georgian' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'ha', name: 'Hausa' },
  { code: 'haw', name: 'Hawaiian' },
  { code: 'iw', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'hmn', name: 'Hmong' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'is', name: 'Icelandic' },
  { code: 'ig', name: 'Igbo' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ga', name: 'Irish' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'jw', name: 'Javanese' },
  { code: 'kn', name: 'Kannada' },
  { code: 'kk', name: 'Kazakh' },
  { code: 'km', name: 'Khmer' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'ko', name: 'Korean' },
  { code: 'ku', name: 'Kurdish (Kurmanji)' },
  { code: 'ky', name: 'Kyrgyz' },
  { code: 'lo', name: 'Lao' },
  { code: 'la', name: 'Latin' },
  { code: 'lv', name: 'Latvian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lb', name: 'Luxembourgish' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'ms', name: 'Malay' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'mt', name: 'Maltese' },
  { code: 'mi', name: 'Maori' },
  { code: 'mr', name: 'Marathi' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'my', name: 'Myanmar (Burmese)' },
  { code: 'ne', name: 'Nepali' },
  { code: 'no', name: 'Norwegian' },
  { code: 'or', name: 'Odia (Oriya)' },
  { code: 'ps', name: 'Pashto' },
  { code: 'fa', name: 'Persian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sm', name: 'Samoan' },
  { code: 'gd', name: 'Scots Gaelic' },
  { code: 'sr', name: 'Serbian' },
  { code: 'st', name: 'Sesotho' },
  { code: 'sn', name: 'Shona' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'so', name: 'Somali' },
  { code: 'es', name: 'Spanish' },
  { code: 'su', name: 'Sundanese' },
  { code: 'sw', name: 'Swahili' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tg', name: 'Tajik' },
  { code: 'ta', name: 'Tamil' },
  { code: 'tt', name: 'Tatar' },
  { code: 'te', name: 'Telugu' },
  { code: 'th', name: 'Thai' },
  { code: 'tr', name: 'Turkish' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ug', name: 'Uyghur' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'cy', name: 'Welsh' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'yi', name: 'Yiddish' },
  { code: 'yo', name: 'Yoruba' },
  { code: 'zu', name: 'Zulu' }
];

export const LeadFormModal = ({ isOpen, onClose, defaultService = "" }: { isOpen: boolean, onClose: () => void, defaultService?: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2rem] w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold text-zinc-900 mb-2 font-heading">Leave a request</h3>
        <p className="text-sm text-zinc-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>
        
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">Name</label>
            <input type="text" required placeholder="John Doe" className="w-full bg-[#EAF0F6] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#FF6E14] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">Phone or Email</label>
            <input type="text" required placeholder="+91 99214 81220 or john@example.com" className="w-full bg-[#EAF0F6] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#FF6E14] outline-none transition-all" />
          </div>
          <div>
             <label className="block text-xs font-bold text-zinc-700 mb-1">Service of Interest</label>
             <div className="relative">
               <select defaultValue={defaultService} className="w-full bg-[#EAF0F6] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#FF6E14] outline-none transition-all text-zinc-700 appearance-none font-sans font-medium">
                 <option value="" disabled>Select a service</option>
                 <option value="Import & Export Trade">Import & Export Trade</option>
                 <option value="Pharma Consultancy">Pharma Consultancy</option>
                 <option value="Ayurveda Consultancy">Ayurveda Consultancy</option>
                 <option value="Export-Import Documentation">Export-Import Documentation</option>
                 <option value="1-to-1 Educational Tuition">1-to-1 Educational Tuition</option>
                 <option value="English Speaking Coaching">English Speaking Coaching</option>
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                 <ChevronDown className="w-4 h-4" />
               </div>
             </div>
          </div>
          <button type="submit" className="mt-4 bg-[#FF6E14] hover:bg-[#e05f0d] text-white rounded-xl py-3.5 font-bold transition-colors shadow-lg shadow-[#FF6E14]/20">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default function Layout() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  const [selectedLang, setSelectedLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    (window as any).googleTranslateElementInit = () => {
      try {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false },
            'google_translate_element'
          );
        }
      } catch (e) {
        console.error('Failed to initialize Google Translate', e);
      }
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => console.error('Error loading Google Translate script');
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (code: string) => {
    setSelectedLang(code);
    setIsLangOpen(false);
    setLangSearch('');
    
    setTimeout(() => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
      } else {
        document.cookie = `googtrans=/en/${code}; path=/`;
        document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname}`;
        window.location.reload();
      }
    }, 50);
  };

  const filteredLanguages = LANGUAGES.filter(lang => 
    lang.name.toLowerCase().includes(langSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#FF6E14]/30 flex flex-col">
      <Helmet>
        <title>AHV Worldwide | Global Export, Import & Consultancy</title>
        <meta name="description" content="AHV Worldwide is your trusted partner for global trade, export, import, pharma and ayurveda consultancy, and education services." />
        <meta name="keywords" content="Export, Import, Pharma Consultancy, Ayurveda, Education, Global Trade, AHV Worldwide" />
        <meta property="og:title" content="AHV Worldwide | Global Export, Import & Consultancy" />
        <meta property="og:description" content="AHV Worldwide is your trusted partner for global trade, export, import, pharma and ayurveda consultancy, and education services." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative z-[60] px-[20px] pt-6 mb-[5px] bg-white">
        <header className="w-full mx-auto flex items-center justify-between bg-white rounded-full px-6 py-2">
          <Link to="/" className="flex items-center">
          <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1782555950/ChatGPT_Image_Jun_27_2026_03_55_00_PM_xeerba.png" alt="AHV Worldwide" className="h-12 w-auto rounded-full" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-zinc-900 transition-colors">About Us</Link>
          <Link to="/export" className="hover:text-zinc-900 transition-colors">Export</Link>
          <Link to="/import" className="hover:text-zinc-900 transition-colors">Import</Link>
          <Link to="/consultancy" className="hover:text-zinc-900 transition-colors">Consultancy</Link>
          <Link to="/education" className="hover:text-zinc-900 transition-colors">Education</Link>
          <Link to="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4 text-zinc-600">
          <div className="relative notranslate" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 font-medium text-sm hover:text-zinc-900 transition-colors py-2 px-2 sm:px-3 rounded-xl hover:bg-zinc-100"
            >
              <Globe className="w-5 h-5 text-zinc-400" />
              <span className="hidden sm:inline-block">{LANGUAGES.find(l => l.code === selectedLang)?.name || 'Language'}</span>
              <span className="sm:hidden">{selectedLang.toUpperCase()}</span>
              <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-black/10 border border-zinc-100 overflow-hidden z-50">
                <div className="p-2 border-b border-zinc-100 bg-zinc-50/50">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Search language..."
                      value={langSearch}
                      onChange={(e) => setLangSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6E14]/20 focus:border-[#FF6E14] text-zinc-800 placeholder-zinc-400"
                    />
                  </div>
                </div>
                <div className="max-h-[280px] overflow-y-auto p-1 text-black">
                  {filteredLanguages.length > 0 ? (
                    filteredLanguages.map((lang) => (
                      <button
                        type="button"
                        key={lang.code}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLanguageSelect(lang.code);
                        }}
                        className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${
                          selectedLang === lang.code 
                            ? 'bg-[#FF6E14]/10 text-[#FF6E14] font-medium' 
                            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-sm text-zinc-500 text-center">
                      No languages found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <button onClick={() => setIsLeadFormOpen(true)} className="bg-[#FF6E14] hover:bg-[#e05f0d] text-white px-6 py-2.5 rounded-full font-medium transition-colors text-sm shadow-lg shadow-[#FF6E14]/20 hidden sm:block">
            Contact Us
          </button>
          
          <button 
            className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden flex flex-col p-6 z-50">
          <nav className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">About Us</Link>
            <Link to="/export" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">Export</Link>
            <Link to="/import" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">Import</Link>
            <Link to="/consultancy" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">Consultancy</Link>
            <Link to="/education" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">Education</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-600 hover:text-[#FF6E14] font-medium text-lg transition-colors">Contact</Link>
          </nav>
          
          <div className="mt-6 pt-6 border-t border-zinc-100 flex flex-col gap-4">
            <button 
              onClick={() => {
                setIsLeadFormOpen(true);
                setIsMobileMenuOpen(false);
              }} 
              className="bg-[#FF6E14] hover:bg-[#e05f0d] text-white px-6 py-3 rounded-full font-bold transition-colors w-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
      </div>

      <div className="flex-1 w-full px-[20px] pb-6 mx-auto flex flex-col relative z-0 mt-[15px] mb-0">
        <Outlet context={{ setIsLeadFormOpen }} />

        {/* FOOTER */}
        <footer className="mt-24 pt-16 border-t border-zinc-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-4 bg-white">
                <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1782555950/ChatGPT_Image_Jun_27_2026_03_55_00_PM_xeerba.png" alt="AHV Worldwide" className="h-12 w-auto" />
              </div>
              <p className="text-zinc-500 font-medium mb-8">Go global.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-100 text-zinc-500 hover:bg-[#FF6E14] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-100 text-zinc-500 hover:bg-[#FF6E14] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-100 text-zinc-500 hover:bg-[#FF6E14] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-100 text-zinc-500 hover:bg-[#FF6E14] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-zinc-900 mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">About</Link></li>
                <li><Link to="/export" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Export</Link></li>
                <li><Link to="/import" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Import</Link></li>
                <li><Link to="/consultancy" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Consultancy</Link></li>
                <li><Link to="/education" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Education</Link></li>
                <li><Link to="/contact" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 text-lg">Services</h4>
              <ul className="space-y-4">
                <li><Link to="/import" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Import Trade</Link></li>
                <li><Link to="/export" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Export Trade</Link></li>
                <li><Link to="/consultancy" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Pharma Consultancy</Link></li>
                <li><Link to="/consultancy" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Ayurveda Consultancy</Link></li>
                <li><Link to="/education" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">Educational Tuition</Link></li>
                <li><Link to="/education" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">English Coaching</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 text-lg">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+919921481220" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors block">+91 9921481220</a>
                    <a href="https://wa.me/919921481220" className="text-sm text-zinc-400 hover:text-[#FF6E14] transition-colors block">WhatsApp Available</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <a href="mailto:contact@ahvworldwide.com" className="text-zinc-500 hover:text-[#FF6E14] font-medium transition-colors">contact@ahvworldwide.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6E14] shrink-0 mt-0.5" />
                  <span className="text-zinc-500 font-medium">123 Global Trade Avenue,<br/>Business District, 10001</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-zinc-200 gap-4">
            <p className="text-zinc-500 font-medium text-sm">
              © 2026 AHV Worldwide. All Rights Reserved.
            </p>
          </div>
        </footer>
        <div id="google_translate_element"></div>
        <LeadFormModal isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        <a 
          href="https://wa.me/919921481220" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
          <span className="absolute right-full mr-4 bg-white text-zinc-900 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
