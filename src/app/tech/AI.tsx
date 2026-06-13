import { motion } from 'motion/react';

const aiCapabilities = [
  { title: 'Computer Vision', desc: 'Defect detection, PPE compliance, visual quality inspection, object tracking — powered by deep learning.' },
  { title: 'Generative AI & LLMs', desc: 'Custom LLM deployments, RAG pipelines, enterprise chatbots, document intelligence.' },
  { title: 'Predictive Analytics', desc: 'Predict equipment failures, demand fluctuations, and quality issues before they happen.' },
  { title: 'Natural Language Processing', desc: 'Text classification, sentiment analysis, information extraction from unstructured data.' },
  { title: 'Edge AI', desc: 'Deploy AI models directly on edge devices for real-time inference without cloud dependency.' },
  { title: 'MLOps & Model Management', desc: 'End-to-end ML pipelines, model versioning, monitoring, and automated retraining.' },
  { title: 'Agentic AI', desc: 'Autonomous AI agents that plan, reason, and execute multi-step tasks in industrial environments.' },
  { title: 'AI-Powered Safety', desc: 'VisionSafe AI monitors worksites 24/7 for safety violations, near-misses, and PPE compliance.' },
  { title: 'IncidentGPT', desc: 'AI-driven incident investigation — root cause analysis, report generation, corrective actions.' },
];

export default function AI() {
  return (
    <div>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[#0d1a3a] to-[#0a0f1e]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Artificial Intelligence</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">AI Solutions</h1>
          <p className="text-[#a0b0cc] text-lg max-w-2xl mx-auto">
            Production-grade AI for manufacturing and enterprise — from computer vision and LLMs to edge inference and agentic systems. Built for the real world, not just demos.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl hover:border-[#f0c030] transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#f0c030] mb-4" />
              <h3 className="font-semibold text-white text-lg mb-3">{cap.title}</h3>
              <p className="text-[#a0b0cc] text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a] text-center">
        <h2 className="font-display text-3xl text-white mb-4">Ready to implement AI?</h2>
        <p className="text-[#a0b0cc] mb-6 max-w-xl mx-auto">Let's discuss your use case and build a roadmap tailored to your business.</p>
        <a href="mailto:business@virtechvisuals.com" className="inline-block px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
          Start the Conversation
        </a>
      </section>
    </div>
  );
}
