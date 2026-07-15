import { motion } from 'motion/react';
import { Brain, Eye, Wrench, TrendingUp, FlaskConical, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const useCases = [
  {
    icon: <Wrench className="w-7 h-7 text-[#d4af37]" />,
    title: 'Predictive Maintenance',
    desc: 'ML models trained on vibration, temperature, and acoustic data detect bearing failures, misalignment, and wear patterns weeks before breakdown.',
    accuracy: '92%',
    metric: 'Failure prediction accuracy',
  },
  {
    icon: <Eye className="w-7 h-7 text-[#d4af37]" />,
    title: 'Visual Quality Inspection',
    desc: 'Computer vision models running at the edge inspect 100% of production output — defect detection at speeds no human inspector can match.',
    accuracy: '99.7%',
    metric: 'Defect detection rate',
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#d4af37]" />,
    title: 'Production Optimisation',
    desc: 'Reinforcement learning agents continuously tune process parameters — temperature, pressure, speed — to maximise yield and minimise waste.',
    accuracy: '18%',
    metric: 'Average yield improvement',
  },
  {
    icon: <Brain className="w-7 h-7 text-[#d4af37]" />,
    title: 'Demand Forecasting',
    desc: 'Ensemble time-series models incorporating weather, market signals, and historical sales to drive production scheduling with precision.',
    accuracy: '94%',
    metric: 'Forecast accuracy',
  },
  {
    icon: <FlaskConical className="w-7 h-7 text-[#d4af37]" />,
    title: 'Process Anomaly Detection',
    desc: 'Unsupervised learning continuously monitors hundreds of process variables in real time, surfacing subtle deviations before they cascade.',
    accuracy: '<2min',
    metric: 'Mean detection time',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#d4af37]" />,
    title: 'OT Cybersecurity AI',
    desc: 'AI-driven network behaviour analysis detects lateral movement, unusual device communication patterns, and zero-day threats in OT environments.',
    accuracy: '0.01%',
    metric: 'False positive rate',
  },
];

const approach = [
  {
    step: '01',
    title: 'Data Audit',
    desc: "We start where your data lives — understanding quality, coverage, and gaps before building a single model.",
  },
  {
    step: '02',
    title: 'Baseline & Benchmark',
    desc: "Establish current performance baselines so the impact of every AI intervention is measurable and attributable.",
  },
  {
    step: '03',
    title: 'Pilot & Validate',
    desc: "Deploy models in shadow mode first — they run alongside your existing process without affecting production until validated.",
  },
  {
    step: '04',
    title: 'Scale & Monitor',
    desc: "Once validated, models go live with continuous drift monitoring, retraining pipelines, and explainability dashboards.",
  },
];

export default function AI() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Artificial Intelligence"
        title="AI That Works on the Factory Floor"
        subtitle="Not AI hype — applied machine learning and computer vision deployed in real industrial environments, delivering measurable outcomes."
        image="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920"
      />

      {/* Use cases */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl mb-4"
        >
          AI Use Cases
        </motion.h2>
        <p className="text-[#a0a0a0] mb-12 max-w-2xl">
          Each use case below is battle-tested in production environments — not proofs of concept, but deployed systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 transition-colors duration-300 group"
            >
              <div className="mb-5 p-3 bg-[#d4af37]/10 rounded-lg w-fit group-hover:bg-[#d4af37]/20 transition-colors">
                {uc.icon}
              </div>
              <h3 className="font-display text-xl mb-3">{uc.title}</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">{uc.desc}</p>
              <div className="border-t border-[#333] pt-5">
                <div className="font-display text-3xl text-[#d4af37]">{uc.accuracy}</div>
                <div className="text-xs text-[#666] mt-1">{uc.metric}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#111] py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-center mb-16"
          >
            Our AI Deployment Approach
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {approach.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {i < approach.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px border-t border-dashed border-[#333] z-0" />
                )}
                <div className="font-display text-5xl text-[#d4af37]/20 mb-4">{a.step}</div>
                <h4 className="font-display text-xl mb-3">{a.title}</h4>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Start with a Data Readiness Assessment</h2>
          <p className="text-[#a0a0a0] mb-10">Free 90-minute session with our AI team to evaluate your data landscape and identify the highest-ROI AI opportunity.</p>
          <button className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300">
            Book Data Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
