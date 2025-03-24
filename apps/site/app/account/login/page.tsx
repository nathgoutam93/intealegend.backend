"use client";

import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import { ChevronDown, CircleUser, LogIn, Menu, Store, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your login logic here
    setIsLoading(false);
  };

  return (
    <>
      <StickyHeader>
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition">
              <CircleUser className="w-6 h-6" />
              Login
              <ChevronDown className="w-4 h-4" />
            </button>
            {/* Dropdown menu */}
            <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <Link
                href="/account/login"
                className="block px-4 py-2 text-gray-600 hover:text-green-700 hover:bg-gray-50"
              >
                <LogIn className="w-6 h-6 inline mr-2" />
                Login
              </Link>
              <Link
                href="/account/register"
                className="flex px-4 py-2 text-gray-600 hover:text-green-700 hover:bg-gray-50"
              >
                <CircleUser className="w-6 h-6 inline mr-2" />
                <div className="">
                  <p className="text-xs">New Business?</p>
                  <p className="text-blue-500 font-semibold">Register Now</p>
                </div>
              </Link>
            </div>
          </div>
          <Link
            href="/sell-online"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition flex items-center gap-2"
          >
            <Store className="w-4 h-4" />
            Become a Seller
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </StickyHeader>

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
                    Customer ID
                  </label>
                  <input
                    type="text"
                    id="customerId"
                    name="customerId"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your Customer ID"
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
                    href="/account/forgot-password"
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
              <p className="text-gray-600">
                New to InteaLegend?{" "}
                <Link
                  href="/account/register"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Register Now
                </Link>
              </p>
              <p className="text-gray-600 mt-2">
                Want to sell on InteaLegend?{" "}
                <Link
                  href="/sell-online"
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
