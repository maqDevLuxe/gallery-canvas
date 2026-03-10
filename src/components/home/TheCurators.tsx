import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const curators = [
  { name: "Dr. Helena Marchand", role: "Chief Curator, European Art", initials: "HM" },
  { name: "James Whitfield", role: "Director, Contemporary Collections", initials: "JW" },
  { name: "Yuki Tanaka", role: "Senior Curator, Asian Art", initials: "YT" },
];

const TheCurators = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-gallery-label text-center mb-4"
      >
        Expertise
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl md:text-5xl text-center mb-16 text-foreground"
      >
        The Curators
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {curators.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-canvas flex items-center justify-center">
              <span className="font-display text-2xl text-canvas-foreground">{c.initials}</span>
            </div>
            <h3 className="font-display text-xl text-foreground mb-1">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TheCurators;
