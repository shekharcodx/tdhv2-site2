"use client";
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import PhoneNumberInput from "./PhoneNumberInput";
import CountrySelect from "./CountrySelect";

type Field = {
  label: string;
  type: "text" | "select" | "date" | "phone" | "country" | "city" | "category";
  options?: string[];
  name: string;
};

export type Step = Field[];

type MultiStepFormProps = {
  title: string;
  subtitle: string;
  steps: Step[];
  onSubmit: (data: Record<string, any>) => void;
};

export default function MultiStepForm({
  title,
  subtitle,
  steps,
  onSubmit,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onSubmit(formData);
    }
  };

  const handleCancel = () => setCurrentStep(0);

  const fields = steps[currentStep];

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-md">
      {/* Title & Subtitle */}
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      <p className="text-center text-gray-500 mb-6">{subtitle}</p>

      {/* Step indicator */}
      <StepIndicator totalSteps={steps.length} currentStep={currentStep + 1} />

      <div className="space-y-6">
        {/* Render fields dynamically */}
        {fields.map((field, idx) => {
          if (field.type === "phone") {
            return (
              <div key={idx}>
                <label className="mb-2 font-medium block">{field.label}</label>
                <PhoneNumberInput
                  value={formData[field.name] || ""}
                  onChange={(val) => handleChange(field.name, val)}
                />
              </div>
            );
          }

          if (field.type === "country") {
            return (
              <div key={idx}>
                <label className="mb-2 font-medium block">{field.label}</label>
                <CountrySelect
                  value={formData[field.name] || ""}
                  onChange={(val) => handleChange(field.name, val)}
                />
              </div>
            );
          }

          return (
            <div key={idx} className="flex flex-col">
              <label className="mb-2 font-medium">{field.label}</label>

              {field.type === "text" && (
                <input
                  type="text"
                  className="border rounded-md p-2"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}

              {field.type === "date" && (
                <input
                  type="date"
                  className="border rounded-md p-2"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              )}

              {(field.type === "select" ||
                field.type === "city" ||
                field.type === "category") && (
                <select
                  className="border rounded-md p-2"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                >
                  <option value="">Select one...</option>
                  {field.options?.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}

        {/* Footer buttons */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Step {currentStep + 1}/{steps.length}
          </span>
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="border px-4 py-2 rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white px-4 py-2 rounded-full"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
