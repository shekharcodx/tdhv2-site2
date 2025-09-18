"use client";
import countries from "world-countries";

type CountrySelectProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full"
    >
      <option value="">Select country</option>
      {countries.map((c) => (
        <option key={c.cca2} value={c.name.common}>
          {c.flag} {c.name.common}
        </option>
      ))}
    </select>
  );
}
