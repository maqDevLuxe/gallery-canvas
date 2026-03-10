import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 247, suffix: "M+", label: "Total Auction Sales", prefix: "$" },
  { value: 1842, suffix: "", label: "Artworks Sold" },
  { value: 156, suffix: "", label: "Record-Setting Lots" },
  { value: 43, suffix: "", label: "Countries Represented" },
];

const Counter = ({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) => {
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
    <span ref={ref} className="font-display text-4xl md:text-6xl text-foreground">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const AuctionMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="auctions" className="section-padding bg-canvas">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-gallery-label text-center mb-16"
      >
        Auction Records
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto text-center">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Counter target={m.value} suffix={m.suffix} prefix={m.prefix} />
            <p className="text-gallery-label mt-3">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AuctionMetrics;
