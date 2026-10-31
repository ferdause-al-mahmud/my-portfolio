import PetzAdopt from "@/assets/portfolio/project-1.png";
import StudyBuddy from "@/assets/portfolio/project-2.png";
import ClassyTouch from "@/assets/portfolio/classytouch.png";
import TokyoBlush from "@/assets/portfolio/tokyoblush.png";
import GetAvails from "@/assets/portfolio/getavails.png";
import Clothtar from "@/assets/portfolio/clothtar.jpg";
import CuhiesJewels from "@/assets/portfolio/cuhiesjewels.jpg";

export const projects = [
  {
    id: "4",
    src: ClassyTouch,
    projectName: "Classy Touch",
    demo: "https://www.classytouchbd.com",
    description: "E-commerce platform for premium fashion products",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
    featured: true,
    // Built end to end by me alone
    solo: true,
    // Work projects show who it was built for and my role on it
    company: "Classy Touch",
    role: "Full-time Developer & Maintainer",
    longDescription:
      "Classy Touch is a comprehensive e-commerce platform designed for premium fashion products. The application provides a seamless shopping experience with advanced filtering, user authentication, and secure payment processing. The responsive design ensures a consistent experience across all devices.",
    features: [
      "User authentication and profile management",
      "Product categorization and advanced filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing",
      "Order tracking and history",
      "Admin dashboard for inventory management",
    ],
    challenges:
      "Implementing a responsive design that maintains visual appeal across all devices while ensuring fast load times was a significant challenge. Additionally, integrating multiple payment gateways required careful attention to security protocols.",
  },
  {
    id: "5",
    src: TokyoBlush,
    projectName: "Tokyo Blush",
    demo: "https://tokyoblush.com/",
    description: "E-commerce website for skincare and beauty products",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
    solo: true,
    role: "Solo Full-Stack Developer",
    longDescription:
      "Tokyo Blush is an e-commerce store for authentic skincare and beauty products, offering curated J-Beauty, K-Beauty and international collections. Shoppers can browse by brand and category, search the full catalog, and earn loyalty points on every purchase that they can redeem as discount coupons from their account.",
    features: [
      "User authentication and account management",
      "Curated J-Beauty, K-Beauty and international collections",
      "Browsing by brand and by category (skin, hair, makeup, fragrance and more)",
      "Product search, shopping cart and checkout",
      "Loyalty points program with self-generated discount coupons",
      "Promotional banners and hot-sale campaigns",
    ],
    challenges:
      "Organizing a large, multi-brand catalog into intuitive collections and categories while keeping pages fast was a key challenge. Building the loyalty points system also required careful handling of point balances and coupon generation so rewards stay accurate for every order.",
  },
  {
    id: "6",
    src: GetAvails,
    projectName: "GetAvails",
    demo: "https://www.getavails.com/",
    description: "Artist & venue booking marketplace for live events",
    tech: ["Next.js", "React", "REST APIs", "Webhooks"],
    company: "Orpheus IT",
    companyUrl: "https://orpheusit.com/",
    role: "Front-end Developer (Part-time)",
    longDescription:
      "GetAvails is a booking marketplace that connects talent buyers, event organizers and venues with artists and their agents. Users can search artists and venues by location, date and genre, check live availability, send structured booking offers and negotiate deals in one place. I worked on the Next.js front end as a part-time developer at Orpheus IT, integrating the platform's backend services from their Swagger API documentation.",
    features: [
      "Real-time live chat between buyers, artists and agents (my main contribution)",
      "Webhook-driven message delivery so conversations update instantly",
      "Artist and venue discovery by location, date range and genre",
      "Role-based onboarding and dashboards for each user type",
      "Booking offers, counter-offers and negotiation threads",
      "Front-end integration with REST APIs documented in Swagger",
    ],
    challenges:
      "My biggest contribution was the live chat system. Messages arrive through webhooks, so the front end had to receive those events and keep every open conversation in sync — showing new messages instantly, in the right order, without duplicates — while staying responsive across devices. Working purely from Swagger docs also meant carefully mapping each API contract to the UI without direct access to the backend.",
  },
  {
    id: "7",
    src: Clothtar,
    projectName: "Clothtar",
    demo: "https://clothtar.com/",
    description: "E-commerce store for premium men's streetwear",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
    solo: true,
    role: "Solo Full-Stack Developer",
    longDescription:
      "Clothtar is an online store for premium men's fashion, specializing in oversized tees and street-inspired clothing, with a physical store in Uttara, Dhaka. I designed and built the whole store on my own, from the storefront to the shopping flow, giving the brand a bold, modern look that matches its streetwear identity.",
    features: [
      "Bold, image-led storefront with a hero slider for new collections",
      "Category navigation with dropdown menus (clothing, winter and more)",
      "Hot Deal section and scrolling announcement bar for offers and free delivery",
      "Product search, customer accounts and shopping cart",
      "Floating cart and Facebook Messenger chat for quick support",
      "Fully responsive layout for mobile shoppers",
    ],
    challenges:
      "Streetwear sells on visuals, so the challenge was showcasing large, high-quality product imagery while keeping pages fast on mobile networks. Building it solo also meant owning every decision, from design and front end to the backend and deployment.",
  },
  {
    id: "8",
    src: CuhiesJewels,
    projectName: "Cuhie's Jewels",
    demo: "https://cuhiesjewels.com.bd/",
    description: "Fashion & accessories store for women, with a men's line",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
    solo: true,
    role: "Solo Full-Stack Developer",
    longDescription:
      "Cuhie's Jewels is a Dhaka-based fashion store with a wide catalog: sarees, kurtis, gowns and co-ord sets, plus hijabs, jewellery, watches, bags, shoes and perfumes, and a dedicated CJ Men section. I built the store solo, structuring a large multi-category catalog so shoppers can find products quickly.",
    features: [
      "Large catalog organized with multi-level category menus",
      "Curated collections: New Arrivals, Trending, CJ Originals and What's New",
      "Flash Sale page for limited-time offers",
      "Dedicated CJ Men section with its own categories",
      "Product search, customer login and shopping cart",
      "Facebook Messenger chat and fully responsive design",
    ],
    challenges:
      "The main challenge was organizing hundreds of products across many categories and sub-categories into navigation that stays simple on both desktop and mobile. Keeping image-heavy collection pages fast while the catalog kept growing also required careful image optimization.",
  },
  {
    id: "1",
    src: PetzAdopt,
    projectName: "PetzAdopt",
    demo: "https://petzadopt-7acf4.web.app",
    code: "https://github.com/ferdause-al-mahmud/PetzAdopt",
    description: "Pet adoption platform connecting animals with loving homes",
    tech: ["React", "Node.js", "MongoDB", "Firebase Auth"],
    longDescription:
      "PetzAdopt is a comprehensive platform designed to connect animals in need with loving homes. The application streamlines the pet adoption process by providing detailed profiles of available pets, facilitating communication between shelters and potential adopters, and managing the adoption workflow.",
    features: [
      "User authentication and profile management",
      "Pet listing with detailed profiles and filtering options",
      "Adoption application submission and tracking",
      "Messaging system between adopters and shelters",
      "Donation system for supporting animal shelters",
      "Admin dashboard for shelter management",
    ],
    challenges:
      "Developing a real-time messaging system that works efficiently across different devices was challenging. Additionally, creating an intuitive user interface that appeals to both pet shelters and potential adopters required careful design considerations.",
  },
  {
    id: "2",
    src: StudyBuddy,
    projectName: "Study Buddy",
    demo: "https://assignment-hub-e4e39.web.app",
    code: "https://github.com/ferdause-al-mahmud/Assignment-Hub-client",
    description: "Collaborative learning platform for students",
    tech: ["React", "Express", "Node.js", "MongoDB", "Firebase Auth"],
    longDescription:
      "Study Buddy is a collaborative learning platform designed to help students connect, share resources, and work together on assignments. The application provides tools for creating study groups, sharing notes, and tracking academic progress.",
    features: [
      "User authentication and academic profile creation",
      "Study group formation and management",
      "Resource sharing and collaborative document editing",
      "Assignment tracking and deadline notifications",
      "Discussion forums for academic topics",
      "Progress tracking and analytics",
    ],
    challenges:
      "Implementing real-time collaborative features while maintaining performance was a significant technical challenge. Ensuring data security and privacy for academic information also required careful consideration of access controls and encryption.",
  },
];
