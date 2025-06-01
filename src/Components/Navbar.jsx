import React from "react";

const navItems = [
  { name: "Home", icon: "https://i.ibb.co/ybkxGN8/icons8-home-32.png", href: "#hero" },
  { name: "About", icon: "https://i.ibb.co/qFjTYtqL/icons8-user-24.png", href: "#about" },
  { name: "Skill", icon: "https://i.ibb.co/hRDWPgyj/icons8-skills-50.png", href: "#skill" },
  { name: "Projects", icon: "https://i.ibb.co/PGz1mQNT/icons8-programming-50-1.png", href: "#projects" },
  { name: "Education", icon: "https://i.ibb.co/jkX1qpX9/icons8-education-50.png", href: "#education" },
];

const Navbar = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl px-6 py-3 rounded-full space-x-6 md:space-x-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative flex flex-col items-center text-white transition hover:scale-110 duration-300"
          >
            <div className="bg-white/20 p-2 rounded-full shadow-md border border-white/10 group-hover:ring-2 group-hover:ring-cyan-400 transition-all duration-300">
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
            </div>
            <span className="absolute -top-8 text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 bg-gray-800 text-white px-2 py-1 rounded-md shadow-md">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
