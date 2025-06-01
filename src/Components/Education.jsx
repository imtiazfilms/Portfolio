import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Northern University Bangladesh (Evening Shift)",
    details: "Expected Graduation: November 2028",
    icon: <FaUniversity className="text-3xl text-cyan-400" />,
  },
  {
    title: "Diploma in Electrical Engineering",
    institution: "Haji Abul Hossain Institute of Technology (HABHIT)",
    details: "Completed: December 2023 | CGPA: 3.08",
    icon: <FaGraduationCap className="text-3xl text-purple-400" />,
  },
  {
    title: "Secondary School Certificate (Science)",
    institution: "Sristy College of Tangail",
    details: "Completed: November 2019 | GPA: 3.17",
    icon: <FaSchool className="text-3xl text-pink-400" />,
  },
];

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="py-20 px-4 bg-gradient-to-br text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🎓 Education
        </motion.h2>

        <div className="grid md:grid-cols-2  gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 border border-white/10 p-6 rounded-3xl shadow-lg backdrop-blur-md hover:shadow-cyan-400/20 transition-all duration-300 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 blur-md z-[-1] transition-all duration-500" />

              <div className="flex items-start gap-4">
                <div className="shrink-0">{edu.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                  <p className="text-cyan-300 text-sm mt-1">{edu.institution}</p>
                  <p className="text-gray-300 text-sm mt-2">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
