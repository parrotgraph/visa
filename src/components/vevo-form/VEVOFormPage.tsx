import { VEVOFormHeader } from "./VEVOFormHeader";
import { VEVOFormContent } from "./VEVOFormContent";
import { VEVOFormFooter } from "./VEVOFormFooter";

export const VEVOFormPage = () => {
  return (
    <div className="min-h-screen bg-[#bebfc7]">
      <VEVOFormHeader />
      <VEVOFormContent />
      <VEVOFormFooter />
    </div>
  );
};
