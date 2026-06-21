import { memo } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Cta from "./Cta";
type NavbarProps = {
    isScrolled: boolean;
}
function Navbar({isScrolled}: NavbarProps) {
    return(
    <nav className={`fixed top-0 left-0 w-full flex items-center z-50 backdrop-blur-xl transition-colors duration-200
         justify-between px-4 sm:px-8 lg:px-12 py-3 lg:py-4 ${isScrolled ? "bg-[#F5F2EF]": "#fff"}`}>
    <div className="flex items-center gap-6">
        <Logo />
        <NavMenu />
    </div>
        <Cta />
    </nav>
    );
}
export default memo(Navbar);
