import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#211252]">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-18">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-400">&lt;</span>
          <span>Secure</span>
          <span className="text-green-400">Z/&gt;</span>
        </div>

        <ul>
          <li className="flex gap-12 text-lg text-white">
            <a className="hover:font-bold hover:text-green-400" href="/">Home</a>
            <a className="hover:font-bold hover:text-green-400" href="/about">About</a>
            <a className="hover:font-bold hover:text-green-400" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
