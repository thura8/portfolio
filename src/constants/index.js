import { meta, shopify, starbucks, tesla, uab, user } from "../assets/images";
import {
  car,
  contact,
  css,
  ecommerce,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  reactnative,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
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
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: reactnative,
    name: "React Native",
    type: "Mobile Development",
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
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  //   {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "UAB",
    icon: uab,
    iconBg: "#accbe1",
    date: "July 2023 - Present",
    points: [
      "Developed and maintained a cross-platform mobile banking app using React Native, improving user experience and reducing crash rates by 30%.",
      "Built scalable UI components, integrated REST APIs, and enhanced app accessibility across Android and iOS platforms.",
      "Collaborated closely with backend teams, designers, and QA engineers within agile sprints for efficient feature delivery.",
      "Led code reviews and implemented CI/CD pipelines to ensure high-quality, production-ready releases.",
    ],
  },
  {
    title: "Freelance Mobile & Web Developer",
    company_name: "Remote",
    icon: user,
    iconBg: "#fbc3bc",
    date: "March 2022 - June 2023",
    points: [
      "Delivered multiple mobile and web projects for international clients using React Native and React.",
      "Developed fully responsive UIs, integrated third-party APIs and ensured smooth mobile navigation experiences.",
      "Optimized app performance and minimized load times across devices by applying mobile-first best practices.",
      "Handled full project lifecycles from requirement gathering to deployment.",
    ],
  },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
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
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "E-commerce powered by React Native",
    description:
      "Our React Native e-commerce app delivers a seamless shopping experience with a sleek design, fast performance, and intuitive navigation. Browse products, add to cart, and make secure payments—all in one place. Built for efficiency and scalability, it ensures a smooth user experience across both iOS and Android.",
    link: "https://github.com/thura8/E-Commerce-react-native-",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "Imagify",
    description:
      "A full-stack AI-powered SaaS application that allows users to generate and download images using text prompts. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with the ClipDrop API for image generation. Includes user authentication, credit management, image downloads, responsive UI, and animations.",
    link: "https://imagify-fs1b3ytuu-thu-ra-lynn-htuns-projects.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "Popcorn plus movie app",
    description:
      "Our React Native movie app offers a seamless experience for discovering and exploring your favorite films. Browse movie categories, view detailed information, and create your own watchlist. With a sleek design and smooth navigation, enjoy an immersive entertainment experience anytime, anywhere.",
    link: "https://github.com/thura8/popcornPlus-movie-app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "UYChat",
    description:
      "UYChat is a user-friendly messaging app designed for seamless communication. With real-time chat features, secure messaging, and intuitive navigation, UYChat lets you stay connected with friends, family, and colleagues. Share messages, images, and videos effortlessly, and enjoy a smooth, reliable chat experience.",
    link: "https://github.com/thura8/UYChat",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "VirtualR Landing Page",
    description:
      "Unleash your creativity and build stunning websites with our intuitive development tools. Get started today and transform your ideas into a dynamic online experience!",
    link: "https://virtual-r-gamma-sooty.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Nike Landing Page",
    description:
      "Explore the latest Nike arrivals—where style, comfort, and innovation meet to elevate your active lifestyle.",
    link: "https://nike-self-six.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "React Jobs",
    description:
      "Discover the perfect React job that matches your skills and career goals.",
    link: "https://react-jobs-five-ebon.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-pink",
    name: "Pokedex",
    description:
      "The Pokédex is a digital encyclopedia in the Pokémon universe, detailing species, abilities, and evolutions. A key tool for trainers, it has evolved across games, anime, and other media.",
    link: "https://pokedex-five-green.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "HooBank",
    description:
      "Our experts analyze key factors like APRs and annual fees to identify credit cards that best match your needs.",
    link: "https://bank-modern-app-beryl.vercel.app/",
  },
];
