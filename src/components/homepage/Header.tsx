import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Entering and leaving Australia",
    href: "/entering-and-leaving-australia",
    children: [
      {
        label: "Entering Australia",
        href: "/entering-and-leaving-australia/entering-australia",
      },
      {
        label: "Leaving Australia",
        href: "/entering-and-leaving-australia/leaving-australia",
      },
      {
        label: "Business travel card",
        href: "/entering-and-leaving-australia/business-travel-card",
      },
      {
        label: "New Zealand citizens",
        href: "/entering-and-leaving-australia/new-zealand-citizens",
      },
      {
        label: "Requesting your travel records",
        href: "/entering-and-leaving-australia/request-movement-records",
      },
      {
        label: "Travelling as a dual citizen",
        href: "/entering-and-leaving-australia/traveling-as-a-dual-citizen",
      },
      {
        label: "Travelling and your visa",
        href: "/entering-and-leaving-australia/travelling-and-your-visa",
        children: [
          {
            label: "Travel on a bridging visa",
            href: "/entering-and-leaving-australia/travelling-and-your-visa/travel-on-a-bridging-visa",
          },
          {
            label: "Travel while your visa is being processed",
            href: "/entering-and-leaving-australia/travelling-and-your-visa/travel-while-your-visa-is-being-processed",
          },
        ],
      },
      {
        label: "United States Global Entry program",
        href: "/entering-and-leaving-australia/global-entry-program",
      },
    ],
  },
  {
    label: "Visas",
    href: "/visas",
    children: [
      {
        label: "Getting a visa",
        href: "/visas/getting-a-visa",
        children: [
          {
            label: "Explore visa options",
            href: "/visas/getting-a-visa/visa-finder",
          },
          {
            label: "List of all visas",
            href: "/visas/getting-a-visa/visa-listing",
          },
          {
            label: "Visa processing times",
            href: "/visas/getting-a-visa/visa-processing-times",
          },
          {
            label: "Changing visas",
            href: "/visas/getting-a-visa/moving-between-visas",
          },
          {
            label: "Fees and charges for visas",
            href: "/visas/getting-a-visa/fees-and-charges",
          },
          {
            label: "Check twice submit once",
            href: "/visas/getting-a-visa/check-twice-submit-once",
          },
        ],
      },
      { label: "Working in Australia", href: "/visas/working-in-australia" },
      {
        label: "Employing or sponsoring workers",
        href: "/visas/employing-and-sponsoring-someone",
        children: [
          {
            label: "Employing overseas workers",
            href: "/visas/employing-and-sponsoring-someone/employing-overseas-workers",
          },
          {
            label: "Existing sponsors",
            href: "/visas/employing-and-sponsoring-someone/existing-sponsors",
          },
        ],
      },
      {
        label: "Bringing someone",
        href: "/visas/bringing-someone",
        children: [
          {
            label: "Bringing partner or family",
            href: "/visas/bringing-someone/bringing-partner-or-family",
          },
          {
            label: "Bringing for activities",
            href: "/visas/bringing-someone/bringing-for-activities",
          },
        ],
      },
      {
        label: "When you have a visa",
        href: "/visas/already-have-a-visa",
        children: [
          {
            label: "Check visa details and conditions",
            href: "/visas/already-have-a-visa/check-visa-details-and-conditions",
          },
          { label: "ImmiCard", href: "/visas/already-have-a-visa/immicard" },
        ],
      },
      {
        label: "Your visa is expiring or has expired",
        href: "/visas/visa-about-to-expire",
      },
      { label: "Permanent resident (PR)", href: "/visas/permanent-resident" },
      { label: "Cancelling visas", href: "/visas/cancelling-a-visa" },
      {
        label: "Domestic and family violence and your visa",
        href: "/visas/domestic-family-violence-and-your-visa",
      },
    ],
  },
  {
    label: "Australian citizenship",
    href: "/citizenship",
    children: [
      {
        label: "Learn about Australian citizenship",
        href: "/citizenship/what-does-it-mean",
      },
      {
        label: "Become an Australian citizen",
        href: "/citizenship/become-a-citizen",
      },
      {
        label: "Citizenship test and interview",
        href: "/citizenship/test-and-interview",
      },
      { label: "Citizenship ceremony", href: "/citizenship/ceremony" },
      {
        label: "Evidence of citizenship and certificates",
        href: "/citizenship/certificate",
      },
      {
        label: "Give up Australian citizenship",
        href: "/citizenship/give-up-citizenship",
      },
      {
        label: "Celebrating citizenship",
        href: "/citizenship/celebrating-citizenship",
      },
      {
        label: "Citizenship processing times",
        href: "/citizenship/citizenship-processing-times",
      },
      {
        label: "Confirming Australian Citizenship",
        href: "/citizenship/confirming-australian-citizenship",
      },
    ],
  },
  { label: "Change in your situation", href: "/change-in-situation" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Settling in Australia", href: "/settling-in-australia" },
  {
    label: "Help and support",
    href: "/help-support",
    children: [
      { label: "Departmental forms", href: "/help-support/departmental-forms" },
      { label: "Glossary", href: "/help-support/glossary" },
      { label: "Our online services", href: "/help-support/tools" },
      {
        label: "Meeting our requirements",
        href: "/help-support/meeting-our-requirements",
        children: [
          {
            label: "Health",
            href: "/help-support/meeting-our-requirements/health",
          },
          {
            label: "Character",
            href: "/help-support/meeting-our-requirements/character",
          },
          {
            label: "English language",
            href: "/help-support/meeting-our-requirements/english-language",
          },
          {
            label: "Biometrics",
            href: "/help-support/meeting-our-requirements/biometrics",
          },
          {
            label: "Providing accurate information",
            href: "/help-support/meeting-our-requirements/providing-accurate-information",
          },
          {
            label: "Australian values",
            href: "/help-support/meeting-our-requirements/australian-values",
          },
        ],
      },
      {
        label: "Who can help with your application?",
        href: "/help-support/who-can-help-with-your-application",
      },
      {
        label: "Applying online or on paper",
        href: "/help-support/applying-online-or-on-paper",
      },
      { label: "Visa scams", href: "/help-support/visa-scams" },
      { label: "Contact us", href: "/help-support/contact-us" },
      { label: "Popular questions", href: "/help-support/popular-questions" },
    ],
  },
  { label: "News and media", href: "/news-media" },
];

const popularSearches = ["Visa", "Citizenship", "Form 80", "Form 888"];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setCurrentSubmenu([]);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
  };

  const navigateToSubmenu = (path: string[]) => {
    setCurrentSubmenu(path);
  };

  const goBackInSubmenu = () => {
    setCurrentSubmenu(currentSubmenu.slice(0, -1));
  };

  const renderNavigationItems = (
    items: NavigationItem[],
    path: string[] = [],
  ) => {
    return items.map((item, index) => (
      <li
        key={index}
        className="border-b border-gray-200 w-full min-h-[55px] text-left"
      >
        <div className="flex items-center">
          <a
            href={item.href}
            className="flex-1 bg-white border-l-4 border-[#0c2a50] text-[#0c2a50] cursor-pointer text-[17.7px] font-normal leading-8 px-7 py-3 text-left transition-colors duration-100 hover:bg-gray-50"
          >
            {item.label}
          </a>
          {item.children && (
            <button
              onClick={() => navigateToSubmenu([...path, item.label])}
              className="p-3 text-[#0c2a50] hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </li>
    ));
  };

  const getCurrentItems = () => {
    let items = navigationItems;
    for (const submenu of currentSubmenu) {
      const parent = items.find((item) => item.label === submenu);
      if (parent?.children) {
        items = parent.children;
      }
    }
    return items;
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-[#061b36] border-b border-gray-300 h-[88.576px] relative z-[99]">
        <div className="relative">
          {/* Overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 z-[10000]"
              onClick={toggleMobileMenu}
            />
          )}

          {/* Mobile Navigation */}
          <nav
            className={cn(
              "fixed left-0 top-0 z-[10001] transition-all duration-300",
              isMobileMenuOpen
                ? "opacity-100 transform-none"
                : "opacity-0 -translate-y-full",
            )}
          >
            <div className="flex w-[415px]">
              {/* Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="bg-[#061b36] text-[#2ba9e0] float-left font-['Roboto_Condensed'] text-[19.93px] font-medium h-[88.576px] w-[221px] text-center overflow-hidden"
              >
                <Home className="inline-block text-[39.86px] -ml-2 mr-2 align-middle" />
                <span className="inline text-[19.93px] font-medium leading-[88.576px] align-middle">
                  Menu
                </span>
              </button>

              {/* Home Affairs Portfolio Link */}
              <a
                href="https://www.homeaffairs.gov.au/"
                className="bg-[#f2f2f2] border-l-2 border-[#004d8e] text-[#004d8e] float-left font-['Roboto_Condensed'] text-[16.6px] h-[88.576px] w-full pl-7 relative transition-colors duration-100 hover:bg-gray-200"
              >
                <span className="inline font-['icomoon'] text-2xl font-bold leading-[88.576px] align-middle">
                  🏠
                </span>
                <div className="inline-block font-['Roboto_Condensed'] text-[16.6px] leading-[88.576px] pl-4 align-middle w-4/5">
                  <span>Home Affairs </span>
                  <br className="hidden" />
                  <span>Portfolio</span>
                </div>
              </a>
            </div>

            {/* Navigation Items */}
            <ul className="transition-transform duration-300 w-[415px] bg-white">
              {currentSubmenu.length > 0 && (
                <li className="border-b border-gray-200 w-full min-h-[55px] text-left">
                  <button
                    onClick={goBackInSubmenu}
                    className="w-full bg-white border-l-4 border-[#004d8e] text-[#004d8e] cursor-pointer text-[17.7px] font-normal leading-8 px-11 py-3 text-left transition-colors duration-100 hover:bg-gray-50"
                  >
                    Back
                  </button>
                </li>
              )}
              {renderNavigationItems(getCurrentItems(), currentSubmenu)}
            </ul>
          </nav>

          {/* Logo Section */}
          <div className="text-center h-[88.576px] flex items-center justify-center">
            <a
              href="https://4d1bb99361ad4b85bb3aa6541cb80e00-7590524baeb240da9567a6189.projects.builder.codes/"
              className="cursor-pointer inline transition-colors duration-100 align-middle"
            >
              <img
                src="https://immi.homeaffairs.gov.au/AssetLibrary/dist/assets/images/logo-ha.png"
                alt="Australian Government - Department of Home Affairs"
                title="home"
                className="cursor-pointer inline h-[88.576px] py-3 align-middle transform -translate-y-3"
              />
              <span className="border-l border-white/20 text-white inline-block text-[17.7px] font-medium leading-7 ml-3 pl-3 align-middle">
                Immigration and citizenship
              </span>
            </a>
          </div>
          {/* Menu Button (Desktop) */}
          <button
            onClick={toggleMobileMenu}
            className="absolute left-0 top-0 bg-[#004d8e] text-white cursor-pointer float-left font-['Roboto_Condensed'] text-[19.93px] font-medium h-[88.576px] w-[166px] text-center overflow-hidden"
          >
            <svg
              width="22px"
              height="14px"
              viewBox="0 0 22 14"
              className="inline text-[39.86px] -ml-2 mr-2 align-middle w-[22px] h-[14px]"
              fill="currentColor"
            >
              <g fillRule="nonzero">
                <path d="M21.2377,6.468 L0.7623,6.468 C0.4389,6.468 0.1771,6.706 0.1771,7 C0.1771,7.294 0.4389,7.532 0.7623,7.532 L21.2377,7.532 C21.5611,7.532 21.8229,7.294 21.8229,7 C21.8229,6.706 21.5611,6.468 21.2377,6.468 Z" />
                <path d="M21.2377,12.787 L0.7623,12.787 C0.4389,12.787 0.1771,13.025 0.1771,13.319 C0.1771,13.613 0.4389,13.851 0.7623,13.851 L21.2377,13.851 C21.5611,13.851 21.8229,13.613 21.8229,13.319 C21.8229,13.025 21.5611,12.787 21.2377,12.787 Z" />
                <path d="M0.7623,1.214 L21.2377,1.214 C21.5611,1.214 21.8229,0.976 21.8229,0.682 C21.8229,0.388 21.5611,0.15 21.2377,0.15 L0.7623,0.15 C0.4389,0.15 0.1771,0.388 0.1771,0.682 C0.1771,0.976 0.4389,1.214 0.7623,1.214 Z" />
              </g>
            </svg>
            <span className="inline text-[19.93px] font-medium leading-[88.576px] align-middle">
              Menu
            </span>
          </button>

          {/* Search Button */}
          <div className="absolute right-0 top-0">
            <button
              onClick={toggleSearch}
              aria-label="search"
              className="bg-black/30 border-l border-white text-white cursor-pointer inline-block text-sm h-[88.576px] w-[88.576px] text-center align-middle hover:bg-black/40 transition-colors"
            >
              <Search className="w-7 h-7 text-white inline align-middle" />
              <span className="sr-only">Search</span>
            </button>

            {/* Search Overlay */}
            {isSearchOpen && (
              <div className="fixed inset-0 bg-[#061b36]/95 flex flex-col z-[10000]">
                <span className="sr-only">pop-up content starts</span>

                {/* Close Button */}
                <button
                  onClick={toggleSearch}
                  className="fixed right-6 top-6 bg-transparent border border-[#00ccff] text-[#00ccff] cursor-pointer text-[17.7px] leading-6 px-2 py-2 text-center uppercase w-20 hover:bg-[#00ccff] hover:text-black transition-colors"
                >
                  <X className="w-12 h-12 text-current inline align-middle" />
                  <span className="inline text-[17.7px] leading-6 uppercase">
                    Back
                  </span>
                </button>

                {/* Search Form */}
                <div className="fixed left-1/2 top-1/4 -translate-x-1/2 max-w-[664px] w-3/5">
                  <div className="relative h-[133px]">
                    <label htmlFor="search-input" className="sr-only">
                      Search
                    </label>
                    <input
                      id="search-input"
                      type="search"
                      name="search"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="absolute bottom-0 left-0 right-0 h-4/5 bg-transparent border-b-4 border-white/10 text-white cursor-text text-[77px] font-medium pr-[15%] py-4 focus:outline-none focus:border-white/30 transition-all duration-100"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 h-full w-[15%] bg-transparent text-white cursor-pointer text-center align-middle hover:bg-white/10 transition-colors"
                    >
                      <Search className="w-[77px] h-[77px] text-white inline align-text-bottom" />
                      <span className="sr-only">Search</span>
                    </button>
                  </div>

                  {/* Search Suggestions */}
                  <div className="flex -mx-4 mt-11">
                    <div className="w-1/2 px-4">
                      <div className="mt-11">
                        <h3 className="text-white text-[19.93px] font-semibold leading-5 mt-7">
                          Popular searches
                        </h3>
                        <ul>
                          {popularSearches.map((search, index) => (
                            <li
                              key={index}
                              className="inline-block mr-3 text-left"
                            >
                              <a
                                href="#"
                                className="border-b border-[#00ccff] text-[#00ccff] cursor-pointer inline filter-brightness-100 text-[17.7px] leading-6 text-left transition-colors duration-100 hover:text-white hover:border-white"
                              >
                                {search}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2 px-4">
                      <div className="mt-11">
                        <h3 className="text-white text-[19.93px] font-semibold leading-5 mt-7">
                          Your previous searches
                        </h3>
                        <ul></ul>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="sr-only">pop-up content ends</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Secondary Navigation Bar */}
      <div className="bg-[#004d8e] h-[28px] flex items-center justify-end px-8 lg:px-16 text-white text-xs">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            ImmiAccount
          </a>
          <span className="text-white/50">|</span>
          <a
            href="/visas/already-have-a-visa/check-visa-details-and-conditions"
            className="hover:underline"
          >
            Visa Entitlement Verification Online (VEVO)
          </a>
          <span className="text-white/50">|</span>
          <a href="#" className="hover:underline">
            My Tourist Refund Scheme (TRS)
          </a>
        </div>
      </div>
    </>
  );
};
