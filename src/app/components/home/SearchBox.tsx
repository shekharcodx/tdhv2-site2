export default function SearchBox() {
  return (
    <div className="absolute top-[80%] md:top-[unset] md:bottom-0 md:translate-y-1/2 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-128px)] h-[336px] sm:h-[260px] md:h-[300px] lg:h-[202px] bg-white rounded-[24px] p-4 md:p-6 shadow-lg flex flex-col justify-between gap-6">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm md:text-xl md:font-semibold text-gray-800">
          SEARCH THE CAR
        </h2>
        <button className="px-6 h-10  text-white rounded-full text-sm font-medium bg-[#59787C] transition">
          RENT
        </button>
      </div>

      {/* Input Row */}
      <div className="flex gap-[10px] lg:gap-6 items-end flex-wrap">
        {/* Location */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-2 text-sm font-medium text-black mx-4">
            Location
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option>Select</option>
          </select>
        </div>

        {/* Car make & model */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-2 text-sm font-medium text-black mx-4">
            Car make & model
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option>Select</option>
          </select>
        </div>

        {/* Year */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-2 text-sm font-medium text-black mx-4">
            Year
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option>Select</option>
          </select>
        </div>

        {/* Pricing */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-2 text-sm font-medium text-black mx-4">
            Pricing
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option>Select</option>
          </select>
        </div>

        {/* Extra Select */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-2 text-sm font-medium text-black text-transparent">
            .
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option>Select</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-1 text-sm font-medium text-transparent">.</label>
          <button className="h-12 px-4 w-full bg-[#5B7B7A] text-white rounded-full font-semibold text-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_2px_6px_rgba(0,0,0,0.2)] hover:bg-[#4A6564] transition">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
