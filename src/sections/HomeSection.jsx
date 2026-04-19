import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";


const ROLES = [
  "MERN Stack Developer",
  "Tech Explorer",
  "Data Science Enthusiast",
  "Problem Solver",
];

function useTypewriter(words) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi];
    let t;

    if (!del) {
      t = setTimeout(() => {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) {
          setTimeout(() => setDel(true), 1800);
        } else {
          setCi((c) => c + 1);
        }
      }, 80);
    } else {
      t = setTimeout(() => {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDel(false);
          setWi((i) => (i + 1) % words.length);
          setCi(0);
        } else {
          setCi((c) => c - 1);
        }
      }, 45);
    }

    return () => clearTimeout(t);
  }, [ci, del, wi, words]);

  return display;
}

export default function HomeSection() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-white dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#111]
        text-black dark:text-white
        flex items-center
        px-4 sm:px-10 md:px-16 lg:px-20
        pt-[80px] pb-10
        transition
      "
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12">

        {/* LEFT */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Role pill */}
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-400/20 rounded-full px-4 py-[5px] mb-5">
            <span className="w-[6px] h-[6px] rounded-full bg-purple-400" />
            <span className="text-purple-400 text-[0.7rem] uppercase tracking-wider">
              Software Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="font-extrabold leading-tight text-3xl md:text-5xl mb-3">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Dhiraj Patil
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start mb-5">
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              I'm also a
            </span>
            <span className="text-purple-400 font-bold text-lg">
              {role}
              <span className="inline-block w-[2px] h-[1em] bg-purple-400 ml-1 animate-pulse" />
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-[460px] mb-8">
            Data Science student and aspiring software developer passionate about AI and Machine Learning.
            I build scalable and impactful solutions that merge technology with creativity to solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10">

            {/* Resume */}
            <a
              href="/Dhiraj_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-400 text-black px-6 py-2 rounded-full text-sm hover:shadow-[0_0_16px_#a78bfa66] transition"
            >
              Resume
            </a>

            {/* Download */}
            <a
              href="/Dhiraj_resume.pdf"
              download
              className="flex items-center gap-2 border border-purple-400 text-purple-400 px-4 py-2 rounded-full text-sm hover:bg-purple-400 hover:text-black transition"
            >
              <FaDownload />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">

              {[
                { Icon: FaGithub, link: "https://github.com/Dhiraj9021" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/dhirajpatil2005/" },
              
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 rounded-full
                    border border-gray-300 dark:border-purple-400/20
                    text-gray-700 dark:text-purple-400
                    hover:bg-purple-400 hover:text-black
                    hover:shadow-[0_0_12px_#a78bfa66]
                    transition-all duration-300
                  "
                >
                  <Icon />
                </a>
              ))}

            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              
              { num: "6", label: "Projects" },
              { num: "7", label: "Technologies" },
              { num: "500", label: "Commits" },


            ].map(({ num, label }) => (
              <div key={label}>
                <span className="text-purple-400 font-bold text-2xl">
                  {num}
                </span>
                <p className="text-gray-500 text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[340px] md:h-[340px]">

          {/* Rotating Ring */}
          <svg
            className="absolute w-full h-full animate-[spin_25s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="rgba(167,139,250,0.6)"
              strokeWidth="1.2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
          </svg>

          {/* Glow */}
          <div className="absolute w-[70%] h-[70%] rounded-full bg-purple-500/10 blur-2xl" />

          {/* Image */}
          <img
            src="src/image/circle1.png"
            alt="Dhiraj Patil"
            className="w-[85%] h-[85%] object-cover rounded-full z-10"
          />
        </div>

      </div>
    </section>
  );
}