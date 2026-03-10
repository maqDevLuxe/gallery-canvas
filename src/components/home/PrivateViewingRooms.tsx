import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import vrRoom from "@/assets/vr-room.jpg";

const PrivateViewingRooms = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src={vrRoom}
            alt="Private VR viewing room"
            className="w-full h-full object-cover min-h-[50vh]"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center section-padding bg-primary text-primary-foreground">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50 mb-6"
          >
            Immersive Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-display text-3xl md:text-5xl mb-6 leading-tight"
          >
            Private Viewing
            <br />
            <em className="italic">Rooms</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="font-body text-primary-foreground/70 max-w-md text-sm leading-relaxed mb-8"
          >
            Experience masterpieces in our state-of-the-art virtual reality suites. 
            Each private room offers an intimate, curator-guided journey through 
            collections spanning five centuries of artistic brilliance.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            href="#"
            className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60 hover:text-primary-foreground transition-colors border-b border-primary-foreground/20 pb-1 self-start"
          >
            Reserve a Session
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PrivateViewingRooms;
