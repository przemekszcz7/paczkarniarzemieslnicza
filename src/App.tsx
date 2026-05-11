/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Star, ArrowUpRight, Instagram, ExternalLink } from "lucide-react";

const IMAGES = [
  "https://i.postimg.cc/xdrsNLGq/631645737-122112301305186380-724470854641282120-n.jpg",
  "https://i.postimg.cc/PqG6v1bZ/644588935-122115579105186380-640092977066250074-n.jpg",
  "https://i.postimg.cc/xdrsNLGR/644773972-122115579063186380-8305245828910226358-n.jpg",
  "https://i.postimg.cc/XvM2B9K5/646627707-122115579153186380-1109160455066122031-n.jpg",
  "https://i.postimg.cc/zfmdHTw7/646682117-122115579021186380-282556857385208363-n.jpg",
  "https://i.postimg.cc/W4R9q0mk/655436081-122118255411186380-697977278879997039-n.jpg",
  "https://i.postimg.cc/PqG6v1b8/656420850-122118255363186380-5946503610763803426-n.jpg"
];

const LOGO = "https://i.postimg.cc/CLcT8rdP/605784874-25701245589510479-6802823436041502528-n.jpg";
const MENU_IMAGE = "https://i.postimg.cc/qRTZS2zq/646734255-122115578967186380-4392990460457127434-n.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 font-sans selection:bg-amber-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcfaf7]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <motion.img 
              initial={{ rotate: -10 }}
              whileHover={{ rotate: 0 }}
              src={LOGO} 
              alt="Logo" 
              className="h-10 w-10 rounded-full border border-stone-200 shadow-sm" 
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col -space-y-1">
              <span className="font-serif text-lg leading-none tracking-tight">Pączkarnia</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-amber-700 font-bold">Rzemieślnicza</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#o-nas" className="hover:text-amber-600 transition-colors">Esencja</a>
            <a href="#menu" className="hover:text-amber-600 transition-colors">Wypieki</a>
            <a href="#galeria" className="hover:text-amber-600 transition-colors">Warsztat</a>
            <a href="#kontakt" className="hover:text-amber-600 transition-colors">Adres</a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
             <a 
              href="https://www.facebook.com/profile.php?id=61585591413403" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 md:p-2.5 rounded-full bg-white border border-stone-200 hover:border-amber-600 hover:text-amber-600 transition-all shadow-sm"
              title="Facebook"
            >
              <Facebook size={16} md:size={18} />
            </a>
            <a 
              href="#kontakt" 
              className="flex items-center gap-2 bg-stone-900 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <MapPin size={12} className="sm:hidden" />
              <span className="hidden sm:inline">Znajdź nas</span>
              <span className="sm:hidden">Dojazd</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Floating Background Ornament */}
        <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none overflow-hidden">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        {/* Editorial Hero */}
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 px-6 overflow-hidden border-b border-stone-200 bg-[#fcfaf7]">
          <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 z-10 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="h-px w-12 md:w-16 bg-amber-600" />
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-amber-700">
                    Sztuka Tradycyjnego Wypieku
                  </span>
                </div>
                
                <h1 className="text-[14vw] sm:text-[10vw] lg:text-[8vw] font-serif leading-[0.85] text-stone-900 tracking-tighter mb-10 md:mb-12 relative">
                  Czysta <br />
                  <span className="italic text-amber-600">Tradycja.</span>
                  <div className="absolute -top-12 -left-8 text-stone-200 font-mono text-[6rem] md:text-[10rem] select-none -z-10 opacity-20 hidden sm:block">01</div>
                </h1>

                <div className="flex flex-col sm:flex-row gap-8 md:gap-12 items-start sm:items-center">
                  <p className="text-stone-500 font-medium leading-relaxed max-w-sm text-base md:text-lg border-l-2 border-amber-100 pl-6">
                    W naszej pracowni czas płynie inaczej. Każde ciasto zawijamy ręcznie, dbając o to, by każdy kęs był powrotem do korzeni.
                  </p>
                  <motion.a 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#menu"
                    className="flex-shrink-0 group relative inline-flex items-center justify-center w-28 h-28 md:w-36 md:h-36 border-2 border-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-all duration-700"
                  >
                    <div className="absolute inset-2 border border-stone-300 rounded-full group-hover:border-stone-700 animate-[spin_10s_linear_infinite]" />
                    <span className="font-mono text-[9px] md:text-[11px] font-bold uppercase tracking-widest flex flex-col items-center gap-1">
                      Sprawdź
                      <span className="text-xl md:text-2xl text-amber-600 font-serif leading-none">Menu</span>
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Images Layout */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative isolate max-w-lg mx-auto lg:max-w-none">
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] relative z-20 group"
                >
                  <img src={IMAGES[0]} alt="Pączki" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-[#fcfaf7] z-30 hidden sm:block rotate-12 group hover:rotate-0 transition-transform duration-700"
                >
                  <img src={IMAGES[2]} alt="Pączki detale" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>

                <div className="absolute -bottom-8 -left-8 md:-bottom-16 md:-left-16 w-32 h-32 md:w-64 md:h-64 border-2 border-amber-600/20 rounded-full -z-10 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* The Essence - Wide Typography */}
        <section id="o-nas" className="py-24 md:py-40 px-6 relative overflow-hidden bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-7">
                <div className="space-y-8 md:space-y-12">
                  <span className="font-mono text-[10px] uppercase font-extrabold tracking-[0.5em] text-amber-700">Manufaktura Smaku</span>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-stone-900 tracking-tight">
                    Świeżo zawijane z nadzieniem pączki <span className="italic text-amber-600">metodą tradycyjną.</span> Wierzymy, że w prostocie drzemie największa siła.
                  </p>
                  <div className="flex gap-10 md:gap-16 pt-4 md:pt-8">
                    <div className="space-y-2">
                      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-stone-400 block">Metoda</span>
                      <p className="font-serif text-lg md:text-xl italic">Rzemieślnicza</p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-stone-400 block">Jakość</span>
                      <p className="font-serif text-lg md:text-xl italic">Premium</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl lg:skew-y-3 hover:skew-y-0 transition-transform duration-1000 max-w-md mx-auto lg:max-w-none">
                  <img src={IMAGES[4]} alt="Rzemieślnicze pączki" className="w-full h-auto" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-stone-900/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Experience */}
        <section id="menu" className="bg-[#1c1917] text-white py-24 md:py-40 px-6 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-600/5 rounded-full blur-[80px] md:blur-[120px] -z-0" />
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
              <div className="lg:w-5/12">
                <div className="lg:sticky lg:top-32 space-y-12 lg:space-y-16">
                  <div className="space-y-6 md:space-y-8">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.5em] text-amber-500 text-center lg:text-left block">Karta Wyrobów</span>
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[0.8] tracking-tighter text-center lg:text-left">
                      Nasze <br className="hidden md:block" />
                      <span className="text-amber-500 italic block mt-2 lg:mt-4">Specjały.</span>
                    </h2>
                  </div>
                  <p className="text-stone-400 max-w-sm text-lg md:text-xl leading-relaxed italic font-serif text-center lg:text-left mx-auto lg:mx-0">
                    "Każdego ranka wybieramy najlepsze owoce i konfitury, by zamknąć w puszystym cieście kwintesencję smaku."
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-10 md:pt-16">
                    <div className="text-center sm:text-left">
                      <span className="font-mono text-[9px] md:text-[10px] uppercase font-bold text-amber-500 block mb-2 md:mb-3 tracking-widest">Technika</span>
                      <p className="text-stone-300 font-medium text-sm md:text-base">Wolne garowanie, ręczne zawijanie</p>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="font-mono text-[9px] md:text-[10px] uppercase font-bold text-amber-500 block mb-2 md:mb-3 tracking-widest">Autentyczność</span>
                      <p className="text-stone-300 font-medium text-sm md:text-base">Brak sztucznych aromatów</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-7/12 w-full">
                <motion.div 
                  initial={{ opacity: 0, rotate: 2 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="relative group max-w-xl mx-auto lg:max-w-none"
                >
                  <div className="absolute -inset-4 md:-inset-6 border border-white/10 rounded-[2rem] md:rounded-[4rem] group-hover:bg-white/5 transition-all duration-700" />
                  <img 
                    src={MENU_IMAGE} 
                    alt="Menu Pączkarni" 
                    className="w-full h-auto rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] md:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] relative z-10 filter sepia-[0.3] contrast-[1.1] transition-all duration-1000" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20">
                    <div className="bg-amber-600 text-white w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                      <Star size={24} md:size={32} fill="white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Craft Gallery (Masonry style on mobile) */}
        <section id="galeria" className="py-24 md:py-40 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8 md:gap-10">
              <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-amber-700 mb-4 md:mb-6 block">Okruchy Codzienności</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[0.9]">
                  Zatrzymane w <br className="hidden md:block" /> <span className="italic text-amber-600">kadrze.</span>
                </h2>
              </div>
              <a 
                href="https://www.facebook.com/profile.php?id=61585591413403" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center md:items-start lg:items-end gap-2 w-full md:w-auto"
              >
                <span className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-widest group-hover:text-amber-600 transition-colors">Nasza Społeczność</span>
                <div className="flex items-center gap-2 md:gap-3 text-stone-400 group-hover:text-stone-900 transition-all">
                  <span className="text-xs md:text-sm font-medium">facebook.com/paczkarnia.lodz</span>
                  <ArrowUpRight size={16} md:size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {IMAGES.slice(1).map((src, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`relative overflow-hidden group rounded-xl md:rounded-2xl ${idx % 3 === 0 ? 'lg:col-span-2 lg:aspect-video' : 'aspect-square'}`}
                >
                  <img 
                    src={src} 
                    alt={`Galeria ${idx}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 lg:group-hover:bg-stone-900/40 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 lg:group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase font-bold tracking-[0.3em] text-center px-4">
                      Widok z Warsztatu
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Opinion */}
        <section className="py-24 md:py-48 px-6 bg-white relative overflow-hidden">
           <div className="max-w-screen-xl mx-auto text-center space-y-12 md:space-y-16 relative z-10">
            <div className="flex justify-center gap-1.5 md:gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} md:size={24} />)}
            </div>
            <motion.blockquote 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5vw] font-serif leading-[1.1] italic text-stone-900 tracking-tight max-w-5xl mx-auto px-4"
            >
              "Najlepsze pączki <br className="sm:hidden" /> w miescie 😁"
            </motion.blockquote>
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="h-12 md:h-16 w-px bg-amber-600" />
              <div className="space-y-4">
                <span className="font-mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] text-stone-400 block pb-2">Polecenia z Facebooka</span>
                <a 
                  href="https://www.facebook.com/profile.php?id=61585591413403&sk=reviews"
                  target="_blank"
                  className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-lg md:shadow-xl"
                >
                  Czytaj Recenzje <ArrowUpRight size={16} md:size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Large Background Quote Symbol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-serif italic text-stone-50 select-none -z-0 opacity-50 hidden sm:block">
            “
          </div>
        </section>

        {/* Contact Editorial */}
        <section id="kontakt" className="py-24 md:py-40 px-6 bg-[#fcfaf7]">
          <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-4 space-y-12 md:space-y-16">
              <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-amber-700">Zapraszamy</span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-none tracking-tighter">Odwiedź <br className="hidden md:block" /> <span className="italic text-amber-600">Łódź.</span></h2>
              </div>
              
              <div className="space-y-8 md:space-y-12">
                <div className="group border-b border-stone-100 pb-6 md:pb-8 hover:border-amber-600 transition-all">
                  <span className="font-mono text-[9px] uppercase font-bold text-stone-400 block mb-3 md:mb-4 uppercase tracking-widest">Lokalizacja</span>
                  <div className="flex items-start md:items-center gap-4 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <MapPin size={24} className="text-amber-600 flex-shrink-0" />
                    <address className="not-italic text-base md:text-lg font-serif text-stone-900">
                      ul. św. Teresy od Dzieciątka Jezus 100 <br />
                      <span className="font-mono text-xs md:text-sm tracking-tighter">91-341 Łódź</span>
                    </address>
                  </div>
                </div>

                <div className="group border-b border-stone-100 pb-6 md:pb-8 hover:border-amber-600 transition-all">
                  <span className="font-mono text-[9px] uppercase font-bold text-stone-400 block mb-3 md:mb-4 uppercase tracking-widest">Szybki Kontakt</span>
                  <div className="flex items-center gap-4 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <Phone size={24} className="text-amber-600 flex-shrink-0" />
                    <a href="tel:537007908" className="text-xl md:text-2xl font-serif text-stone-900 hover:text-amber-600 transition-colors">537 007 908</a>
                  </div>
                </div>

                <div className="group">
                   <span className="font-mono text-[9px] uppercase font-bold text-stone-400 block mb-3 md:mb-4 uppercase tracking-widest">Zapytania</span>
                   <div className="flex items-center gap-4 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <Mail size={24} className="text-amber-600 flex-shrink-0" />
                    <a href="mailto:rzemieslniczepaczkimobilne@op.pl" className="text-sm font-mono break-all text-stone-900 hover:text-amber-600 transition-colors">rzemieslniczepaczkimobilne@op.pl</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 relative w-full">
              <div className="aspect-[12/10] sm:aspect-video bg-stone-100 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[16px] border-white shadow-2xl relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.1881856671644!2d19.42004017708781!3d51.802721989085704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bca832aa5fd15%3A0x97999fbb7796b693!2zxZt3LiBUZXJlc3kgb2QgRHppZWNpxIV0a2EgSmV6dXMgMTAwLCA5MS0zNDEgxYHDs2TFug!5e0!3m2!1spl!2spl!4v1778488166161!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                
                {/* Visual Accent */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-stone-900 text-white px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl flex flex-col gap-0.5 md:gap-1 z-20 pointer-events-none shadow-xl">
                  <span className="font-mono text-[7px] md:text-[9px] uppercase tracking-widest opacity-60">Status</span>
                  <span className="flex items-center gap-2 font-bold text-[9px] md:text-xs uppercase tracking-tight">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                    Zapraszamy na Świeże Wypieki
                  </span>
                </div>
              </div>
              
              {/* Layout Art */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-64 md:h-64 border-2 border-dashed border-stone-200 rounded-[2rem] md:rounded-[4rem] -z-10" />
            </div>
          </div>
        </section>
      </main>

      {/* Modern Brutalist Footer */}
      <footer className="bg-stone-900 text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="space-y-10 max-w-sm">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO} 
                alt="Logo Footer" 
                className="h-16 w-16 rounded-full border border-white/10 shadow-lg" 
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-3xl tracking-tight leading-none italic">Pączkarnia <br /> Rzemieślnicza</span>
            </div>
            <p className="text-stone-400 leading-relaxed font-medium">
              Metoda rzemieślnicza to nasz wybór świadomy. Chronimy smak tradycji w sercu nowoczesnej Łodzi.
            </p>
            <div className="flex gap-4">
               <a 
                href="https://www.facebook.com/profile.php?id=61585591413403" 
                target="_blank" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all shadow-sm"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-500">Nawigacja</span>
              <div className="flex flex-col gap-3 font-medium text-stone-400">
                <a href="#o-nas" className="hover:text-white transition-colors">O Nas</a>
                <a href="#menu" className="hover:text-white transition-colors">Wypieki</a>
                <a href="#galeria" className="hover:text-white transition-colors">Warsztat</a>
                <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto mt-32 pt-12 border-t border-white/5 overflow-hidden">
          <motion.div 
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap text-[10vw] font-serif italic text-white/5 tracking-tighter pointer-events-none"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i}>Pączkarnia Rzemieślnicza Łódź • Świeżo Zawijane •</span>
            ))}
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
