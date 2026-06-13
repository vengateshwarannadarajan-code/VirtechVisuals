import { useState, useEffect } from 'react';
import { Camera, Video, Instagram, ArrowDown, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <TechBanner />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="Virtech Visuals" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-[#a0a0a0] hover:text-[#f0c030] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-block px-5 py-2 bg-[#f0c030] text-[#1a1a1a] text-sm font-semibold rounded-lg hover:bg-[#f5f5f5] transition-all duration-300">
          Book Now
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-sm px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="text-[#a0a0a0] hover:text-[#f0c030] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-block px-5 py-2 bg-[#f0c030] text-[#1a1a1a] text-sm font-semibold rounded-lg">
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
          alt="Fashion Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-display text-6xl md:text-8xl mb-6">Virtech Visuals</h1>
        <p className="text-xl md:text-2xl text-[#f5f5f5] mb-12 tracking-wide">
          Photography • Video • Social Content Support
        </p>
        <button className="px-8 py-4 bg-[#f0c030] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300">
          View Our Work
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 animate-bounce text-[#f0c030]" />
      </motion.div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Camera className="w-12 h-12 text-[#f0c030]" />,
      title: "Photography Services",
      items: [
        "Brand & Commercial Photography",
        "Nail fashion photography",
        "Beauty & salon photography",
        "Product photography",
        "Food & tiffin service photography"
      ]
    },
    {
      icon: <Video className="w-12 h-12 text-[#f0c030]" />,
      title: "Videography Services",
      items: [
        "Instagram Reel videos",
        "Short promotional videos",
        "Process scenes videos",
        "Product showcase videos"
      ]
    },
    {
      icon: <Instagram className="w-12 h-12 text-[#f0c030]" />,
      title: "Social Media Support",
      items: [
        "Visual content planning",
        "Consistent visual style",
        "Posting support (feed & reels)",
        "Profile presentation improvement"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl text-center mb-16"
      >
        What We Do
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="font-display text-2xl mb-4">{service.title}</h3>
            <ul className="space-y-3 text-[#a0a0a0]">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const images = [
    { url: "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?w=600", name: "Fashion Editorial", category: "Fashion" },
    { url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600", name: "Beauty Products", category: "Product" },
    { url: "https://images.unsplash.com/photo-1606143412458-acc5f86de897?w=600", name: "Portrait Session", category: "Fashion" },
    { url: "https://images.unsplash.com/photo-1617650555983-eaf0230972c2?w=600", name: "Food Styling", category: "Food" },
    { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600", name: "Makeup Artistry", category: "Beauty" },
    { url: "https://images.unsplash.com/photo-1612928414075-bc722ade44f1?w=600", name: "Studio Portrait", category: "Fashion" },
    { url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600", name: "Skincare Line", category: "Product" },
    { url: "https://images.unsplash.com/photo-1636665516471-e94690edf10f?w=600", name: "Culinary Art", category: "Food" },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl text-center mb-16"
      >
        Portfolio
      </motion.h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1.5rem">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                <h4 className="font-display text-xl mb-2">{image.name}</h4>
                <p className="text-[#f0c030] text-sm">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}

function WhyChooseUs() {
  const stats = [
    { number: "48h", label: "Turnaround Time" },
    { number: "3-in-1", label: "Photo, Video & Social" },
    { number: "Paris", label: "Based, Global Reach" }
  ];

  const benefits = [
    "Elegant Parisian aesthetic tailored to your brand",
    "Fast 48–72 hour turnaround on all deliverables",
    "Content shot and optimised for Instagram & Reels",
    "Flexible packages for startups and growing brands",
    "Dedicated support from shoot to final delivery"
  ];

  return (
    <section id="why-us" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl text-center mb-16"
      >
        Why Choose Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-display text-6xl text-[#f0c030] mb-2">{stat.number}</div>
              <div className="text-xl text-[#a0a0a0]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#f0c030] mt-2 flex-shrink-0"></div>
              <p className="text-lg text-[#f5f5f5]">{benefit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "€299",
      popular: false,
      features: [
        "1 photoshoot session (2 hours)",
        "15 edited photos",
        "Basic retouching"
      ]
    },
    {
      name: "Growth",
      price: "€599",
      popular: true,
      features: [
        "1 photoshoot + 2 reel videos",
        "30 edited photos + 2 reels",
        "Advanced retouching",
        "Social media captions"
      ]
    },
    {
      name: "Premium",
      price: "€999",
      popular: false,
      features: [
        "2 photoshoots + 5 reel videos",
        "50 edited photos + 5 reels",
        "Premium retouching",
        "1 month posting support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl text-center mb-16"
      >
        Pricing
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative p-8 rounded-lg border ${
              plan.popular
                ? 'border-[#f0c030] bg-[#252525]'
                : 'border-[#333] bg-[#222]'
            } shadow-lg`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f0c030] text-[#1a1a1a] px-4 py-1 rounded-full text-sm">
                Popular
              </div>
            )}
            <h3 className="font-display text-2xl mb-4">{plan.name}</h3>
            <div className="text-5xl font-display text-[#f0c030] mb-8">{plan.price}</div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[#a0a0a0]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f0c030] mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg transition-all duration-300 ${
              plan.popular
                ? 'bg-[#f0c030] text-[#1a1a1a] hover:bg-[#f5f5f5]'
                : 'bg-[#333] text-white hover:bg-[#444]'
            }`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl text-center mb-16"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-[#f5f5f5]">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg focus:border-[#f0c030] outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-[#f5f5f5]">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg focus:border-[#f0c030] outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-[#f5f5f5]">Service Interest</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg focus:border-[#f0c030] outline-none transition-colors"
              required
            >
              <option value="">Select a service</option>
              <option value="photography">Photography</option>
              <option value="videography">Videography</option>
              <option value="social-media">Social Media Support</option>
              <option value="all">All Services</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-[#f5f5f5]">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-lg focus:border-[#f0c030] outline-none transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#f0c030] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#f0c030] mt-1" />
            <div>
              <h4 className="text-lg mb-1">Email</h4>
              <p className="text-[#a0a0a0]">business@virtechvisuals.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#f0c030] mt-1" />
            <div>
              <h4 className="text-lg mb-1">WhatsApp</h4>
              <p className="text-[#a0a0a0]">+33 7 80 84 34 87</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#f0c030] mt-1" />
            <div>
              <h4 className="text-lg mb-1">Location</h4>
              <p className="text-[#a0a0a0]">Based in Paris, France</p>
              <p className="text-[#a0a0a0]">Serving clients globally</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechBanner() {
  return (
    <section className="bg-[#0a0f1e] py-16 px-4 text-center">
      <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Also from Virtech Visuals</p>
      <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Smart Factory & Industrial Tech Solutions</h2>
      <p className="text-[#a0b0cc] mb-8 max-w-xl mx-auto">Beyond visuals — we deliver cutting-edge industrial automation and AI solutions from Paris, France.</p>
      <a href="/tech" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
        Explore Tech Solutions →
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-display text-2xl mb-4">Virtech Visuals</h3>
            <p className="text-[#a0a0a0]">Photography • Video • Social Content Support</p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#a0a0a0]">
              <li><a href="#services" className="hover:text-[#f0c030] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#f0c030] transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-[#f0c030] transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-[#f0c030] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-[#f0c030] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-[#f0c030] transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center hover:bg-[#f0c030] transition-colors">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 text-center text-[#a0a0a0]">
          <p>&copy; 2026 Virtech Visuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}