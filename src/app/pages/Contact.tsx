import { motion } from 'motion/react';
import { useI18n } from '../i18n/context';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { PageHero } from '../components/PageHero';

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-16">
      <PageHero
        tag={t('contact.tag')}
        title={t('contact.title')}
        subtitle={t('contact.sub')}
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=90&fit=crop&auto=format"
      />

      {/* Quick contact strip */}
      <section className="border-y border-[#222] bg-[#111] py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <a href="mailto:business@virtechvisuals.com" className="flex items-center gap-2 text-[#c0c0c0] hover:text-[#d4af37] transition-colors">
            <Mail className="w-4 h-4" /> business@virtechvisuals.com
          </a>
          <span className="hidden sm:block w-px h-4 bg-[#333]" />
          <a href="https://wa.me/33780843487" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c0c0c0] hover:text-[#d4af37] transition-colors">
            <MessageCircle className="w-4 h-4" /> +33 7 80 84 34 87
          </a>
          <span className="hidden sm:block w-px h-4 bg-[#333]" />
          <span className="flex items-center gap-2 text-[#c0c0c0]"><MapPin className="w-4 h-4" /> Paris, France</span>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm showSidebar={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
