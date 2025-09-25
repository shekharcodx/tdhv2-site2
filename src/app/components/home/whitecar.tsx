export default function Whitecar() {
  return (
    <div className="relative w-full max-w-[1312px] aspect-[1312/434] rounded-2xl overflow-hidden bg-[url('/assets/carflip.png')] bg-cover bg-center bg-no-repeat mx-auto">
      {/* Text + Buttons */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2">
        {/* Scaling wrapper */}
        <div
          className="
            origin-right
            scale-90 sm:scale-95 md:scale-100 
            transition-transform duration-300
            font-[poppins] font-normal text-[#F2F2F2]
            max-w-lg
            text-left
          "
        >
          <h2 className="text-[26px] font-semibold leading-snug">
            RENT YOUR DREAM CAR WITH THE DRIVE HUB
          </h2>

          <p className="mt-4 text-[20px] leading-normal">
            You can reserve your vehicle easily through our website. Make your
            purchase today!
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-10 py-2 bg-[#59787C] rounded-full hover:bg-[#263337] transition">
              RENT A CAR
            </button>
            <button className="px-10 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
