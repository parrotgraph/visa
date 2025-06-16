import { Button } from "@/components/ui/button";
import { Info, ChevronDown } from "lucide-react";

export const NotificationBanner = () => {
  return (
    <section className="bg-dha-grey-95 px-8 lg:px-16 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Notification */}
        <div className="bg-dha-azure-52 p-8 mb-6 relative">
          <div className="flex items-start gap-6">
            <Info className="w-15 h-9 text-white mt-4 flex-shrink-0" />
            <div className="text-white space-y-4">
              <div>
                <p className="font-roboto text-base font-light leading-6 mb-2">
                  Multi-factor Authentication for ImmiAccount is coming.
                  <br />
                  From 18 June 2025 the department is introducing Multi-factor
                  Authentication (MFA) to ImmiAccount. For more information, see
                </p>
                <a
                  href="#"
                  className="underline font-roboto text-base font-light hover:no-underline"
                >
                  Strengthening ImmiAccount security through Multi-factor
                  Authentication (MFA)
                </a>
                <span>.</span>
              </div>

              <div>
                <p className="font-roboto text-base font-light leading-6 mb-2">
                  People impacted by the Hamas-Israel conflict can find more
                  information on
                </p>
                <a
                  href="#"
                  className="underline font-roboto text-base font-light hover:no-underline"
                >
                  Hamas-Israel Conflict: Visa Support and financial assistance
                </a>
                <span>.</span>
              </div>

              <div>
                <p className="font-roboto text-base font-light leading-6 mb-2">
                  People impacted by the security situation in Lebanon can find
                  more information on
                </p>
                <a
                  href="#"
                  className="underline font-roboto text-base font-light hover:no-underline inline-flex items-center gap-1"
                >
                  Lebanon Visa Support
                  <span className="text-sm">🔗</span>
                </a>
                <span>.</span>
              </div>

              <div>
                <p className="font-roboto text-base font-light leading-6 mb-2">
                  People impacted by the situation in the Ukraine can find more
                  information on the
                </p>
                <a
                  href="#"
                  className="underline font-roboto text-base font-light hover:no-underline inline-flex items-center gap-1"
                >
                  Offer of a Resolution of Status Visa to Ukrainian Temporary
                  Humanitarian Concern (subclass 786) visa holders
                  <span className="text-sm">🔗</span>
                </a>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Section */}
        <div className="bg-dha-azure-12 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-roboto text-base font-light mb-2">
                Customise this page
              </p>
              <Button
                variant="ghost"
                className="text-white text-xl font-medium hover:bg-white/10 px-0 h-auto py-2 justify-start gap-2"
              >
                Show me more...
                <ChevronDown className="w-3 h-6 transform rotate-[-90deg]" />
              </Button>
            </div>
            <Button
              variant="ghost"
              className="text-white font-roboto text-base font-light hover:bg-white/10 px-0 h-auto"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
