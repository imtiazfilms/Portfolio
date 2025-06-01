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
    <section className="min-h-screen bg-[#131635f8] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Floating Skills with motion */}
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold left-10 top-20">MongoDB</motion.span>
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold right-10 top-32">JavaScript</motion.span>
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold left-20 bottom-20">React</motion.span>
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold right-16 bottom-10">Next.js</motion.span>
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold top-1/2 -rotate-90 right-2">
        <div className="flex flex-col items-center">
            <p>Scroll Down</p>
            <img className="h-[80px] w-[80px]" src="https://i.ibb.co/xSygGXKk/icons8-arrow-50-1.png" alt="arrow" />
        </div>
      </motion.span>
      <motion.span {...floatAnimation} className="absolute text-gray-400 font-bold left-10 top-1/3">GitHub</motion.span>

      {/* Social Icons Left */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
        <a href="https://www.linkedin.com/in/imtiaz-ahamed-b0939b307/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="w-5" /></a>
        <a href="https://www.facebook.com/cruise.imtiaz"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-5" /></a>
        <a href="https://github.com/imtiazfilms"><img src="https://i.ibb.co/6RHs6m2R/icons8-github-50.png" className="w-5" /></a>
        <div className="h-10 w-[1px] bg-white mt-1 opacity-20"></div>
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-sm font-light text-gray-300">Hello I am</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-white">Imtiaz Ahamed</h1>
        <p className="text-lg text-cyan-300 font-semibold transition-all duration-500">
          {text}
          <span className="text-white">|</span>
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://drive.usercontent.google.com/download?id=10ZFvntnYnpuEdgDQzpiVN11GQJlbR9te&export=download&authuser=0&confirm=t&uuid=c8f966e5-c0f4-41c8-989a-dd28d5ed3de1&at=ALoNOgkblEZ1vwp7ulPYV9pqkPXO:1748715207572"
            className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-md bg-cyan-400 hover:bg-cyan-500 text-black transition"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="mt-10 relative w-48 h-48 rounded-full bg-white bg-opacity-10 backdrop-blur-md border-white/50 shadow-xl overflow-hidden hover:scale-105 transition duration-500"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <img
          src="https://i.ibb.co/TMKtCW87/IMG-5533-fotor-20250531164014.png"
          alt="Imtiaz Ahamed"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-blue-400 transition duration-300" />
      </motion.div>

      {/* Sticky Navbar at bottom */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-2/5 max-w-md bg-white bg-opacity-20 backdrop-blur-lg rounded-full border border-gray-300 border-opacity-30 shadow-lg flex justify-around items-center py-3 px-6 z-50">
        <button className="flex flex-col items-center hover:scale-110 transition">
          <img className="h-[20px] w-[20px]" src="https://i.ibb.co/ybkxGN8/icons8-home-32.png" alt="Home" />
        </button>
        <button className="flex flex-col items-center hover:scale-110 transition">
          <img className="h-[20px] w-[20px]" src="https://i.ibb.co/qFjTYtqL/icons8-user-24.png" alt="About" />
        </button>
        <button className="flex flex-col items-center hover:scale-110 transition">
          <img className="h-[20px] w-[20px]" src="https://i.ibb.co/KjRDYWDR/icons8-group-of-projects-50.png" alt="Projects" />
        </button>
        <button className="flex flex-col items-center hover:scale-110 transition">
          <img className="h-[20px] w-[20px]" src="https://i.ibb.co/jkX1qpX9/icons8-education-50.png" alt="Education" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
