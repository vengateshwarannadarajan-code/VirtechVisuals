import { useState } from 'react';
import { Link } from 'react-router';
import { Camera, Video, Instagram, ArrowDown, Mail, Phone, MapPin, Globe, Clock, Sparkles, TrendingUp, CheckCircle2, MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'motion/react';

export default function CreativeStudio() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <ShootPackages />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <button className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300">
          View Our Work
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 animate-bounce text-[#d4af37]" />
      </motion.div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Camera className="w-12 h-12 text-[#d4af37]" />,
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
      icon: <Video className="w-12 h-12 text-[#d4af37]" />,
      title: "Videography Services",
      items: [
        "Instagram Reel videos",
        "Short promotional videos",
        "Process scenes videos",
        "Product showcase videos"
      ]
    },
    {
      icon: <Instagram className="w-12 h-12 text-[#d4af37]" />,
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
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
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
            <ul className="space-y-3 text-[#c0c0c0]">
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
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
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
                <p className="text-[#d4af37] text-sm">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}

function WhyChooseUs() {
  const { t } = useI18n();
  const stats = [
    { number: 'Paris', label: 'Based Excellence' },
    { number: '48-72h', label: 'Turnaround Time' },
    { number: '100%', label: 'Instagram-Ready' },
  ];

  const benefits = [
    {
      icon: <Globe className="w-5 h-5 text-[#d4af37]" />,
      titleKey: 'cs.why1.title',
      descKey: 'cs.why1.desc',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#d4af37]" />,
      titleKey: 'cs.why2.title',
      descKey: 'cs.why2.desc',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#d4af37]" />,
      titleKey: 'cs.why3.title',
      descKey: 'cs.why3.desc',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#d4af37]" />,
      titleKey: 'cs.why4.title',
      descKey: 'cs.why4.desc',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('cs.why')}</span>
          <h2 className="font-display text-5xl md:text-6xl">The Virtech Visuals Difference</h2>
        </motion.div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-px bg-[#2a2a2a] rounded-2xl overflow-hidden border border-[#2a2a2a] mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1a1a1a] px-8 py-10 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-[#d4af37] mb-2">{stat.number}</div>
              <div className="text-[#aaa] text-sm tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits grid - icons instead of dots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 p-7 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl hover:border-[#d4af37]/30 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#d4af37]/20 transition-colors">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-display text-base mb-2 group-hover:text-[#d4af37] transition-colors">{t(benefit.titleKey)}</h3>
                <p className="text-[#aaa] text-sm leading-relaxed">{t(benefit.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShootPackages() {
  const { t } = useI18n();
  const packages = [
    {
      name: t('cs.starter'),
      badge: null,
      highlight: false,
      features: [
        { text: '1 Photoshoot Session (2 hours)', bold: true },
        { text: '15 Edited Photos', bold: false },
        { text: 'Basic Retouching', bold: false },
      ],
    },
    {
      name: t('cs.growth'),
      badge: t('cs.popular'),
      highlight: true,
      features: [
        { text: '1 Photoshoot + 2 Reel Videos', bold: true },
        { text: '30 Edited Photos + 2 Reels', bold: false },
        { text: 'Advanced Retouching', bold: false },
        { text: 'Social Media Captions', bold: false },
        { text: 'Limited Brochure', bold: false },
      ],
    },
    {
      name: t('cs.premium'),
      badge: null,
      highlight: false,
      features: [
        { text: '2 Photoshoots + 5 Reel Videos', bold: true },
        { text: '50 Edited Photos + 5-7 Reels', bold: false },
        { text: 'Premium Retouching', bold: false },
        { text: '1 Month Posting Support', bold: false },
        { text: 'Brochure', bold: false },
        { text: 'Social Media Handling', bold: false },
      ],
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Photography & Content Shoots</span>
          <h2 className="font-display text-5xl">Shoot Packages</h2>
          <p className="text-[#aaa] text-sm mt-3 max-w-xl">One-time and recurring content shoot packages. Ideal for brands that need fresh photography and reels.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`relative flex flex-col rounded-2xl overflow-hidden border ${
                pkg.highlight ? 'border-[#d4af37]' : 'border-[#2e2e2e]'
              } bg-[#1a1a1a]`}
            >
              {pkg.badge && (
                <div className="text-center py-2 text-xs tracking-widest uppercase font-display bg-[#d4af37] text-[#1a1a1a]">
                  {pkg.badge}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-3xl mb-6">{pkg.name}</h3>
                <div className="border-t border-[#2a2a2a] mb-6" />

                <ul className="space-y-3.5 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <span className={`text-sm leading-snug ${feat.bold ? 'text-white font-display' : 'text-[#888]'}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={`w-full py-3.5 rounded-xl text-sm font-display tracking-wide transition-all duration-300 flex items-center justify-center ${
                  pkg.highlight
                    ? 'bg-[#d4af37] text-[#1a1a1a] hover:bg-[#e5c24a]'
                    : 'bg-[#222] text-white border border-[#444] hover:bg-[#2a2a2a]'
                }`}>
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Standard',
      badge: null,
      includes: null,
      color: 'border-[#2e2e2e]',
      btnStyle: 'bg-[#222] text-white hover:bg-[#333] border border-[#444]',
      features: [
        { text: '4 Posts + 4 Reels + Story', bold: true },
        { text: 'Facebook, Instagram, Google Business Management', bold: false },
        { text: 'Review, Reply & Reports', bold: false },
        { text: 'Social Media Marketing (Audience Based)', bold: false },
        { text: 'Monthly Calendar (Day By Day Plan)', bold: false },
        { text: 'Any 3 Social Media (Business/Product Based)', bold: false },
        { text: 'Social Media Account Setup & Business Profile Management', bold: false },
        { text: 'Monthly Report & Monthly Review', bold: false },
        { text: 'Brand Awareness (Business Marketing)', bold: false },
      ],
    },
    {
      name: 'Professional',
      badge: 'Most Popular',
      includes: 'INCLUDES STANDARD, PLUS',
      color: 'border-[#d4af37]',
      btnStyle: 'bg-[#d4af37] text-[#1a1a1a] hover:bg-[#e5c24a]',
      features: [
        { text: '6 Posts + 6 Reels + Story + 8 Shorts', bold: true },
        { text: 'Facebook, Instagram, YouTube', bold: false },
        { text: 'Co-branding Promotion (Location Based)', bold: false },
        { text: 'Google Ads (Audience Based)', bold: false },
        { text: 'Customized Promotion Designs (Day By Day Plan)', bold: false },
        { text: 'Brand Guideline (Business Based)', bold: false },
        { text: 'Customer Review Reply (Day By Day Plan)', bold: false },
        { text: 'Products Listing (GMB, WhatsApp, Facebook)', bold: false },
        { text: 'Campaign Monitoring & Evaluation (Ads Report)', bold: false },
        { text: 'Paid Promotion (Facebook, Instagram)', bold: false },
        { text: 'Monthly Report & Monthly Review', bold: false },
      ],
    },
    {
      name: 'Advanced',
      badge: 'Premier',
      includes: 'INCLUDES ALL PROFESSIONAL FEATURES, PLUS',
      color: 'border-[#888]',
      btnStyle: 'bg-[#1a1a1a] text-[#d4af37] border border-[#d4af37]/60 hover:bg-[#d4af37]/10',
      features: [
        { text: '10 Posts + 10 Reels + Story + 10 Shorts', bold: true },
        { text: 'Facebook, Instagram, LinkedIn, YouTube', bold: false },
        { text: 'SEO (Search Engine Optimization)', bold: false },
        { text: 'Paid Promotion (Facebook, Instagram, YouTube)', bold: false },
        { text: '24/7 Prioritized Customer Support', bold: false },
        { text: 'Premier Consulting Services', bold: false },
        { text: 'Monthly Report & Monthly Review', bold: false },
      ],
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Plans</span>
          <h2 className="font-display text-5xl">Choose Your Plan</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className={`relative flex flex-col rounded-2xl border ${plan.color} bg-[#111] overflow-hidden`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`text-center py-2 text-xs tracking-widest uppercase font-display ${
                  plan.badge === 'Most Popular'
                    ? 'bg-[#d4af37] text-[#1a1a1a]'
                    : 'bg-[#222] text-[#888]'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <h3 className="font-display text-3xl mb-1">{plan.name}</h3>

                {/* Includes label */}
                {plan.includes && (
                  <p className="text-[10px] text-[#d4af37] tracking-widest uppercase mb-6 leading-relaxed">
                    {plan.includes}
                  </p>
                )}
                {!plan.includes && <div className="mb-6" />}

                {/* Divider */}
                <div className="border-t border-[#2a2a2a] mb-6" />

                {/* Features */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <span className={`text-sm leading-snug ${feat.bold ? 'text-white font-display' : 'text-[#888]'}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={`w-full py-3.5 rounded-xl text-sm font-display tracking-wide transition-all duration-300 flex items-center justify-center ${plan.btnStyle}`}>
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">{t('cs.contact')}</span>
          <h2 className="font-display text-5xl md:text-6xl">{t('contact.title')}</h2>
          <p className="text-[#c0c0c0] mt-4 max-w-xl mx-auto">{t('contact.sub')}</p>
        </motion.div>
        <ContactForm
          defaultService="Creative Studio — Photography"
          showSidebar={true}
          dark={true}
        />
      </div>
    </section>
  );
}

