import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const VEVOContent = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - VEVO Information */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 font-roboto text-base font-light leading-relaxed">
                Visa Entitlement Verification Online (VEVO) allows visa holders,
                employers, education providers and other organisations to check
                visa details and conditions.
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-roboto text-base font-light leading-relaxed">
                VEVO tells you details relating to your current in-effect visa:
              </p>
            </div>

            <ul className="space-y-1 pl-5">
              <li className="text-gray-700 font-roboto text-base font-light leading-relaxed list-disc">
                which visa
              </li>
              <li className="text-gray-700 font-roboto text-base font-light leading-relaxed list-disc">
                the expiry date
              </li>
              <li className="text-gray-700 font-roboto text-base font-light leading-relaxed list-disc">
                the must not arrive after date
              </li>
              <li className="text-gray-700 font-roboto text-base font-light leading-relaxed list-disc">
                the period of stay (how long you can stay)
              </li>
              <li className="text-gray-700 font-roboto text-base font-light leading-relaxed list-disc">
                conditions (what you can and can't do).
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-gray-700 font-roboto text-base font-light leading-relaxed">
                VEVO is not able to provide any details relating to visas that
                are not 'in-effect'. For example, if you hold a Bridging visa
                but your substantive visa has not yet expired.
              </p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2F1bad5c8e989e4f7eada5f5e1cf4fed12"
              alt="Study materials on desk"
              className="w-full h-[500px] object-cover rounded"
            />
          </div>

          {/* Right Column - Empty for layout */}
          <div></div>
        </div>

        {/* Bottom Section - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Long term residents */}
          <div className="space-y-4">
            <h3 className="text-[#061b36] font-roboto text-xl font-light mb-4">
              Long term residents
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 font-roboto text-base font-light leading-relaxed">
                If you migrated to Australia before 1990 and have not travelled
                out of Australia you might not have an electronic record of your
                visa. You can request an electronic record of your permanent
                visa at{" "}
                <a
                  href="#"
                  className="text-[#0073e6] border-b border-[#0073e6] hover:text-[#0073e6]/80"
                >
                  Proof of permanent residence
                </a>
                . You can then use VEVO to prove you have a permanent visa.
              </p>
              <Button
                variant="ghost"
                className="text-[#0073e6] border-b border-[#0073e6] p-0 h-auto font-roboto text-base font-light hover:bg-transparent hover:text-[#0073e6]/80"
              >
                Check conditions online
              </Button>
            </div>
          </div>

          {/* List of conditions for a visa */}
          <div className="space-y-4">
            <h3 className="text-[#061b36] font-roboto text-xl font-light mb-4">
              List of conditions for a visa
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 font-roboto text-base font-light leading-relaxed">
                For each visa, find which conditions always apply, and which may
                apply depending on a range of criteria such as your country of
                origin.
              </p>
              <Button
                variant="ghost"
                className="text-[#0073e6] border-b border-[#0073e6] p-0 h-auto font-roboto text-base font-light hover:bg-transparent hover:text-[#0073e6]/80"
              >
                See visa conditions
              </Button>
            </div>
          </div>

          {/* VEVO */}
          <div className="space-y-4">
            <h3 className="text-[#061b36] font-roboto text-xl font-light mb-4">
              VEVO
            </h3>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-[#004d8e] text-white font-roboto text-base font-light py-4 h-auto rounded-sm border-b border-[#0073e6] hover:bg-[#004d8e]/90"
              >
                <a href="/vevo/check-your-own-visa-details">
                  Check your own visa details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button className="w-full bg-[#004d8e] text-white font-roboto text-base font-light py-4 h-auto rounded-sm border-b border-[#0073e6] hover:bg-[#004d8e]/90">
                Organisation account holder VEVO login
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button className="w-full bg-[#004d8e] text-white font-roboto text-base font-light py-4 h-auto rounded-sm border-b border-[#0073e6] hover:bg-[#004d8e]/90">
                Register as a VEVO organisation
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
