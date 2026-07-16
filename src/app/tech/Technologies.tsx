import { motion } from 'motion/react';

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

export default function Technologies() {
  return (
    <div>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[#0d1a3a] to-[#0a0f1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Our Stack</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Technologies</h1>
          <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">
            Cutting-edge technologies across industrial automation, AI, cloud, data, security, and immersive computing, all under one roof.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl"
            >
              <h3 className="font-display text-xl text-[#f0c030] mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-[#a0b0cc] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f0c030] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a] text-center">
        <p className="text-[#a0b0cc] mb-6 max-w-xl mx-auto">Want to know which technologies suit your use case? Let's talk.</p>
        <a href="mailto:business@virtechvisuals.com" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
          Talk to an Expert
        </a>
      </section>
    </div>
  );
}
