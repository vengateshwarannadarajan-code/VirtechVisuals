import { motion } from 'motion/react';

const stats = [
  { number: '465+', label: 'Global Clients' },
  { number: '250+', label: 'Engineers' },
  { number: '5+', label: 'Countries' },
  { number: '13', label: 'Service Lines' },
];

const industries = [
  'Automotive & Mobility',
  'Pharmaceuticals & Life Sciences',
  'Food & Beverage',
  'Oil, Gas & Energy',
  'Electronics & Semiconductors',
  'Aerospace & Defence',
  'Logistics & Warehousing',
  'Retail & FMCG',
  'Healthcare & Hospitals',
  'Real Estate & Construction',
];

export default function CaseStudies() {
  return (
    <div>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[#0d1a3a] to-[#0a0f1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Success Stories</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">Case Studies</h1>
          <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">
            Our partner Digisailor has delivered transformative solutions to 465+ clients across 5+ countries. Here's a snapshot of the impact.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="font-display text-5xl text-[#f0c030] mb-2">{s.number}</div>
              <div className="text-[#a0b0cc] text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl text-center mb-4">Industries We Serve</h2>
        <p className="text-[#a0b0cc] text-center mb-16">Cross-industry expertise spanning manufacturing, enterprise, and beyond.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl text-center hover:border-[#f0c030] transition-colors duration-300"
            >
              <p className="text-[#a0b0cc] text-sm">{ind}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { cert: 'ISO 27001', label: 'Information Security Management' },
              { cert: 'ISO 9001', label: 'Quality Management System' },
              { cert: 'SOC 2 Type II', label: 'Security & Availability' },
            ].map(c => (
              <div key={c.cert} className="p-6 border border-[#f0c030]/30 rounded-xl">
                <div className="text-[#f0c030] font-display text-xl mb-2">{c.cert}</div>
                <div className="text-[#a0b0cc] text-sm">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <p className="text-[#a0b0cc] mb-6 max-w-xl mx-auto">Want to see detailed case studies? Get in touch and we'll share relevant examples for your industry.</p>
        <a href="mailto:business@virtechvisuals.com" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
          Request Case Studies
        </a>
      </section>
    </div>
  );
}
