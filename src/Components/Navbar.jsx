const Navbar = () => {
  return (
    <nav
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2
                 w-2/5 max-w-md
                 bg-white bg-opacity-20 backdrop-blur-lg
                 rounded-full
                 border border-gray-300 border-opacity-30
                 shadow-lg
                 flex justify-around items-center
                 py-3 px-6
                 z-50"
    >
      {[
        { src: "https://i.ibb.co/ybkxGN8/icons8-home-32.png", alt: "Home" },
        { src: "https://i.ibb.co/qFjTYtqL/icons8-user-24.png", alt: "About" },
        { src: "https://i.ibb.co/KjRDYWDR/icons8-group-of-projects-50.png", alt: "Projects" },
        { src: "https://i.ibb.co/jkX1qpX9/icons8-education-50.png", alt: "Education" }
      ].map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center transition-transform duration-200 hover:scale-110 hover:drop-shadow-md"
        >
          <img className="h-[20px] w-[20px]" src={item.src} alt={item.alt} />
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
