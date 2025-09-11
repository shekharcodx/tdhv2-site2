export default function Whitecarflip() {
  return (
    <div className="relative w-full max-w-[1312px] h-[434px] rounded-2xl overflow-hidden bg-[url('/assets/whiteflip.png')] bg-cover bg-center bg-no-repeat mx-auto flex items-center">

     

      {/* Text + Buttons on Right */}
      <div className="w-1/2 text-white px-12">
        <h2 className="text-2xl  whitespace-normal">
          DRIVE YOUR DREAM CAR WITH A BIG DISCOUNT WITH DRIVE HUB
        </h2>

        <p className="mt-6 text-base leading-relaxed w-[450px]">
          You can reserve your vehicle easily through our website.
          Make your purchase today!
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
  );
}
