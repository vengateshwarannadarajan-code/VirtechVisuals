import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Factory, Box, Settings, Cpu, Brain, BookOpen, ArrowRight } from 'lucide-react';

const sections = [
  { icon: <Factory className="w-8 h-8" />, label: 'Smart Factory', to: '/tech/smart-factory', desc: 'End-to-end smart manufacturing and industrial automation solutions.' },
  { icon: <Box className="w-8 h-8" />, label: 'Products', to: '/tech/products', desc: 'Hardware and software products for modern industrial environments.' },
  { icon: <Settings className="w-8 h-8" />, label: 'Services', to: '/tech/services', desc: 'Consulting, integration, and managed services for your operations.' },
  { icon: <Cpu className="w-8 h-8" />, label: 'Technologies', to: '/tech/technologies', desc: 'Cutting-edge tech stack powering our solutions.' },
  { icon: <Brain className="w-8 h-8" />, label: 'AI', to: '/tech/ai', desc: 'Artificial intelligence and machine learning for industrial use cases.' },
  { icon: <BookOpen className="w-8 h-8" />, label: 'Case Studies', to: '/tech/case-studies', desc: 'Real-world results and success stories from our clients.' },
];

export default function TechHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1a3a] to-[#0a0f1e]" />
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #f0c030 0%, transparent 50%), radial-gradient(circle at 70% 50%, #1e40af 0%, transparent 50%)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Virtech Visuals, Tech Solutions</p>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            Smart Factory &<br />Industrial Innovation
          </h1>
          <p className="text-[#a0b0cc] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Delivering cutting-edge industrial automation and smart factory solutions from Paris, France, powered by our expert team in India.
          </p>
          <a href="mailto:business@virtechvisuals.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f0c030] text-[#0a0f1e] font-semibold rounded-lg hover:bg-white transition-all duration-300">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl text-center mb-4"
        >
          Our Solutions
        </motion.h2>
        <p className="text-[#a0b0cc] text-center mb-16">Explore what we offer across the full industrial technology spectrum.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={s.to}
                className="block p-8 bg-[#0d1a3a] border border-[#1e2a4a] rounded-xl hover:border-[#f0c030] hover:bg-[#111f40] transition-all duration-300 group h-full"
              >
                <div className="text-[#f0c030] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl mb-3">{s.label}</h3>
                <p className="text-[#a0b0cc] text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[#f0c030] text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* France + India banner */}
      <section className="py-16 px-4 bg-[#0d1a3a] border-y border-[#1e2a4a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#f0c030] text-sm tracking-widest uppercase mb-4">Our Model</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Paris Front. India Power.</h2>
          <p className="text-[#a0b0cc] text-lg">
            We deliver European-standard industrial solutions from our base in Paris, France, backed by a world-class engineering and support team in India. The best of both worlds for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
