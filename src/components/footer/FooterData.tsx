import { NavLink } from "react-router-dom"
import footerLinks from "../../data/footerLinks"
export default function FooterData(){
    return(
    <ul className="flex flex-col gap-4">
     {footerLinks.map((link) => {
        return(
            <li key={link.id}>
                <NavLink
                   to={link.path}
                   className={({isActive}) => `text-[14px] leading-[20px] 
                   font-inter font-normal ${isActive ? "text-[#ffd08b]" : "text-[#807f7f]"}`}>
                    {link.name}
                   </NavLink>
            </li>
        )
     })}
    </ul>
    )
}