import { Camera, Video, Instagram } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHero } from '../components/PageHero';

const services = [
  {
    icon: <Camera className="w-10 h-10 text-[#d4af37]" />,
    title: 'Photography',
    items: [
      'Brand & Commercial Photography',
      'Nail & fashion photography',
      'Beauty & salon photography',
      'Product photography',
      'Food & tiffin service photography',
    ],
  },
  {
    icon: <Video className="w-10 h-10 text-[#d4af37]" />,
    title: 'Videography',
    items: [
      'Instagram Reel videos',
      'Short promotional videos',
      'Process & behind-the-scenes',
      'Product showcase videos',
    ],
  },
  {
    icon: <Instagram className="w-10 h-10 text-[#d4af37]" />,
    title: 'Social Media',
    items: [
      'Visual content planning',
      'Consistent visual style',
      'Posting support (feed & reels)',
      'Profile presentation improvement',
    ],
  },
];

const images = [
  { url: 'https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?w=600', name: 'Fashion Editorial', category: 'Fashion' },
  { url: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600', name: 'Beauty Products', category: 'Product' },
  { url: 'https://images.unsplash.com/photo-1606143412458-acc5f86de897?w=600', name: 'Portrait Session', category: 'Fashion' },
  { url: 'https://images.unsplash.com/photo-1617650555983-eaf0230972c2?w=600', name: 'Food Styling', category: 'Food' },
  { url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600', name: 'Makeup Artistry', category: 'Beauty' },
  { url: 'https://images.unsplash.com/photo-1612928414075-bc722ade44f1?w=600', name: 'Studio Portrait', category: 'Fashion' },
  { url: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600', name: 'Skincare Line', category: 'Product' },
  { url: 'https://images.unsplash.com/photo-1636665516471-e94690edf10f?w=600', name: 'Culinary Art', category: 'Food' },
];

const pricing = [
  {
    name: 'Starter',
    price: '€299',
    popular: false,
    features: ['1 photoshoot session (2 hours)', '15 edited photos', 'Basic retouching'],
  },
  {
    name: 'Growth',
    price: '€599',
    popular: true,
    features: ['1 photoshoot + 2 reel videos', '30 edited photos + 2 reels', 'Advanced retouching', 'Social media captions'],
  },
  {
    name: 'Premium',
    price: '€999',
    popular: false,
    features: ['2 photoshoots + 5 reel videos', '50 edited photos + 5 reels', 'Premium retouching', '1 month posting support'],
  },
];

export default function CreativeStudio() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Creative Studio — Paris"
        title="Photography, Video & Social Content"
        subtitle="Premium visual content for brands that want to stand out — fashion, product, food, and beauty shot in our Paris studio or on location globally."
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1920"
      />

      {/* Services */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16"
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 bg-[#222] border border-[#2e2e2e] rounded-xl hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="flex justify-center mb-6">{s.icon}</div>
              <h3 className="font-display text-2xl mb-4">{s.title}</h3>
              <ul className="space-y-3 text-[#a0a0a0] text-sm">
                {s.items.map((item, ii) => (
                  <li key={ii}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-center mb-16"
        >
          Portfolio
        </motion.h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {images.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                  <h4 className="font-display text-xl mb-2">{image.name}</h4>
                  <p className="text-[#d4af37] text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 md:px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-center mb-16"
          >
            Pricing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-8 rounded-xl border ${
                  plan.popular ? 'border-[#d4af37] bg-[#1f1f1f]' : 'border-[#2e2e2e] bg-[#1a1a1a]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#1a1a1a] px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl mb-4">{plan.name}</h3>
                <div className="font-display text-5xl text-[#d4af37] mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-[#a0a0a0] text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#d4af37] text-[#1a1a1a] hover:bg-[#f5f5f5]'
                      : 'bg-[#2e2e2e] text-white hover:bg-[#3a3a3a]'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl mb-10">Why Choose Our Studio</h2>
            <ul className="space-y-5">
              {[
                'Elegant Parisian aesthetic tailored to your brand',
                'Fast 48–72 hour turnaround on all deliverables',
                'Content shot and optimised for Instagram & Reels',
                'Flexible packages for startups and growing brands',
                'Dedicated support from shoot to final delivery',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <p className="text-[#a0a0a0]">{b}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { n: '48h', l: 'Turnaround Time' },
              { n: '3-in-1', l: 'Photo, Video & Social' },
              { n: 'Paris', l: 'Based, Global Reach' },
              { n: '100%', l: 'Brand Focused' },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-[#222] border border-[#2e2e2e] rounded-xl text-center">
                <div className="font-display text-3xl text-[#d4af37] mb-2">{s.n}</div>
                <div className="text-[#a0a0a0] text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
