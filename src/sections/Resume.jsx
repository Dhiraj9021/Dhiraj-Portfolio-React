export default function Resume() {
  return (
    <section
      id="internship"
      className="
        bg-white dark:bg-gradient-to-b dark:from-[#0d0d0d] dark:to-[#111]
        text-black dark:text-white
        py-20 px-4 sm:px-10 md:px-16
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Internship
          </span>
        </h2>

        {/* Card */}
        <div
          className="
            relative rounded-2xl p-6 sm:p-8
            bg-white dark:bg-white/5
            backdrop-blur-lg
            border border-gray-200 dark:border-purple-400/10
            hover:border-purple-400/40
            hover:-translate-y-1
            hover:shadow-[0_0_30px_#a78bfa33]
            transition-all duration-300
          "
        >

          {/* Glow Effect */}
          <div
            className="
              absolute inset-0 rounded-2xl
              opacity-0 hover:opacity-100
              border border-purple-400/20
              blur-md transition
            "
          />

          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Logo */}
              <img
                src="/infosys.png"
                alt="Infosys"
                className="w-12 h-12 rounded-lg object-contain bg-white p-1"
              />

              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Artificial Intelligence Intern
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Infosys Springboard
                </p>
              </div>
            </div>

            {/* Duration */}
            <span className="text-purple-500 dark:text-purple-400 text-sm font-medium">
              Oct 2025 – Dec 2025
            </span>

          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-[0.95rem] leading-relaxed mb-6">
            Completed an Artificial Intelligence internship at Infosys Springboard,
            where I worked on a real-world project titled{" "}
            <span className="text-purple-500 dark:text-purple-400 font-medium">
              "AI-powered Regulatory Compliance Checker"
            </span>. The project focused on building an intelligent system to analyze
            regulatory documents and provide compliance insights using advanced AI techniques.
          </p>

          {/* Project Work */}
          <div className="mb-6">
            <h4 className="text-purple-500 dark:text-purple-400 text-sm font-semibold mb-2">
              Project Work
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Developed a system using Retrieval-Augmented Generation (RAG) to fetch
              relevant information from large datasets and generate accurate responses.
              Implemented data processing pipelines and optimized model performance
              for real-time query handling.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-purple-500 dark:text-purple-400 text-sm font-semibold mb-3">
              Skills & Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "Generative AI",
                "RAG System",
                "Python",
                "Machine Learning",
                "Data Processing",
                "NLP",
                "Problem Solving",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-purple-500/10
                    border border-purple-400/20
                    text-purple-500 dark:text-purple-400
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}