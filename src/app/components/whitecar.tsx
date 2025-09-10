export default function Whitecar() {
  return (
    <div className="relative w-full max-w-[1312px] h-[434px] rounded-2xl overflow-hidden bg-[url('/assets/carflip.png')] bg-cover bg-center bg-no-repeat mx-auto">

      {/* Text + Buttons */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 text-white max-w-lg pb-17 mr-6">
        <h2 className="text-2xl  whitespace-nowrap">
          RENT YOUR DREAM CAR WITH THE DRIVE HUB
        </h2>

        {/* Increased margin-top here */}
        <p className="mt-10  text-basic leading-normal">
          You can reserve your vehicle easily through our website.
          Make your purchase today!
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-10 py-2 bg-[#59787C] rounded-full  hover:bg-[#263337] transition">
            RENT A CAR
          </button>
          <button className="px-10 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
