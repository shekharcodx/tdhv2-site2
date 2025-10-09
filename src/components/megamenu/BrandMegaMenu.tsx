import Link from "next/link";
import { ArrowRight } from 'lucide-react';

interface BrandMegaMenuProps {
  onClose: () => void;
}

const brands = [
  { name: 'Lamborghini', slug: 'lamborghini' },
  { name: 'Ferrari', slug: 'ferrari' },
  { name: 'Porsche', slug: 'porsche' },
  { name: 'Mercedes-Benz', slug: 'mercedes' },
  { name: 'BMW', slug: 'bmw' },
  { name: 'Audi', slug: 'audi' },
  { name: 'Tesla', slug: 'tesla' },
  { name: 'Toyota', slug: 'toyota' },
  { name: 'Nissan', slug: 'nissan' },
  { name: 'Range Rover', slug: 'range-rover' },
  { name: 'Bentley', slug: 'bentley' },
  { name: 'Rolls-Royce', slug: 'rolls-royce' }
];

export default function BrandMegaMenu({ onClose }: BrandMegaMenuProps) {
  return (
    <div className="w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-soft-grey/20">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-semibold text-site-secondary uppercase tracking-wider">
            Browse by Brand
          </h3>
          <Link
            href="/catalog"
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm bg-gradient-to-r from-site-accent to-slate-teal bg-clip-text text-transparent hover:from-slate-teal hover:to-site-accent transition-all duration-300 font-medium"
            role="menuitem"
          >
            View all brands
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/catalog?brand=${brand.slug}`}
              onClick={onClose}
              className="group p-4 rounded-xl bg-gradient-to-br from-off-white/50 to-white border border-soft-grey/30 hover:border-site-accent/40 hover:shadow-xl hover:shadow-site-accent/10 transition-all duration-300 hover:-translate-y-1"
              role="menuitem"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-site-accent/5 via-white to-slate-teal/5 flex items-center justify-center border border-soft-grey/20 group-hover:border-site-accent/40 group-hover:from-site-accent/10 group-hover:to-slate-teal/10 transition-all duration-300 shadow-sm">
                  <span className="text-2xl font-bold text-site-primary group-hover:text-site-accent transition-colors">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-site-primary text-sm group-hover:bg-gradient-to-r group-hover:from-site-accent group-hover:to-slate-teal group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {brand.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
