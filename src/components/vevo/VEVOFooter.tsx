import { Button } from "@/components/ui/button";
import {
  ChevronUp,
  ExternalLink,
  Facebook,
  Linkedin,
  Info,
  Printer,
} from "lucide-react";

export const VEVOFooter = () => {
  const portfolioLinks = [
    "HOME AFFAIRS PORTFOLIO",
    "TRAVEL AND CROSSING THE BORDER",
    "IMPORT, EXPORT AND BUYING ONLINE",
    "NATIONAL SECURITY",
    "EMERGENCY MANAGEMENT",
    "CYBER SECURITY",
    "MULTICULTURAL AFFAIRS",
  ];

  const generalLinks = [
    { text: "Who we are", hasExternal: true },
    { text: "Our Ministers", hasExternal: true },
    { text: "Popular questions", hasExternal: false },
    { text: "Glossary", hasExternal: false },
    { text: "Forms", hasExternal: false },
    { text: "Online services", hasExternal: false },
    { text: "Compliments, complaints and suggestions", hasExternal: true },
  ];

  const legalLinks = [
    "Conditions of use",
    "Web privacy statement",
    "Accessibility of this website",
    "Freedom of information",
    "Information publication scheme",
    "Copyright and disclaimer",
    "Privacy",
  ];

  return (
    <footer className="bg-[#061b36]">
      {/* Top section with feedback and print */}
      <div className="bg-[#061b36] py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Info className="w-3 h-3 text-white" />
            <span className="text-white font-roboto text-sm font-light">
              Tell us what you think of this page
            </span>
          </div>
          <div className="text-center">
            <span className="text-white font-roboto text-sm font-light">
              Last updated: 4 December 2024
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-roboto text-sm font-light">
              Print this page
            </span>
            <Printer className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {/* Portfolio Links */}
            <div className="space-y-4">
              {portfolioLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white font-roboto text-base font-light uppercase hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* General Links */}
            <div className="space-y-3">
              {generalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-white/60 font-roboto text-base font-light hover:text-white hover:underline"
                >
                  {link.text}
                  {link.hasExternal && (
                    <ExternalLink className="w-3 h-3 text-white/60" />
                  )}
                </a>
              ))}
            </div>

            {/* Empty column for spacing */}
            <div></div>

            {/* Australian Government Logo */}
            <div className="flex flex-col items-center justify-start">
              <div className="w-64 h-44 flex items-center justify-center">
                <svg
                  width="215"
                  height="152"
                  viewBox="0 0 215 152"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.26463 146.903H3.94676L3.339 148.346C3.11109 148.802 3.03512 149.258 3.03512 149.562C3.03512 150.018 3.18706 150.321 3.56691 150.473C3.79482 150.625 4.25064 150.701 5.01033 150.777V151.157H-0.00366211V150.777C0.528125 150.701 0.983942 150.473 1.36379 150.094C1.74364 149.714 2.12349 148.954 2.65527 147.814L8.04912 135.811H8.27702L13.7468 148.194C14.2786 149.334 14.6585 150.094 15.0383 150.397C15.2662 150.625 15.6461 150.777 16.1019 150.777V151.157H8.80881V150.777H9.11269C9.72044 150.777 10.1003 150.701 10.3282 150.549C10.4801 150.397 10.5561 150.246 10.5561 150.018C10.5561 149.866 10.5561 149.714 10.4801 149.638C10.4801 149.562 10.3282 149.258 10.1763 148.802L9.26463 146.903ZM8.88478 146.067L6.60569 140.901L4.3266 146.067H8.88478Z"
                    fill="white"
                  />
                  <path
                    d="M25.2183 140.825V148.954C25.2183 149.714 25.2942 150.246 25.4462 150.474C25.5981 150.701 25.902 150.777 26.3578 150.853V151.233H22.1035V149.866C21.5717 150.474 21.1159 150.929 20.5841 151.157C20.0523 151.461 19.5205 151.537 18.9128 151.537C18.305 151.537 17.7732 151.385 17.3174 151.005C16.8616 150.626 16.5577 150.246 16.4058 149.714C16.2538 149.258 16.1779 148.422 16.1779 147.207V143.105C16.1779 142.345 16.1019 141.813 15.95 141.661C15.798 141.433 15.4941 141.357 15.0383 141.281V140.825H19.2926V147.967C19.2926 148.726 19.2926 149.182 19.3686 149.41C19.4446 149.638 19.5205 149.79 19.6725 149.866C19.8244 149.942 19.9764 150.018 20.2043 150.018C20.5081 150.018 20.7361 149.942 20.964 149.79C21.2678 149.562 21.6477 149.182 22.0275 148.65V143.105C22.0275 142.345 21.9516 141.813 21.7996 141.661C21.6477 141.433 21.3438 141.357 20.888 141.281V140.825H25.2183Z"
                    fill="white"
                  />
                  <path
                    d="M33.6509 140.521L33.8028 144.092H33.423C32.9672 143.028 32.5114 142.345 31.9796 141.965C31.5237 141.585 30.992 141.357 30.5361 141.357C30.2323 141.357 30.0044 141.433 29.7764 141.661C29.5485 141.889 29.4726 142.117 29.4726 142.345C29.4726 142.573 29.5485 142.725 29.7005 142.953C29.9284 143.256 30.6121 143.788 31.6757 144.548C32.7393 145.308 33.499 145.915 33.8028 146.447C34.1827 146.979 34.3346 147.511 34.3346 148.194C34.3346 148.802 34.1827 149.334 33.8788 149.866C33.5749 150.398 33.1951 150.853 32.6633 151.157C32.1315 151.461 31.5237 151.613 30.916 151.613C30.3842 151.613 29.7764 151.461 28.9408 151.157C28.7129 151.081 28.5609 151.005 28.485 151.005C28.2571 151.005 28.0291 151.157 27.8772 151.537H27.4974L27.3454 147.815H27.7253C28.0292 148.802 28.485 149.562 29.0927 150.018C29.7005 150.473 30.2323 150.777 30.7641 150.777C31.1439 150.777 31.3718 150.701 31.5997 150.473C31.8276 150.246 31.9796 150.018 31.9796 149.638C31.9796 149.258 31.9036 148.954 31.6757 148.726C31.4478 148.498 30.992 148.042 30.1563 147.511C29.0168 146.751 28.2571 146.143 27.9532 145.687C27.4974 145.08 27.1935 144.396 27.1935 143.712C27.1935 142.877 27.4974 142.193 28.0291 141.509C28.5609 140.825 29.3966 140.521 30.4602 140.521C30.992 140.521 31.5997 140.673 32.1315 140.901C32.3594 140.977 32.5114 141.053 32.5873 141.053C32.7393 141.053 32.8152 141.053 32.8912 140.977C32.9672 140.901 33.1191 140.749 33.271 140.521H33.6509Z"
                    fill="white"
                  />
                  <path
                    d="M39.1207 136.951V140.749H41.5517V141.813H39.1207V148.194C39.1207 148.802 39.1207 149.182 39.1967 149.334C39.2727 149.486 39.3486 149.638 39.5006 149.79C39.6525 149.866 39.8044 149.942 39.8804 149.942C40.3362 149.942 40.792 149.562 41.2479 148.878L41.5517 149.106C40.944 150.549 39.9564 151.233 38.6649 151.233C37.9812 151.233 37.4494 151.081 36.9936 150.701C36.5377 150.322 36.2339 149.942 36.1579 149.486C36.0819 149.258 36.0819 148.574 36.0819 147.435V141.813H34.7145V141.433C35.6261 140.749 36.4618 140.066 37.0695 139.382C37.7533 138.622 38.285 137.863 38.8168 136.951H39.1207Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mb-16 max-w-4xl">
            <p className="text-white/60 font-roboto text-base font-light leading-6">
              The Department of Home Affairs acknowledges the Traditional
              Custodians of Country throughout Australia and their continuing
              connection to land, sea and community. We pay our respects to all
              Aboriginal and Torres Strait Islander peoples, their cultures and
              to their elders past, present and emerging.
            </p>
          </div>

          {/* Legal Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white font-roboto text-sm font-light hover:underline"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {/* Social Media */}
              <Button
                variant="outline"
                size="icon"
                className="w-11 h-11 rounded-full border-0 bg-[#061b36] hover:bg-[#061b36]/80"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-11 h-11 rounded-full border-0 bg-[#061b36] hover:bg-[#061b36]/80"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Button>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              className="text-white font-roboto text-sm font-light hover:bg-white/10 flex items-center gap-2"
            >
              Back to top
              <ChevronUp className="w-2 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
