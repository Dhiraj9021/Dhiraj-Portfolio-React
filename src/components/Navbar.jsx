import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const sections = ["home", "skills", "internship", "projects", "educations", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  /*  Theme Toggle */
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  /* Scroll Detection (FIXED CONTACT ISSUE) */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      sections.forEach((sec, index) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const top = el.offsetTop - 120;
        const height = el.offsetHeight;

        // Fix for last section (contact)
        if (index === sections.length) {
          if (scrollY + windowHeight >= fullHeight - 10) {
            setActive(sec);
          }
        } else {
          if (scrollY >= top && scrollY < top + height) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="
      fixed w-full z-50
      px-6 md:px-10 py-4
      flex justify-between items-center
      bg-white dark:bg-[#0d0d0d]
      text-black dark:text-white
      border-b border-gray-200 dark:border-purple-400/10
      backdrop-blur-md
      transition
    "
    >
      {/* LOGO */}
      <h1 className="text-xl md:text-2xl font-bold">
        Dhiraj Patil
        <span className="text-green-400">.</span>
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {sections.map((sec) => (
          <li
            key={sec}
            onClick={() => scrollToSection(sec)}
            className={`
              cursor-pointer capitalize relative font-medium
              transition
              ${
                active === sec
                  ? "text-purple-500"
                  : "text-gray-600 dark:text-gray-300 hover:text-purple-400"
              }
            `}
          >
            {sec}

            {/* UNDERLINE */}
            {active === sec && (
              <span
                className="
                absolute left-0 -bottom-1 w-full h-[2px]
                bg-purple-400 rounded-full
              "
              />
            )}
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* THEME TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="
           flex items-center justify-center
           w-9 h-9 rounded-full
           border border-purple-400/30
           text-purple-400
           hover:bg-purple-400 hover:text-black
           transition-all duration-300
         "
        >
          {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>

        {/* BUTTON */}
        <button
          onClick={() => scrollToSection("contact")}
          className="
            hidden md:block
            bg-purple-400 text-black
            px-4 py-2 rounded-full text-sm
            hover:shadow-[0_0_12px_#a78bfa88]
            transition
          "
        >
          Hire me
        </button>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
        absolute top-16 left-0 w-full
        bg-white dark:bg-[#111]
        flex flex-col items-center gap-6 py-6
        transition-all duration-300 md:hidden
        ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
      >
        {sections.map((sec) => (
          <p
            key={sec}
            onClick={() => scrollToSection(sec)}
            className={`
              capitalize text-sm
              ${
                active === sec
                  ? "text-purple-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300"
              }
            `}
          >
            {sec}
          </p>
        ))}

        <button
          onClick={() => scrollToSection("contact")}
          className="bg-purple-400 text-black px-5 py-2 rounded-full"
        >
          Hire me
        </button>
      </div>
    </nav>
  );
}