import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const categories = ["All Works", "Actress", "Model", "Emcee"];

const projects = [
  {
    title: "Midnight Serenade",
    category: "Model / Fashion Editorial",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_0.png",
    cols: "md:col-span-8",
    height: "h-[600px]"
  },
  {
    title: "Commanding the Room",
    category: "Emcee / Live Events",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_1.png",
    cols: "md:col-span-4",
    height: "h-[600px]"
  },
  {
    title: "Frames of Emotion",
    category: "Actress / Film",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_2.png",
    cols: "md:col-span-4",
    height: "h-[400px]"
  },
  {
    title: "Architectural Grace",
    category: "Model / Portfolio",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_0.png",
    cols: "md:col-span-4",
    height: "h-[400px]"
  },
  {
    title: "The Art of Ceremony",
    category: "Emcee / Corporate",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_1.png",
    cols: "md:col-span-4",
    height: "h-[400px]"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Works");

  return (
    <div className="pt-32 pb-20">
      <header className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <span className="text-[10px] tracking-[0.2em] uppercase text-brand-coral mb-4 block font-bold">Capturing the Spotlight</span>
        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-brand-ink max-w-4xl leading-none">
          Visual <span className="italic text-brand-coral/80">Narratives</span> <br /> of a Performer.
        </h1>
        
        <div className="mt-12 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                activeFilter === cat 
                  ? "bg-brand-ink text-white border-brand-ink" 
                  : "bg-white text-brand-muted border-brand-ink/10 hover:border-brand-coral hover:text-brand-coral"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${project.cols} group relative overflow-hidden rounded-2xl bg-brand-ink/5`}
            >
              <img 
                className={`w-full ${project.height} object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100`}
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] tracking-widest uppercase text-brand-coral mb-2 block font-bold">{project.category}</span>
                <h3 className="text-3xl font-headline text-white font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center py-24 bg-white rounded-3xl relative overflow-hidden border border-brand-ink/5 shadow-2xl shadow-brand-ink/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headline text-[12rem] font-bold text-brand-ink/[0.02] whitespace-nowrap pointer-events-none select-none">
            COLLAB
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-brand-ink mb-8 relative z-10">
            Let's Create <span className="text-brand-coral italic">Together</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto mb-12 relative z-10 font-light">
            Available for international film projects, high-fashion editorials, and premier event hosting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <button className="group flex items-center gap-3 bg-brand-coral text-white px-10 py-5 rounded-xl font-bold tracking-tight transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-coral/20">
              Schedule a Collaboration
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-brand-ink/10 text-brand-ink font-bold tracking-tight rounded-xl hover:bg-brand-ink/5 transition-all">
              View Rate Card
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
