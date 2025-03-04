import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export const socialLinks = [
  {
    icon: FaXTwitter,
    link: "/",
  },
  {
    icon: FaLinkedinIn,
    link: "/",
  },
  {
    icon: FaGithub,
    link: "/",
  },
];

export const experience = [
  {
    title: "Software Engineer at GGHN",
    period: "October 2024 - Present",
    description:
      "At Georgetown Global Health Nigeria (GGHN), I serve as a Frontend Developer where I build healthcare-focused web applications. I specialize in creating responsive UI components using React.js, antd, and TypeScript, having achieved significant performance improvements including a 30% enhancement in user interaction and 25% reduction in load times. I develop technical documentation using Docusaurus and work closely with backend teams to integrate APIs and ensure smooth system operations.",
  },
  {
    title: "Software Engineer at AlleyBookings",
    period: "March 2023 - October 2024",
    description:
      "At AlleyBookings, I wore dual hats as Frontend Developer and Team Lead, managing a team of 5 developers while actively contributing to code development. I successfully led the delivery of an MVP in 3 months, implemented performance optimizations that reduced load times by 50%, and achieved a 95% user satisfaction rate. My leadership responsibilities included mentoring junior developers and driving Agile development processes, which resulted in a 40% increase in team productivity.",
  },
  {
    title: "Web Developer at Ehealth4Everyone",
    period: "October 2022 - March 2023",
    description:
      "During my time at ehealth4everyone, I worked as a Web Developer focusing on healthcare technology solutions. I contributed actively to the migration of the MSDAT Platform, achieving a 30% improvement in data handling efficiency. Using Vue and TypeScript, I developed responsive designs and built an in-house database management platform that boosted team performance by 50%. I also implemented data caching solutions that reduced load times by 40% and conducted comprehensive testing using Jest to ensure code quality.",
  },
  {
    title: "Intern at Sysmax Technologies",
    period: "August 2019 - June 2020",
    description:
      "I began my career as a Junior Web Developer at Sysmax Technologies, where I focused on creating user-friendly websites using HTML, CSS, and JavaScript. I implemented responsive designs to ensure optimal viewing across all devices and worked closely with the design team to deliver visually appealing and functional web solutions. My responsibilities included conducting thorough browser compatibility testing to maintain consistent functionality across different platforms.",
  },
];

export const projects=[
  {
    id: 1,
    image: '/projects/alleybookings.png',
    name:'AlleyBookings',
    description: "AlleyBookings is an online travel agency designed to serve travelers and tourists. Currently in beta testing, it offers a comprehensive range of services, including hotel and flight bookings, car rentals, and tour packages. As a one-stop platform, AlleyBookings simplifies travel planning for a seamless experience.",
    link:'https://staging.alleybookings.com/',
    stack: ['Next.js', 'Javascript', 'Tailwindcss']
  },
  {
    id: 2,
    image: '/projects/banquee.png',
    name:'Banquee',
    description: "Banquee is a fun and interactive banking simulation platform where users can create accounts, get assigned account numbers, set PINs, track spending, and simulate deposits and withdrawals. It’s a hands-on way to explore digital banking without the risk!",
    link:'https://banquee-fawn.vercel.app/',
    gitHub:'https://github.com/georgie-dev/banquee',
    stack: ['Next.js', 'Typescript', 'Firebase', 'Tailwindcss']
  },
  {
    id: 3,
    image: '/projects/lift.png',
    name:'Lift',
    description: "Lift is a personal web application project I designed to help fitness enthusiasts streamline their journey. With Lift, users can create personalized exercise plans, join live training sessions, and set diet goals—all in one platform",
    link:'https://lift-theta.vercel.app/',
    gitHub:'https://github.com/georgie-dev/Lift',
    stack: ['Next.js', 'Javascript', 'Firebase', 'Tailwindcss']
  },
]
