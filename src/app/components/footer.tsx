"use client";

import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Paragraph } from "../shared/Typography";

const socials = [
  {
    id: "Mail",
    icon: IoMdMail,
    link: "mailto:cyprusakanni@gmail.com",
  },
  {
    id: "LinkedIn",
    icon: TbBrandLinkedinFilled,
    link: "https://www.linkedin.com/in/olamilekan-akanni-64740696/",
  },
  {
    id: "Github",
    icon: FaGithub,
    link: "https://github.com/olamilekancodes",
  },
];

const FooterModule = () => {
  return (
    <div className="  my-3 md:my-4 lg:my-5 text-[#9c9ea4] border-t-2 border-[#6d7078]">
      <div className=" flex m-auto max-w-7xl flex-col md:flex-row items-center md:justify-between justify-center my-2 md:my-3 lg:my-5 px-10 gap-y-3 md:gap-y-0">
        <p className="font-medium text-center md:text-left text-sm md:text-base">
          Olamilekan Akanni &copy; {new Date().getFullYear()}
        </p>
        <span className="flex gap-4 item-center">
          {socials.map((social) => {
            const isMail = social.id === "Mail";
            return (
              <a
                key={social.id}
                href={social.link}
                {...(!isMail && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                aria-label={`Olamilekan's ${social.id}`}
                className="transition-colors duration-300 hover:text-[#6e06f2] text-[#9c9ea4]"
              >
                <social.icon className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px]" />
              </a>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default FooterModule;
