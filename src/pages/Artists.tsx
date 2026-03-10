import GalleryNavbar from "@/components/GalleryNavbar";
import CustomCursor from "@/components/CustomCursor";
import { GalleryFooter } from "@/components/home/CatalogAndFooter";
import { motion } from "framer-motion";

const artists = [
  { name: "Elena Vasquez", specialty: "Contemporary Abstract", origin: "Madrid, Spain", initials: "EV" },
  { name: "Marcus Chen", specialty: "Sculptural Installation", origin: "Shanghai, China", initials: "MC" },
  { name: "Isabelle Fournier", specialty: "Neo-Impressionism", origin: "Lyon, France", initials: "IF" },
  { name: "James Whitfield", specialty: "Conceptual Photography", origin: "London, UK", initials: "JW" },
  { name: "Akiko Yamamoto", specialty: "Minimalist Ceramics", origin: "Kyoto, Japan", initials: "AY" },
  { name: "Rafael Dominguez", specialty: "Old Master Restoration", origin: "Florence, Italy", initials: "RD" },
];

const Artists = () => (
  <div className="cursor-none md:cursor-none">
    <CustomCursor />
    <GalleryNavbar />
    <main className="pt-24">
      <div className="section-padding">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gallery-label text-center mb-4">Our Represented</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-6xl text-center mb-20 text-foreground">
          Artists
        </motion.h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group cursor-pointer text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-canvas flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                <span className="font-display text-3xl text-canvas-foreground group-hover:text-primary-foreground transition-colors duration-500">{artist.initials}</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-1">{artist.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{artist.specialty}</p>
              <p className="text-gallery-label">{artist.origin}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <GalleryFooter />
  </div>
);

export default Artists;
