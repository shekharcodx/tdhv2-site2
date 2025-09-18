// src/data/signinSteps.ts
// signinSteps.ts is in src/data/, MultiStepForm.tsx is in src/components/
import type { Step } from "../components/MultiStepForm";
 // import type only

const signinSteps: Step[] = [
  // Step 1
  [
    { label: "Full Name", type: "text", name: "name" },
    { label: "Email", type: "text", name: "email" },
  ],

  // Step 2
  [
    { label: "Nationality", type: "country", name: "nationality" },
    { label: "Mobile Number", type: "phone", name: "phone" },
  ],

  // Step 3
  [
    { label: "Date of Birth", type: "date", name: "dob" },
    { label: "Country of Residence", type: "country", name: "country" },
  ],

  // Step 4
  [
    { label: "City", type: "city", name: "city", options: ["Mumbai", "Delhi", "Bangalore"] },
    { label: "Preferred Category", type: "category", name: "category", options: ["SUV", "Sedan", "Hatchback"] },
  ],

  // Step 5
  [
    { label: "Review & Confirm", type: "text", name: "confirm" },
  ],
];

export default signinSteps;
