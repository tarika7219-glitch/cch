"use client";

import { useState } from "react";

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const predefinedAmounts = ["500", "1000", "2000", "5000"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with payment gateway (Razorpay/PayPal)
    console.log("Processing donation:", {
      amount: donationAmount || customAmount,
      ...donorInfo,
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indian-navy mb-8">Support Our Mission</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Why Donate */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-saffron mb-6">
                  Why Your Support Matters
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your donation helps us provide essential support to victims of
                    cybercrime and online harassment.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintain support infrastructure and resources</li>
                    <li>Provide counseling and guidance to victims</li>
                    <li>Develop educational materials on cyber safety</li>
                    <li>Expand our reach to help more people</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-indian-navy text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Impact of Your Donation</h3>
                <ul className="space-y-3">
                  <li>₹500 - Helps support one victim for a day</li>
                  <li>₹1000 - Provides cyber safety education materials</li>
                  <li>₹2000 - Supports technical infrastructure for a week</li>
                  <li>₹5000 - Helps multiple victims with extended support</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Donation Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-indian-navy mb-6">
                Make a Donation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Amount (₹)
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`p-3 text-center rounded-md transition-colors ${
                          donationAmount === amount
                            ? "bg-saffron text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <input
                      type="number"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount("");
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={donorInfo.name}
                    onChange={(e) =>
                      setDonorInfo({ ...donorInfo, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={donorInfo.email}
                    onChange={(e) =>
                      setDonorInfo({ ...donorInfo, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={donorInfo.message}
                    onChange={(e) =>
                      setDonorInfo({ ...donorInfo, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={!donationAmount && !customAmount}
                >
                  Proceed to Pay
                </button>
              </form>

              <div className="mt-6 text-sm text-gray-500 text-center">
                <p>Secure payment powered by Razorpay</p>
                <p className="mt-2">
                  Your donation may be eligible for tax deduction under 80G
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}