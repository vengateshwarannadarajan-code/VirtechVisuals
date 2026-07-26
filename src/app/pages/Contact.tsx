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
