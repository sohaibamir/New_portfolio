import { kda, shispare } from "../assets/images";
import {
  bookstore,
  chakraui,
  contact,
  crypto,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  pharmacy,
  react,
  redux,
  sass,
  shop,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: chakraui,
    name: "Chakra-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Intern",
    company_name: "Karachi Development Authority",
    icon: kda,
    iconBg: "#e4f9e9",
    date: "March 2023 - April 2023",
    points: [
      "Worked on management systems under the guidance of the IT department team",
    ],
  },
  {
    title: "React Developer",
    company_name: "Shispare",
    icon: shispare,
    iconBg: "#e5f7ff",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Developing and maintaining web and mobile applications using React.js and React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/sohaibamir",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sohaib-amir-96b2561ba/",
  },
];

export const projects = [
  {
    iconUrl: pharmacy,
    theme: "btn-back-green",
    name: "Fit Fables",
    description:
      "Developed a full stack web application to facilitate the purchase of medicine and scheduling appointments with healthcare providers and admin panel for analytics.",
    link: "https://github.com/sohaibamir/Fit-Fables",
  },
  {
    iconUrl: bookstore,
    theme: "btn-back-blue",
    name: "Book Store",
    description:
      "Developed an Ecommerce Bookstore offering a wide range of books. With intuitive search and secure payment options, users can easily discover and purchase their favorite reads.",
    link: "https://github.com/sohaibamir/Ecommerce-Bookstore",
  },
  {
    iconUrl: shop,
    theme: "btn-back-black",
    name: "Catalog App",
    description:
      "Designed and built a mobile app that offers a range of items for easy browsing and purchase.",
    link: "https://github.com/sohaibamir/Catalog-App",
  },
  {
    iconUrl: crypto,
    theme: "btn-back-red",
    name: "Cryfts",
    description:
      "Developed a full stack web application for cryptocurrency trading. Users can securely buy, sell and manage their digital assets.",
    link: "https://github.com/sohaibamir/Cryfts",
  },
];
