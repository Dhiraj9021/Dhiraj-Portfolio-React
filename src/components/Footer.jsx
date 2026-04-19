import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="
      bg-white dark:bg-[#0d0d0d]
      text-gray-600 dark:text-gray-400
      py-10 px-4 sm:px-10 md:px-16
      border-t border-gray-200 dark:border-purple-400/10
      transition
    ">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
              Dhiraj Portfolio
            </h2>
            <p className="text-sm mt-1">
              Building modern web & AI solutions
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">

            {[
              { Icon: FaGithub, link: "https://github.com/Dhiraj9021" },
              { Icon: FaLinkedin, link: "https://www.linkedin.com/in/dhirajpatil2005/" },
              { Icon: SiLeetcode, link: "https://leetcode.com/u/dhiraj_patil27/" },
              { Icon: SiCodechef, link: "https://www.codechef.com/users/dhiraj_patil27" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-full
                  border border-gray-300 dark:border-purple-400/20
                  hover:bg-purple-400 hover:text-black
                  hover:shadow-[0_0_12px_#a78bfa66]
                  transition
                "
              >
                <Icon />
              </a>
            ))}

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-6"></div>

        {/* Bottom */}
        <div className="text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Dhiraj. All rights reserved.
        </div>

      </div>
    </footer>
  );
}