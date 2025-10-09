import { Smartphone, Download, Star, CheckCircle } from "lucide-react";
import Image from "next/image";

const MobileAppBanner = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-site-primary to-site-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-site-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-site-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-site-accent/10 border border-site-accent/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-site-accent" />
              <span className="text-site-accent text-sm font-semibold">
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Book on the Go with Our Mobile App
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Get exclusive deals, instant bookings, and manage your rentals
              from anywhere. Download the app and experience luxury car rental
              at your fingertips.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Instant booking confirmation",
                "Exclusive mobile-only deals",
                "Real-time support chat",
                "Easy rental management",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-site-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-white hover:bg-gray-100 text-site-primary px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white hover:bg-gray-100 text-site-primary px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative lg:pl-12">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-site-accent rounded-[3rem] blur-2xl opacity-20 animate-pulse" />

              <div className="relative animate-float">
                <div className="relative w-[280px] h-[570px] mx-auto bg-gradient-to-b from-[#1f1f1f] to-[#0a0a0a] rounded-[3rem] p-2 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0a0a0a] rounded-b-2xl z-10" />

                  <div className="relative w-full h-full bg-black rounded-[2.7rem] overflow-hidden border border-[#2a2a2a]">
                    <div className="absolute top-0 left-0 right-0 h-12 z-20">
                      <div className="flex items-center justify-between px-6 pt-2 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-3 border border-white/50 rounded-sm relative">
                            <div className="absolute inset-0.5 bg-white rounded-sm" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-full bg-off-white pt-12">
                      <div className="px-4 py-3 bg-white border-b border-grey/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/assets/dlogo.png"
                              alt="Drive Hub"
                              className="h-5 w-auto"
                              height={20}
                              width={100}
                            />
                          </div>
                          <div className="flex gap-0.5">
                            <div className="w-1 h-1 bg-site-accent rounded-full" />
                            <div className="w-1 h-1 bg-site-accent rounded-full" />
                            <div className="w-1 h-1 bg-site-accent rounded-full" />
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-3 space-y-3 overflow-y-auto h-[calc(100%-60px)]">
                        <div className="relative h-36 rounded-xl overflow-hidden shadow-md">
                          <img
                            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Car preview"
                            className="w-full h-full object-cover animate-ken-burns"
                          />
                          <div className="absolute bottom-2 right-2 bg-site-accent text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
                            Available
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-3 shadow-md">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-grey">
                              Lamborghini
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs font-semibold">4.9</span>
                            </div>
                          </div>
                          <h4 className="font-bold text-dark-base text-sm mb-1">
                            Huracán EVO
                          </h4>
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-site-accent">
                              AED 4,500
                            </span>
                            <span className="text-xs text-grey">/day</span>
                          </div>
                        </div>

                        <button className="w-full bg-site-accent text-white font-semibold py-2.5 rounded-xl text-sm shadow-lg active:scale-95 transition-transform">
                          Book Now
                        </button>

                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div className="bg-white rounded-lg p-2 shadow-sm">
                            <div className="text-xs text-grey mb-1">Daily</div>
                            <div className="text-sm font-bold text-dark-base">
                              AED 4,500
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-2 shadow-sm">
                            <div className="text-xs text-grey mb-1">Weekly</div>
                            <div className="text-sm font-bold text-dark-base">
                              AED 28,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2a2a2a] rounded-full" />
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-site-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-site-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;
