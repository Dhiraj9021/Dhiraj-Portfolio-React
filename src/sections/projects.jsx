const projects = [
  {
    title: "Smart Expense Tracker (MyXpenso)",
    description:
      "Created a smart finance management application that helps users track expenses, analyze spending, and get AI-based financial insights securely.",
    image: "src/image/expense.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "bcrypt.js", "LLM"],
    live: "https://myxpenso.vercel.app/",
    github: "https://github.com/Dhiraj9021/Smart-Personal-Expenses-Tracker",
  },
  {
    title: "Vehicle Rental Website",
    description:
      "Built a website that allows users to browse, book, and manage vehicle rentals with secure authentication and real-time availability.",
    image: "src/image/vehicle.png",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
    live: "https://vehicle-rent-website.onrender.com/",
    github: "https://github.com/Dhiraj9021/Vehicle-rent-Website",
  },
  {
    title: "Employee Salary Prediction",
    description:
      "ML app to predict salaries using regression models. Users input job details and get salary predictions based on data.",
    image: "src/image/prediction.png",
    tech: ["Python", "Pandas", "ML", "Streamlit"],
    live: "https://github.com/Dhiraj9021/Employee-Salary-Prediction-App-",
    github: "https://github.com/Dhiraj9021/Employee-Salary-Prediction-App-",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio using React & Tailwind.",
    image: "src/image/portfolio.png",
    tech: ["React.js", "Tailwind", "MongoDB"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-white dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#111]
        text-black dark:text-white
        py-20 px-4 sm:px-10 md:px-16 lg:px-20
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-bold mb-12 text-3xl md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group rounded-2xl overflow-hidden
                bg-white dark:bg-white/5
                backdrop-blur-lg
                border border-gray-200 dark:border-purple-400/10
                hover:border-purple-400/40
                hover:-translate-y-2
                hover:shadow-[0_0_30px_#a78bfa55]
                transition-all duration-300
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 sm:h-48 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="
                        text-[11px] px-2 py-1 rounded
                        bg-purple-500/10
                        text-purple-500 dark:text-purple-300
                        border border-purple-400/20
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center gap-2">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-xs sm:text-sm
                      px-4 py-2 rounded-full
                      bg-purple-400 text-black
                      hover:shadow-[0_0_12px_#a78bfa88]
                      transition-all duration-300
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-xs sm:text-sm
                      px-4 py-2 rounded-full
                      border border-purple-400 text-purple-400
                      hover:bg-purple-400 hover:text-black
                      transition-all duration-300
                    "
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}