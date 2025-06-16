import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const navigationItems = [
    { title: "Entering and leaving Australia", hasArrow: true },
    { title: "Visas", hasArrow: true },
    { title: "Australian citizenship", hasArrow: true },
    { title: "What we do", hasArrow: false },
    { title: "Settling in Australia", hasArrow: false },
    { title: "Help and support", hasArrow: true },
  ];

  return (
    <section className="relative bg-[#004d8e] overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative h-[334px] flex">
        {/* Left Navigation Area */}
        <div className="w-[460px] bg-[#004d8e] relative z-10">
          <div className="px-8 py-6">
            <div className="text-white/70 text-[13px] font-light mb-4">
              Welcome to the Department of Home Affairs
            </div>

            <h1 className="text-white text-[32px] font-normal mb-8 leading-tight">
              Immigration and citizenship
            </h1>

            <nav className="space-y-0">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-white/20 last:border-b-0"
                >
                  <a
                    href="#"
                    className="flex items-center justify-between py-3 text-white hover:text-white/80 transition-colors group"
                  >
                    <span className="text-[15px] font-light">{item.title}</span>
                    {item.hasArrow && (
                      <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-white" />
                    )}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Diagonal Transition Triangle */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 z-20"
            width="140"
            height="334"
            viewBox="0 0 140 334"
            fill="none"
          >
            <polygon points="0,0 0,334 140,0" fill="#004d8e" />
          </svg>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 relative ml-[-140px]">
          <div className="w-full h-full relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2F0ace16f672cf4f3c8024b950e404cc1d?format=webp&width=800"
              alt="Kangaroos on pristine Australian beach with turquoise waters and scenic coastline"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
