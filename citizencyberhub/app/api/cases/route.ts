import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseClient";

type CaseSubmission = {
  name: string;
  email: string;
  phone: string;
  issueType: string;
  description: string;
};

function isValidCaseSubmission(data: any): data is CaseSubmission {
  return (
    typeof data === "object" &&
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.phone === "string" &&
    typeof data.issueType === "string" &&
    typeof data.description === "string"
  );
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate request body structure
    if (!isValidCaseSubmission(data)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const { name, email, phone, issueType, description } = data;

    // Validate required fields
    if (!name.trim() || !email.trim() || !phone.trim() || !issueType || !description.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Insert into database
    const { data: newCase, error: dbError } = await supabase
      .from("cases")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          issue_type: issueType,
          description: description.trim(),
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to submit case" },
        { status: 500 }
      );
    }

    if (!newCase) {
      return NextResponse.json(
        { error: "No case data returned" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Case submitted successfully", case: newCase },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting case:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
