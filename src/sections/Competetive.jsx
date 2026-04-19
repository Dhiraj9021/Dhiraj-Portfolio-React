import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank
} from "react-icons/si";

export default function Competitive() {
  const profiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/dhiraj_patil27/",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef />,
      link: "https://www.codechef.com/users/dhiraj_patil27",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      link: "https://www.geeksforgeeks.org/profile/dhirajpat3sw0",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank />,
      link: "https://www.hackerrank.com/dhiraj_patil27",
    },
  ];

  return (
    <section
      id="competitive"
      className="
        bg-white dark:bg-[#0d0d0d]
        text-black dark:text-white
        py-16 sm:py-20 px-4 sm:px-8 md:px-16
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Competitive{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Programming
          </span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-10 sm:mb-12">
          Explore my coding profiles across platforms
        </p>

        {/* Grid */}
        <div className="
          grid gap-4 sm:gap-6 md:gap-8
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        ">
          {profiles.map((profile, i) => (
            <a
              key={i}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group p-5 sm:p-6 rounded-xl sm:rounded-2xl
                bg-gray-100 dark:bg-[#111]
                border border-purple-400/10
                hover:border-purple-400/40
                hover:-translate-y-1 sm:hover:-translate-y-2
                hover:shadow-[0_0_20px_#a78bfa55]
                transition-all duration-300
                flex flex-col items-center justify-center text-center
              "
            >
              {/* Icon */}
              <div className="
                text-3xl sm:text-4xl md:text-5xl
                text-purple-400 mb-3 sm:mb-4
                group-hover:scale-110 sm:group-hover:scale-125
                transition
              ">
                {profile.icon}
              </div>

              {/* Name */}
              <h3 className="
                text-sm sm:text-base md:text-lg font-semibold
                text-gray-700 dark:text-gray-300
                group-hover:text-purple-400
              ">
                {profile.name}
              </h3>

              {/* CTA */}
              <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                View Profile →
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}