"use client";

import { useState } from "react";
import { Store, Users, ShieldCheck } from "lucide-react";
import SellerLoginModal from "@/components/SellerLoginModal";
import SellerRegistrationForm from "@/components/SellerRegistrationForm";
import StickyHeader from "@/components/StickyHeader";

export default function SellOnline() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <StickyHeader>{/* Any additional header content */}</StickyHeader>

      <main className="min-h-screen pt-16">
        <section className="relative bg-gradient-to-br from-green-900 to-emerald-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header content */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sell Online with TeaLegend
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
                Join the largest tea marketplace and reach thousands of verified
                buyers
              </p>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold"
              >
                Already a seller? Login
              </button>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-12 place-items-center  items-start">
              {/* Left Column - Stats */}
              {/* <div className="hidden grid grid-cols-2 gap-8"> */}
              <div className="hidden">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
                  <Users className="w-8 h-8 text-white mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">10,000+</p>
                  <p className="text-green-100">Active Buyers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
                  <Store className="w-8 h-8 text-white mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">5,000+</p>
                  <p className="text-green-100">Sellers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
                  <ShieldCheck className="w-8 h-8 text-white mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-green-100">Secure & Trusted</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
                  <Store className="w-8 h-8 text-white mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white">5,000+</p>
                  <p className="text-green-100">Sellers</p>
                </div>
              </div>

              {/* Right Column - Registration Form */}

              <SellerRegistrationForm />
            </div>
          </div>
        </section>

        {/* Login Modal */}
        <SellerLoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </main>
    </>
  );
}
