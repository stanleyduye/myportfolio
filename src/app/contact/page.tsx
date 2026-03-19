"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";
import { PageTitle } from "../shared/PageTitle";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xqeynkvr");

  useEffect(() => {
    if (state.succeeded && state.errors === null) {
      toast.success("Message sent successfully!");
      const form = document.querySelector("form");
      if (form) form.reset();
      reset();
    } else if (state.errors?.kind === "error") {
      toast.error("Something went wrong");
      reset();
    }
  }, [state, reset]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      toast.error("All fields are required");
      return;
    }

    await handleSubmit(event);
  };

  return (
    <section className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle
            title={
              <>
                Let's{" "}
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Work
                </span>{" "}
                Together
              </>
            }
            paragraph={
              <>
                I'd love to hear from you. You can send me a direct message via
                the form below or email me at{" "}
                <Link
                  href="mailto:stanleyduye@gmail.com"
                  className="text-green-500 hover:underline font-medium"
                >
                  stanleyduye@gmail.com
                </Link>{" "}
                and I'll get back to you as soon as possible.
              </>
            }
          />
        </motion.div>

        {/* Split layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left side – contact info & illustration */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Gradient ring (like hero) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse blur-md opacity-70" />
                {/* Profile image placeholder – replace with your photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/Images/hero-image.jpg" // Update with your image
                    alt="Stanley Duye"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating dots */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                  className="absolute -bottom-2 -left-4 w-8 h-8 bg-blue-400 rounded-full"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Prefer email?
              </h3>
              <p className="text-gray-600">
                Reach me directly at{" "}
                <a
                  href="mailto:stanleyduye@gmail.com"
                  className="text-green-500 font-medium hover:underline"
                >
                  stanleyduye@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right side – contact form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Name & Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-shadow"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-shadow"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-shadow resize-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit button */}
              <div className="flex justify-end">
                {state.submitting ? (
                  <div className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex justify-center items-center">
                    <Image
                      src="/Images/loader.svg"
                      alt="loader"
                      width={24}
                      height={24}
                      className="animate-spin"
                    />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
