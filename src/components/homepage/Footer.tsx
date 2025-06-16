import { Button } from "@/components/ui/button";
import { ChevronUp, ExternalLink, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const portfolioLinks = [
    "Home Affairs Portfolio",
    "Travel and crossing the border",
    "Import, export and buying online",
    "National Security",
    "Emergency Management",
    "Cyber Security",
    "Multicultural Affairs",
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
    <footer className="bg-black">
      <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
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
            <div className="space-y-4">
              {generalLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-white/60 font-roboto text-base font-light hover:text-white hover:underline"
                >
                  {link.text}
                  {link.hasExternal && (
                    <ExternalLink className="w-4 h-4 text-white/60" />
                  )}
                </a>
              ))}
            </div>

            {/* Empty column for spacing */}
            <div></div>

            {/* Australian Government Logo */}
            <div className="flex flex-col items-center justify-start">
              <div className="w-64 h-44 bg-white/10 rounded flex items-center justify-center text-white text-center">
                <div>
                  <div className="text-lg font-semibold mb-2">
                    Australian Government
                  </div>
                  <div className="text-sm opacity-80">
                    Department of Home Affairs
                  </div>
                </div>
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
                className="w-11 h-11 rounded-full border-0 bg-dha-azure-12 hover:bg-dha-azure-12/80"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-11 h-11 rounded-full border-0 bg-dha-azure-12 hover:bg-dha-azure-12/80"
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

      {/* Floating Ask Question Button */}
      <div className="fixed bottom-0 right-8">
        <Button className="bg-dha-orange hover:bg-dha-orange/90 text-white font-roboto text-sm rounded-t-md rounded-b-none px-6 py-3 shadow-lg">
          Ask a question
        </Button>
      </div>

      {/* Skip Links (normally hidden, shown here for demo) */}
      <div className="sr-only">
        <Button className="bg-dha-azure-12 text-white border-2 border-white font-roboto text-lg font-light px-4 py-3">
          Skip to navigation
        </Button>
        <Button className="bg-dha-azure-12 text-white border-2 border-white font-roboto text-lg font-light px-4 py-3">
          Skip to main content
        </Button>
      </div>
    </footer>
  );
};
