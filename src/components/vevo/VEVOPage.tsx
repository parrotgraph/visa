import { VEVOHeader } from "./VEVOHeader";
import { VEVOHero } from "./VEVOHero";
import { VEVOContent } from "./VEVOContent";
import { VEVOTabs } from "./VEVOTabs";
import { VEVOFooter } from "./VEVOFooter";

export const VEVOPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <VEVOHeader />
      <VEVOHero />
      <VEVOTabs />
      <VEVOContent />
      <VEVOFooter />
    </div>
  );
};
