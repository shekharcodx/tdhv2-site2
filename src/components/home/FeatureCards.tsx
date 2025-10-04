import { Shield, Clock, Star, RefreshCw } from "lucide-react";

const FeatureCards = () => {
  const values = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-grade encryption",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help",
    },
    {
      icon: Star,
      title: "Premium Cars",
      description: "Luxury fleet only",
    },
    {
      icon: RefreshCw,
      title: "Refund Guarantee",
      description: "Hassle-free cancellation",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-off-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-site-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-site-accent group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-site-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-site-primary mb-2 select-none">
                {value.title}
              </h3>
              <p className="text-site-secondary text-sm select-none">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
