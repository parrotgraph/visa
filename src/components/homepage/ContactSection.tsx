import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <a
      href="https://www.nationalsecurity.gov.au/what-can-i-do/report-suspicious-behaviour"
      className="bg-dha-azure-18 px-8 lg:px-16 py-16 cursor-pointer flex block"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contact Header */}
          <div className="lg:col-span-1">
            <h2 className="text-dha-grey-95 font-roboto text-3xl font-medium mb-8">
              Contact
            </h2>
          </div>

          {/* General Contact */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-dha-grey-95 font-roboto text-lg font-medium">
              General
            </h3>
            <p className="text-dha-grey-95 font-roboto text-base font-light leading-6">
              Do you have a question, feedback or a complaint? Let us help you
              find the right answer.
            </p>
            <div className="space-y-4">
              <Button
                variant="link"
                className="text-white font-roboto text-base font-light p-0 h-auto underline hover:no-underline"
              >
                Popular questions
              </Button>
              <br />
              <Button
                variant="link"
                className="text-white font-roboto text-base font-light p-0 h-auto underline hover:no-underline"
              >
                Contact us
              </Button>
            </div>
          </div>

          {/* Report Suspicious Activities */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-dha-grey-95 font-roboto text-lg font-medium">
              Report suspicious activities
            </h3>
            <div className="border-b border-white pb-6">
              <div
                className="w-full h-48 flex items-center justify-center mb-4 bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2F2b28216685e246ca9e1aac768a6088d3)",
                }}
              >
                <div className="text-white text-center">
                  <div className="text-sm font-medium mb-1">Border Watch</div>
                  <div className="text-xs opacity-80">Report online</div>
                </div>
              </div>
            </div>
          </div>

          {/* National Security Hotline */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-dha-grey-95 font-roboto text-lg font-medium">
              National Security Hotline
            </h3>
            <div className="border-b border-white pb-6">
              <a
                href="https://www.nationalsecurity.gov.au/what-can-i-do/report-suspicious-behaviour"
                className="w-full h-52 flex items-center justify-center mb-4 cursor-pointer bg-no-repeat bg-center bg-cover block"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2Feee4059deb7445bcae4edda4cd6dee15)",
                }}
              >
                <div className="text-white text-center">
                  <div className="text-sm font-medium mb-1">
                    Security Hotline
                  </div>
                  <div className="text-xs opacity-80">
                    If it doesn't add up, speak up
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
