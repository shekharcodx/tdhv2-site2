"use client";

type StepIndicatorProps = {
  totalSteps: number;
  currentStep: number; // 1-based index
};

export default function StepIndicator({
  totalSteps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex justify-center items-center gap-3 mb-6">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <div
            key={i}
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium
              ${
                isCompleted
                  ? "bg-green-500 border-green-500 text-white"
                  : isActive
                  ? "bg-gray-800 border-gray-800 text-white"
                  : "border-gray-300 text-gray-500"
              }`}
          >
            {stepNum}
          </div>
        );
      })}
    </div>
  );
}
