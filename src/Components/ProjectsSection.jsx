import { motion } from "framer-motion";

const projects = [
  {
    title: "Go Visa Flow",
    description:
      "Visa navigation system with step-by-step application process, dashboard role handling, and personalized tracking.",
    image: "https://i.ibb.co/fz2ZYvLh/go-visa-flow.png",
    liveLink: "https://govisaflow.netlify.app/",
    github: "https://github.com/imtiazfilms/GoVisaFlow-clint-Side",
    tech: ["React", "Express", "JWT", "MongoDB"],
  },
  {
    title: "Artifact Tracker",
    description:
      "An innovative platform for tracking artifacts with authentication, protected routes, and user dashboards.",
    image: "https://i.ibb.co/tMQgp7NK/artifact-vault.png",
    liveLink: "https://artifacts-vault.netlify.app/",
    github: "https://github.com/imtiazfilms/Artifact-Vault-clint-Side",
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
        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Latest Projects</h2>

        {/* Project Grid */}
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

        {/* View More Button */}
        <div className="mt-16">
          <a
            href="https://github.com/imtiazfilms?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-cyan-300 border border-cyan-400 hover:bg-cyan-600/10 rounded-full transition-all duration-300"
          >
            <span>View More on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.3-3.9-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.8 1.8 2.9 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.4 1.3.9-.3 1.9-.5 2.8-.5s1.9.2 2.8.5c2.4-1.6 3.4-1.3 3.4-1.3.6 1.5.2 2.6.1 2.9.8.9 1.2 2 1.2 3.3 0 4.5-2.6 5.5-5.1 5.8.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
