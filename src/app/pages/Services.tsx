import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/context';
import { PageHero } from '../components/PageHero';
import { Footer } from '../components/Footer';

const services = [
  {
    slug: 'custom-software',
    title: 'svc.s1.title',
    desc: 'Tailored digital solutions built for your unique business needs',
    highlights: ['Web Application Development', 'Mobile App Development', 'Enterprise Software Solutions', 'API Development & Integrations'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'industrial-automation',
    title: 'Industrial Automation & Smart Factory',
    desc: 'End-to-end shopfloor digitization for operational excellence',
    highlights: ['Production Intelligence (OEE/OLE)', 'Production Planning & Scheduling', 'Quality & Traceability', 'Warehouse Intelligence'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'artificial-intelligence',
    title: 'svc.s3.title',
    desc: 'Intelligent solutions that automate, predict, and optimize operations',
    highlights: ['Computer Vision', 'Predictive Analytics', 'NLP / Chatbots', 'Anomaly Detection'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'iot-edge-computing',
    title: 'svc.s4.title',
    desc: 'Connect machines, sensors, and systems for real-time industrial intelligence',
    highlights: ['PLC/SCADA Data Acquisition', 'Edge Gateways & Real-time Data', 'BLE / LoRaWAN / MQTT Integration', 'Edge AI Deployment'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps Services',
    desc: 'Architect, migrate, and operate cloud infrastructure with confidence',
    highlights: ['Cloud Architecture (AWS/Azure/GCP)', 'Cloud Migration & Modernization', 'DevOps / CI-CD Pipelines', 'Kubernetes / Containerization'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering & Analytics',
    desc: 'Turn raw data into actionable intelligence with modern data platforms',
    highlights: ['Data Pipelines (ETL/ELT)', 'Data Warehouse / Lakehouse', 'BI Dashboards & Reporting', 'Data Governance & Quality'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'cybersecurity',
    title: 'svc.s6.title',
    desc: 'End-to-end cybersecurity services protecting your digital assets and ensuring compliance',
    highlights: ['VAPT', 'Security Audits & Hardening', 'OT/ICS Security', 'Privacy Compliance'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'cad-cam',
    title: 'svc.s8.title',
    desc: 'Advanced CAD/CAM solutions powering precision manufacturing',
    highlights: ['3D CAD Modeling & Detailing', 'CNC Programming & Toolpath Optimization', 'CAM Simulation & Verification', 'Reverse Engineering'],
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'talent-solutions',
    title: 'svc.s9.title',
    desc: 'End-to-end staffing, recruitment, payroll, and workforce management solutions',
    highlights: ['Permanent Recruitment', 'Contract Staffing', 'Executive Search', 'Payroll Outsourcing'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'training',
    title: 'Training',
    desc: 'Upskill your workforce with industry-relevant, hands-on training programs',
    highlights: ['Technical Training', 'Corporate Workshops', 'Industrial Automation Training', 'AI / Data Training'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'digital-marketing',
    title: 'svc.s11.title',
    desc: 'Data-driven marketing strategies that deliver measurable growth',
    highlights: ['SEO & Search Marketing', 'Social Media Marketing', 'Content Marketing', 'Performance Marketing (Ads)'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'managed-services',
    title: 'Managed Services & Support',
    desc: 'Reliable, SLA-backed support to keep your systems running at peak performance',
    highlights: ['Application Support (L1/L2/L3)', 'Cloud Ops / SRE', 'Monitoring & Incident Handling', 'Continuous Improvement Roadmap'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80&auto=format&fit=crop',
  },
  {
    slug: 'vr-ar',
    title: 'VR/AR & Spatial Intelligence',
    desc: 'Immersive experiences and spatial computing for industry and enterprise',
    highlights: ['Immersive VR Training & Simulation', 'AR Remote Assistance & Guided Work', '3D Visualization & Digital Twins', 'Indoor Positioning & Spatial Mapping'],
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1600&q=80&auto=format&fit=crop',
  },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="What We Do"
        title={t('svc.title')}
        subtitle="From custom software to AI solutions, we deliver end-to-end services that help businesses innovate, automate, and scale with confidence."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=90&fit=crop&auto=format"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-[#1e1e1e] border border-[#2e2e2e] rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-colors duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={t(s.titleKey)}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg mb-2">{t(s.titleKey)}</h3>
                <p className="text-[#c0c0c0] text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1 mb-5">
                  {s.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-center gap-2 text-xs text-[#bbb]">
                      <span className="w-1 h-1 rounded-full bg-[#d4af37] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-[#d4af37] text-sm hover:gap-3 transition-all duration-200"
                >
                  Explore Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#111] border-t border-[#1e1e1e] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl mb-4"
          >
            Need a Custom Solution?
          </motion.h2>
          <p className="text-[#c0c0c0] mb-8">Let's discuss how our services can help you achieve your business goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-medium"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
