import Nav from "./Nav";

export default function DisclaimerPage() {
  return (
    <div>
      {/* ✅ Navbar at the top */}
      <Nav/>

      {/* Disclaimer Content */}
      <div className="mx-auto py-12 px-6 justify-start text-gray-800">
        <h1 className="text-2xl font-bold text-red-600 mb-6">
          ⚠️ Important Disclaimer – Please Read
        </h1>

        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>
            You acknowledge that <strong>The Drive Hub</strong> is not a car
            rental company, but a digital platform that connects you with
            third-party rental Vendors.
          </li>
          <li>
            You will enter into a direct agreement with the selected Vendor, who
            is solely responsible for vehicle delivery, pricing, condition, and
            post-rental obligations.
          </li>
          <li>
            Your documents will be securely shared with the Vendor only for
            evaluation and identity verification.
          </li>
          <li>
            All payments, deposit holds, and refunds are processed directly by
            the Vendor.
          </li>
          <li>
            The Drive Hub does not interfere in Vendor decisions, nor assumes
            liability for issues related to booking approval, vehicle condition,
            deposit disputes, or traffic fines.
          </li>
        </ul>

        <p className="mb-6">
          By proceeding, you confirm that you understand these terms. <br />
          Please refer to our{" "}
          <a
            href="/terms"
            className="text-blue-600 hover:underline font-medium"
          >
            Terms & Conditions
          </a>{" "}
          for full details.
        </p>

        {/* ✅ Fixed Button */}
        <button
          className="text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          style={{ background: "var(--gradient-background)" }}
        >
          ✅ I Understand and Agree
        </button>
      </div>
    </div>
  );
}
