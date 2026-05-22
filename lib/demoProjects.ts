export type DemoProject = {
  id: number;
  slug: string;
  title: string;
  bannerTitle: string;
  bannerSubtitle: string;
  category: string;
  complexity: "Complex" | "Moderate" | "Easy";
  timeline: string;
  priceRange: string;
  features: string[];
  technologies: string[];
  overview: string;
  imageSrc: string;
};

export const demoProjects: DemoProject[] = [
  {
    id: 1,
    slug: "smart-education-learning-platform",
    title: "Smart Education & Learning Platform",
    bannerTitle: "Smart Education & Learning Platform",
    bannerSubtitle: "Complete ready to use web app",
    category: "Web Development",
    complexity: "Complex",
    timeline: "8-9 weeks",
    priceRange: "$1,200 - $4,000",
    imageSrc: "/project-image/Smart Education & Learning Platform.webp",
    technologies: ["Next.js", "React.js", "Redux", "Bootstrap", "MUI"],
    features: [
      "Course catalog",
      "Category-based navigation",
      "Highlighted features",
      "Responsive design",
      "Modern UI/UX design",
      "Engaging experience",
    ],
    overview:
      "This is a modern education platform that showcases online learning features. The platform is designed with a clean and professional interface, making it easy for students to explore courses, access resources, and view details. It simulates the experience of a real e-learning system with course listings, categories, and smooth navigation.",
  },
  {
    id: 2,
    slug: "easy-booking",
    title: "Easy Booking",
    bannerTitle: "Easy Booking",
    bannerSubtitle: "Seamless travel booking",
    category: "Web Development",
    complexity: "Complex",
    timeline: "8-9 weeks",
    priceRange: "$1,200 - $4,000",
    imageSrc: "/project-image/Easy Bookingy.webp",
    technologies: ["Vite", "ReactJS", "Tailwind"],
    features: [
      "Service catalog",
      "Booking management",
      "Category-based navigation",
      "Responsive design",
      "Modern UI/UX",
      "Engaging user experience",
    ],
    overview:
      "Easy Booking is a modern web-based booking and scheduling platform. The application provides users with an intuitive interface to browse, book, and manage appointments or services. The platform emphasizes a clean, responsive design and smooth navigation.",
  },
  {
    id: 3,
    slug: "luxury-hotel",
    title: "Luxury Hotel",
    bannerTitle: "DF Luxury Hotel / Resort",
    bannerSubtitle: "Luxury redefined at every turn",
    category: "Web Development",
    complexity: "Moderate",
    timeline: "3-4 weeks",
    priceRange: "$500 - $1,200",
    imageSrc: "/project-image/Luxury Hotel.webp",
    technologies: [
      "NextJS",
      "ReactJS",
      "Bootstrap",
      "Framer Motion",
      "Cloudinary",
    ],
    features: [
      "Room catalog",
      "Team member showcase",
      "Featured services",
      "Responsive design",
      "Modern UI/UX",
      "Engaging booking experience",
      "SEO optimized pages",
    ],
    overview:
      "This is a hotel and resort website that showcases accommodations, rooms, services, blogs, and booking features. The design is visually appealing and structured to help visitors explore room types, amenities, and make reservations.",
  },
  {
    id: 4,
    slug: "carcare-hub",
    title: "CarCare Hub",
    bannerTitle: "Car Care Hub",
    bannerSubtitle: "From vision to reality",
    category: "Web Development",
    complexity: "Moderate",
    timeline: "3-4 weeks",
    priceRange: "$500 - $1,200",
    imageSrc: "/project-image/CarCare Hub.webp",
    technologies: ["NextJS", "ReactJS"],
    features: [
      "Service showcase",
      "Booking/contact options",
      "Responsive design",
      "Modern UI",
      "Pop-up alerts",
      "Integration-ready",
    ],
    overview:
      "A modern automotive and car service demo platform designed for showcasing vehicles, booking services, and promoting automotive businesses.",
  },
  {
    id: 5,
    slug: "modern-food-hub",
    title: "Modern Food Hub",
    bannerTitle: "Modern Food Hub",
    bannerSubtitle: "Built to launch",
    category: "Web Development",
    complexity: "Complex",
    timeline: "3-4 weeks",
    priceRange: "$500 - $1,200",
    imageSrc: "/project-image/Modern Food Hub.webp",
    technologies: ["NextJS", "ReactJS", "Redux", "Zustand", "Sass"],
    features: [
      "Food catalog",
      "Online ordering",
      "Responsive layouts",
      "Smooth animations",
      "Carousels/sliders",
      "Loading spinners",
      "State management",
    ],
    overview:
      "A modern food and restaurant demo platform designed for online food ordering, restaurant showcases, and delivery services.",
  },
  {
    id: 6,
    slug: "elegant-and-modern-restaurant",
    title: "Elegant and Modern Restaurant",
    bannerTitle: "Elegant and Modern Restaurant",
    bannerSubtitle: "Concept to launch, simplified",
    category: "Web Development",
    complexity: "Moderate",
    timeline: "3-4 weeks",
    priceRange: "$500 - $1,200",
    imageSrc: "/project-image/Elegant and Modern Restaurant.webp",
    technologies: ["NextJS", "ReactJS", "Bootstrap"],
    features: [
      "Menu and product sections",
      "Responsive design",
      "Integration-ready",
      "Clean and professional UI",
      "Smooth carousels/sliders",
    ],
    overview:
      "A modern food and restaurant demo platform designed to highlight menus, offers, and services for restaurants, cafes, and food delivery businesses.",
  },
];

export function getDemoProjectBySlug(slug: string) {
  return demoProjects.find((project) => project.slug === slug);
}
