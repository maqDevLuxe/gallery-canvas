import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    category: "Market Analysis",
    title: "The Renaissance of Baroque: Why Old Masters Are Surging",
    excerpt: "A deep dive into the resurgence of classical European painting in contemporary auction houses.",
    date: "Feb 28, 2026",
  },
  {
    category: "Collector's Guide",
    title: "Building a Museum-Quality Collection on Any Budget",
    excerpt: "Expert strategies from our curators on acquiring significant works across price points.",
    date: "Feb 15, 2026",
  },
  {
    category: "Exhibition Preview",
    title: "Inside 'Echoes of the Sublime': A Curator's Perspective",
    excerpt: "Dr. Helena Marchand discusses the vision behind our most ambitious exhibition to date.",
    date: "Jan 30, 2026",
  },
];

const CollectorsJournal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-gallery-label text-center mb-4"
      >
        Insights
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl md:text-5xl text-center mb-16 text-foreground"
      >
        Art Collector's Journal
      </motion.h2>

      <div className="max-w-4xl mx-auto divide-y divide-border">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="py-8 md:py-10 group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <p className="text-gallery-label mb-2">{article.category}</p>
                <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-muted-foreground transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-lg">{article.excerpt}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{article.date}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default CollectorsJournal;
