import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import navLinks from "../../data/navLinks";

export default function NavMenu() {
  return (
    <div className="hidden lg:flex items-center">
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.id} className="relative group">
            {/* Main Link */}
            <div className="flex items-center gap-1 cursor-pointer relative">
              <NavLink
                to={link.path}
                className={`text-[15px] leading-[23px] font-inter font-medium ${link.id === 1 ? "text-[#D4B272]" : "text-[#252423]"}`}
              >
                {link.name}
              </NavLink>

              {link.subLinks && (
                <ChevronDown
                  size={16}
                  color="#D4B272"
                  className="absolute top-1/2 -translate-y-1/2 right-[-18px] transition-transform duration-300 group-hover:rotate-180"
                />
              )}
            </div>

            {/* Dropdown */}
            {link.subLinks && (
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white text-black rounded-lg p-4 min-w-[220px] flex flex-col gap-2"
                >
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.path}>
                      <NavLink
                        to={subLink.path}
                        className="block hover:text-[#D4B272] transition-colors"
                      >
                        {subLink.name}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}