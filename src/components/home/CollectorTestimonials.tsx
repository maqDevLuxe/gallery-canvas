import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Maison Lumière transformed my understanding of collecting. Their curators don't just sell art—they build legacies.",
    author: "Victoria Ashford",
    title: "Private Collector, London",
  },
  {
    quote: "The provenance documentation alone sets them apart. Every acquisition feels secure and significant.",
    author: "David Chen",
    title: "Founder, Chen Family Collection",
  },
  {
    quote: "An extraordinary experience from viewing to acquisition. The VR rooms changed how I discover new artists.",
    author: "Isabelle Laurent",
    title: "Art Advisor, Paris",
  },
];

const CollectorTestimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary text-primary-foreground">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 text-center mb-4"
      >
        Voices
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl md:text-5xl text-center mb-16"
      >
        Collector Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="text-center"
          >
            <p className="font-display text-lg italic text-primary-foreground/80 mb-6 leading-relaxed">
              "{t.quote}"
            </p>
            <footer>
              <cite className="not-italic">
                <span className="block text-sm text-primary-foreground">{t.author}</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 mt-1">{t.title}</span>
              </cite>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default CollectorTestimonials;
