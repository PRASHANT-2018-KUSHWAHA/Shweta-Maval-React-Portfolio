import { motion } from "motion/react";
import { Play, Search, Clock, Eye, Youtube } from "lucide-react";

const categories = ["All Videos", "Behind the Scenes", "Interviews", "Cinematography Tips", "Gear Reviews"];

const videos = [
  {
    title: "The Art of the Audition",
    category: "Acting Tips",
    duration: "08:45",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_0.png",
    desc: "How to prepare for high-stakes auditions and make a lasting impression on casting directors."
  },
  {
    title: "Hosting Live Events",
    category: "Emcee Tips",
    duration: "24:10",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_1.png",
    desc: "Mastering the stage: my top strategies for engaging large audiences and keeping the energy high."
  },
  {
    title: "Behind the Scenes: Fashion Shoot",
    category: "Behind the Scenes",
    duration: "12:30",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_2.png",
    desc: "A look into the collaborative process of a high-fashion editorial shoot."
  },
  {
    title: "My Journey in the Industry",
    category: "Vlog",
    duration: "18:55",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_0.png",
    desc: "Reflecting on the challenges and triumphs of my career as an actress and model.",
    large: true
  },
  {
    title: "Essential Gear for Vloggers",
    category: "Gear Reviews",
    duration: "06:20",
    image: "https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_1.png",
    desc: "The cameras, lights, and mics I use to create high-quality content on the go."
  }
];

export default function Vlogs() {
  return (
    <div className="pt-32 pb-20">
      {/* Featured Video */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="relative group overflow-hidden rounded-3xl bg-white shadow-2xl border border-brand-ink/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-8 aspect-video relative overflow-hidden">
              <img 
                alt="Featured Video" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIFUyYKZmaOwg16B0LTLmCxYQi7KYijb8TioFDcgW41hyve9n9HNxa-sKxwZtuQZsxbjQv1GVScp5a0D2KBDvPjSXGQxoGaefwG8NQ255pQ-dbE9Qi6uBSfurnu8K-wemcZgoo3LO6CJfWwtivUfQfZB53D_ZFVumnJWiRNi_YL0O16jyNFnoCDBGsF-X2JX7dXwJS3x9be5VvlybFeVwjnHdPSx0oViWvS44sPO9ngRGj1fCpIe866u9Ztxz0u0LoH-d64VSURg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/20 flex items-center justify-center group-hover:bg-brand-ink/10 transition-all duration-500">
                <button className="w-24 h-24 bg-brand-coral rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                  <Play className="text-white fill-white" size={32} />
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 p-12 flex flex-col justify-center border-l border-brand-ink/5">
              <span className="text-[10px] text-brand-coral tracking-[0.2em] uppercase font-bold mb-4">Newest Release</span>
              <h1 className="text-4xl font-headline font-bold text-brand-ink mb-6 leading-tight">Capturing the Essence of Midnight</h1>
              <p className="text-brand-muted mb-8 font-light leading-relaxed">Join me behind the lens as we explore the challenges and beauty of low-light cinematography in the heart of the city.</p>
              <div className="flex items-center gap-6 text-[10px] text-brand-muted font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Clock size={14} /> 14:22</span>
                <span className="flex items-center gap-2"><Eye size={14} /> 42k views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-brand-ink/5">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat, idx) => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all ${
                  idx === 0 ? "bg-brand-coral text-white" : "bg-brand-ink/5 text-brand-ink hover:bg-brand-ink/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" size={16} />
            <input 
              className="w-full bg-brand-ink/5 text-sm rounded-full pl-12 pr-6 py-3 border-none focus:ring-2 focus:ring-brand-coral/20 placeholder:text-brand-muted/50" 
              placeholder="Search archive..." 
              type="text"
            />
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video, idx) => (
            <motion.div 
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer ${video.large ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden rounded-2xl mb-6 shadow-lg ${video.large ? "aspect-[21/9]" : "aspect-video"}`}>
                <img 
                  alt={video.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src={video.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-brand-ink/80 px-2 py-1 text-[10px] font-bold text-white rounded">
                  {video.duration}
                </div>
                <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="text-white fill-white" size={32} />
                </div>
              </div>
              <span className="text-[10px] text-brand-coral tracking-widest uppercase mb-2 block font-bold">{video.category}</span>
              <h3 className={`font-headline font-bold text-brand-ink group-hover:text-brand-coral transition-colors ${video.large ? "text-3xl" : "text-xl"}`}>
                {video.title}
              </h3>
              <p className="text-sm text-brand-muted mt-3 line-clamp-2 font-light">{video.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-brand-ink text-white p-16 rounded-3xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
          </div>
          
          <Youtube className="text-brand-coral mb-8" size={64} />
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Never Miss a Frame</h2>
          <p className="text-white/70 max-w-xl mb-12 leading-relaxed font-light">
            Subscribe to the official YouTube channel for weekly deep-dives into the world of cinematic storytelling, gear reviews, and exclusive BTS content.
          </p>
          
          <button className="bg-brand-coral text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-coral/40">
            <Youtube size={24} />
            SUBSCRIBE TO MY CHANNEL
          </button>
          
          <div className="mt-12 flex items-center gap-12 text-white/40">
            <div className="flex flex-col">
              <span className="font-bold text-white text-2xl">120K+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Subscribers</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-2xl">15M+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Total Views</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
