import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const navLinks = [
    {
      name: "about",
      link: "#about",
    },
    {
      name: "projects",
      link: "#projects",
    },
    {
      name: "contact",
      link: "#contact",
    },
  ];
  return (
    <footer class="bg-background text-text border-t border-border">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <HashLink smooth to="#home">
            <p className="text-2xl font-mono hover:scale-110 duration-500 transition-transform">
              {"<"}ashwinkumar<span className="text-neutral-500">dev</span>
              {"/>"}
            </p>
          </HashLink>
          <ul class="flex flex-wrap gap-14 items-center mb-6 text-sm font-medium text-text sm:mb-0 ">
            {navLinks.map((link) => (
              <li key={link.name}>
                <HashLink
                  smooth
                  to={link.link}
                  className={`  text-lg font-medium text-text py-2`}
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <hr class="my-6 border-border sm:mx-auto  lg:my-8" />
        <div className="flex flex-col gap-3 text-md text-subtext sm:text-center ">
          <p>
            Designed and Developed by{" "}
            <HashLink smooth to="#home" className="text-text font-medium">
              yours truly.
            </HashLink>
          </p>
          <p>
            Developed using{" "}
            <a
              target="_blank"
              className="text-text font-medium"
              href="https://react.dev/"
            >
              ReactJS
            </a>{" "}
            +{" "}
            <a
              className="text-text font-medium"
              target="_blank"
              href="https://vite.dev/"
            >
              Vite
            </a>
            . Styled using{" "}
            <a
              className="text-text font-medium"
              href="https://tailwindcss.com/"
            >
              TailwindCSS.{" "}
            </a>
            Icons from{" "}
            <a
              className="text-text font-medium"
              target="_blank"
              href="https://fontawesome.com/"
            >
              FontAwesome.
            </a>
          </p>
          <p>&copy; 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
