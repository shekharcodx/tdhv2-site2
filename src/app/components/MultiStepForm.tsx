"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import StepIndicator from "./StepIndicator";
import PhoneNumberInput from "./PhoneNumberInput";
import CountrySelect from "./CountrySelect";

// ----------------------
// Types
// ----------------------
type Field = {
  label: string;
  type: "text" | "select" | "date" | "phone" | "country" | "city" | "category";
  options?: string[];
  name: keyof FormData;
};
export type Step = {
  fields: Field[];
  subtitle: string;
};

type MultiStepFormProps = {
  title: string;
  steps: Step[];
  onSubmit: (data: FormData) => void;
};

// ----------------------
// Schema & Types
// ----------------------
const finalSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email"),
  nationality: z.string().nonempty("Nationality is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  dob: z.string().nonempty("Date of birth is required"),
  country: z.string().nonempty("Country is required"),
  city: z.string().nonempty("City is required"),
  category: z.string().nonempty("Category is required"),
});

type FormData = z.infer<typeof finalSchema>;

// ----------------------
// Component
// ----------------------
export default function MultiStepForm({
  title,
  steps,
  onSubmit,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    setValue,
    watch,
    getValues,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(finalSchema),
    mode: "onChange",
  });

  const { fields, subtitle } = steps[currentStep];

  const handleNext = async () => {
    const fieldNames = fields.map((f) => f.name);
    const isValid = await trigger(fieldNames as (keyof FormData)[]);
    if (!isValid) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onSubmit(getValues());
    }
  };

  const handleCancel = () => setCurrentStep(0);

  return (
     <div
      className="mx-auto rounded-lg shadow-lg flex flex-col items-center overflow-auto scrollbar-pretty"
      style={{
        width: "560px",
        height: "90vh", // or "600px"
        padding: "40px",
        background: "white",
        borderRadius: "8px",
      }}
    >
      <h2 className="font-poppins text-[#263337] mb-6 font-normal text-[40px] leading-[120%] text-center uppercase">
        {title}
      </h2>

      {/* Step Indicator */}
      <StepIndicator totalSteps={steps.length} currentStep={currentStep + 1} />

      {/* Subtitle */}
      <p className="text-[#263337] font-poppins font-normal text-[28px] leading-[130%] text-center mb-4">
        {subtitle}
      </p>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
        className="flex flex-col justify-between flex-1"
        style={{
          width: "464px",
          gap: "24px",
          marginTop: "30px",
        }}
      >
        {/* Fields */}
        <div
          className="overflow-auto scrollbar-pretty"
          style={{
            width: "464px",
            maxHeight: "260px",
          }}
        >
          {fields.map((field, idx) => {
            const errorMsg = errors[field.name]?.message as string | undefined;

            if (field.type === "phone") {
              return (
                <div key={idx} style={{ width: "464px" }}>
                  <label className="mb-2 font-medium block text-[#263337]">
                    {field.label}
                  </label>
                  <PhoneNumberInput
                    value={watch(field.name) || ""}
                    onChange={(val) => setValue(field.name, val)}
                  />
                  {errorMsg && (
                    <p className="text-red-400 text-sm mt-1">{errorMsg}</p>
                  )}
                </div>
              );
            }

            if (field.type === "country") {
              return (
                <div key={idx} style={{ width: "464px" }}>
                  <label className="mb-2 font-medium block text-[#263337]">
                    {field.label}
                  </label>
                  <CountrySelect
                    value={watch(field.name) || ""}
                    onChange={(val) => setValue(field.name, val)}
                  />
                  {errorMsg && (
                    <p className="text-red-400 text-sm mt-1">{errorMsg}</p>
                  )}
                </div>
              );
            }

            return (
              <div key={idx} className="flex flex-col" style={{ gap: "6px" }}>
                <label className="font-medium text-[#263337]">
                  {field.label}
                </label>

                {field.type === "text" && (
                  <input
                    type="text"
                    {...register(field.name)}
                    className="border border-gray-500 bg-transparent text-[#263337] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#89B4BA] w-full"
                  />
                )}

                {field.type === "date" && (
                  <input
                    type="date"
                    {...register(field.name)}
                    className="border border-gray-500 bg-transparent text-[#263337] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#89B4BA] w-full"
                  />
                )}

                {(field.type === "select" ||
                  field.type === "city" ||
                  field.type === "category") && (
                  <select
                    {...register(field.name)}
                    className="border border-gray-500 bg-transparent text-[#263337] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#89B4BA] w-full"
                  >
                    <option value="">Select one...</option>
                    {field.options?.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                )}

                {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="flex items-center"
          style={{
            width: "464px",
            justifyContent: "space-between",
            marginTop: "20px",
           
          }}
        >
          <span className="text-sm text-gray-400">
            Step {currentStep + 1}/{steps.length}
          </span>
          <div className="flex gap-4 ">
            <button
              type="button"
              onClick={handleCancel}
              className="border border-[#89B4BA] text-[#263337] px-6 py-2 rounded-full hover:bg-gray-100 transition "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#263337] to-[#59787C] text-white px-6 py-2 rounded-full transition"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
