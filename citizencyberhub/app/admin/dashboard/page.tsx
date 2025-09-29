"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabaseClient";

interface Case {
  id: string;
  name: string;
  email: string;
  phone: string;
  issue_type: string;
  description: string;
  status: "pending" | "approved" | "declined";
  created_at: string;
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const { data, error } = await supabase
        .from("cases")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCases(data || []);
    } catch (error) {
      setError("Failed to fetch cases");
    } finally {
      setIsLoading(false);
    }
  };

  const updateCaseStatus = async (id: string, status: "approved" | "declined") => {
    try {
      const { error } = await supabase
        .from("cases")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      // Update local state
      setCases((prev) =>
        prev.map((case_) =>
          case_.id === id ? { ...case_, status } : case_
        )
      );

      // TODO: Send email notification to the victim
    } catch (error) {
      console.error("Error updating case status:", error);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Access denied. Please log in first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-indian-navy mb-8">Case Dashboard</h1>

        {error && (
          <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-8">Loading cases...</div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Case Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cases.map((case_) => (
                    <tr key={case_.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {case_.name}
                        </div>
                        <div className="text-sm text-gray-500">{case_.email}</div>
                        <div className="text-sm text-gray-500">{case_.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {case_.issue_type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            case_.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : case_.status === "declined"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {case_.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {case_.status === "pending" && (
                          <div className="flex space-x-2">
                            <button
                              onClick={() =>
                                updateCaseStatus(case_.id, "approved")
                              }
                              className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                updateCaseStatus(case_.id, "declined")
                              }
                              className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700"
                            >
                              Decline
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}