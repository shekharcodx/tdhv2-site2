// src/app/signin/page.tsx
"use client";

import MultiStepForm from "../components/MultiStepForm";
import signinSteps from "../data/signinSteps";

export default function SigninPage() {
  const handleSubmit = (data: Record<string, any>) => {
    console.log("Form submitted:", data);
  };

  return (
    <MultiStepForm
      title="Sign In"
      subtitle="Complete all steps to create your account"
      steps={signinSteps}
      onSubmit={handleSubmit}
    />
  );
}
