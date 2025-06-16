export const VEVOFormFooter = () => {
  const footerLinks = [
    "Accessibility",
    "Online Security",
    "Privacy",
    "Copyright & Disclaimer",
    "Change Password",
  ];

  return (
    <footer className="bg-white w-full max-w-[1504px] mx-auto border border-[#f2f2f2]">
      <div className="px-4 py-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1">
            {footerLinks.map((link, index) => (
              <div key={link} className="flex items-center">
                {index > 0 && (
                  <span className="text-black font-arial text-base mx-2">
                    |
                  </span>
                )}
                <a
                  href="#"
                  className="text-[#072243] font-arial text-base underline hover:no-underline"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
