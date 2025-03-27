import { X } from "lucide-react";
import { useState } from "react";

interface SellerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellerLoginModal({
  isOpen,
  onClose,
}: SellerLoginModalProps) {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4">
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Seller Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seller Id
            </label>
            <input
              type="email"
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
