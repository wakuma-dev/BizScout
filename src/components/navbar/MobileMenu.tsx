import useMenuStore from "../../app/store/useMenuStore";
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import navLinks from "../../data/navLinks";
import Button from "../common/Button";
import SeButton from "../common/SeButton";

export default function MobileMenu() {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const navigate = useNavigate();
    const disabled = false;
    
    const isOpen = useMenuStore((state) => state.isOpen);
    const toggleMenu = useMenuStore((state) => state.toggleMenu);
    const closeMenu = useMenuStore((state) => state.closeMenu);

    const toggleDropdown = (id: number) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    // Helper function to handle button navigation smoothly
    const handleActionClick = (path: string) => {
        closeMenu();
        navigate(path);
    };

    return (
        <div className="block lg:hidden">
            {/* Main Toggle Trigger */}
            {!isOpen && (
                <button 
                    onClick={toggleMenu}
                    className="cursor-pointer z-50 relative p-2"
                    aria-label="Open Menu"
                >
                    <Menu className="text-[#252423]" />
                </button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="p-6 fixed inset-0 z-40 flex flex-col items-start w-full h-screen bg-[#252423] overflow-y-auto"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        {/* Drawer Header Layout */}
                        <div className="flex items-center justify-between w-full mb-10">
                            <Link 
                                to="/forBuyers"
                                onClick={closeMenu}
                                className="font-inter font-semibold text-[28px] leading-[31px] text-white"
                            >
                                BizScout
                            </Link>
                            <button 
                                onClick={closeMenu}
                                className="cursor-pointer p-2"
                                aria-label="Close Menu"
                            >
                                <X className="text-white" />
                            </button>
                        </div>

                        {/* Navigation Links List */}
                        <nav className="w-full mb-8">
                            <ul className="flex flex-col w-full gap-5">
                                {navLinks.map((link) => {
                                    const hasSublinks = !!link.subLinks;
                                    const isDropdownOpen = activeDropdown === link.id;

                                    return (
                                        <li key={link.id} className="w-full border-b border-white/10 pb-4">
                                            {/* Top Level Item Row */}
                                            <div 
                                                className="flex items-center justify-between w-full cursor-pointer"
                                                onClick={() => hasSublinks ? toggleDropdown(link.id) : closeMenu()}
                                            >
                                                <NavLink
                                                    to={link.path}
                                                    onClick={(e) => {
                                                        if (hasSublinks) {
                                                            e.preventDefault();
                                                        } else {
                                                            closeMenu();
                                                        }
                                                    }}
                                                    className={({ isActive }) => 
                                                        `text-[24px] leading-[30px] font-lora font-semibold transition-colors ${
                                                            isActive || link.id === 1 ? "text-[#D4B272]" : "text-white"
                                                        }`
                                                    }
                                                >
                                                    {link.name}
                                                </NavLink>

                                                {hasSublinks && (
                                                    <ChevronDown
                                                        size={20}
                                                        className={`text-[#D4B272] transition-transform duration-300 ${
                                                            isDropdownOpen ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                )}
                                            </div>

                                            {/* Mobile Accordion Expansion Panel */}
                                            <AnimatePresence>
                                                {hasSublinks && isDropdownOpen && (
                                                    <motion.ul
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                        className="pl-4 mt-3 flex flex-col gap-3 overflow-hidden"
                                                    >
                                                        {link.subLinks?.map((subLink) => (
                                                            <li key={subLink.path}>
                                                                <Link
                                                                    to={subLink.path}
                                                                    onClick={closeMenu}
                                                                    className="block text-[16px] leading-[24px]
                                                                     text-white font-semibold font-inter hover:text-[#D4B272] transition-colors py-1"
                                                                >
                                                                    {subLink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Call to Action Buttons - Placed cleanly inside the mobile drawer panel */}
                        <div className="w-full flex flex-col gap-4 mt-auto pt-6 border-t border-white/10">
                            <Button
                                onClick={() => handleActionClick("/login")}
                                disabled={disabled}
                                text="Login to BizScout"
                            />
                            <SeButton
                                onClick={() => handleActionClick("/forBuyersFeature")}
                                disabled={disabled}
                                text="Browse Listings"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}