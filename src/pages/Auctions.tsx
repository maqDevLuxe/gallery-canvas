import GalleryNavbar from "@/components/GalleryNavbar";
import CustomCursor from "@/components/CustomCursor";
import { GalleryFooter } from "@/components/home/CatalogAndFooter";
import { motion } from "framer-motion";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";

const lots = [
  { title: "Convergence in Blue", artist: "Elena Vasquez", estimate: "$2.0M — $2.8M", currentBid: "$2,400,000", image: painting1, ends: "Mar 20, 2026" },
  { title: "Portrait of Adelaide", artist: "After Van Dyck", estimate: "$7.0M — $10.0M", currentBid: "$8,700,000", image: painting2, ends: "Mar 22, 2026" },
  { title: "Embracing Forms", artist: "Marcus Chen", estimate: "$800K — $1.5M", currentBid: "$1,200,000", image: painting3, ends: "Mar 25, 2026" },
  { title: "Golden Harvest", artist: "Impressionist School", estimate: "$4.0M — $6.0M", currentBid: "$5,100,000", image: painting4, ends: "Mar 28, 2026" },
];

const Auctions = () => (
  <div className="cursor-none md:cursor-none">
    <CustomCursor />
    <GalleryNavbar />
    <main className="pt-24">
      <div className="section-padding">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gallery-label text-center mb-4">Live & Upcoming</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-6xl text-center mb-20 text-foreground">
          Auctions
        </motion.h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {lots.map((lot, i) => (
            <motion.div
              key={lot.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4">
                <img src={lot.image} alt={lot.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-display text-xl text-foreground">{lot.title}</h3>
                  <p className="text-sm text-muted-foreground">{lot.artist}</p>
                </div>
                <span className="text-gallery-label text-foreground bg-canvas px-3 py-1">Live</span>
              </div>
              <div className="flex justify-between items-end mt-4 pt-4 border-t border-border">
                <div>
                  <p className="text-gallery-label mb-1">Current Bid</p>
                  <p className="font-display text-lg text-foreground">{lot.currentBid}</p>
                </div>
                <div className="text-right">
                  <p className="text-gallery-label mb-1">Estimate</p>
                  <p className="text-sm text-muted-foreground">{lot.estimate}</p>
                </div>
              </div>
              <p className="text-gallery-label mt-3 text-muted-foreground">Closes {lot.ends}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <GalleryFooter />
  </div>
);

export default Auctions;
