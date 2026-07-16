import { motion } from 'motion/react';

const services = [
  { title: 'Custom Software Development', desc: 'Full-stack web & mobile apps, enterprise portals, cloud-native architecture, API integrations, legacy modernisation.' },
  { title: 'Industrial Automation & Smart Factory', desc: 'End-to-end shopfloor digitisation: PLC & SCADA programming, IIoT, MES/MOM integration, digital twins, Industry 4.0.' },
  { title: 'Artificial Intelligence', desc: 'Computer vision, NLP, predictive analytics, generative AI & LLMs, edge AI, MLOps, agentic AI, production-grade.' },
  { title: 'IoT & Edge Computing', desc: 'Connect machines, sensors, and systems for real-time industrial intelligence. Edge gateways, MQTT/OPC-UA, condition monitoring.' },
  { title: 'Cloud & DevOps Services', desc: 'Cloud architecture, migration, Kubernetes, CI/CD, infrastructure as code, multi-cloud management (AWS, Azure, GCP).' },
  { title: 'Data Engineering & Analytics', desc: 'Modern data platforms, ETL/ELT pipelines, data lakes, warehousing, BI dashboards, real-time analytics.' },
  { title: 'Cybersecurity', desc: 'VAPT, SOC operations, OT/ICS security, compliance auditing (ISO 27001, NIST, GDPR), incident response, zero-trust.' },
  { title: 'CAD CAM Services', desc: '3D CAD modelling, CNC programming, CAM simulation, fixture & tooling design, sheet metal fabrication, reverse engineering.' },
  { title: 'Talent Solutions', desc: 'Permanent recruitment, contract staffing, executive search, managed teams & ODC, RPO, payroll processing.' },
  { title: 'Training', desc: 'Technical training, corporate workshops, leadership development, certification programs, industrial safety, e-learning.' },
  { title: 'Digital Marketing', desc: 'SEO, PPC, content marketing, social media management, email marketing, branding, analytics & conversion optimisation.' },
  { title: 'Managed Services & Support', desc: 'SLA-backed 24/7 support, application management, infrastructure monitoring, helpdesk, proactive maintenance.' },
  { title: 'VR/AR & Spatial Intelligence', desc: 'Immersive experiences for industry: VR training, AR maintenance guides, digital twin visualisation.' },
];

export default function TechServices() {
  return (
    <div>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[#0d1a3a] to-[#0a0f1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">13 Service Lines</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Services</h1>
          <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">
            Full-spectrum technology services from software development to industrial automation, delivered to European businesses from our Paris base, supported by 250+ engineers in India.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl hover:border-[#f0c030] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#f0c030] flex-shrink-0" />
                <h3 className="font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-[#a0b0cc] text-sm leading-relaxed pl-5">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a] text-center">
        <p className="text-[#a0b0cc] mb-6 max-w-xl mx-auto">Let's discuss how we can help your business. Our team is ready.</p>
        <a href="mailto:business@virtechvisuals.com" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
}
