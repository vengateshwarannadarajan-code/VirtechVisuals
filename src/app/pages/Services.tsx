import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Code2, Cpu, Brain, Cloud, Wifi, Lock, Users, BookOpen, BarChart3, Settings, Palette, Wrench } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-[#d4af37]" />,
    title: 'Custom Software Development',
    tagline: 'Web · Mobile · Enterprise · SaaS',
    desc: 'Full-stack web and mobile applications, enterprise portals, cloud-native architecture, API integrations, and legacy modernisation. We build for performance, security, and scale.',
    highlights: ['React, Node.js, Python, .NET', 'Cloud-native & microservices', 'Legacy migration & replatforming'],
  },
  {
    icon: <Cpu className="w-7 h-7 text-[#d4af37]" />,
    title: 'Industrial Automation & Smart Factory',
    tagline: 'IIoT · MES · Industry 4.0',
    desc: 'End-to-end shopfloor digitisation: PLC & SCADA programming, IIoT connectivity, MES/MOM integration, digital twins, and full Industry 4.0 transformation.',
    highlights: ['PLC/SCADA programming', 'OPC-UA / MQTT integration', 'MES & digital twin deployment'],
  },
  {
    icon: <Brain className="w-7 h-7 text-[#d4af37]" />,
    title: 'Artificial Intelligence',
    tagline: 'CV · GenAI · MLOps · Edge AI',
    desc: 'Production-grade AI: computer vision, NLP, predictive analytics, generative AI & LLMs, edge AI inference, and MLOps pipelines. Real environments, not just demos.',
    highlights: ['Computer vision & defect detection', 'Generative AI & RAG pipelines', 'Edge AI deployment'],
  },
  {
    icon: <Wifi className="w-7 h-7 text-[#d4af37]" />,
    title: 'IoT & Edge Computing',
    tagline: 'Sensors · Gateways · Real-time',
    desc: 'Connect machines, sensors, and systems for real-time industrial intelligence. Edge gateways, MQTT/OPC-UA bridging, BLE/LoRaWAN, and condition monitoring.',
    highlights: ['Edge gateway deployment', 'MQTT / OPC-UA / BLE / LoRaWAN', 'Real-time condition monitoring'],
  },
  {
    icon: <Cloud className="w-7 h-7 text-[#d4af37]" />,
    title: 'Cloud & DevOps Services',
    tagline: 'AWS · Azure · GCP · Kubernetes',
    desc: 'Cloud architecture, migration, Kubernetes, CI/CD pipelines, infrastructure as code, and multi-cloud management. Certified partners with AWS, Azure, and GCP.',
    highlights: ['Cloud migration & architecture', 'Kubernetes & container orchestration', 'CI/CD & GitOps'],
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-[#d4af37]" />,
    title: 'Data Engineering & Analytics',
    tagline: 'Lakehouse · BI · Real-time',
    desc: 'Modern data platforms, ETL/ELT pipelines, data lakes and warehouses, BI dashboards, and real-time streaming analytics for operational intelligence.',
    highlights: ['Data lakehouse & ETL pipelines', 'Real-time streaming analytics', 'BI dashboards & visualisation'],
  },
  {
    icon: <Lock className="w-7 h-7 text-[#d4af37]" />,
    title: 'Cybersecurity',
    tagline: 'VAPT · OT Security · Compliance',
    desc: 'VAPT, SOC operations, OT/ICS security, compliance auditing (ISO 27001, NIST, GDPR), incident response, and zero-trust architecture.',
    highlights: ['VAPT & penetration testing', 'OT/ICS network security', 'ISO 27001 & GDPR compliance'],
  },
  {
    icon: <Settings className="w-7 h-7 text-[#d4af37]" />,
    title: 'CAD CAM Services',
    tagline: '3D Modelling · CNC · Reverse Eng.',
    desc: '3D CAD modelling, CNC programming, CAM simulation, fixture and tooling design, sheet metal fabrication, and reverse engineering from physical parts.',
    highlights: ['SolidWorks, CATIA, AutoCAD', 'CNC programming & simulation', 'Reverse engineering & 3D scanning'],
  },
  {
    icon: <Users className="w-7 h-7 text-[#d4af37]" />,
    title: 'Talent Solutions',
    tagline: 'Permanent · Contract · RPO',
    desc: 'Permanent recruitment, contract staffing, executive search, managed teams, ODC setup, RPO, and payroll processing across engineering and technology roles.',
    highlights: ['Permanent & contract staffing', 'Executive search & ODC', 'RPO & payroll processing'],
  },
  {
    icon: <BookOpen className="w-7 h-7 text-[#d4af37]" />,
    title: 'Training',
    tagline: 'Technical · Leadership · Safety',
    desc: 'Technical training, corporate workshops, leadership development, certification programs, industrial safety training, and e-learning content development.',
    highlights: ['Technical & certification programs', 'Leadership development', 'Industrial safety & e-learning'],
  },
  {
    icon: <Palette className="w-7 h-7 text-[#d4af37]" />,
    title: 'Digital Marketing',
    tagline: 'SEO · PPC · Content · Social',
    desc: 'SEO, PPC, content marketing, social media management, email marketing, branding, and analytics-driven conversion optimisation.',
    highlights: ['SEO & PPC campaigns', 'Content & social media', 'Analytics & conversion optimisation'],
  },
  {
    icon: <Wrench className="w-7 h-7 text-[#d4af37]" />,
    title: 'Managed Services & Support',
    tagline: '24/7 SLA · Monitoring · Helpdesk',
    desc: 'SLA-backed 24/7 support, application management, infrastructure monitoring, helpdesk operations, and proactive maintenance.',
    highlights: ['24/7 SLA-backed support', 'Application & infra monitoring', 'Proactive maintenance'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="12 Service Lines"
        title="Technology Services We Deliver"
        subtitle="Full-spectrum technology services from software development to industrial automation — delivered to European businesses, supported by 250+ engineers."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
      />

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="p-3 bg-[#d4af37]/10 rounded-lg flex-shrink-0 group-hover:bg-[#d4af37]/20 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">{s.title}</h3>
                  <span className="text-xs text-[#d4af37]/70 tracking-wider">{s.tagline}</span>
                </div>
              </div>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-xs text-[#777]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Let's discuss your project</h2>
          <p className="text-[#a0a0a0] mb-10">Our team is ready to scope your requirements and propose the right engagement model — fixed price, T&M, or managed service.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300"
          >
            Start the Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
