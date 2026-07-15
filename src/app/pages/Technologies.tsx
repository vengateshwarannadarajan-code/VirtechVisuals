import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const categories = [
  {
    title: 'Industrial & OT',
    items: ['PLC & SCADA Programming', 'OPC-UA / MQTT Protocols', 'IIoT Edge Gateways', 'MES / MOM Systems', 'AGV / AMR Integration', 'RTLS & Indoor Positioning'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['Computer Vision', 'Generative AI & LLMs', 'Predictive Analytics', 'NLP & Text Intelligence', 'Edge AI Inference', 'MLOps & Model Management'],
  },
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS / Azure / GCP', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Infrastructure as Code', 'Multi-cloud Management', 'Serverless Architecture'],
  },
  {
    title: 'Data & Analytics',
    items: ['Data Lakehouse', 'ETL / ELT Pipelines', 'BI Dashboards', 'Real-time Streaming', 'Master Data Management', 'AI/ML Pipelines'],
  },
  {
    title: 'Security',
    items: ['Zero Trust Architecture', 'OT/ICS Security', 'VAPT', 'SOC Operations', 'GDPR / ISO 27001 Compliance', 'Incident Response'],
  },
  {
    title: 'Immersive & Spatial',
    items: ['Digital Twins (3D)', 'VR Training Environments', 'AR Maintenance Guides', 'Spatial Computing', 'CAD / CAM / CNC', 'Reverse Engineering'],
  },
];

const partners = ['Google Cloud', 'AWS', 'Microsoft Azure', 'IBM', 'NVIDIA', 'SAP', 'Oracle', 'Salesforce'];

export default function Technologies() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Technology Stack"
        title="Technologies We Master"
        subtitle="Cutting-edge capabilities across industrial automation, AI, cloud, data, security, and immersive computing — all under one roof."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920"
      />

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 transition-colors duration-300"
            >
              <h3 className="font-display text-xl text-[#d4af37] mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-[#a0a0a0] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#111] py-20 px-4 md:px-8 border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-4">Platform & Technology Partners</h2>
          <p className="text-[#a0a0a0] mb-12">Official partnerships and deep expertise across enterprise platforms.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map(p => (
              <span key={p} className="px-5 py-2.5 bg-[#1a1a1a] border border-[#2e2e2e] rounded-full text-sm text-[#a0a0a0]">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Which technologies suit your use case?</h2>
          <p className="text-[#a0a0a0] mb-10">Our architects will recommend the right stack for your environment, constraints, and goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300"
          >
            Talk to an Architect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
