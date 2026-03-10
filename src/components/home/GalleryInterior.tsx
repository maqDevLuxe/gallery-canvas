import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryInterior from "@/assets/gallery-interior.jpg";

const GalleryInterior = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={galleryInterior}
          alt="Maison Lumière gallery interior"
          className="w-full h-[60vh] md:h-[80vh] object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-24"
      >
        <p className="text-gallery-label text-primary-foreground/70">Maison Lumière, New York</p>
      </motion.div>
    </section>
  );
};

export default GalleryInterior;
