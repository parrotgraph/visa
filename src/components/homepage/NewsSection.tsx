import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "./NewsCard";

export const NewsSection = () => {
  const newsArticles = [
    {
      title:
        "Enhanced VEVO service now provides comprehensive visa condition details",
      description:
        "Visa Entitlement Verification Online (VEVO) has been updated to provide more detailed information about visa conditions, expiry dates, and period of stay for current in-effect visas.",
      date: "4 December 2024",
      imageAlt: "VEVO service enhancement announcement",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2Fde2ff53265f74a999578df852f6e0c07",
    },
    {
      title: "Electronic visa records now available for long-term residents",
      description:
        "Residents who migrated to Australia before 1990 can now request an electronic record of their permanent visa through our Proof of permanent residence service.",
      date: "28 November 2024",
      imageAlt: "Electronic visa records for long-term residents",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2F0565f9815b02421aa11458888c11e05d",
    },
    {
      title: "VEVO organisation accounts streamline visa verification process",
      description:
        "Employers, education providers and other organisations can now register for VEVO accounts to efficiently check visa details and conditions for their clients and employees.",
      date: "15 November 2024",
      imageAlt: "VEVO organisation account registration",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F4698f965f94342cfa2537ca7b7338e5c%2F2b85e1981a944532bab1ae1f4befd178",
    },
  ];

  return (
    <section className="bg-dha-grey-95 px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-dha-grey-20 font-roboto text-3xl font-medium">
              News
            </h2>
            <Button
              variant="link"
              className="text-dha-grey-20 font-roboto text-base font-light p-0 h-auto"
            >
              See all
            </Button>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-0 bg-gray-300 hover:bg-gray-400"
            >
              <ChevronLeft className="w-3 h-6 text-dha-grey-60" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-0 bg-gray-300 hover:bg-gray-400"
            >
              <ChevronRight className="w-3 h-6 text-dha-grey-60" />
            </Button>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              date={article.date}
              imageAlt={article.imageAlt}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
