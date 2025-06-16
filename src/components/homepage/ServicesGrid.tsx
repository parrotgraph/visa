import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = () => {
  const services = [
    {
      title: "Employ people from overseas",
      description: "See how to bring someone into Australia to work for you",
      hasArrow: true,
    },
    {
      title: "Hamas-Israel conflict support",
      description:
        "Find visa information to support those impacted by the Hamas-Israel conflict and surrounding areas",
      hasArrow: false,
      isExternal: true,
    },
    {
      title: "Explore visa options",
      description:
        "Answer a few questions to identify which visas might be suitable for you and your family",
      hasArrow: true,
    },
    {
      title: "Our online forms and services",
      description:
        "Apply, notify us of changes, check status or withdraw an application. Use ImmiAccount or VEVO.",
      hasArrow: true,
    },
    {
      title: "Become an Australian citizen",
      description: "See if you are eligible and how to apply",
      hasArrow: true,
    },
    {
      title: "Visa expiring or has expired",
      description: "See what your options are and what you need to do",
      hasArrow: true,
    },
    {
      title: "Your situation has changed",
      description:
        "Moved? Had a baby? Got a new passport? Need to change your plans? Find out what you need to do",
      hasArrow: true,
    },
    {
      title: "Visa conditions",
      description:
        "Your visa has conditions. Find out what you can and can't do",
      hasArrow: true,
    },
    {
      title: "Report suspicious activities",
      description:
        "Report suspicious or illegal immigration, citizenship, customs and trade activity",
      hasArrow: false,
      isExternal: true,
    },
  ];

  return (
    <section className="bg-dha-grey-95 px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              hasArrow={service.hasArrow}
              isExternal={service.isExternal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
