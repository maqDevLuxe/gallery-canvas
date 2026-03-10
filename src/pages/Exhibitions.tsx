import GalleryNavbar from "@/components/GalleryNavbar";
import CustomCursor from "@/components/CustomCursor";
import { GalleryFooter } from "@/components/home/CatalogAndFooter";
import { motion } from "framer-motion";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";

const exhibitions = [
  { title: "Echoes of the Sublime", date: "Mar 15 — Jun 30, 2026", location: "New York", image: painting1, status: "Now Open" },
  { title: "Renaissance Reimagined", date: "Apr 1 — Aug 15, 2026", location: "London", image: painting2, status: "Now Open" },
  { title: "Form & Void", date: "May 10 — Sep 20, 2026", location: "Paris", image: painting3, status: "Opening Soon" },
  { title: "Golden Landscapes", date: "Jun 1 — Oct 10, 2026", location: "Hong Kong", image: painting4, status: "Coming Soon" },
];

const Exhibitions = () => (
  <div className="cursor-none md:cursor-none">
    <CustomCursor />
    <GalleryNavbar />
    <main className="pt-24">
      <div className="section-padding">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gallery-label text-center mb-4">Current & Upcoming</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-6xl text-center mb-20 text-foreground">
          Exhibitions
        </motion.h1>
        <div className="max-w-6xl mx-auto space-y-20">
          {exhibitions.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={ex.image} alt={ex.title} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-gallery-label mb-2">{ex.status} · {ex.location}</p>
                <h2 className="font-display text-2xl md:text-4xl text-foreground mb-3">{ex.title}</h2>
                <p className="text-sm text-muted-foreground mb-6">{ex.date}</p>
                <a href="#" className="text-gallery-label text-foreground hover:text-muted-foreground transition-colors border-b border-foreground/20 pb-1">
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <GalleryFooter />
  </div>
);

export default Exhibitions;
