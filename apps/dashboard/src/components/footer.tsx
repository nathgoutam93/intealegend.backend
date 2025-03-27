import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
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
                <a href="https://intealegend.com" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="https://intealegend.com" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="https://intealegend.com" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://intealegend.com" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://intealegend.com/account/login"
                  className="hover:text-white"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="https://intealegend.com/account/register"
                  className="hover:text-white"
                >
                  Register
                </a>
              </li>
              <li>
                <Link to="/register" className="hover:text-white">
                  Become a Seller
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} InteaLegend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
