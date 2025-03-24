"use client";

import BuyerRegistrationForm from "@/components/BuyerRegistrationForm";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import { ChevronDown, CircleUser, LogIn, Menu, Store, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                  <p className="text-xs">New Customer?</p>
                  <p className="text-blue-500 font-semibold">Sign up</p>
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
        </nav>
      </StickyHeader>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 pt-32">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-700">
                Create Your Buyer Account
              </h2>
              <p className="text-gray-600 mt-2">
                Join our marketplace and discover authentic products from
                verified sellers
              </p>
            </div>

            <BuyerRegistrationForm />

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/account/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
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
