import { meta, shopify, starbucks, tesla, uab } from "../assets/images";
import {
  car,
  contact,
  css,
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
  //   {
  //     imageUrl: express,
  //     name: "Express",
  //     type: "Backend",
  //   },
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

  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },

  //   {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  //   },
  //   {
  //     imageUrl: nodejs,
  //     name: "Node.js",
  //     type: "Backend",
  //   },

  //   {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "Junior Software Developer (Internship)",
    company_name: "UAB",
    icon: uab,
    iconBg: "#accbe1",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Gained hands-on experience in web and mobile development.",
      "Worked closely with senior developers to understand industry best practices.",
      "Assisted in developing and maintaining applications using React Native and other relevant technologies.",
      "Collaborated with teams to troubleshoot and debug issues effectively.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "UAB",
    icon: uab,
    iconBg: "#fbc3bc",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining fintech applications using React Native, JavaScript frameworks, and modern financial technology solutions.",
      "Implementing secure and efficient features to enhance user experiences in digital banking and financial services.",
      "Working closely with cross-functional teams to deliver high-quality fintech products.",
      "Participating in code reviews and contributing to continuous improvement efforts in financial app development.",
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
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
