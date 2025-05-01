// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import gaya from "./assets/education_logo/gaya.jpeg";
import twelth from "./assets/education_logo/twelth.jpeg";
import ten from "./assets/education_logo/ten.jpg";

// Project Section Logo's
import TechRoute from "./assets/work_logo/TechRoute.png";
import Apple from "./assets/work_logo/Apple.png";
import Weather from "./assets/work_logo/Weather.png";
import Bizora from "./assets/work_logo/Bizora.png";
import Todo from "./assets/work_logo/Todo.png";
import Twitter from "./assets/work_logo/Twitter.png";
import Colour from "./assets/work_logo/Colour.png";
import Number from "./assets/work_logo/Number.png";
import Spotify from "./assets/work_logo/Spotify.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: gaya,
    school: "Gaya College, GAYA",
    date: "July 2023 - July 2026",
    Percentage: "81.4%",
    desc: "I am currently pursuing my Bachelor's degree (BCA) from Gaya College, Gaya under Magadh University. Throughout my studies, I am building a solid foundation in programming, web development, database management, and core computer science concepts. My coursework includes subjects like Data Structures, Computer Networks, Operating Systems, and Software Engineering. I actively engage in learning new technologies and participating in technical activities to strengthen my practical knowledge and skills.",
    degree: "Bachelor of Computer Application - BCA",
  },
  {
    id: 1,
    img: twelth,
    school: "Sanjay Singh Yadav College",
    date: "Jan 2020 - March 2022",
    Percentage: "73.6%",
    desc: "I completed my class 12 education from Sanjay Singh Yadav College under the BSEB (Bihar School Examination Board). My academic focus was on subjects including Physics, Chemistry, Biology (PCB) along with Mathematics.",
    degree: "BSEB(XII) - PCB with Mathematics",
  },
  {
    id: 2,
    img: ten,
    school: "A N S High School Sagahi, Gaya",
    date: "January 2018 - March 2020",
    Percentage: "72.4%",
    desc: "I completed my class 10 education from A N S High School Sagahi, Gaya, under the BSEB (Bihar School Examination Board). My curriculum included Science, Social Science, Mathematics, English, and Urdu.",
    degree: "BSEB(X), Science Social Science Math English Urdu",
  },
];

export const projects = [
  {
    id: 0,
    title: "TechRoute",
    description:
      "A comprehensive and beginner-friendly web platform crafted to guide students through their tech career journeys. TechRoute offers clear roadmaps, essential skill lists, unique project ideas, and core theory subject resources to help users confidently build their careers in the tech industry.",
    image: TechRoute,
    tags: [
      "React JS",
      "React Icons",
      "Motion",
      "Tailwind CSS",
      "React Router DOM",
    ],
    github: "https://github.com/AbuShahma05/TechRoute",
    webapp: "https://tech-route.vercel.app",
  },
  {
    id: 1,
    title: "Apple",
    description:
      "A sleek and modern frontend web project inspired by the Apple website. This clone features a polished UI, smooth animations, and intuitive navigation. It includes dedicated pages for Mac, iPad, and iPhone, offering users a visually rich and seamless browsing experience.",
    image: Apple,
    tags: [
      "React JS",
      "React Icons",
      "Swiper JS",
      "Motion",
      "Tailwind CSS",
      "React Router DOM",
    ],
    github: "https://github.com/AbuShahma05/AppleProject",
    webapp: "https://apple-project-alpha.vercel.app",
  },
  {
    id: 2,
    title: "Weather",
    description:
      "A simple and user-friendly weather application that allows users to search for real-time weather updates by city. The project delivers detailed weather information like temperature, humidity, and wind speed through a clean and responsive interface, ensuring a smooth and efficient user experience.",
    image: Weather,
    tags: ["React JS", "API", "Axios", "React Router DOM"],
    github: "https://github.com/AbuShahma05/WeatherProject",
    webapp: "https://weather-project-ten-mauve.vercel.app",
  },
  {
    id: 3,
    title: "Bizora",
    description:
      "A fully responsive and visually engaging landing page crafted to deliver a smooth and modern user experience. The project features sleek animations, interactive elements, and a polished design that adapts seamlessly across all devices, creating a professional and dynamic first impression.",
    image: Bizora,
    tags: [
      "React JS",
      "React Icons",
      "Motion",
      "Swiper",
      "Tailwind CSS",
      "React Router DOM",
    ],
    github: "https://github.com/AbuShahma05/Bizora",
    webapp: "https://bizora.vercel.app",
  },
  {
    id: 4,
    title: "Todo",
    description:
      "A simple yet powerful To-Do List application built to help users manage their daily tasks efficiently. It offers features like adding, updating, marking tasks as complete or incomplete, and deleting tasks, all within a clean and user-friendly interface that ensures a smooth task management experience.",
    image: Todo,
    tags: ["React JS", "React Router DOM"],
    github: "https://github.com/AbuShahma05/Todo-Project",
    webapp: "https://todo-project-beryl.vercel.app",
  },
  {
    id: 5,
    title: "Twitter",
    description:
      "A lightweight and efficient backend project showcasing CRUD (Create, Read, Update, Delete) operations through custom API routes. The application features dynamic page rendering with EJS templates and a clean, minimalistic UI, offering a smooth and practical experience for backend functionality and deployment learning.",
    image: Twitter,
    tags: ["Node JS", "EJS", "Express JS", "UUID", "Method-Override"],
    github: "https://github.com/AbuShahma05/TwixAPI",
    webapp: "https://twix-api.vercel.app/twitter",
  },
  {
    id: 6,
    title: "Colour",
    description:
      "A simple and interactive web application designed to let users generate and explore different colours with just a click. Built for a smooth and visually appealing experience, this project focuses on enhancing user interaction through a clean and dynamic interface.",
    image: Colour,
    tags: ["React JS", "React Router DOM"],
    github: "https://github.com/AbuShahma05/Color-Project",
    webapp: "https://color-project-one.vercel.app",
  },
  {
    id: 7,
    title: "Number",
    description:
      "A simple and user-friendly application designed to increment, decrement, and reset a counter value. With clean functionality and a smooth interface, this project showcases basic state management and interactive user experience using modern frontend techniques.",
    image: Number,
    tags: ["React JS", "React Router DOM"],
    github: "https://github.com/AbuShahma05/mini-counter-project",
    webapp: "https://mini-counter-project.vercel.app",
  },
  {
    id: 7,
    title: "Spotify-clone",
    description:
      "A functional and visually engaging music player application inspired by Spotify. Designed with a clean interface and interactive features like play, pause, seekbar navigation, and seamless song switching to deliver an enjoyable user experience.",
    image: Spotify,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/AbuShahma05/mini-counter-project",
    webapp: "https://mini-counter-project.vercel.app",
  },
];
