import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      className="text-white flex items-center justify-center px-4 py-20"
      id="about"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">About Me</h2>

        <p className="text-gray-300 text-lg leading-relaxed text-justify">
          I’m <span className="font-semibold text-white">Imtiaz Ahamed</span>, a dedicated{" "}
          <span className="text-cyan-300">Frontend Developer</span> with a solid foundation in
          <span className="text-white"> HTML</span>, <span className="text-white">CSS</span>,{" "}
          <span className="text-white">JavaScript</span>, and <span className="text-white">React.js</span>.
          I specialize in crafting clean, responsive, and intuitive user interfaces that focus on
          great user experiences.
        </p>

        <p className="text-gray-400 mt-4 text-base text-justify">
          I work confidently with modern tools like{" "}
          <span className="text-white">Tailwind CSS</span>, <span className="text-white">GitHub</span>, and the{" "}
          <span className="text-white">MERN stack</span>. I’m passionate about continuous learning
          and enjoy pushing my limits through challenging side projects and new technologies.
        </p>

        <p className="text-gray-400 mt-4 text-base text-justify">
          I’m actively looking for <span className="text-cyan-300 font-medium">internships</span> or{" "}
          <span className="text-cyan-300 font-medium">junior frontend roles</span> where I can grow,
          collaborate with skilled developers, and contribute to impactful projects. Let's build
          something amazing together!
        </p>

        <p className="text-sm text-gray-500 mt-6 italic text-center">
          Beyond coding, I enjoy reading, UI design inspiration, and creative problem-solving.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
