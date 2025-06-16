import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VEVOHero = () => {
  return (
    <div className="bg-[#004d8e] relative overflow-hidden">
      {/* Secondary Navigation Bar */}
      <div className="bg-[#0e305a] h-[28px] flex items-center justify-end px-8 lg:px-16 text-white text-xs">
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-white hover:underline font-roboto text-xs font-light"
          >
            ImmiAccount
          </a>
          <span className="text-white/50">|</span>
          <a
            href="#"
            className="text-white hover:underline font-roboto text-xs font-light"
          >
            Visa Entitlement Verification Online (VEVO)
          </a>
          <span className="text-white/50">|</span>
          <a
            href="#"
            className="text-white hover:underline font-roboto text-xs font-light"
          >
            My Tourist Refund Scheme (TRS)
          </a>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#004d8e] px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-white text-sm">
            <a
              href="/"
              className="text-white hover:underline font-roboto text-sm font-light"
            >
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-[#2ba9e0]" />
            <a
              href="/visas"
              className="text-white hover:underline font-roboto text-sm font-light"
            >
              Visas
            </a>
            <ChevronRight className="w-4 h-4 text-[#2ba9e0]" />
            <span className="text-white font-roboto text-sm font-light">
              When you have a visa
            </span>
            <span className="text-[#2ba9e0] rotate-45 font-light">▶</span>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex">
        {/* Left Content */}
        <div className="w-1/2 bg-[#004d8e] px-8 py-16 relative">
          <div className="max-w-xl">
            <h1 className="text-white text-5xl font-roboto font-light leading-tight mb-8">
              Check visa details and conditions
            </h1>
          </div>

          {/* Decorative borders */}
          <div className="absolute bottom-0 right-0 w-32 h-60 border-t-[234px] border-l-[133px] border-t-black/10 border-l-black/10"></div>
        </div>

        {/* Right Content - Passport Image */}
        <div className="w-1/2 relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2F0f71391fdcff49a6a0fc38707ef943a6"
            alt="Australian passport being held"
            className="w-full h-[425px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
