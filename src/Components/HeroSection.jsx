import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React Developer", "MERN Stack Developer", "Web Enthusiast"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section id="hero" className="min-h-screen bg-[#131635f8] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl top-10 left-20 animate-pulse" />
      <div className="absolute w-60 h-60 bg-blue-400 opacity-10 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      {/* Floating Skills */}
      <motion.span {...floatAnimation} className="absolute left-10 top-20 px-3 py-1 bg-[#222a50] text-cyan-300 text-sm rounded-full shadow-md border border-cyan-500">MongoDB</motion.span>
      <motion.span {...floatAnimation} className="absolute right-10 top-32 px-3 py-1 bg-[#222a50] text-yellow-300 text-sm rounded-full shadow-md border border-yellow-500">JavaScript</motion.span>
      <motion.span {...floatAnimation} className="absolute left-20 bottom-20 px-3 py-1 bg-[#222a50] text-blue-300 text-sm rounded-full shadow-md border border-blue-500">React</motion.span>
      <motion.span {...floatAnimation} className="absolute right-16 bottom-10 px-3 py-1 bg-[#222a50] text-white text-sm rounded-full shadow-md border border-white">Next.js</motion.span>
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold top-1/2 -rotate-90 right-2">
        <div className="flex flex-col items-center">
          <p>Scroll Down</p>
          <motion.img animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-[60px] w-[60px]" src="https://i.ibb.co/xSygGXKk/icons8-arrow-50-1.png" alt="arrow" />
        </div>
      </motion.span>
      <motion.span {...floatAnimation} className="absolute left-10 top-1/3 px-3 py-1 bg-[#222a50] text-white text-sm rounded-full shadow-md border border-white">GitHub</motion.span>

      {/* Social Icons */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
        {[{
          href: "https://www.linkedin.com/in/imtiaz-ahamed-b0939b307/",
          src: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
        }, {
          href: "https://www.facebook.com/cruise.imtiaz",
          src: "https://cdn-icons-png.flaticon.com/512/733/733547.png"
        }, {
          href: "https://github.com/imtiazfilms",
          src: "https://i.ibb.co/6RHs6m2R/icons8-github-50.png"
        }].map((icon, index) => (
          <motion.a key={index} href={icon.href} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.2 }}>
            <img src={icon.src} className="w-5" />
          </motion.a>
        ))}
        <div className="h-10 w-[1px] bg-white mt-1 opacity-20"></div>
      </div>

      {/* Intro Text */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-sm font-light text-gray-300">Hello I am</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 drop-shadow-lg">
          Imtiaz Ahamed
        </h1>
        <p className="text-lg font-semibold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text transition-all duration-500">
          {text}<span className="text-white">|</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a
            href="https://drive.usercontent.google.com/download?id=10ZFvntnYnpuEdgDQzpiVN11GQJlbR9te&export=download"
            className="px-6 py-2 rounded-md bg-white bg-opacity-10 border border-cyan-300 hover:bg-opacity-20 backdrop-blur-md text-cyan-300 hover:text-white transition text-center"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-md bg-cyan-400 hover:bg-cyan-500 text-black transition text-center"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Profile Image with Ring */}
      <motion.div className="mt-10 relative w-48 h-48 rounded-full bg-white bg-opacity-10 backdrop-blur-md border-white/50 shadow-xl overflow-hidden hover:scale-105 transition duration-500"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 animate-spin-slow blur-sm" style={{ zIndex: -1 }}></div>
        <img src="https://i.ibb.co/TMKtCW87/IMG-5533-fotor-20250531164014.png" alt="Imtiaz Ahamed" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-blue-400 transition duration-300" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
