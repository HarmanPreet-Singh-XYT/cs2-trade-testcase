// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          This extension stores all user settings and CS2 page data locally on the user's device.
          No data is transmitted, shared, or sold. All functionality is executed locally and respects
          user privacy.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Data Collection</h2>
        <p className="mb-4 text-gray-700">
          This extension does <strong>not</strong> collect any personally identifiable information,
          health information, financial data, authentication credentials, location, web history,
          user activity, or website content beyond what is needed for local functionality.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Permissions</h2>
        <p className="mb-4 text-gray-700">
          The extension uses the following permissions:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li><strong>activeTab:</strong> To interact with the currently active CS2 page.</li>
          <li><strong>scripting:</strong> To inject scripts into the page for automation.</li>
          <li><strong>storage:</strong> To save user preferences locally.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Remote Code</h2>
        <p className="mb-4 text-gray-700">
          No remote code is used. All scripts are bundled with the extension and executed locally.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Changes to This Policy</h2>
        <p className="mb-4 text-gray-700">
          This privacy policy may be updated from time to time. Users are encouraged to review this page
          periodically.
        </p>

        <p className="mt-8 text-gray-500 text-sm">
          Last updated: August 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
