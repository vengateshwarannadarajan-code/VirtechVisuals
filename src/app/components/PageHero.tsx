import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  tag?: string;
  image: string;
  cta?: { label: string; to: string };
}

export function PageHero({ title, subtitle, tag, image, cta }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[520px] flex items-center overflow-hidden">

      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: 'center' }}
        />
        {/* Dark gradient overlay — crystal clear image with controlled darkness */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-16">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-black/30 backdrop-blur-sm text-[#d4af37] text-xs tracking-widest uppercase mb-6"
          >
            {tag}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-5xl md:text-7xl mb-6 max-w-3xl leading-tight text-white drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8"
        >
          {subtitle}
        </motion.p>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#e5c24a] transition-colors font-medium text-sm"
            >
              {cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 h-px w-24 bg-[#d4af37] origin-left"
        />
      </div>
    </section>
  );
}
