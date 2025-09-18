"use client";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

type PhoneProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function PhoneNumberInput({ value, onChange }: PhoneProps) {
  return (
    <PhoneInput
      country={"in"}       // default: India
      value={value}
      onChange={(val) => onChange(val)}
      inputStyle={{ width: "100%" }}
    />
  );
}
