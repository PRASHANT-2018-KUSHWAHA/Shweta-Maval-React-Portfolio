import { motion } from "motion/react";
import { Mail, MapPin, Send, Globe, Video, Camera } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16 md:mb-24 relative">
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-coral mb-4 block font-bold">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-brand-ink max-w-3xl leading-[1.1]">
          Let's <span className="text-brand-coral italic">Create</span> Something Remarkable Together.
        </h1>
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-coral/5 blur-[120px] rounded-full -z-10"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Side */}
        <div className="lg:col-span-5 space-y-12">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-brand-ink/5 shadow-2xl">
              <img 
                alt="Contact Portrait" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD42iAMKv60uZ-QR34QCW-2TWMuQYdvs1PVSkc7rWKsLyazvuM7ZI5sQwcgmMcQPNVuG2ZiNfotZywmWqAlpi6IiO9sHQhE9dCqIzPSsnjFTqqmEV6lQTZEXHe_o2Prj6QpYi_gwk67uu3TCntS1PGshOC1TXMeXKtZS93SIah9nevwNO7i-YZCFTa-e8s0L4PGkVJPCv9S3ppJRjeexiW6HZXhTNjdGv-mWuLQ3Itgd8xOvaHwl6JvCqNf_BK3n3CQn1xqiwFzfg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-brand-ink/5 shadow-xl hidden md:block max-w-xs">
              <p className="font-headline text-lg text-brand-ink italic">"Vision is the art of seeing what is invisible to others."</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 space-y-10 relative overflow-hidden border border-brand-ink/5 shadow-sm">
            <div className="absolute top-0 right-0 p-8 text-brand-coral/5">
              <Mail size={120} />
            </div>
            
            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-3 font-bold">Direct Communication</h3>
                <a className="text-2xl font-headline text-brand-ink hover:text-brand-coral transition-colors" href="mailto:hello@cinematicmuse.com">
                  hello@cinematicmuse.com
                </a>
              </div>
              
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-3 font-bold">Representation</h3>
                <p className="text-xl font-headline text-brand-ink font-bold">The Creative Vanguard Agency</p>
                <p className="text-brand-muted font-light">Los Angeles, CA • London, UK</p>
              </div>
              
              <div className="pt-4 flex gap-6">
                <button className="text-brand-muted hover:text-brand-coral transition-colors"><Globe size={20} /></button>
                <button className="text-brand-muted hover:text-brand-coral transition-colors"><Video size={20} /></button>
                <button className="text-brand-muted hover:text-brand-coral transition-colors"><Camera size={20} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 md:p-12 rounded-3xl relative border border-brand-ink/5 shadow-xl">
            <h2 className="text-3xl font-headline font-bold mb-10 text-brand-ink">Project Inquiry</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-muted ml-1 font-bold">Name</label>
                  <input 
                    className="w-full bg-brand-ink/5 border-none rounded-xl p-5 text-brand-ink focus:ring-2 focus:ring-brand-coral/20 placeholder:text-brand-muted/30" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-muted ml-1 font-bold">Email</label>
                  <input 
                    className="w-full bg-brand-ink/5 border-none rounded-xl p-5 text-brand-ink focus:ring-2 focus:ring-brand-coral/20 placeholder:text-brand-muted/30" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted ml-1 font-bold">Subject</label>
                <input 
                  className="w-full bg-brand-ink/5 border-none rounded-xl p-5 text-brand-ink focus:ring-2 focus:ring-brand-coral/20 placeholder:text-brand-muted/30" 
                  placeholder="Commercial Production / Personal Branding" 
                  type="text"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted ml-1 font-bold">Message</label>
                <textarea 
                  className="w-full bg-brand-ink/5 border-none rounded-xl p-5 text-brand-ink focus:ring-2 focus:ring-brand-coral/20 placeholder:text-brand-muted/30 resize-none" 
                  placeholder="Tell me about your vision..." 
                  rows={6}
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  className="w-full md:w-auto bg-brand-coral text-white font-bold py-5 px-12 rounded-xl shadow-xl shadow-brand-coral/20 hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-3" 
                  type="submit"
                >
                  SEND MESSAGE
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 flex items-start gap-4 p-8 rounded-2xl bg-brand-ink/5">
            <MapPin className="text-brand-coral mt-1" size={24} />
            <div>
              <h4 className="font-bold text-brand-ink">Creative Studio</h4>
              <p className="text-sm text-brand-muted max-w-sm font-light">
                Current base: Los Angeles Arts District. Available worldwide for selected cinematic projects and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
