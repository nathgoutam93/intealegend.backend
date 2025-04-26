"use client";

import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

export default function VerificationPendingPage() {
  return (
    <>
      <StickyHeader>
        <nav className="hidden md:flex items-center gap-8">
          {/* You can keep the same header navigation as in register page */}
        </nav>
      </StickyHeader>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 pt-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <Mail className="w-16 h-16 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Verification Pending
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Thank you for registering with InteaLegend! We're currently
                  reviewing your account.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm mt-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>
                    You will be notified via email once your account is verified
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Link
                  href="/"
                  className="inline-block text-green-700 hover:text-green-800 font-medium"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
