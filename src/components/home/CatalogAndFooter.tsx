import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CatalogCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  return (
    <section ref={ref} id="contact" className="section-padding bg-canvas">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-gallery-label mb-4"
        >
          Exclusive Access
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl md:text-5xl text-foreground mb-6"
        >
          Request a Private
          <br />
          <em className="italic">Catalog</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted-foreground mb-10 max-w-md mx-auto"
        >
          Receive our seasonal catalog featuring upcoming lots, exhibition previews, 
          and exclusive collector opportunities delivered to your residence.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-background border border-border px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
          />
          <button
            type="submit"
            className="bg-foreground text-background px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
          >
            Request
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const GalleryFooter = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-foreground mb-4">Maison Lumière</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The world's premier destination for museum-quality fine art and exclusive auctions.
            </p>
          </div>
          <div>
            <p className="text-gallery-label mb-4 text-foreground">Gallery</p>
            <ul className="space-y-2">
              {["Exhibitions", "Artists", "Auctions", "Private Viewings"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gallery-label mb-4 text-foreground">Services</p>
            <ul className="space-y-2">
              {["Authentication", "Art Advisory", "Collection Management", "Insurance"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gallery-label mb-4 text-foreground">Locations</p>
            <ul className="space-y-2">
              {["New York", "London", "Paris", "Hong Kong"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Maison Lumière. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy", "Terms", "Accessibility"].map((link) => (
              <a key={link} href="#" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CatalogCTA, GalleryFooter };
