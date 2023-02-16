/**
 * Technologies logos
 */
import JavascriptLogo from "../../assets/imgs/logos/JavaScript-logo.svg"
import VueLogo from "../../assets/imgs/logos/Vue-logo.svg"
import PHPLogo from "../../assets/imgs/logos/PHP-logo.svg"
import LaravelLogo from "../../assets/imgs/logos/Laravel-logo.svg"
import MySQLLogo from "../../assets/imgs/logos/MySQL-logo.svg"
import NuxtLogo from "../../assets/imgs/logos/Nuxt-logo.svg"


/**
 * Languages logos
 */
import USABanner from "../../assets/imgs/logos/USA-banner.svg"
import SpainBanner from "../../assets/imgs/logos/Spain-banner.svg"

//import InstagramLogo from "../resources/imgs/logos/Instagram-logo.svg"

/**
 * Projects imgs
 */
import QoonterAppThumb from "../../assets/imgs/projects/Qoonter (Web App)/thumb.png"
import PrismaWebThumb from "../../assets/imgs/projects/Prisma Agencia Creativa (Web Site)/thumb.png"
import GettfordEcommerceThumb from "../../assets/imgs/projects/Gettford C.A. (E-commerce)/thumb.png"
import PortafolioThumb from "../../assets/imgs/projects/Portfolio/thumb.png"
import FiltrosRamirezThumb from "../../assets/imgs/projects/Filtros Rámirez (Tienda En Línea)/thumb.png"

import PrivateThumb from "../../assets/imgs/icons/ban-outline.svg"

const projects = [
    {
        name: 'Portfolio',
        image: PortafolioThumb,
        domain: '/',
        url: '/',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.js'
        ]
    },
    {
        name: 'Fletamos (Admin Site)',
        image: PrivateThumb,
        domain: 'fletamos.com',
        url: 'fletamos.com',
        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
        ]
    },
    {
        name: 'Fletamos (Backend)',
        image: PrivateThumb,
        domain: 'fletamos.com',
        url: 'fletamos.com',
        technologies: [
            'PHP',
            'Laravel',
            'MySQL',
        ]
    },
    {
        name: 'Qoonter (Web App)',
        image: QoonterAppThumb,
        domain: 'qoonter.com',
        url: 'qoonter.com',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
        ]
    },
    {
        name: 'Prisma Agencia Creativa (Admin Site)',
        image: PrivateThumb,
        domain: 'prismagencia.com',
        url: 'prismagencia.com',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'Laravel',
            'MySQL'
        ]
    },
    {
        name: 'Prisma Agencia Creativa (Web Site)',
        image: PrismaWebThumb,
        domain: 'prismagencia.com',
        url: 'prismagencia.com',
        technologies: [
            'HTML',
            'SASS',
            'TypeScript',
            'Angular',
        ]
    },
    {
        name: 'Filtros Rámirez (E-commerce)',
        image: FiltrosRamirezThumb,
        domain: '',
        url: '',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'Laravel',
            'MySQL'
        ]
    },
    {
        name: 'Gettford C.A. (E-commerce)',
        image: GettfordEcommerceThumb,
        domain: 'gettford.com',
        url: 'gettford.com',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL'
        ]
    },
    {
        name: 'Gettford C.A. (Admin Site)',
        image: PrivateThumb,
        domain: 'gettford.com',
        url: 'gettford.com',
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL'
        ]
    },

]

const languages = [
    {
        name: 'Spanish ( Native )',
        image: SpainBanner,
        tag: 'spanish',
    },
    {
        name: 'English ( B1 )',
        image: USABanner,
        tag: 'english',
    },
]

const about = {
    "title": "About me",
    "content": [
        "I am a PHP Web Developer with 4 years of experience creating Web Apps for personnel management, accounting and inventory, e-commerce, and microservices.",
        "My work is characterized by the attention to detail of what is requested by each client. My ability to adapt to the field or domain in which the software will be used, and thus provide results beyond just building software.",
        "On a personal level, I am taciturn, responsible, self-taught, curious about many topics, direct, accustomed to teamwork and remote, with a good performance without much supervision.",
        "If you are interested in working with me:",
    ]
}

const experience = {
    "title": "Experience",
    "content": [
        "Web Development in Frontend and Backend.",
        "Project management in teams of up to 3 people and alone (gathering of requirements, planning, execution, etc).",
        "Meet the design team and what they want to present.",
        "Remote work",
        "Outsourcing.",
        "Work with the team of multiple companies and internal team in a coordinated manner.",
        "Analysis of data.",
        "Design of relational databases.",
    ]
}

const role = "Web Developer"
const contactText = "Contact me"
const contactMail = "victor5rivas5@gmail.com"

const menuTexts = {
    "home": "Home",
    "portfolio": "Portfolio",
}

const siteSubTitles = {
    "technologies": "Technologies",
    "learning": "Learning",
}

const englishContent = {
    "projects": projects,
    "languages": languages,
    "about": about,
    "experience": experience,
    "role": role,
    "contactText": contactText,
    "menuTexts": menuTexts,
    "siteSubTitles": siteSubTitles,
    "contactMail": contactMail,
}
export { englishContent }