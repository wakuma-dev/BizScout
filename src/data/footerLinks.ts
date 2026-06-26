type FooterLinkItem = {
    id: number;
    path: string;
    name: string;
}
const footerLinks: FooterLinkItem[] = [
    {
        id: 1,
        path: "/blog",
        name: "Blog"
    },
    {
        id: 2,
        path: "/careers",
        name: "Careers"
    },
    {
      id: 3,
      path: "/terms",
      name: "Terms"
    },
    {
     id: 4,
     path: "/policy",
     name: "Private Policy"
    },
    {
    id: 5,
    path: "/faqs",
    name: "FAQs"
    },
    {
    id: 6,
    path: "/pricing",
    name: "Pricing"
    },
    {
     id: 7,
     path: "/sellerPricing",
     name: "Seller Pricing"
    },
    {
    id: 8,
    path: "/partners",
    name: "Affiliate Program"
    }
];
export default footerLinks;