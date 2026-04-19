import { useState } from "react";
import {
  SiPython, SiJavascript, SiHtml5, SiTailwindcss,
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiGithub
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("core");

  const tabs = [
    { id: "core", label: "Core" },
    { id: "programming", label: "Programming" },
    { id: "tools", label: "Tools" },
    { id: "ai", label: "AI / ML" },
  ];

  const skillsData = {
    core: [
      { name: "Data Structures & Algorithms", icon: <BsCodeSlash /> },
      { name: "Web Development", icon: <BsCodeSlash /> },
      { name: "Operating System", icon: <BsCodeSlash /> },
      { name: "DBMS", icon: <BsCodeSlash /> },
    ],
    programming: [
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: <BsCodeSlash /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    tools: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <BsCodeSlash /> },
    ],
    ai: [
      { name: "Machine Learning", icon: <BsCodeSlash /> },
      { name: "Generative AI", icon: <BsCodeSlash /> },
      { name: "RAG Systems", icon: <BsCodeSlash /> },
    ],
  };

  return (
    <section
      id="skills"
      className="bg-white dark:bg-[#0d0d0d] text-black dark:text-white py-20 px-4 sm:px-8 md:px-16 transition"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-12">
          A categorized view of my{" "}
          <span className="text-purple-400">technical expertise</span>
        </p>

        {/* Tabs */}
        <div className="flex justify-start sm:justify-center overflow-x-auto gap-3 sm:gap-4 mb-12 pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium
                transition-all duration-300 border
                ${
                  activeTab === tab.id
                    ? "bg-purple-400 text-black border-purple-400 shadow-[0_0_12px_#a78bfa66]"
                    : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-purple-400 hover:text-purple-400"
                }
              `}
            >
              {tab.label}

              {/* Active underline */}
              {activeTab === tab.id && (
                <span className="absolute left-2 right-2 -bottom-1 h-[2px] bg-purple-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillsData[activeTab].map((skill, i) => (
            <div
              key={i}
              className="
                group relative p-5 rounded-xl
                bg-white/40 dark:bg-white/5 backdrop-blur-lg
                border border-purple-400/10
                hover:border-purple-400/40
                hover:-translate-y-2
                hover:shadow-[0_0_25px_#a78bfa55]
                transition-all duration-300
                flex items-center gap-4
              "
            >
              {/* Icon */}
              <div className="text-3xl text-purple-400 group-hover:scale-125 transition duration-300">
                {skill.icon}
              </div>

              {/* Text */}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-400 transition">
                {skill.name}
              </span>

              {/* Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-purple-500/5 blur-xl transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}