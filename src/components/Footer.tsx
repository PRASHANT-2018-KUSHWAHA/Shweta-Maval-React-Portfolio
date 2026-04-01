import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-brand-paper border-t border-brand-ink/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
        <div className="text-lg font-headline font-bold text-brand-ink">
          Eileen Grubba
        </div>
        
        <div className="flex gap-8 font-medium text-[10px] uppercase tracking-widest text-brand-muted">
          <Link to="/privacy" className="hover:text-brand-coral transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand-coral transition-colors">Terms of Service</Link>
          <Link to="/press-kit" className="hover:text-brand-coral transition-colors">Press Kit</Link>
        </div>
        
        <div className="font-medium text-brand-muted/50 text-[10px] uppercase tracking-widest">
          © 2024. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
