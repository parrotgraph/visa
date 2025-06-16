import { Button } from "@/components/ui/button";

export const VEVOTabs = () => {
  const tabs = [
    { label: "Overview", active: true, href: "#" },
    { label: "Check conditions online (VEVO)", active: false, href: "#" },
    { label: "See visa conditions", active: false, href: "#" },
    { label: "Conditions list", active: false, href: "#" },
  ];

  return (
    <div className="bg-[#0c2a50] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex-1 ${
                index > 0 ? "border-l border-[#0a2240]" : ""
              }`}
            >
              <a
                href={tab.href}
                className={`block w-full px-8 py-4 text-center font-roboto text-base font-light transition-colors ${
                  tab.active
                    ? "bg-white text-black"
                    : "bg-[#0c2a50] text-white hover:bg-[#0c2a50]/80"
                }`}
              >
                {tab.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
