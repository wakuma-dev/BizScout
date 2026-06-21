type NavLinkItem = {
    id: number,
    path: string;
    name: string;
    subLinks?: Omit<NavLinkItem, "subLinks">[];
}

const navLinks: NavLinkItem[] = [
    {id: 1,
    path: "/forBuyers",
     name: "For Buyers",
     subLinks: [
        {
        id: 11,
         path: "/forBuyersFeature",
         name: "Buyer Feature & Service"   
        },
        {
        id: 12,
        path: "/bizScottPrivateClient",
        name: "BizScott Private Client"
        }
     ]

    },
    {
    id: 2,
    path: "/sellers",
    name: "Sellers"
    },
    {
    id: 3,
    path: "/brokers",
    name: "Brokers"
    },
    {
    id: 4,
    path: "/partners",
    name: "Partners"
    },
    {
    id: 5,
    path: "/pricing",
    name: "Pricing"
    },
    {
    id: 6,
    path: "/toolsResource",
    name: "Tools & Resource"
    }
]

export default navLinks;