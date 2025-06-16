import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  hasArrow?: boolean;
  isExternal?: boolean;
  className?: string;
}

export const ServiceCard = ({
  title,
  description,
  hasArrow = true,
  isExternal = false,
  className = "",
}: ServiceCardProps) => {
  return (
    <Card
      className={`h-60 border border-gray-300 hover:shadow-lg transition-shadow cursor-pointer ${className}`}
    >
      <CardContent className="p-12 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-dha-azure-12 font-roboto text-xl font-medium leading-7 flex-1 pr-6">
            {title}
          </h3>
          {hasArrow && (
            <ChevronRight className="w-3 h-6 text-dha-azure-12 flex-shrink-0" />
          )}
          {isExternal && (
            <ExternalLink className="w-4 h-4 text-dha-azure-12 flex-shrink-0" />
          )}
        </div>

        <p className="text-dha-grey-40 font-roboto text-base font-light leading-6 flex-1">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
