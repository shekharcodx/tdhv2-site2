export default function SearchBox() {
  return (
    <div className="absolute top-[503px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-128px)] h-[202px] bg-white rounded-[24px] p-6 shadow-lg flex flex-col justify-between gap-6">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">SEARCH THE CAR</h2>

        <div className="flex items-center bg-gray-100 rounded-full p-1 shadow-inner shadow-md">
        
          <button className="text-[#2E3E3E] px-6 py-2 rounded-full text-sm font-semibold">
            Buy
          </button>
        </div>
      </div>

      {/* Input Row */}
      <div className="flex gap-6 items-end flex-wrap">
        {/* Location */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-1 text-sm font-medium text-black-700">
            Location
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option disabled selected>
              Select
            </option>
          </select>
        </div>

        {/* Car Model */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-1 text-sm font-medium text-black-700">
            Car model
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option disabled selected>
              Select
            </option>
          </select>
        </div>

        {/* Pick-Up Date */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-1 text-sm font-medium text-black-700">
            Pick-Up date
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option disabled selected>
              Select
            </option>
          </select>
        </div>

        {/* Pricing */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="mb-1 text-sm font-medium text-black-700">
            Pricing
          </label>
          <select className="h-12 px-4 rounded-full bg-gray-100 border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.15)] text-sm text-gray-700">
            <option disabled selected>
              Select
            </option>
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
