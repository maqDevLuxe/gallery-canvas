import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";

const exhibitions = [
  {
    title: "Echoes of the Sublime",
    date: "Mar 15 — Jun 30, 2026",
    location: "New York",
    image: painting1,
  },
  {
    title: "Renaissance Reimagined",
    date: "Apr 1 — Aug 15, 2026",
    location: "London",
    image: painting2,
  },
  {
    title: "Form & Void",
    date: "May 10 — Sep 20, 2026",
    location: "Paris",
    image: painting3,
  },
];

const CurrentExhibitions = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="exhibitions" className="section-padding bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-gallery-label text-center mb-4"
      >
        Now Showing
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-display text-3xl md:text-5xl text-center mb-16 text-foreground"
      >
        Current Exhibitions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto">
        {exhibitions.map((ex, i) => (
          <motion.div
            key={ex.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-5">
              <img
                src={ex.image}
                alt={ex.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p className="text-gallery-label mb-2">{ex.location}</p>
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">{ex.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{ex.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentExhibitions;
