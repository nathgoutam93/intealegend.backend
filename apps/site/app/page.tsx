"use client";

import {
  ArrowRight,
  Shield,
  CircleUser,
  Store,
  Scale,
  Menu,
  X,
  LogIn,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { env } from "process";

type media = { type: "image" | "video"; url: string; alt: string };

const SELLER_BASE_URL =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_SELLER_BASE_URL as string)
    : "http://seller.localhost:5173";

const heroMedia: media[] = [
  {
    type: "video",
    url: "https://videos.pexels.com/video-files/30762625/13158951_1920_1080_60fps.mp4",
    alt: "tea garden ",
  },
  {
    type: "video",
    url: "https://videos.pexels.com/video-files/1324942/1324942-uhd_2560_1440_24fps.mp4",
    alt: "Tea plantation landscape",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  function renderMedia(media: media, index: number) {
    if (media.type === "image") {
      return (
        <img
          src={media.url}
          alt={media.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      );
    }

    if (media.type === "video") {
      return (
        <video
          //@ts-ignore
          ref={(el) => (videoRefs.current[index] = el)}
          src={media.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      );
    }

    return null;
  }

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;
    const activeVideo = videoRefs.current[activeIndex];

    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play();
    }
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
            href={SELLER_BASE_URL}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-xl font-bold text-gray-800">
              InteaLegend
            </Link>
            <button className="p-2" onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              <Link
                href="/account/login"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Login</span>
              </Link>
              <Link
                href="/account/register"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <CircleUser className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">New Customer?</p>
                  <p className="text-blue-500 font-semibold">Sign up</p>
                </div>
              </Link>
              <div className="border-t my-4"></div>
              <Link
                href={SELLER_BASE_URL}
                className="flex items-center gap-3 p-3 bg-green-700 text-white rounded-lg hover:bg-green-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <Store className="w-5 h-5" />
                <span>Become a Seller</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative h-[100vh] md:min-h-[90vh] bg-white overflow-hidden">
          {/* Background Carousel */}
          {mounted && (
            <div className="absolute inset-0 z-0">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                className="absolute inset-0 w-full h-full"
                watchSlidesProgress={true} // Add this
                allowTouchMove={false} // Add this to prevent touch interactions
                onSlideChange={handleSlideChange}
              >
                {heroMedia.map((media, index) => (
                  <SwiperSlide key={index} className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    {renderMedia(media, index)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col items-center justify-center min-h-[90vh] z-20">
            <div className="text-center relative">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  Trusted by 1000+ Tea Manufacturers & Wholesalers
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="relative inline-block">
                  The Leading B2B Marketplace for
                </span>
                <span className="relative block mt-2 text-green-400">
                  Bulk Tea Trading
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                Connect with verified manufacturers, exporters, and wholesale
                buyers. Experience secure bulk trading with quality assurance
                and logistics support.
              </p>
              <div className="mx-auto w-max grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href={SELLER_BASE_URL}>
                  <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-800 transition shadow-lg shadow-green-700/10">
                    Start Selling <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href={"/account/login"}>
                  <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition shadow-lg shadow-black/5">
                    Start Buying <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="invisible relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
                <p className="text-4xl font-bold text-white">200+</p>
                <p className="text-gray-200">Tea Manufacturers & Exporters</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
                <p className="text-4xl font-bold text-white">₹500Cr+</p>
                <p className="text-gray-200">Monthly Trade Volume</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
                <p className="text-4xl font-bold text-white">50+</p>
                <p className="text-gray-200">Countries Connected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Why Choose InTeaLegend?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="grid grid-cols-3 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5 group">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Secure Trading
                  </h3>
                  <p className="text-gray-400">
                    Every transaction is monitored and secured through our
                    advanced verification system
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5 group">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <CircleUser className="w-8 h-8 text-white" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Verified Enterprise Network
                  </h3>
                  <p className="text-gray-400">
                    Access our network of pre-verified manufacturers, exporters
                    and wholesale buyers
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5 group">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-400">
                    Rigorous quality checks and standards for all listed
                    products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20" />
          <div className="absolute inset-0 bg-[url('/assets/images/tea-field.jpg')] opacity-30 bg-cover bg-center" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Ready to Scale Your Tea Business?
            </h2>
            <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">
              Join the largest B2B tea trading network. Connect with verified
              manufacturers, exporters and wholesale buyers from across the
              globe.
            </p>
            <Link href={"/account/register"}>
              <button className="bg-gradient-to-r from-green-400 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:from-green-500 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/20">
                Get Started Now <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
