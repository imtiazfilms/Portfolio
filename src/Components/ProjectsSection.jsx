import { motion } from "framer-motion";

const projects = [
  {
    title: "Go Visa Flow",
    description:
      "Visa navigation system with step-by-step application process, dashboard role handling, and personalized tracking.",
    image: "https://i.ibb.co/fz2ZYvLh/go-visa-flow.png",
    liveLink: "https://govisaflow.netlify.app/",
    github: "https://github.com/imtiazfilms/go-visa-flow-client",
    tech: ["React", "Express", "JWT", "MongoDB"],
  },
  {
    title: "Artifact Tracker",
    description:
      "An innovative platform for tracking artifacts with authentication, protected routes, and user dashboards.",
    image: "https://i.ibb.co/tMQgp7NK/artifact-vault.png",
    liveLink: "https://artifacts-vault.netlify.app/",
    github: "https://github.com/imtiazfilms/artifact-tracker-client",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "FitFusion",
    description:
      "A modern fitness dashboard for members, trainers, and admins. Includes role-based access, cart/wishlist features, and user profile control.",
    image: "https://i.ibb.co/JjJm0F6c/fit-fusion.png",
    liveLink: "https://fitfusion-im.netlify.app/",
    github: "https://github.com/imtiazfilms/fitfusion-client",
    tech: ["React", "Tailwind", "Firebase", "MongoDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-6 text-left space-y-4">
                <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyan-700/30 text-cyan-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-start gap-6 pt-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-200 transition"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>

              {/* Gradient Glow Border */}
              <div className="absolute -inset-[2px] rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-cyan-400/30 via-transparent to-purple-400/30 z-[-1]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
