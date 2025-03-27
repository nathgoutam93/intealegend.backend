import Footer from "@/components/footer";
import StickyHeader from "@/components/sticky-header";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { useState } from "react";

export const Route = createFileRoute("/(auth)/login")({
  beforeLoad: () => {
    const hostname = window.location.hostname;
    const isApiSubdomain = hostname.startsWith("api.");

    if (isApiSubdomain) {
      throw notFound();
    }
  },
  component: RouteComponent,
});

export default function RouteComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setIsLoading(false);
  };

  return (
    <>
      <StickyHeader />

      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 pt-32">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-700">
                Welcome Back
              </h2>
              <p className="text-gray-600 mt-2">
                Login to access your B2B trading account
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="customerId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Seller ID
                  </label>
                  <input
                    type="text"
                    id="customerId"
                    name="customerId"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your Seller ID"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/login"
                    className="text-sm text-green-700 hover:text-green-800"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-200 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 mt-2">
                don't have seller account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Become a seller
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
