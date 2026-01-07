
import React, { useEffect, useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Globe, 
  Users, 
  Award, 
  CheckCircle2, 
  Factory 
} from 'lucide-react';

// --- Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <a href="#hero" className="flex flex-col group">
            <span className={`text-xl font-serif tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
              Shree Anika
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium -mt-1">Global LLP</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest text-brand-dark hover:text-brand-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-brand-mutedBlue text-white text-xs uppercase tracking-widest hover:bg-brand-dark transition-all duration-300"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6 md:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-brand-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-brand-mutedBlue text-white text-xs uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-16 md:mb-24 space-y-4">
    <div className={`w-12 h-px ${light ? 'bg-white/30' : 'bg-brand-gold'} mb-6`}></div>
    <h2 className={`text-3xl md:text-5xl font-serif ${light ? 'text-white' : 'text-brand-dark'} leading-tight`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-sm tracking-[0.2em] uppercase ${light ? 'text-white/60' : 'text-brand-mutedBlue'} font-medium`}>
        {subtitle}
      </p>
    )}
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-white">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105"
            alt="Artisanal Indian Spices"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite via-brand-offwhite/85 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2">
          <div className="slide-up">
            <span className="inline-block text-xs uppercase tracking-[0.4em] text-brand-gold font-semibold mb-6">
              Est. 2024 • Excellence in Sourcing
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1] mb-8">
              Celebrating India’s Legacy of Spices and Pure Edible Oils
            </h1>
            <p className="text-lg md:text-xl text-brand-mutedBlue/80 font-light leading-relaxed mb-10 max-w-lg">
              Experience the true essence of Indian flavors with our premium collection of artisanal spice blends and farm-fresh edible oils.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="group flex items-center justify-center px-10 py-5 bg-brand-dark text-white text-xs uppercase tracking-widest hover:bg-brand-mutedBlue transition-all duration-500">
                Explore Our Collection
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <a href="#about" className="flex items-center justify-center px-10 py-5 border border-brand-dark/20 text-brand-dark text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-500">
                Our Heritage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Story / About */}
      <section id="about" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="relative">
                <img 
                  src="https://cdn.pixabay.com/photo/2013/01/05/11/50/spices-73770_960_720.jpg$0" 
                  className="w-full h-[600px] object-cover shadow-2xl"
                  alt="Authentic Indian Spice Sourcing"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-offwhite hidden lg:block p-8 border border-brand-gold/20">
                  <p className="text-brand-gold font-serif text-4xl italic mb-2">Heritage</p>
                  <p className="text-xs uppercase tracking-widest text-brand-mutedBlue leading-loose">
                    Rooted in the rich soil of Kerala's spice hills.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 md:pl-16 order-1 md:order-2">
              <SectionHeader title="Our Story" subtitle="Heritage & Sourcing" />
              <div className="space-y-8 text-brand-mutedBlue/90 leading-relaxed font-light text-lg">
                <p>
                  At Shree Anika Global LLP, we are more than just a brand—we are the custodians of India’s rich culinary heritage. Founded with a deep-seated respect for tradition and a commitment to modern quality standards, we bring you the finest spices and edible oils from the heart of India.
                </p>
                <p>
                  Our journey begins at the source. We take immense pride in our farm-level sourcing model, particularly our spice vertical rooted in the lush, aromatic spice hills of Kerala. By working closely with local farmers, we ensure that every spice pod and seed is harvested at its peak, preserving the potent essential oils and authentic flavors that have made Indian spices world-renowned for centuries.
                </p>
                <p>
                  Similarly, our edible oils are a product of meticulous selection. From the mustard fields of North India to premium rice bran sources, we focus on cold-pressed and minimally processed extraction methods that maintain nutritional integrity and natural taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy & Values */}
      <section id="philosophy" className="py-24 md:py-40 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <SectionHeader title="Our Philosophy" subtitle="Integrity at Core" />
            <p className="text-xl md:text-2xl font-serif text-brand-dark italic leading-relaxed border-l-4 border-brand-gold pl-8">
              "We believe that food is a bridge between nature and the home. Our philosophy is built on the pillars of purity, traceability, and sustainability."
            </p>
            <p className="mt-10 text-brand-mutedBlue font-light leading-relaxed">
              We don't just supply products; we provide confidence. Every drop of oil and every pinch of spice that carries the Shree Anika name is a promise of uncompromising quality. We strive to empower farmers through fair trade practices while delivering global-standard products to our B2B partners, distributors, and bulk buyers across the globe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Authenticity', desc: 'Staying true to traditional flavors and sourcing origins.', icon: <Globe size={24} /> },
              { title: 'Purity', desc: 'Zero adulteration, 100% natural ingredients.', icon: <ShieldCheck size={24} /> },
              { title: 'Integrity', desc: 'Honest partnerships and transparent business practices.', icon: <CheckCircle2 size={24} /> },
              { title: 'Consistency', desc: 'Reliable quality in every batch, every time.', icon: <Award size={24} /> },
              { title: 'Partnership', desc: 'Building long-term relationships based on mutual growth.', icon: <Users size={24} /> },
              { title: 'Excellence', desc: 'Striving for global standards in every operation.', icon: <Factory size={24} /> },
            ].map((value, idx) => (
              <div key={idx} className="group p-10 bg-white border border-transparent hover:border-brand-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h4 className="text-lg font-serif mb-4 text-brand-dark">{value.title}</h4>
                <p className="text-sm text-brand-mutedBlue font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Products Overview */}
      <section id="products" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="The Collection" subtitle="Spices & Edible Oils" />
          
          <div className="grid md:grid-cols-2 gap-20">
            {/* Spices */}
            <div className="space-y-12">
              <div className="relative h-80 overflow-hidden mb-10 group">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Artisanal Spices" />
                <div className="absolute inset-0 bg-brand-dark/10"></div>
                <div className="absolute bottom-6 left-6 text-white uppercase tracking-[0.3em] text-xs font-semibold">Artisanal Blends</div>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-6 text-brand-dark">Artisanal Spice Blends</h3>
                <p className="text-brand-mutedBlue/80 font-light leading-relaxed mb-8">
                  Our spice blends are crafted using age-old recipes passed down through generations. Unlike mass-produced powders, our blends are slowly ground to preserve the natural oils and aroma.
                </p>
                <div className="grid grid-cols-2 gap-y-4">
                  {[
                    'Special Garam Masala', 'Mutton Masala', 'Chicken Masala', 'Fish Masala', 
                    'Egg Masala', 'Turmeric Powder', 'Chilli Powder', 'Coriander Powder'
                  ].map((spice) => (
                    <div key={spice} className="flex items-center text-sm text-brand-mutedBlue">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></div>
                      {spice}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Oils */}
            <div className="space-y-12">
              <div className="relative h-80 overflow-hidden mb-10 group">
                <img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1918&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Pure Extraction Process" />
                <div className="absolute inset-0 bg-brand-dark/10"></div>
                <div className="absolute bottom-6 left-6 text-white uppercase tracking-[0.3em] text-xs font-semibold">Pure Edible Oils</div>
              </div>
              <div className="space-y-10">
                <div>
                  <h4 className="text-xl font-serif mb-4 text-brand-dark">Mustard Oil (Kacchi Ghani)</h4>
                  <p className="text-brand-mutedBlue/80 font-light leading-relaxed text-sm">
                    Naturally pungent and rich in Omega-3, our mustard oil is extracted using the traditional cold-press method, making it ideal for authentic Indian cooking and health preservation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-4 text-brand-dark">Rice Bran Oil</h4>
                  <p className="text-brand-mutedBlue/80 font-light leading-relaxed text-sm">
                    The health-conscious choice. High in Oryzanol and with a high smoke point, our rice bran oil is physically refined to ensure heart health and versatile culinary usage.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-brand-offwhite grid grid-cols-2 gap-4">
                  {['Retail', 'Bulk', 'Private Label', 'HoReCa'].map(type => (
                    <div key={type} className="px-4 py-2 bg-brand-offwhite text-center text-[10px] uppercase tracking-widest text-brand-mutedBlue border border-brand-gold/10 font-bold">
                      {type}
                    </div>
                  ))}
                  <div className="col-span-2 px-4 py-2 bg-brand-mutedBlue text-white text-center text-[10px] uppercase tracking-widest font-bold">
                    Export Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality Assurance */}
      <section id="quality" className="py-24 md:py-40 bg-brand-mutedBlue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader title="Quality Assurance" subtitle="Precision & Trust" light />
              <div className="space-y-8 text-white/80 font-light leading-relaxed text-lg">
                <p>
                  Quality is not a department at Shree Anika; it is a discipline. Our manufacturing and packing units follow stringent hygiene protocols. From multi-stage cleaning of raw ingredients to vacuum-sealed packaging, we ensure that the product reaches the consumer exactly as nature intended—pure and fresh.
                </p>
                <p>
                  We are committed to full traceability, ensuring that every batch can be tracked back to its origin, giving our global partners the peace of mind they deserve.
                </p>
                <div className="pt-10 flex gap-12">
                  <div className="text-center">
                    <p className="text-brand-gold font-serif text-4xl">100%</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Natural</p>
                  </div>
                  <div className="text-center">
                    <p className="text-brand-gold font-serif text-4xl">ISO</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Compliant</p>
                  </div>
                  <div className="text-center">
                    <p className="text-brand-gold font-serif text-4xl">Trace</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Verified</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-[500px] object-cover rounded-sm opacity-80"
                alt="Modern Food Lab Standards"
              />
              <div className="absolute inset-0 border-[20px] border-white/5 -m-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section id="why-choose-us" className="py-24 md:py-40 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Why Partners Choose Us" subtitle="B2B Excellence" />
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Manufacturer & Trader",
                desc: "Being both under one roof allows us to control the entire supply chain, from sourcing to shipping, ensuring the highest standards at every step."
              },
              {
                title: "Pricing Strategy",
                desc: "We offer competitive & transparent pricing structures. Our direct-from-farm model eliminates middlemen, passing the value directly to our partners."
              },
              {
                title: "Reliable Supply",
                desc: "Consistent quality & reliable supply are the bedrocks of our service. We understand the demands of global supply chains and HoReCa timelines."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-b border-brand-gold/20 pb-12">
                <span className="text-brand-gold font-serif text-2xl mb-6">0{i+1}.</span>
                <h4 className="text-xl font-serif text-brand-dark mb-6">{item.title}</h4>
                <p className="text-brand-mutedBlue/80 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <a href="#contact" className="inline-flex items-center px-10 py-5 bg-brand-dark text-white text-xs uppercase tracking-widest hover:bg-brand-mutedBlue transition-all duration-300">
                Become a Partner
                <ArrowRight className="ml-3" size={16} />
             </a>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <SectionHeader title="Let's Connect" subtitle="Global Inquiries" />
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="p-4 bg-brand-offwhite rounded-full mr-6 text-brand-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm uppercase tracking-widest text-brand-dark font-semibold mb-2">Our Presence</h5>
                    <p className="text-brand-mutedBlue font-light leading-relaxed">
                      Raipur, Chhattisgarh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-4 bg-brand-offwhite rounded-full mr-6 text-brand-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm uppercase tracking-widest text-brand-dark font-semibold mb-2">Email Correspondence</h5>
                    <p className="text-brand-mutedBlue font-light leading-relaxed">
                      info@shreeanika.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-4 bg-brand-offwhite rounded-full mr-6 text-brand-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm uppercase tracking-widest text-brand-dark font-semibold mb-2">Direct Line</h5>
                    <p className="text-brand-mutedBlue font-light leading-relaxed">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-offwhite p-10 md:p-16 border border-brand-gold/10">
              <h4 className="text-2xl font-serif text-brand-dark mb-10">Partnership Inquiry</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-mutedBlue font-bold mb-3">Full Name</label>
                  <input type="text" className="w-full bg-white border border-brand-mutedBlue/10 px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-mutedBlue font-bold mb-3">Professional Email</label>
                  <input type="email" className="w-full bg-white border border-brand-mutedBlue/10 px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-brand-mutedBlue font-bold mb-3">How can we assist?</label>
                  <textarea rows={4} className="w-full bg-white border border-brand-mutedBlue/10 px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors text-sm resize-none" placeholder="Your inquiry details..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-dark text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-mutedBlue transition-all duration-500">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-20 bg-brand-dark text-white/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-16 mb-16">
            <div className="mb-10 md:mb-0 text-center md:text-left">
              <a href="#hero" className="inline-block group">
                <h3 className="text-2xl font-serif tracking-widest uppercase mb-1">Shree Anika</h3>
                <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold mb-4">Global LLP</p>
              </a>
              <p className="text-xs text-white/40 tracking-widest uppercase">Purity in every grain. Integrity in every drop.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30">
            <p>© {new Date().getFullYear()} Shree Anika Global LLP. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Designed for Global Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
