import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const validate = (name, email, message) => {
    if (!name || !email || !message) {
      toast.error("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return false;
    }

    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!validate(name, email, message)) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully ");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
        py-16 px-4 sm:px-10 md:px-16
        bg-white text-black
        dark:bg-[#0d0d0d] dark:text-white
        transition-all duration-300
      "
    >
      <Toaster position="top-center" />

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-2">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-10">
          Let’s build something amazing 
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Get in Touch
            </h3>

            {/* Info */}
            <div className="space-y-3 text-sm mb-6">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                <p className="text-gray-700 dark:text-gray-300">
                  dhiraj09021@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-500" />
                <p className="text-gray-700 dark:text-gray-300">
                  +91 9021909420
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-500" />
                <p className="text-gray-700 dark:text-gray-300">
                  India
                </p>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-4">

              <a
                href="https://linkedin.com/in/dhirajpatil2005/"
                target="_blank"
                className="
                  w-10 h-10 flex items-center justify-center
                  border border-gray-400 dark:border-purple-400
                  text-black dark:text-white
                  rounded-full
                  hover:bg-purple-500 hover:text-white
                  transition
                "
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Dhiraj9021"
                target="_blank"
                className="
                  w-10 h-10 flex items-center justify-center
                  border border-gray-400 dark:border-purple-400
                  text-black dark:text-white
                  rounded-full
                  hover:bg-purple-500 hover:text-white
                  transition
                "
              >
                <FaGithub />
              </a>

             

            </div>

          </div>

          {/* RIGHT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="
              p-6 rounded-2xl border
              border-gray-300 dark:border-purple-500/20
              bg-gray-100 dark:bg-[#111]
              transition-all duration-300
            "
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="
                w-full mb-4 px-4 py-2 rounded-lg
                bg-white dark:bg-[#0d0d0d]
                border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                focus:border-purple-400 focus:outline-none
              "
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="
                w-full mb-4 px-4 py-2 rounded-lg
                bg-white dark:bg-[#0d0d0d]
                border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                focus:border-purple-400 focus:outline-none
              "
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="
                w-full mb-4 px-4 py-2 rounded-lg
                bg-white dark:bg-[#0d0d0d]
                border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                focus:border-purple-400 focus:outline-none
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-2 rounded-full
                bg-purple-500 text-white
                hover:bg-purple-400
                transition
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}