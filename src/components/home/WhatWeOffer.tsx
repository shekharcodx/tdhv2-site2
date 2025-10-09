import {
  MapPin,
  Award,
  Zap,
  Headphones as HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: MapPin,
      title: "UAE-Wide Coverage",
      description:
        "Rent and return your luxury car at any location across the UAE. From Dubai to Abu Dhabi, we have you covered with convenient pickup and drop-off points.",
      color: "#59787C",
      link: "/catalog",
    },
    {
      icon: Award,
      title: "Verified Premium Fleet",
      description:
        "Every vehicle in our collection is meticulously maintained and verified. We partner only with the most reputable luxury car providers to ensure excellence.",
      color: "#59787C",
      link: "/about",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description:
        "Book your dream car in seconds with our streamlined process. No paperwork hassles, no waiting. Just choose, click, and drive away in style.",
      color: "#59787C",
      link: "/how-it-works",
    },
    {
      icon: HeadphonesIcon,
      title: "Concierge Service",
      description:
        "Our dedicated team is available 24/7 to assist with any request. From delivery to your doorstep to personalized recommendations, we are here to serve you.",
      color: "#59787C",
      link: "/help",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-off-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-slate-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-slate-teal font-bold text-sm uppercase tracking-wider mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-base mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury car rental with services designed
            for the discerning driver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="group relative p-8 lg:p-10 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-teal/5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-soft-grey/30 hover:border-slate-teal/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-teal/20 to-slate-teal/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                      <Icon className="w-8 h-8 text-slate-teal transition-transform group-hover:scale-110" />
                    </div>
                    <div className="w-8 h-8 bg-slate-teal/0 group-hover:bg-slate-teal rounded-full flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-transparent group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-base mb-4 group-hover:text-slate-teal transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-grey leading-relaxed mb-6">
                      {offering.description}
                    </p>
                    <Link
                      href={offering.link}
                      className="inline-flex items-center gap-2 text-slate-teal font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-teal/0 to-slate-teal/0 group-hover:from-slate-teal/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-slate-teal hover:bg-slate-teal/90 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 group"
          >
            <span>Discover How It Works</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
