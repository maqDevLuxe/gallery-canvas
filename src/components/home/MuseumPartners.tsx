import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "The Metropolitan", "Tate Modern", "Musée d'Orsay", "Guggenheim",
  "Rijksmuseum", "Uffizi Gallery", "MoMA", "National Gallery"
];

const MuseumPartners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-gallery-label text-center mb-16"
      >
        Global Museum Partners
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex items-center justify-center py-4"
          >
            <span className="font-display text-lg md:text-xl text-muted-foreground text-center">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MuseumPartners;
