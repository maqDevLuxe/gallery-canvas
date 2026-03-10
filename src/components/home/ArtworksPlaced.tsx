import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { value: 12400, label: "Artworks Placed", suffix: "+" },
  { value: 87, label: "Private Collections", suffix: "" },
  { value: 34, label: "Museum Acquisitions", suffix: "" },
  { value: 156, label: "Gallery Shows", suffix: "" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-5xl text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ArtworksPlaced = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
          >
            <AnimatedCounter target={c.value} suffix={c.suffix} />
            <p className="text-gallery-label mt-3">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArtworksPlaced;
