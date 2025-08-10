import {
  FaXTwitter,
  //  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export const socialLinks = [
  {
    icon: FaXTwitter,
    link: "https://x.com/dev__george",
  },
  // {
  //   icon: FaLinkedinIn,
  //   link: "/",
  // },
  {
    icon: FaGithub,
    link: "https://github.com/georgie-dev",
  },
];

export const experience = [
  {
    title: "Software Engineer at GGHN",
    period: "October 2024 - Present",
    description:'I develop healthcare-focused web applications with a strong emphasis on responsive, user-friendly design. Using React.js, Ant Design, and TypeScript, I’ve delivered a 30% improvement in user interaction and onboarding experience. My role includes building healthcare platforms, integrating and developing APIs, and creating static documentation sites. I collaborate closely with backend teams to ensure seamless API integration and smooth system operations.',
  },
  {
    title: "Team Lead/Software Engineer at AlleyBookings",
    period: "March 2023 - October 2024",
    description:
      "Led a team of five developers while contributing directly to frontend development. Delivered the company’s MVP within three months, implemented optimizations that cut load times by 50%, and achieved a 95% user satisfaction rate. Mentored junior developers and steered Agile development processes, boosting team productivity by 40%",
  },
  {
    title: "Web Developer at Ehealth4Everyone",
    period: "October 2022 - March 2023",
    description:
      "Developed healthcare technology solutions with a focus on performance and usability. Contributed to the migration of the MSDAT Platform from v1 to v2, improving data handling and visualization efficiency by 50%. Built responsive UIs with Vue.js and TypeScript, and created an in-house database management platform that increased the data team performance by 70%. Implemented data caching solutions that cut load times by 40% and ensured code quality through comprehensive Jest testing",
  },
  {
    title: "Intern at Sysmax Technologies",
    period: "August 2019 - June 2020",
    description:
      "Started my career as a Junior Web Developer, building user-friendly websites with HTML, CSS, and JavaScript. Implemented responsive designs for optimal viewing on all devices and collaborated with the design team to deliver visually appealing, functional web solutions. Conducted thorough browser compatibility testing to ensure consistent performance across platforms.",
  },
];

export const projects = [
  {
    id: 1,
    image: "/projects/alleybookings.png",
    name: "AlleyBookings",
    description:
      "AlleyBookings is an online travel agency based in Kano, Nigeria, designed for travelers and tourists. Currently in beta, it offers hotel and flight bookings and tour packages. As a one-stop platform, AlleyBookings simplifies travel planning for a seamless experience.",
    link: "https://staging.alleybookings.com/",
    stack: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    image: "/projects/msdat.png",
    name: "MSDAT",
    description:
      "Built for the Federal Ministry of Health and Social Welfare, the Multi-Source Data Triangulation (MSDAT) Platform is a data visualization tool for key health indicators in Nigeria. It provides state-level and national-level data to support informed decision-making in the health sector.",
    link: "https://msdat.fmohconnect.gov.ng/dashboard/Health_Outcomes_and_Service_Coverage?indicator=32&datasource=6&location=1",
    stack: ["Vue.js", "TypeScript"],
  },
  {
    id: 3,
    image: "/projects/strac.png",
    name: "sTRAC",
    description:
      "sTRAC is a sample tracking platform built for the Cameroonian Ministry of Health. It enables health facilities and laboratories to monitor the movement of patient samples eligible for testing, improving turnaround time and results delivery.",
    link: "https://app.stracapp.org",
    stack: ["React.js", "Redux", "Tailwind CSS"],
  },
  {
    id: 4,
    image: "/projects/nds.png",
    name: "National Diagnostics Summit",
    description:
      "A web platform built for the Federal Ministry of Health and Social Welfare to serve as a repository and promotional hub for their maiden National Diagnostics Summit.",
    link: "https://nationaldiagnosticsummit.ng/",
    stack: ["React.js", "TypeScript"],
  },
  {
    id: 5,
    image: "/projects/banquee.png",
    name: "Banquee",
    description:
      "Banquee is an interactive banking simulation platform where users can create accounts, receive account numbers, set PINs, track spending, and simulate deposits and withdrawals—a hands-on way to explore digital banking without risk.",
    link: "https://banquee-fawn.vercel.app/",
    gitHub: "https://github.com/georgie-dev/banquee",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    id: 6,
    image: "/projects/lift.png",
    name: "Lift",
    description:
      "Lift is a personal fitness web application designed to help users create tailored workout plans, join live training sessions, and set diet goals—all in one convenient platform.",
    link: "https://lift-theta.vercel.app/",
    gitHub: "https://github.com/georgie-dev/Lift",
    stack: ["Next.js", "JavaScript", "Firebase", "Tailwind CSS"],
  },
];

