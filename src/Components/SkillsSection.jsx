import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "Tailwind CSS", icon: "https://i.ibb.co/LX9Q8m3Z/icons8-tailwindcss-48.png" },
  { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
  { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
  { name: "MongoDB Atlas", icon: "https://i.ibb.co/ZRcPR7Th/icons8-mongo-db-48.png" },
  { name: "Express JS", icon: "https://i.ibb.co/j96r8xgw/icons8-express-js-48-1.png" },
  { name: "Node js", icon: "https://i.ibb.co/93pJvHq0/icons8-nodejs-48.png" },
  { name: "Firebase Auth", icon: "https://i.ibb.co/6RCJmZ4p/icons8-google-firebase-console-48.png" },
  { name: "Framer Motion", icon: "https://i.ibb.co/60dS8pGq/164965509-2a8dc49e-2ed7-4243-a2c9-481b03bbc31a.png" },
];

const SkillsSection = () => {
  return (
    <section id="skill" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 tracking-wide">Technical Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center justify-center shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 min-h-[130px] overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3"
                />
                <p className="text-gray-200 text-sm font-semibold text-center">{skill.name}</p>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-cyan-400/10 rounded-2xl pointer-events-none z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
