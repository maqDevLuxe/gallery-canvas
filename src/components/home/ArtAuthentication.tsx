import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ArtAuthentication = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gallery-label mb-4"
          >
            Trust & Integrity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-tight"
          >
            Art Authentication
            <br />
            & <em className="italic">Provenance</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground leading-relaxed mb-8"
          >
            Every work passing through Maison Lumière undergoes rigorous authentication 
            by our panel of independent experts. We provide comprehensive provenance 
            documentation, scientific analysis, and blockchain-verified certificates 
            of authenticity for complete peace of mind.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            href="#"
            className="text-gallery-label text-foreground hover:text-muted-foreground transition-colors border-b border-foreground/20 pb-1"
          >
            Learn About Our Process
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          {[
            { step: "01", title: "Expert Assessment", desc: "Panel review by certified art historians" },
            { step: "02", title: "Scientific Analysis", desc: "X-ray, infrared, and pigment testing" },
            { step: "03", title: "Provenance Research", desc: "Complete ownership history verification" },
            { step: "04", title: "Digital Certificate", desc: "Blockchain-verified authenticity record" },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 items-start">
              <span className="font-display text-2xl text-gold-muted">{item.step}</span>
              <div>
                <h4 className="font-display text-lg text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtAuthentication;
