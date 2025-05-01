import { useState } from "react";
import { FaEnvelope, FaTimes, FaPaperPlane } from "react-icons/fa";
import { socialMedia } from "@/data";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_jt38283", // Get this from EmailJS dashboard
        "template_ezntyfn", // Get this from EmailJS dashboard
        formData,
        "KRvns5iatPItCYdox" // Get this from EmailJS dashboard
      );

      // The email will be sent to whatever email address you've configured in your EmailJS template

      setSubmitSuccess(true);

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsFormOpen(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="w-full pt-24 pb-12 relative overflow-hidden"
      id="contact"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-200/30 z-0" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-full h-full grid grid-cols-12 gap-4">
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="col-span-1 h-full border-r border-white/5"
                style={{
                  animationDuration: `${Math.random() * 4 + 3}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="col-span-12 w-full border-t border-white/5"
                style={{
                  animationDuration: `${Math.random() * 4 + 3}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 mb-6">
            Let&apos;s Create Together
          </h2>

          <p className="text-white/70 text-center max-w-2xl mb-10 text-lg">
            Connect with me. I&apos;m just one message away from turning your
            vision into reality.
          </p>

          {/* Interactive contact button */}
          <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`absolute inset-0 bg-purple-500/20 rounded-full blur-xl transition-all duration-300 ${
                isHovered ? "scale-125 opacity-100" : "scale-100 opacity-0"
              }`}
            ></div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="relative flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 py-3 px-8 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 group-hover:translate-y-1"
            >
              <span>Start a conversation</span>
              <FaEnvelope
                className={`transition-all duration-300 ${
                  isHovered ? "rotate-12 translate-x-1" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer divider with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12" />

        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              Devarshi Patel
            </div>
            <p className="text-white/60 text-sm">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social media links */}
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                className="group w-10 h-10 flex justify-center items-center rounded-lg bg-black-300/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:bg-black-200 hover:scale-110"
              >
                <img
                  src={info.img}
                  alt={"social icon"}
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm transition-all">
          <div className="relative w-full max-w-md p-6 rounded-2xl shadow-xl bg-gradient-to-br from-black-300 to-black-200 border border-white/10">
            {/* Close button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            {/* Form title */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                Send me a Message
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Fill out the form below and I&apos;ll get back to you soon
              </p>
            </div>

            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <FaPaperPlane className="text-green-400 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-white/60 text-center">
                  Thanks for reaching out. I&apos;ll respond to your message as
                  soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black-400/50 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black-400/50 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black-400/50 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                    placeholder="What would you like to discuss?"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? "bg-purple-700/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30"
                  } text-white flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
