import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  tag?: string;
  image?: string;
}

export function PageHero({ title, subtitle, tag, image }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-24 px-4 md:px-8 overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-widest uppercase mb-6"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl mb-6 max-w-3xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 h-px w-24 bg-[#d4af37] origin-left"
        />
      </div>
    </section>
  );
}
