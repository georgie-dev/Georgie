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
    description:
      "Designed and developed healthcare platforms including the Sample Tracking system (sTRAC), reducing lab-to-hospital turnaround time by 70%. Contributed to national-scale projects such as NPHCDA’s Revitalization Data Systems and the Electronic Laboratory Information System (en-LIS) for the Nigerian Ministry of Health. Worked with React.js, TypeScript, Django REST Framework, and PostgreSQL to deliver scalable, high-impact solutions.",
  },
  {
    title: "Frontend Developer / Team Lead at AlleyBookings",
    period: "March 2023 - October 2024",
    description:
      "Led a team of 5 developers to deliver the company’s MVP on schedule, building core booking features with React.js and Next.js. Implemented customer-driven improvements that raised product satisfaction to 95%. Mentored 3 junior developers, boosting team productivity by over 50%, and facilitated Agile sprints to ensure alignment with stakeholder requirements.",
  },
  {
    title: "Web Developer at Ehealth4Everyone",
    period: "October 2022 - March 2023",
    description:
      "Contributed to the migration of the Multi-Source Data Analytics and Triangulation Platform (MSDAT), enhancing data visualization and decision-making by 60%. Built an internal CRUD and data manipulation platform that improved team efficiency by 50%. Developed responsive UIs with Vue.js and TypeScript, implemented data caching to cut load times by 40%, and maintained code quality with Jest testing.",
  },
  {
    title: "Intern at Sysmax Technologies",
    period: "August 2019 - June 2020",
    description:
      "Gained hands-on experience in modern web development by building responsive websites with HTML, CSS, and JavaScript. Ensured cross-browser compatibility and collaborated with designers to deliver functional, user-friendly solutions for clients.",
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
    stack: ["Next.js", "Shadcn", "Tailwind CSS", "Typescript"],
  },
  {
    id: 2,
    image: "/projects/msdat.png",
    name: "MSDAT",
    description:
      "Built for the Federal Ministry of Health and Social Welfare, the Multi-Source Data Analytics and Triangulation (MSDAT) Platform is a data visualization tool for key health indicators in Nigeria. It provides state-level and national-level data to support informed decision-making in the health sector.",
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
    stack: ["React.js", "Tailwind CSS", 'ant Design', 'Typescript', 'Django'],
  },
  {
    id: 4,
    image: "/projects/nds.png",
    name: "National Diagnostics Summit",
    description:
      "A web platform built for the Federal Ministry of Health and Social Welfare to serve as a repository and promotional hub for their maiden National Diagnostics Summit.",
    link: "https://nationaldiagnosticsummit.ng/",
    stack: ["React.js", 'TailwindCSS', "TypeScript"],
  },
  {
    id: 5,
    image: "/projects/homevest.png",
    name: "Homevest",
    description:
      "Homevest is a mock investment platform that allows users to explore real estate opportunities using cryptocurrency. It simulates property listings, investment tracking, and secure transactions to showcase the potential of blockchain-powered real estate investing.",
    link: "https://homevest.vercel.app/",
    stack: ["Next.js", "Shadcn", "Tailwind CSS", "TypeScript", 'Supabase'],
  },
  {
    id: 6,
    image: "/projects/banquee.png",
    name: "Banquee",
    description:
      "Banquee is an interactive banking simulation platform where users can create accounts, receive account numbers, set PINs, track spending, and simulate deposits and withdrawals—a hands-on way to explore digital banking without risk.",
    link: "https://banquee-fawn.vercel.app/",
    gitHub: "https://github.com/georgie-dev/banquee",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase",],
  },
  {
    id: 7,
    image: "/projects/lift.png",
    name: "Lift",
    description:
      "Lift is a personal fitness web application designed to help users create tailored workout plans, join live training sessions, and set diet goals—all in one convenient platform.",
    link: "https://lift-theta.vercel.app/",
    gitHub: "https://github.com/georgie-dev/Lift",
    stack: ["Next.js", "Tailwind CSS", "JavaScript", "Firebase",],
  },
];
