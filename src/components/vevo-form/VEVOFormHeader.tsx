export const VEVOFormHeader = () => {
  return (
    <div className="bg-[#072243] min-h-[110px] relative">
      {/* Background Image */}
      <img
        src="/api/placeholder/144/101"
        alt=""
        className="absolute left-0 top-0 w-36 h-25 object-cover"
      />

      <div className="w-full h-full">
        {/* Top Navigation */}
        <div className="flex justify-end items-start p-2">
          <div className="flex items-center gap-2">
            <button className="text-white text-sm underline hover:no-underline">
              <img
                src="/api/placeholder/14/12"
                alt="home"
                className="w-3.5 h-3 mr-2 inline"
              />
            </button>
            <button className="text-white text-base underline hover:no-underline font-arial">
              Help [on]
            </button>
          </div>
        </div>

        {/* Main Title */}
        <div className="flex justify-end items-end px-3 pb-3 mt-7">
          <h1 className="text-white text-3xl font-arial font-normal text-right">
            VEVO for Visa Holders
          </h1>
        </div>
      </div>
    </div>
  );
};
