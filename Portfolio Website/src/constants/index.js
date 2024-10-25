// import React from "react";
import artelevate1 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate.webp';
import artelevate2 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-01.webp';
import artelevate3 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-02.webp';
import artelevate4 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-03.webp';
import artelevate5 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-04.webp';
import artelevate6 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-05.webp';
import artelevate7 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-06.webp';
import artelevate8 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-07.webp';
import artelevate9 from '../assets/PROJECT_IMAGES/ARTELEVATE/ArtElevate-08.webp';
import focus1 from '../assets/PROJECT_IMAGES/FOCUS/Focus.webp';
import focus2 from '../assets/PROJECT_IMAGES/FOCUS/Focus-01.webp';
import focus3 from '../assets/PROJECT_IMAGES/FOCUS/Focus-02.webp';
import focus4 from '../assets/PROJECT_IMAGES/FOCUS/Focus-03.webp';
import focus5 from '../assets/PROJECT_IMAGES/FOCUS/Focus-04.webp';
import focus6 from '../assets/PROJECT_IMAGES/FOCUS/Focus-05.webp';
import portfolio1 from '../assets/PROJECT_IMAGES/PORTFOLIO/Portfolio-01.webp';
import portfolio2 from '../assets/PROJECT_IMAGES/PORTFOLIO/Portfolio-02.webp';
import portfolio3 from '../assets/PROJECT_IMAGES/PORTFOLIO/Portfolio-03.webp';
import portfolio4 from '../assets/PROJECT_IMAGES/PORTFOLIO/Portfolio-04.webp';
import BookStore1 from '../assets/PROJECT_IMAGES/BOOK_STORE/BookStore_01.webp';
import BookStore2 from '../assets/PROJECT_IMAGES/BOOK_STORE/BookStore_02.webp';
import BookStore3 from '../assets/PROJECT_IMAGES/BOOK_STORE/BookStore_03.webp';
import BookStore4 from '../assets/PROJECT_IMAGES/BOOK_STORE/BookStore_04.webp';
import Recipe1 from '../assets/PROJECT_IMAGES/RECIPE/Recipe-01.webp';
import Recipe2 from '../assets/PROJECT_IMAGES/RECIPE/Recipe-02.webp';
import Recipe3 from '../assets/PROJECT_IMAGES/RECIPE/Recipe-03.webp';


export const HERO_CONTENT = {
    front: 'FRONT',
    hyphen: '-',
    end: 'END',
    title: 'ENGINEER'
}

export const HERO_TEXT = 'I\'m Ruhinda Roderick Izooba, a graduate Architect turned Software engineer looking to create functional and aesthetically pleasing user interfaces and experiences.';

export const PROJECTS = [
    {
        id: 1,
        projectNumber: '01',
        title: 'ARTELEVATE',
        about: 'ArtElevate is a online art gallery aiming to respond to local, well known artists, collectors, art enthusiasts and the casual user indulging in everything art. Artists can create their profiles, upload their artwork on to the platform, sell their artwork on the platform and also check out works from other artists.',
        images: [artelevate1, artelevate2, artelevate3, artelevate4, artelevate5, artelevate6, artelevate7, artelevate8, artelevate9],
        link: 'https://artelevate.onrender.com/',
        github: 'https://github.com/Ruhinda01/Artelevate',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'Python', 'Flask', 'Jinja', 'Balsamiq']
    },
    {
        id: 2,
        projectNumber: '02',
        title: 'FOCUS',
        about: 'Focus is a feature-rich, gamified platform designed to help users manage their daily tasks efficiently. The application integrates a Pomodoro timer, drag and drop task prioritzation and health and experience tracking to make task management engaging and productive.',
        images: [focus1, focus2, focus3, focus4, focus5, focus6],
        link: 'https://focus-opal-delta.vercel.app/',
        github: 'https://github.com/Ruhinda01/Focus',
        technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Figma']
    },
    {
        id: 3,
        projectNumber: '03',
        title: 'RUHINDA',
        about: 'This is my portfolio website looking to exhibit my current and future works. Maybe it\'ll impress you enough to give me a shot.',
        images: [portfolio1, portfolio2, portfolio3, portfolio4],
        link: 'https://ruhinda.vercel.app/',
        github: 'https://github.com/Ruhinda01/Portfolio-V1',
        technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS']
    },
    {
        id: 4,
        projectNumber: '04',
        title: 'BOOKSTORE',
        about: 'This is a full stack application developed with the MERN stack. It is a CRUD application that allows users to create, read, update and delete books. Frontend still in development but functionality of application was most important.',
        images: [BookStore1, BookStore2, BookStore3, BookStore4],
        link: 'https://book-store-mern-stack-chi.vercel.app/',
        github: 'https://github.com/Ruhinda01/BookStore-MERN-Stack',
        technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Node', 'Express', 'MongoDB']
    },
    {
        id: 5,
        projectNumber: '05',
        title: 'RECIPE',
        about: 'This is a Frontend Mentor project that I built to practice React and Tailwind. It is a recipe app that allows users to search for recipes based on ingredients or instructions.',
        images: [Recipe1, Recipe2, Recipe3],
        link: 'https://recipe-website-ruhindas-projects.vercel.app/',
        github: 'https://github.com/Ruhinda01/RecipeWebsite',
        technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'Tailwind CSS']
    }
]

export const SKILLS = [
    'React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Bootstrap', 'Tailwind CSS', 'Git', 'Figma', 'TypeScript', 'Vite', 'Node', 'Express', 'MongoDB'
]

export const ABOUT_CONTENT = {
    para_1: 'Architect turned code wrangler here!',
    para_2: 'Last year, I swapped T-squares for JavaScript, Python and haven\'t looked back. After a 12-month software engineering bootcamp (and countless cups of coffee), I graduated from ALX Africa with a shiny full-stack / front-end software engineering certificate.',
    para_3: 'My secret sauce? A dash of design flair, a sprinkle of critical thinking, and a heaping teaspoon of attention to detail. I\'m on a mission to craft functional, efficient, and eye-catching web application that make users go “Wow!”',
    para_4: 'P.S. My goal is to become the Da Vinci of front-end engineering - minus the long beard. Let\'s create some digital masterpieces together.',
}

export const CONTACT = 'Ready to slide into my DMs? Whether you want to swap big  ideas, collaborate on something epic, or argue about which Star Wars movie reigns supreme (spoiler: Its not what you think), Hit me up! I might be knee-deep perfecting CSS grids or discovering new ways to automate my life, but I promise, your message will get through.';

export const LINKS = {
    TWITTER: 'https://twitter.com/ricky_ruhinda',
    LINKEDIN: 'https://www.linkedin.com/in/ruhinda-roderick-izooba',
    EMAIL: 'mailto:rickyruhinda@gmail.com',
}

