import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: {
    link: string;
    image: string;
    count: string;
    name: string;
    description: string;
  };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  index: number;
}

const CategoryCard = ({ category, Icon, index }: CategoryCardProps) => {
  return (
    <Link
      href={category.link}
      className="flex-shrink-0 group relative h-[420px] w-full sm:w-[285px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${category.image})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/80 to-dark-base/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-teal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full flex flex-col justify-between p-6">
        <div className="flex justify-end">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-slate-teal group-hover:border-slate-teal transition-all duration-300 group-hover:scale-110">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          <div className="min-h-[160px]">
            <div className="inline-block px-4 py-1.5 bg-slate-teal/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
              {category.count}
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
              {category.name}
            </h3>
            <p className="text-white/90 text-base mb-4 font-medium">
              {category.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
            <span>Explore Collection</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-slate-teal to-site-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </Link>
  );
};

export default CategoryCard;
