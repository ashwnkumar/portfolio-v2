import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="bg-background text-text sticky top-0 z-10 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <HashLink smooth to="#home">
            <p className="text-2xl font-mono hover:scale-110 duration-500 transition-transform">
              {"<"}ashwinkumar<span className="text-neutral-500">dev</span>
              {"/>"}
            </p>
          </HashLink>
        </div>
        <div className="flex lg:hidden text-text">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-20 flex-row ">
          {navLinks.map((link) => (
            <HashLink
              smooth
              to={link.link}
              key={link.name}
              className={` hover:scale-125 text-lg font-medium hover:text-text duration-500 transition-all py-2`}
            >
              {link.name}
            </HashLink>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between bg-background">
            <HashLink
              smooth
              to="#home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="text-2xl text-text font-mono hover:scale-110 duration-500 transition-transform">
                {"</>"}
              </p>
            </HashLink>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-text"
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y ">
              <div className="gap-y-5 py-6 flex flex-col">
                {navLinks.map((link) => (
                  <HashLink
                    smooth
                    to={link.link}
                    key={link.name}
                    className={`text-xl font-medium text-text   py-2`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </HashLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
