import React, { useEffect, useRef, useState } from "react";

/* Hook for scroll animation */
function useInView() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* Item */
const EducationItem = ({ title, college, year, index }) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`
        relative pl-6 sm:pl-8
        transition-all duration-700
        ${
          visible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }
      `}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      {/* Dot */}
      <span className="
        absolute -left-[10px] top-6
        w-4 h-4 rounded-full
        bg-purple-400
        shadow-[0_0_12px_#a78bfa]
      " />

      {/* Card */}
      <div className="
        group
        bg-gray-100 dark:bg-white/5
        backdrop-blur-lg
        border border-purple-400/10
        hover:border-purple-400/40
        rounded-xl p-5 sm:p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_25px_#a78bfa55]
      ">
        {/* Title */}
        <h3 className="
          text-lg md:text-xl font-semibold
          text-purple-500 dark:text-purple-300
          mb-1 group-hover:text-purple-400
        ">
          {title}
        </h3>

        {/* College */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {college}
        </p>

        {/* Year */}
        <p className="text-purple-400 text-xs mt-1">
          {year}
        </p>
      </div>
    </div>
  );
};

/* Main */
export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science (Data Science)",
      college: "R C Patel Institute of Technology, Shirpur",
      year: "2023 - 2027",
    },
    {
      title: "Higher Secondary (12th)",
      college: "Late G D Mali Jr. College",
      year: "2021 - 2023",
    },
    {
      title: "Secondary School (10th)",
      college: "Shri Shivajirao Chaudhari English Medium School",
      year: "2019 - 2020",
    },
  ];

  return (
    <section
      id="educations"
      className="
        bg-gradient-to-b 
        from-gray-50 to-white
        dark:from-[#0d0d0d] dark:to-[#111]
        text-black dark:text-white
        py-20 px-4 sm:px-10 md:px-16
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Education
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-4 sm:pl-6">

          {/* Line */}
          <div className="absolute left-0 top-0 w-[2px] h-full bg-purple-400/30" />

          {/* Items */}
          <div className="space-y-10">
            {educationData.map((item, index) => (
              <EducationItem key={index} {...item} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}