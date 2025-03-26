import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#321c7a] text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src="/securez.svg" alt="SecureZ Logo" className="h-10 w-10" />
          <span className="text-3xl font-bold">SecureZ </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
