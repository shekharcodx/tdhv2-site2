export default function Redcar() {
  return (
    <div className="relative w-full max-w-[1312px] h-[434px] rounded-2xl overflow-hidden bg-[url('/assets/greenbg.png')] bg-contain bg-center bg-no-repeat mx-auto">
      {/* Car Image */}
      <img
        src="/assets/onlycar.png"
        alt="Luxury Car"
        className="absolute left-0 bottom-39 w-[600px] h-auto mx-12 z-10"
      />

      {/* Stats */}
      <div className="absolute bottom-30 left-17 font-[poppins] font-normal flex gap-5 z-20 text-white">
        <div className="flex justify-between items-center px-6 py-3 w-[200px] h-[63px] rounded-xl border border-white backdrop-blur-xl">
          <span className="text-xl font-bold">+5k</span>
          <p className="text-xs">Cars in our fleet</p>
        </div>
        <div className="flex justify-between items-center px-6 py-3 rounded-xl h-[63px] border border-white  backdrop-blur-xl">
          <span className="text-xl font-bold ">+20k</span>
          <p className="text-xs mx-4 ">Satisfied customers</p>
        </div>
      </div>

      {/* Text + Buttons */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2  font-[poppins] font-normal text-white max-w-md">
        <h2 className="text-2xl font-bold">LUXURY SUPERCAR RENTALS</h2>
        <p className="mt-3 text-sm leading-relaxed">
          Drive in style! Make your first car rental a great experience with
          luxury supercar rentals from top brands such as Rolls Royce, Mercedes
          Benz, Lamborghini and more.
        </p>

        <div className="flex gap-4 mt-5 font-[poppins] font-normal">
          <button className="px-6 py-2 bg-[#59787C] rounded-full  hover:bg-[#263337] transition">
            DISCOVER LUXURY CARS
          </button>
          <button className="px-6 py-2 border border-white rounded-full  hover:bg-white hover:text-black transition">
            VIEW ALL CARS
          </button>
        </div>
      </div>
    </div>
  );
}
