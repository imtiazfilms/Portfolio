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
    <section className="text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 transition duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
              <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
