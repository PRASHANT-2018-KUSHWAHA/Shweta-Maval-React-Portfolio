import { motion } from "motion/react";

const specs = [
  { label: "Height", value: "5'7\" (170cm)" },
  { label: "Eyes", value: "Hazel" },
  { label: "Hair", value: "Blonde" },
  { label: "Build", value: "Athletic / Elegant" },
];

const skills = [
  { title: "Dramatic Acting", desc: "Specializing in emotionally complex roles and character-driven narratives.", icon: "🎭" },
  { title: "Event Hosting", desc: "Professional emcee for high-profile corporate events and live broadcasts.", icon: "🎤" },
  { title: "Fashion Modeling", desc: "Extensive experience in editorial, commercial, and runway modeling.", icon: "📸" },
  { title: "Content Creation", desc: "Vlogger and storyteller sharing insights from the entertainment industry.", icon: "🎥" },
];

const awards = [
  { year: "2024", title: "Excellence in Performance", venue: "Global Arts Festival" },
  { year: "2022", title: "Best Supporting Actress", venue: "Independent Film Awards" },
  { year: "2020", title: "Top Content Creator", venue: "Digital Media Summit" },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-start mb-32">
        <div className="md:col-span-5 relative group">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-coral/30"></div>
          <img 
            alt="Eileen Grubba" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-2xl rounded-sm"
            src="https://ais-pre-22sk7euhleka435rpr2u6b-142698724020.asia-southeast1.run.app/input_file_0.png"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-coral/30"></div>
        </div>
        
        <div className="md:col-span-7 flex flex-col gap-8 md:pl-8">
          <div className="space-y-2">
            <p className="text-brand-coral font-bold text-[10px] tracking-[0.2em] uppercase">The Artist</p>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-tight -ml-1">
              Eileen<br /><span className="text-brand-ink/90">Grubba.</span>
            </h1>
          </div>
          
          <div className="space-y-6 text-brand-muted text-lg leading-relaxed max-w-xl">
            <p className="font-headline italic text-brand-ink text-xl border-l-4 border-brand-coral pl-6 py-2">
              "Every performance is a chance to connect and inspire."
            </p>
            <p>
              Eileen Grubba is a multi-talented actress, emcee, and model known for her captivating screen presence and professional versatility. With a career spanning across film, television, and live events, she brings a unique blend of elegance and intensity to every project.
            </p>
            <p>
              Her approach combines deep emotional intelligence with a sharp, professional edge—always striving to elevate the narrative and engage the audience in a meaningful way.
            </p>
          </div>
        </div>
      </section>

      {/* Specs & Skills */}
      <section className="bg-brand-ink/5 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-12">
              <h2 className="text-3xl font-headline font-bold">The Specs</h2>
              <div className="space-y-6">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline border-b border-brand-ink/10 pb-2">
                    <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">{spec.label}</span>
                    <span className="font-headline text-lg">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-12">
              <h2 className="text-3xl font-headline font-bold">Core Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.title} className="bg-white p-8 rounded-xl group hover:bg-brand-coral hover:text-white transition-all duration-300 shadow-sm">
                    <span className="text-3xl mb-4 block">{skill.icon}</span>
                    <h3 className="text-xl font-headline font-bold mb-2">{skill.title}</h3>
                    <p className="text-sm opacity-70">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="text-5xl font-headline font-bold">Recognition</h2>
          <div className="h-[1px] flex-grow bg-brand-ink/10 mx-8 hidden md:block"></div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-coral font-bold">Awards & Honors</p>
        </div>
        
        <div className="space-y-1">
          {awards.map((award) => (
            <div key={award.title} className="grid grid-cols-12 py-8 group hover:bg-brand-ink/5 px-6 rounded-xl transition-all duration-300 items-center">
              <div className="col-span-2 text-[10px] font-bold text-brand-muted/60">{award.year}</div>
              <div className="col-span-6 font-headline text-2xl group-hover:text-brand-coral transition-colors">{award.title}</div>
              <div className="col-span-4 text-right italic text-brand-muted font-light">{award.venue}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Break */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          <img 
            alt="Performance" 
            className="w-full h-full object-cover brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyzPAGmoPyVjKCt6lDOphKRYL-GXfLtkGdlvIgDGR-62d7f3uYO5UtjrtXcXqAXV_ICgWarBesvLQ-souFmfy_ENY5LX1O6jIgyM_E_EyIQG2aeZd776nJ9LgvRERPChQbRWaLlsmNTJW1oEk2WBdHCxYtGwrIX0c3PmwyoU-hFlI_dKVix5cwgl_7nmPeHIDpSpAOSsslSSbFLsCtG98-TpNJlNNLzZmaGAdOvIle17-9gnDeBaL9ywf5rfueQjJAjR8Azb_mhA"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 max-w-lg text-white">
            <h3 className="text-4xl font-headline font-bold mb-4">Capturing the unseen.</h3>
            <p className="text-white/80 font-light">Every role is an exploration of the spaces between words.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
