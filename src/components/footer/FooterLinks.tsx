import type { IconType } from "react-icons";
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

type SocialLink = {
  icon: IconType;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    icon: FaFacebook,
    href: "https://web.facebook.com/bizscoutllc?_rdc=1&_rdr",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/BizScout_",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/getbizscout/",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@Bizscout-l2s",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGUdJBHdzzFPwAAAZ7ucAvIBUaraibCBhZQT9UYWUkAhIMQuUOakthSDiqVLkbYUw4JoZMAiysXshpa69kkfLdTu-waCgXIMPZ8tmew4CN5vFblJDFX8-_JLvfK0s7R80jd1D8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbizscout1%2F",
  },
];
export default function FooterLinks(){
    return(
        <div className="flex flex-col items-start gap-3 py-3">
         <Link to="/forBuyersFeature"
               className="cursor-pointer text-[14px] leading-[20px] font-semibold font-inter text-white text-[#ffd08b]
                transition-colors duration-150">
                    Don't know how to buy a business? Start <br /> here
                </Link>
        <div className="flex items-center gap-5">
            {socialLinks.map(({icon: Icon, href}) => {
                return(
                    <a key={href}
                       href={href}
                       target="_blank">
                        <Icon className="text-[#fff] hover:text-[#ffd08b] transition-colors duration-150" />
                       </a>
                )
            })}
        </div>
        </div>
    )
}