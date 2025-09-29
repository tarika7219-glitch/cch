'use client';

import { useState } from 'react';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issueType: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any error messages when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.phone.trim()) return 'Phone number is required';
    if (!formData.issueType) return 'Please select an issue type';
    if (!formData.description.trim()) return 'Description is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Invalid email format';

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    
    if (error) {
      setSubmitStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Your case has been submitted successfully. We will review it and get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          issueType: '',
          description: ''
        });
      } else {
        throw new Error(data.error || 'Failed to submit case');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit your case. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-indian-navy mb-8">Report a Case</h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              If you&apos;re experiencing cyberbullying, online harassment, or any other
              form of digital crime, please fill out the form below. We&apos;re here to help.
            </p>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="issueType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type of Issue
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                >
                  <option value="">Select an issue type</option>
                  <option value="cyberbullying">Cyberbullying</option>
                  <option value="blackmailing">Blackmailing</option>
                  <option value="online_harassment">Online Harassment</option>
                  <option value="identity_theft">Identity Theft</option>
                  <option value="financial_fraud">Financial Fraud</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indian-navy"
                  required
                  placeholder="Please provide details about your case..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indian-navy hover:bg-indian-saffron text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Case'}
              </button>
            </form>
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-indian-navy mb-4">
              What happens next?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Our team will review your case within 24-48 hours</li>
              <li>
                You&apos;ll receive an email notification about whether your case has been
                accepted
              </li>
              <li>
                If accepted, we&apos;ll work with you to provide support and guidance
              </li>
              <li>
                All information shared is kept strictly confidential
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
