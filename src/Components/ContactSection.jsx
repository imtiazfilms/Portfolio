import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u8b2lv7",
        "template_1tymb0f",
        form.current,
        "LSTMgozVYeamZkDgH"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thanks for reaching out. I’ll get back to you soon!",
            icon: "success",
            confirmButtonColor: "#06b6d4",
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonColor: "#ef4444",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Info Section */}
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-cyan-400">📬 Let's Connect</h2>
          <p className="text-gray-300 text-lg">
            I’m open to collaboration, opportunities, or just a friendly hello!
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" />
              <span>imtiazahamed.angkur@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-cyan-400" />
              <span>+880 1324204740</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/5 p-8 rounded-3xl shadow-lg backdrop-blur-md space-y-6 relative border border-white/10"
        >
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-500/20 blur-md opacity-0 hover:opacity-100 transition-all duration-500 z-[-1]" />
          <h3 className="text-2xl font-semibold text-cyan-300">Send a Message</h3>

          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-cyan-400 placeholder-transparent peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400 transition-all duration-300">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-cyan-400 placeholder-transparent peer"
            />
            <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400 transition-all duration-300">
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-cyan-400 placeholder-transparent peer"
            ></textarea>
            <label className="absolute left-0 top-2 text-gray-400 text-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400 transition-all duration-300">
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-md transition-all"
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
