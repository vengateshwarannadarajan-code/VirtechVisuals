import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';

type Industry = 'All' | 'Automotive' | 'Food & Beverage' | 'Pharma' | 'Electronics';

const cases = [
  {
    industry: 'Automotive' as Industry,
    client: 'Tier-1 Auto Supplier',
    title: 'Reducing Stamping Line Downtime by 61%',
    challenge: 'A major Tier-1 supplier was losing €2.3M annually to unplanned downtime on eight stamping presses. Maintenance was entirely reactive.',
    solution: 'Deployed SensorMesh Pro on all eight presses, feeding FlowIQ\'s predictive maintenance models. Within 6 weeks, the first failure was predicted 19 days in advance.',
    results: ['61% reduction in unplanned downtime', '€1.4M annual savings', '3.2× ROI in first year', 'MTTR reduced from 8h to 2.5h'],
    duration: '4 months',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700',
  },
  {
    industry: 'Food & Beverage' as Industry,
    client: 'Regional Dairy Cooperative',
    title: 'AI Quality Control Across 12 Production Lines',
    challenge: 'Manual visual inspection was missing 3.2% of packaging defects, leading to costly recalls and brand damage.',
    solution: 'Installed computer vision inspection stations at end-of-line on all 12 lines. Custom model trained on 40,000 labelled images of past defects.',
    results: ['99.6% defect detection rate', 'Zero recalls in 18 months post-launch', '€800K/yr in avoided recall costs', '22 FTE redeployed to value-add tasks'],
    duration: '6 months',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=700',
  },
  {
    industry: 'Pharma' as Industry,
    client: 'European Pharma Manufacturer',
    title: 'Full OEE Visibility Across 3 Plants',
    challenge: 'No real-time OEE data across three manufacturing sites. Reporting was manual, 2 weeks delayed, and unreliable.',
    solution: 'Virtech Cloud deployment with OPC-UA connectivity to existing PLCs. Custom dashboards for site managers and a single exec view for the group.',
    results: ['Real-time OEE for all 3 sites', 'OEE improved from 68% to 81%', 'Reporting time cut from 14 days to live', '€2.1M additional throughput captured'],
    duration: '5 months',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700',
  },
  {
    industry: 'Electronics' as Industry,
    client: 'PCB Manufacturer',
    title: 'SMT Line Yield Optimisation with AI',
    challenge: 'Solder paste defects on SMT lines were causing 4.8% first-pass yield failure, well above industry benchmark of 1.2%.',
    solution: 'AI process control agent continuously adjusts printer parameters based on paste inspection data. Closed-loop optimisation without operator intervention.',
    results: ['First-pass yield failures reduced to 1.1%', '58% reduction in rework cost', '€1.9M annual scrap reduction', 'Model retrained weekly on fresh data'],
    duration: '3 months',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700',
  },
];

const industries: Industry[] = ['All', 'Automotive', 'Food & Beverage', 'Pharma', 'Electronics'];

export default function CaseStudies() {
  const [active, setActive] = useState<Industry>('All');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = active === 'All' ? cases : cases.filter((c) => c.industry === active);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Client Results"
        title="Real Outcomes, Real Numbers"
        subtitle="Every case study below is a real deployment with measurable results. No synthetic benchmarks, no vendor demos."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920"
      />

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <div className="flex gap-3 flex-wrap">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActive(ind)}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 ${
                active === ind
                  ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                  : 'border-[#333] text-[#a0a0a0] hover:border-[#d4af37]/50 hover:text-white'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Cases */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24 space-y-8">
        {filtered.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-[#222] border border-[#2e2e2e] rounded-xl overflow-hidden hover:border-[#d4af37]/40 transition-colors duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="h-56 md:h-auto overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs">
                    {c.industry}
                  </span>
                  <span className="text-xs text-[#666]">{c.duration} deployment</span>
                </div>
                <p className="text-sm text-[#a0a0a0] mb-2">{c.client}</p>
                <h3 className="font-display text-2xl mb-4">{c.title}</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {c.results.map((r, ri) => (
                    <div key={ri} className="flex items-start gap-2 text-xs text-[#ccc]">
                      <span className="w-1 h-1 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-2 text-sm text-[#d4af37] hover:text-white transition-colors"
                >
                  {expanded === i ? 'Hide details' : 'Read full story'}
                  <ArrowRight className={`w-4 h-4 transition-transform ${expanded === i ? 'rotate-90' : ''}`} />
                </button>

                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-[#333] grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <h5 className="text-xs tracking-widest text-[#d4af37] uppercase mb-3">Challenge</h5>
                      <p className="text-sm text-[#a0a0a0] leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h5 className="text-xs tracking-widest text-[#d4af37] uppercase mb-3">Solution</h5>
                      <p className="text-sm text-[#a0a0a0] leading-relaxed">{c.solution}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#111] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Your industry. Your results.</h2>
          <p className="text-[#a0a0a0] mb-10">Talk to the team that delivered these outcomes. We'll tell you honestly what's achievable in your environment.</p>
          <button className="px-8 py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300">
            Speak to an Expert
          </button>
        </div>
      </section>
    </div>
  );
}
