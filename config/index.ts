export const PRODUCT_CATEGORIES = [
    {
        label: "دسته بندی",
        value: "categories" as const,
        featured: [
            {
                name: "موبایل",
                href: "#",
                imageSrc: "/nav/mobile.jpg",
            },
            {
                name: "خانه و آشپزخانه",
                href: "#",
                imageSrc: "/nav/kitchen.jpg",
            },
            {
                name: "مد و پوشاک",
                href: "#",
                imageSrc: "/nav/clothing.jpg",
            }
        ],
    },
    {
        label: "پونیک",
        value: "ponic" as const,
        featured: [
            {
                name: "مجله پونیک",
                href: "#",
                imageSrc: "/ponic/ponic.jpg",
            },
            {
                name: "درباره ما",
                href: "#",
                imageSrc: "/ponic/about.jpg",
            },
            {
                name: "تماس با ما",
                href: "#",
                imageSrc: "/ponic/contact.jpg",
            }
        ],
    }
];