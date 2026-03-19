"use client";

import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { PageTitle } from "../shared/PageTitle";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xjkygdag");

  useEffect(() => {
    if (state.succeeded && state.errors === null) {
      toast.success("Message sent successfully!");
      const form = document.querySelector("form");
      if (form) {
        form.reset();
      }
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
    <div className="py-10 mt-0 xl:mt-10">
      <PageTitle
        title={
          <>
            Let's <span className="text-[#6e06f2]">Work</span> Together
          </>
        }
        paragraph={
          <>
            I'd love to hear from you. You can send me a direct message via the
            form below or email me at{" "}
            <Link
              href="mailto:stanleyduye@gmail.com"
              className="text-[#6e06f2] hover:underline"
            >
              stanleyduye@gmail.com
            </Link>{" "}
            and I'll make sure to get back to you as soon as possible.
          </>
        }
      />

      <div className=" flex items-center justify-center flex-col my-10 gap-20 text-[#7f828b] w-full md:py-20">
        <form onSubmit={onSubmit} className="flex flex-col gap-12 w-full my-5">
          <div
            className="flex gap-12 flex-col md:flex-row
        "
          >
            <div className="flex flex-col gap-2 md:w-1/2 w-full">
              <label
                htmlFor="name"
                className="text-[1rem] md:text-[1.5rem] font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full bg-transparent border-b-2 border-[#7f828b] text-[#7f828b] focus:outline-none focus:caret-[#222] autofill:bg-transparent autofill:text-[#7f828b] autofill:border-b-2 autofill:border-[#7f828b] text-[0.8rem] md:text-[1.25rem]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="flex flex-col gap-2 md:w-1/2 w-full">
              <label
                htmlFor="email"
                className="text-[1rem] md:text-[1.5rem] font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b-2 border-[#7f828b] text-[#7f828b] focus:outline-none focus:caret-[#222] autofill:bg-transparent autofill:text-[#7f828b] autofill:border-b-2 autofill:border-[#7f828b] text-[0.8rem] md:text-[1.25rem]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="message"
              className="text-[1rem] md:text-[1.5rem] font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              className="w-full bg-transparent border-b-2 border-[#7f828b] text-[#7f828b] focus:outline-none focus:caret-[#222] autofill:bg-transparent autofill:text-[#7f828b] autofill:border-b-2 autofill:border-[#7f828b]  min-h-40 text-[0.8rem] md:text-[1.25rem]"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex justify-center lg:justify-end items-center w-full mt-10 ">
            {state.submitting ? (
              <div className="w-full md:w-auto py-4 rounded-lg bg-[#6006d5] px-[3.2rem] lg:px-[4.2rem] flex justify-center items-center">
                <Image
                  src="/Images/loader.svg"
                  alt="loader"
                  width={18}
                  height={18}
                  className="z-10"
                />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full md:w-auto p-4 rounded-lg bg-[#7812ff] text-xs lg:text-[1rem] text-[#fff] hover:bg-[#6006d5]  font-medium transition-colors duration-300 cursor-pointer"
              >
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
