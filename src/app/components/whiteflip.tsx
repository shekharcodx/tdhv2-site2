export default function Whitecarflip() {
  return (
    <div className="relative w-full max-w-[1312px] aspect-[1312/434] rounded-2xl overflow-hidden bg-[url('/assets/whiteflip.png')] bg-cover bg-center bg-no-repeat mx-auto flex items-center">
      {/* Text + Buttons on Left */}
      <div
        className="
          pl-6 lg:pl-12
          origin-left
          scale-90 sm:scale-95 md:scale-100
          transition-transform duration-300
          text-white font-[poppins] font-normal
          max-w-lg
        "
      >
        <h2 className="text-[26px] lg:text-[26px] font-semibold leading-snug">
          DRIVE YOUR DREAM CAR WITH A BIG DISCOUNT WITH DRIVE HUB
        </h2>

        <p className="mt-6 text-sm sm:text-base lg:text-[20px] leading-relaxed">
          You can reserve your vehicle easily through our website. Make your
          purchase today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 sm:px-10 py-2 bg-[#59787C] rounded-full hover:bg-[#263337] transition">
            RENT A CAR
          </button>
          <button className="px-8 sm:px-10 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
