import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";

const masterpieces = [
  { title: "Convergence in Blue", artist: "Elena Vasquez", year: "2024", price: "$2.4M", image: painting1, tall: true },
  { title: "Portrait of Adelaide", artist: "After Van Dyck", year: "c. 1680", price: "$8.7M", image: painting2, tall: false },
  { title: "Embracing Forms", artist: "Marcus Chen", year: "2023", price: "$1.2M", image: painting3, tall: false },
  { title: "Golden Harvest", artist: "Impressionist School", year: "c. 1890", price: "$5.1M", image: painting4, tall: true },
];

const FeaturedMasterpieces = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-gallery-label text-center mb-4"
      >
        The Collection
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl md:text-5xl text-center mb-16 text-foreground"
      >
        Featured Masterpieces
      </motion.h2>

      {/* Asymmetrical grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {/* Large left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:col-span-7 group cursor-pointer"
        >
          <div className="overflow-hidden">
            <img src={masterpieces[0].image} alt={masterpieces[0].title} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h3 className="font-display text-lg text-foreground">{masterpieces[0].title}</h3>
              <p className="text-sm text-muted-foreground">{masterpieces[0].artist}, {masterpieces[0].year}</p>
            </div>
            <span className="text-gallery-label text-foreground">{masterpieces[0].price}</span>
          </div>
        </motion.div>

        {/* Right column - stacked */}
        <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
          {masterpieces.slice(1, 3).map((piece, i) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img src={piece.image} alt={piece.title} className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <h3 className="font-display text-lg text-foreground">{piece.title}</h3>
                  <p className="text-sm text-muted-foreground">{piece.artist}, {piece.year}</p>
                </div>
                <span className="text-gallery-label text-foreground">{piece.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full width bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="md:col-span-12 group cursor-pointer"
        >
          <div className="overflow-hidden">
            <img src={masterpieces[3].image} alt={masterpieces[3].title} className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h3 className="font-display text-lg text-foreground">{masterpieces[3].title}</h3>
              <p className="text-sm text-muted-foreground">{masterpieces[3].artist}, {masterpieces[3].year}</p>
            </div>
            <span className="text-gallery-label text-foreground">{masterpieces[3].price}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMasterpieces;
