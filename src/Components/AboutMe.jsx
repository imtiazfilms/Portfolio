import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className=" text-white flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed text-justify">
          I’m a passionate and quick-learning frontend developer with a solid understanding of HTML, CSS, JavaScript, and React.js. I love transforming ideas into interactive, responsive, and user-centric interfaces. My focus is on writing clean, maintainable code and designing intuitive UI experiences.
        </p>
        <p className="text-gray-400 mt-4 text-base text-justify">
          With a strong curiosity and dedication to self-growth, I enjoy exploring new tools and technologies to stay current in this fast-paced field. I thrive in collaborative environments where I can grow alongside a supportive team and contribute meaningfully to real-world projects.
        </p>
        <p className="text-gray-400 mt-4 text-base text-justify">
          When I'm not coding, I like reading, exploring design inspiration, and working on side projects that challenge my creativity and logic. I'm excited to continue my journey as a frontend developer, learning something new every day.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
