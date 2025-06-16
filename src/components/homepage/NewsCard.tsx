import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageAlt: string;
  imageUrl?: string;
  className?: string;
}

export const NewsCard = ({
  title,
  description,
  date,
  imageAlt,
  imageUrl,
  className = "",
}: NewsCardProps) => {
  return (
    <Card
      className={`w-full max-w-sm hover:shadow-lg transition-shadow cursor-pointer ${className}`}
    >
      {/* Image */}
      <div
        className="w-full h-64 flex items-center justify-center bg-no-repeat bg-center bg-cover"
        style={
          imageUrl
            ? { backgroundImage: `url(${imageUrl})` }
            : {
                backgroundImage:
                  "linear-gradient(to right, rgb(96, 165, 250), rgb(59, 130, 246))",
              }
        }
      >
        <div className="text-white text-center">
          <div className="text-sm font-medium mb-1">News Image</div>
          <div className="text-xs opacity-80">{imageAlt}</div>
        </div>
      </div>

      <CardContent className="bg-white p-6">
        <div className="space-y-4">
          <div className="text-dha-grey-34 font-roboto text-base font-light">
            {date}
          </div>

          <h3 className="text-dha-grey-20 font-roboto text-xl font-bold leading-8">
            {title}
          </h3>

          <p className="text-dha-grey-20 font-roboto text-base font-light leading-6">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
