import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <Image
              src={"/assets/images/logo.png"}
              alt="InTeaLegend Logo"
              className="w-40"
              width={512}
              height={512}
            />
            <p className="text-sm">
              Your trusted marketplace for authentic products
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/account/login" className="hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/account/register" className="hover:text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/account/seller" className="hover:text-white">
                  Become a Seller
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">FAQ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Tea Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Tea & Health
                </Link>
                <li></li>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Email: support@intealegend.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} InteaLegend. All rights reserved.
          </p>
          <p>
            Designed & developed by -{" "}
            <a target="_blank" href="https://www.govisible.in/">
              GoVisible
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
