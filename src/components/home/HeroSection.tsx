import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroPainting from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed image */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroPainting}
          alt="Baroque still life masterpiece in gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </motion.div>

      {/* Overlapping text */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gallery-label mb-4 text-primary-foreground/70"
        >
          Est. 1987 — New York · London · Paris
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] max-w-4xl"
        >
          Where Art
          <br />
          <em className="italic">Transcends</em>
          <br />
          Time
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-8 flex gap-6 items-center"
        >
          <a href="#exhibitions" className="text-gallery-label text-primary-foreground/80 hover:text-primary-foreground transition-colors border-b border-primary-foreground/30 pb-1">
            View Exhibitions
          </a>
          <a href="#auctions" className="text-gallery-label text-primary-foreground/80 hover:text-primary-foreground transition-colors border-b border-primary-foreground/30 pb-1">
            Current Auctions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
