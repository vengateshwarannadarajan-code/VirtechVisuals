import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <PageHero
        tag="Get in Touch"
        title="Let's Work Together"
        subtitle="Whether you're digitising a factory, launching a product, or building your brand — we'd love to hear about your project."
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-3xl mb-8">Contact Details</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-lg flex-shrink-0">
                <Mail className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-xs text-[#666] tracking-widest uppercase mb-1">Email</div>
                <a href="mailto:business@virtechvisuals.com" className="text-white hover:text-[#d4af37] transition-colors">
                  business@virtechvisuals.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-lg flex-shrink-0">
                <Phone className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-xs text-[#666] tracking-widest uppercase mb-1">Phone</div>
                <a href="tel:+33780843487" className="text-white hover:text-[#d4af37] transition-colors">
                  +33 7 80 84 34 87
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <div className="text-xs text-[#666] tracking-widest uppercase mb-1">Location</div>
                <p className="text-white">Paris, France</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#222] border border-[#2e2e2e] rounded-xl">
            <div className="font-display text-lg mb-2">Response Time</div>
            <p className="text-[#a0a0a0] text-sm">We respond to all enquiries within 24 hours on business days. For urgent matters, please call directly.</p>
          </div>
        </motion.div>

        {/* Simple form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display text-3xl mb-8">Send a Message</h2>
          <form
            action="mailto:business@virtechvisuals.com"
            method="get"
            encType="text/plain"
            className="space-y-5"
          >
            <div>
              <label className="block text-xs text-[#666] tracking-widest uppercase mb-2">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-[#222] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37]/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#666] tracking-widest uppercase mb-2">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#222] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37]/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#666] tracking-widest uppercase mb-2">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full bg-[#222] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37]/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#666] tracking-widest uppercase mb-2">Message</label>
              <textarea
                name="body"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-[#222] border border-[#2e2e2e] rounded-lg px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37]/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#d4af37] text-[#1a1a1a] rounded-lg hover:bg-[#f5f5f5] transition-all duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
