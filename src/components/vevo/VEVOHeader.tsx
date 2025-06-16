import { Search, Menu, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VEVOHeader = () => {
  return (
    <>
      {/* Main Header */}
      <header className="bg-[#061b36] h-[88.576px] relative">
        <div className="flex items-center justify-center h-full">
          {/* Menu Button */}
          <Button className="absolute left-0 top-0 bg-[#004d8e] text-white h-[88.576px] w-[166px] rounded-none hover:bg-[#004d8e]/90 flex items-center gap-3">
            <Menu className="w-8 h-5" />
            <span className="font-roboto text-lg font-light">Menu</span>
          </Button>

          {/* Logo Section */}
          <div className="text-center">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://immi.homeaffairs.gov.au/AssetLibrary/dist/assets/images/logo-ha.png"
                alt="Australian Government - Department of Home Affairs"
                className="h-[88.576px] py-3"
              />
              <div className="border-l border-white/20 text-white pl-3">
                <span className="font-roboto text-lg font-light">
                  Immigration and citizenship
                </span>
              </div>
            </a>
          </div>

          {/* Search Button */}
          <Button className="absolute right-0 top-0 bg-black/30 text-white h-[88.576px] w-[88.576px] rounded-none hover:bg-black/40">
            <Search className="w-7 h-7" />
          </Button>
        </div>

        {/* Ask a Question Button */}
        <div className="absolute bottom-0 right-8"></div>

        {/* Skip Links */}
        <div className="absolute top-[-200px] left-0 space-x-2">
          <Button className="bg-[#061b36] text-white border border-white font-roboto text-lg font-light px-4 py-3">
            Skip to navigation
          </Button>
          <Button className="bg-[#061b36] text-white border border-white font-roboto text-lg font-light px-4 py-3">
            Skip to main content
          </Button>
        </div>
      </header>
    </>
  );
};
