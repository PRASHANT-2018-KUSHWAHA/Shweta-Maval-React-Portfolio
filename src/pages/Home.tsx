import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import image1 from "../assets/image_1.png";
import image2 from "../assets/image_2.png";
import image3 from "../assets/image_3.png";

const images = [image1, image2, image3];

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [shouldSlide, setShouldSlide] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setShouldSlide(true);
    }, 1500);

    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearTimeout(slideTimer);
      clearInterval(slideshowInterval);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative select-none">
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-[100] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12 pt-32"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-center flex-1"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-ink mb-4 font-headline leading-none">
                Eileen <br /> Grubba
              </h1>
              <p className="text-[10px] uppercase tracking-[0.5em] text-brand-coral mb-8 font-bold">
                ACTRESS, EMCEE, MODEL, VLOGGER
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEntered(true)}
                className="group relative flex justify-self-center items-center gap-6 px-10 py-4 rounded-full border border-brand-ink/10 hover:border-brand-coral transition-all duration-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-coral translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 text-xs uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors">
                  Enter Experience
                </span>
                <div className="relative z-10 w-10 h-10 rounded-full bg-brand-coral group-hover:bg-white flex items-center justify-center text-white group-hover:text-brand-coral transition-all duration-500">
                  <Play size={16} fill="currentColor" />
                </div>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: shouldSlide ? -40 : 0,
                opacity: 1,
              }}
              transition={{
                x: {
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: shouldSlide ? 0 : 0.5,
                },
                opacity: { duration: 1, delay: 0.5 },
              }}
              className="flex-1 h-[70vh] md:h-[90vh] relative flex items-end justify-center"
            >
              {/* Subtle Glow behind the subject */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-brand-coral/20 blur-[120px] rounded-full pointer-events-none"></div>

              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImageIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                    filter:
                      "blur(10px) drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
                  }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.05],
                    y: 0,
                    filter:
                      "blur(0px) drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.1,
                    y: -20,
                    filter:
                      "blur(10px) drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
                  }}
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 3, ease: "linear" },
                    y: { duration: 0.8 },
                    filter: { duration: 0.8 },
                  }}
                  alt="Eileen Grubba"
                  className="absolute bottom-0 h-full w-auto object-contain object-bottom will-change-[transform,filter]"
                  src={images[currentImageIndex]}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-paper/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full flex flex-col md:flex-row items-stretch relative pt-24"
          >
            {/* Left Side: Massive Image Section */}
            <div className="w-full md:w-[55%] h-full relative overflow-hidden flex items-end justify-center">
              {/* Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-coral to-[#8B2A23] z-0"></div>

              {/* Subtle Glow behind the subject */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-white/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

              <motion.div
                initial={{ opacity: 0, scale: 1.2, y: 100 }}
                animate={{ opacity: 1, scale: 1.1, y: 40 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full flex items-end justify-center relative z-10"
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={currentImageIndex}
                    initial={{
                      opacity: 0,
                      x: 50,
                      scale: 1.1,
                      filter:
                        "blur(10px) drop-shadow(0 30px 40px rgba(0,0,0,0.3))",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: [1.1, 1.2],
                      filter:
                        "blur(0px) drop-shadow(0 30px 40px rgba(0,0,0,0.3))",
                    }}
                    exit={{
                      opacity: 0,
                      x: -50,
                      scale: 1.25,
                      filter:
                        "blur(10px) drop-shadow(0 30px 40px rgba(0,0,0,0.3))",
                    }}
                    transition={{
                      opacity: { duration: 0.8 },
                      x: { duration: 0.8 },
                      scale: { duration: 3, ease: "linear" },
                      filter: { duration: 0.8 },
                    }}
                    alt="Eileen Grubba"
                    className="absolute bottom-0 h-[120%] w-auto object-contain object-bottom will-change-[transform,filter]"
                    src={images[currentImageIndex]}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Artistic Typography Overlay */}
              <div className="absolute top-1/2 left-10 -translate-y-1/2 z-0 pointer-events-none">
                <span className="text-[30vw] font-bold text-white/5 leading-none select-none font-headline">
                  EG
                </span>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-[45%] flex flex-col justify-center px-12 md:px-20 lg:px-28 relative z-10 border-l border-white/5">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] text-brand-coral mb-8 block font-bold">
                    BRING IN THE
                  </span>

                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-ink leading-[0.8] mb-12 font-headline">
                    Game-
                    <br />
                    <span className="serif-italic font-normal italic text-brand-coral">
                      Changer
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-brand-muted leading-relaxed mb-16 font-light max-w-md">
                    Actress, producer, writer, speaker, and advocate with a
                    knack for introducing people to their A-game.
                  </p>

                  <div className="flex flex-col gap-6">
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="group flex items-center justify-between w-full py-6 border-b border-brand-ink/10 text-brand-ink hover:text-brand-coral transition-all duration-500"
                    >
                      <span className="uppercase tracking-[0.3em] text-sm font-bold">
                        Public Speaking
                      </span>
                      <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-coral group-hover:border-brand-coral group-hover:text-white transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ x: 10 }}
                      className="group flex items-center justify-between w-full py-6 border-b border-brand-ink/10 text-brand-ink hover:text-brand-coral transition-all duration-500"
                    >
                      <span className="uppercase tracking-[0.3em] text-sm font-bold">
                        Consulting
                      </span>
                      <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-coral group-hover:border-brand-coral group-hover:text-white transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Vertical Decorative Text */}
                <div className="absolute right-8 bottom-12 hidden lg:block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="writing-vertical text-[9px] uppercase tracking-[1.2em] text-brand-muted/20 font-bold block"
                  >
                    ESTABLISHED ARTIST & ADVOCATE
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
