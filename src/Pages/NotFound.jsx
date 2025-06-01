import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 relative shadow-2xl"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-500/20 blur-lg opacity-0 hover:opacity-100 transition-all duration-500 z-[-1]" />

        <h1 className="text-7xl md:text-9xl font-extrabold text-cyan-400 drop-shadow-glow mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Oops! Page not found
        </h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition-all"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
