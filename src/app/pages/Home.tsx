import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { useI18n } from '../i18n/context';
import {
  ArrowRight, Cpu, Camera, Brain, Layers, TrendingUp, Users,
  BarChart3, ShieldCheck, Wrench, Package, Eye, GitBranch,
  Code2, Cloud, Wifi, Lock, UserCheck,
  DoorOpen, MessageSquare, MapPin, ClipboardCheck, Activity,
  MessageCircle, Mail, Phone,
} from 'lucide-react';

const pillars = [
  { icon: <Cpu className="w-6 h-6 text-[#d4af37]" />, label: 'Smart Factory', to: '/smart-factory', desc: 'Industry 4.0 automation & IIoT' },
  { icon: <Layers className="w-6 h-6 text-[#d4af37]" />, label: 'Products', to: '/products', desc: 'Edge hardware & software platforms' },
  { icon: <TrendingUp className="w-6 h-6 text-[#d4af37]" />, label: 'Services', to: '/services', desc: 'Consulting, deployment & support' },
  { icon: <Brain className="w-6 h-6 text-[#d4af37]" />, label: 'AI', to: '/ai', desc: 'Applied ML for industrial operations' },
  { icon: <Users className="w-6 h-6 text-[#d4af37]" />, label: 'Case Studies', to: '/case-studies', desc: 'Real outcomes from real deployments' },
  { icon: <Camera className="w-6 h-6 text-[#d4af37]" />, label: 'Creative Studio', to: '/creative-studio', desc: 'Photography, video & social content' },
];

const solutions = [
  { icon: <BarChart3 className="w-6 h-6 text-[#d4af37]" />, title: 'Production Performance & Planning', desc: 'Improve OEE/OLE and delivery with real-time control and smart scheduling.', to: '/smart-factory' },
  { icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />, title: 'Quality & Traceability', desc: 'Reduce defects and speed audits with digital QC, vision, and genealogy.', to: '/smart-factory' },
  { icon: <Wrench className="w-6 h-6 text-[#d4af37]" />, title: 'Maintenance Intelligence', desc: 'Cut breakdowns using structured PM, work orders, and reliability KPIs.', to: '/smart-factory' },
  { icon: <Package className="w-6 h-6 text-[#d4af37]" />, title: 'Warehouse & Intralogistics', desc: 'Increase inventory accuracy and dispatch speed with disciplined workflows.', to: '/smart-factory' },
  { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, title: 'Spatial & Vision Intelligence', desc: 'Track assets and verify quality/safety using location tech and AI cameras.', to: '/smart-factory' },
  { icon: <GitBranch className="w-6 h-6 text-[#d4af37]" />, title: 'Digital Twin & Robotics', desc: 'Simulate, automate, and scale smarter movement with digital twins and robots.', to: '/smart-factory' },
];

const services = [
  { icon: <Code2 className="w-6 h-6 text-[#d4af37]" />, title: 'Custom Software Development', desc: 'Web apps, mobile apps, enterprise software, APIs, and SaaS products built for your business.', to: '/services' },
  { icon: <UserCheck className="w-6 h-6 text-[#d4af37]" />, title: 'Talent Solutions', desc: 'Permanent recruitment, contract staffing, executive search, and project-based hiring.', to: '/services' },
  { icon: <Brain className="w-6 h-6 text-[#d4af37]" />, title: 'Artificial Intelligence', desc: 'Computer vision, predictive analytics, NLP, anomaly detection, and AI integration.', to: '/ai' },
  { icon: <Cloud className="w-6 h-6 text-[#d4af37]" />, title: 'Cloud & DevOps Services', desc: 'Cloud architecture, migration, CI/CD, Kubernetes, monitoring, and cost optimization.', to: '/services' },
  { icon: <Wifi className="w-6 h-6 text-[#d4af37]" />, title: 'IoT & Edge Computing', desc: 'PLC/SCADA connectivity, edge gateways, BLE/LoRaWAN, and edge AI deployment.', to: '/services' },
  { icon: <Lock className="w-6 h-6 text-[#d4af37]" />, title: 'Cybersecurity', desc: 'VAPT, security audits, OT/ICS security, SOC/SIEM monitoring, and privacy compliance.', to: '/services' },
];

const products = [
  { icon: <DoorOpen className="w-6 h-6 text-[#d4af37]" />, name: 'GateKeeper', tagline: 'Visitor Management', desc: 'Visitor management system with pre-registration, badge printing, and real-time tracking.', to: '/products' },
  { icon: <MessageSquare className="w-6 h-6 text-[#d4af37]" />, name: 'IncidentGPT', tagline: 'AI Incident Reporting', desc: 'AI-powered incident reporting and root cause analysis with natural language processing.', to: '/products' },
  { icon: <Eye className="w-6 h-6 text-[#d4af37]" />, name: 'VisionSafe AI', tagline: 'Safety Analytics', desc: 'AI-powered safety analytics with computer vision for PPE detection and hazard monitoring.', to: '/products' },
  { icon: <MapPin className="w-6 h-6 text-[#d4af37]" />, name: 'DigiTrack', tagline: 'Asset & Inventory Visibility', desc: 'Real-time asset & inventory visibility with BLE, UWB, GPS, and LoRaWAN tracking.', to: '/products' },
  { icon: <ClipboardCheck className="w-6 h-6 text-[#d4af37]" />, name: 'PermitFlows', tagline: 'Permit-to-Work', desc: 'Digital permit-to-work management with safety checklists, approvals, and compliance tracking.', to: '/products' },
  { icon: <Activity className="w-6 h-6 text-[#d4af37]" />, name: 'PredictPulse', tagline: 'Predictive Maintenance', desc: 'Predictive maintenance with vibration analysis, thermal monitoring, and failure prediction.', to: '/products' },
];

const stats = [
  { value: '24', label: '{t('home.stats.solutions')}' },
  { value: '40%', label: '{t('home.stats.gain')}' },
  { value: '18+', label: '{t('home.stats.industries')}' },
  { value: '99.9%', label: '{t('home.stats.uptime')}' },
];

const highlights = [
  {
    tag: 'Industrial Tech',
    title: 'Digi Sailor',
    desc: 'We help manufacturers and industrial operators digitalise their operations, from IIoT connectivity and AI-powered analytics to full Smart Factory deployments. End-to-end, SLA-backed.',
    cta: 'Explore Smart Factory',
    to: '/smart-factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900',
  },
  {
    tag: 'Creative Services',
    title: 'Creative Studio',
    desc: 'Premium photography, videography, and social content for brands that want to stand out. Fashion, product, food, and beauty. Shot in our Paris studio or on location globally.',
    cta: 'Explore Creative Studio',
    to: '/creative-studio',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900',
  },
];

export default function Home() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
          <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=960" alt="Industrial" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="w-1/2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=960" alt="Creative" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-gradient-to-b from-transparent via-[#d4af37]/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-widest uppercase mb-8">
            Technology · Creativity · Results
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-display text-6xl md:text-8xl mb-6 leading-tight">
            Virtech Visuals
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-lg md:text-xl text-[#a0a0a0] mb-12 max-w-2xl mx-auto leading-relaxed">
            We build intelligent industrial systems and craft compelling visual content. Two studios, one standard of excellence.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/smart-factory" className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 flex items-center justify-center gap-2">
              {t('home.cta.factory')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/creative-studio" className="px-8 py-4 border border-white/20 text-white rounded-lg hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300 flex items-center justify-center gap-2">
              {t('home.cta.creative')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          {/* Contact quick links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-6 text-sm">
            <a href="https://wa.me/33780843487" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#a0a0a0] hover:text-[#d4af37] transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="mailto:business@virtechvisuals.com" className="flex items-center gap-1.5 text-[#a0a0a0] hover:text-[#d4af37] transition-colors">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#666] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#d4af37]/60 to-transparent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#2a2a2a] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-[#d4af37] mb-2">{s.value}</div>
              <div className="text-[#a0a0a0] text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Two Studios */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl mb-12 text-center">
          Two Studios. One Vision.
        </motion.h2>
        {highlights.map((h, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#2e2e2e] hover:border-[#d4af37]/40 transition-colors duration-300 group ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div className="relative h-72 md:h-auto overflow-hidden">
              <img src={h.image} alt={h.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="bg-[#222] p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-4">{h.tag}</span>
              <h3 className="font-display text-4xl mb-5">{h.title}</h3>
              <p className="text-[#a0a0a0] leading-relaxed mb-8">{h.desc}</p>
              <Link to={h.to} className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors group/link">
                {h.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* {t('home.stats.solutions')} */}
      <section className="py-24 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Smart Factory</span>
              <h2 className="font-display text-4xl md:text-5xl">End-to-End {t('home.stats.solutions')}</h2>
              <p className="text-[#a0a0a0] mt-4 max-w-2xl text-sm leading-relaxed">24 solutions across shopfloor operations, enterprise functions, and corporate governance.</p>
            </div>
            <Link to="/smart-factory" className="inline-flex items-center gap-2 text-sm text-[#d4af37] border border-[#d4af37]/30 px-5 py-2.5 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap flex-shrink-0">
              View All 24 Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={s.to} className="group flex flex-col gap-4 p-7 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#1e1e1e] transition-all duration-300 h-full">
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg w-fit group-hover:bg-[#d4af37]/20 transition-colors">{s.icon}</div>
                  <div>
                    <h3 className="font-display text-base mb-2 group-hover:text-[#d4af37] transition-colors">{s.title}</h3>
                    <p className="text-[#777] text-xs leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-[#555] group-hover:text-[#d4af37] transition-colors">
                    Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Services</span>
              <h2 className="font-display text-4xl md:text-5xl">{t('home.svc.title')}</h2>
              <p className="text-[#a0a0a0] mt-4 max-w-2xl text-sm leading-relaxed">12 service lines covering every stage of your digital transformation.</p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[#d4af37] border border-[#d4af37]/30 px-5 py-2.5 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap flex-shrink-0">
              View All 12 Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={s.to} className="group flex items-start gap-5 p-7 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#252525] transition-all duration-300">
                  <div className="p-2.5 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">{s.icon}</div>
                  <div>
                    <h3 className="font-display text-base mb-2 group-hover:text-[#d4af37] transition-colors">{s.title}</h3>
                    <p className="text-[#777] text-xs leading-relaxed">{s.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-[#555] group-hover:text-[#d4af37] transition-colors">
                      Explore Service <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Products</span>
              <h2 className="font-display text-4xl md:text-5xl">{t('home.prod.title')}</h2>
              <p className="text-[#a0a0a0] mt-4 max-w-2xl text-sm leading-relaxed">Purpose-built software for visitor management, safety, asset tracking, predictive maintenance, and more.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-[#d4af37] border border-[#d4af37]/30 px-5 py-2.5 rounded-lg hover:bg-[#d4af37]/10 transition-colors whitespace-nowrap flex-shrink-0">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={p.to} className="group flex flex-col gap-5 p-7 bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 hover:bg-[#1e1e1e] transition-all duration-300 h-full">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">{p.icon}</div>
                    <span className="text-[10px] text-[#555] tracking-widest uppercase border border-[#2e2e2e] px-2.5 py-1 rounded-full group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37]/70 transition-colors">{p.tagline}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2 group-hover:text-[#d4af37] transition-colors">{p.name}</h3>
                    <p className="text-[#777] text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-[#555] group-hover:text-[#d4af37] transition-colors">
                    Explore Product <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="text-xs text-[#d4af37] tracking-widest uppercase mb-3 block">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl">{t('home.why.title')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
            {[
              { icon: <Cpu className="w-5 h-5 text-[#d4af37]" />, label: '24 {t('home.stats.solutions')}', body: 'From OEE & quality to warehouse, safety, and digital twins, one platform covering shopfloor to boardroom.' },
              { icon: <Layers className="w-5 h-5 text-[#d4af37]" />, label: '12 Technology Services', body: 'Custom software, cloud & DevOps, cybersecurity, IoT, talent solutions, and training. End-to-end delivery under one roof.' },
              { icon: <Brain className="w-5 h-5 text-[#d4af37]" />, label: 'Production-Grade AI', body: 'Computer vision, NLP, predictive analytics, generative AI, and edge AI. Deployed in real manufacturing environments.' },
              { icon: <Package className="w-5 h-5 text-[#d4af37]" />, label: 'Ready-to-Deploy Products', body: 'GateKeeper, VisionSafe AI, DigiTrack, PredictPulse, and PermitFlows. Purpose-built tools that go live in weeks, not months.' },
              { icon: <Cloud className="w-5 h-5 text-[#d4af37]" />, label: 'Multi-Platform Expertise', body: 'Official partners with Google Cloud, AWS, Microsoft Azure, IBM, and NVIDIA. Deep SAP, Oracle, and Salesforce expertise.' },
              { icon: <TrendingUp className="w-5 h-5 text-[#d4af37]" />, label: 'Outcome-Driven Results', body: 'Measurable gains in throughput, quality, uptime, cost, and compliance. Backed by ISO 27001, ISO 9001 and SOC 2 certifications.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-[#1a1a1a] p-8 flex flex-col gap-4 hover:bg-[#1f1f1f] transition-colors duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors flex-shrink-0">{item.icon}</div>
                  <h3 className="font-display text-base leading-snug">{item.label}</h3>
                </div>
                <p className="text-[#777] text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl mb-6">{t('home.cta.title')}</h2>
            <p className="text-[#a0a0a0] text-lg mb-10 max-w-2xl mx-auto">Whether it's Smart Factory, Creative Studio, or both. Let's talk about what we can build together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#e5c24a] transition-colors flex items-center justify-center gap-2 font-medium">
                {t('home.cta.btn')} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/33780843487" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#25D366]/40 text-[#25D366] rounded-lg hover:bg-[#25D366]/10 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
