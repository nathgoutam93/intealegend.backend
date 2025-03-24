"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface StickyHeaderProps {
  children?: React.ReactNode;
}

export default function StickyHeader({ children }: StickyHeaderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-green-700">
            <Image
              src={"/assets/images/logo.png"}
              alt="InTeaLegend Logo"
              className="w-20"
              width={512}
              height={512}
            />
          </Link>
          {children}
        </div>
      </div>
    </header>
  );
}
