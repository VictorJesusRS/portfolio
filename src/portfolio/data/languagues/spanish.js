import JavascriptLogo from "../../assets/imgs/logos/JavaScript-logo.svg"
import VueLogo from "../../assets/imgs/logos/Vue-logo.svg"
import PHPLogo from "../../assets/imgs/logos/PHP-logo.svg"
import LaravelLogo from "../../assets/imgs/logos/Laravel-logo.svg"
import MySQLLogo from "../../assets/imgs/logos/MySQL-logo.svg"
import CSSLogo from "../../assets/imgs/logos/CSS-logo.svg"
import HTMLLogo from "../../assets/imgs/logos/HTML-logo.svg"
import JQueryLogo from "../../assets/imgs/logos/JQuery-logo.svg"
import TailwindLogo from "../../assets/imgs/logos/Tailwind-logo.svg"
import VuetifyLogo from "../../assets/imgs/logos/Vuetify-logo.svg"
import GitLogo from "../../assets/imgs/logos/Git-logo.svg"
import BootstrapLogo from "../../assets/imgs/logos/Bootstrap-logo.svg"
import NuxtLogo from "../../assets/imgs/logos/Nuxt-logo.svg"
import VuexLogo from "../../assets/imgs/logos/Vuex-logo.png"
// import AxiosLogo from "../../assets/imgs/logos/Axios-logo.svg"
import TypescriptLogo from "../../assets/imgs/logos/Typescript-logo.svg"
import ReactLogo from "../../assets/imgs/logos/React-logo.svg"

import USABanner from "../../assets/imgs/logos/USA-banner.svg"
import SpainBanner from "../../assets/imgs/logos/Spain-banner.svg"

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
        name: 'Portafolio',
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
        name: 'Fletamos (Sitio Administrador)',
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
        name: 'Prisma Agencia Creativa (Sitio Administrador)',
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
        name: 'Prisma Agencia Creativa (Sitio Web)',
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
        name: 'Filtros Rámirez (Tienda En Línea)',
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
        name: 'Gettford C.A. (Tienda En Línea)',
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
        name: 'Gettford C.A. (Sitio Administrador)',
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
        name: 'Español ( Nativo )',
        image: SpainBanner,
        tag: 'spanish',
        isActive: false,
    },
    {
        name: 'Inglés ( B1 )',
        image: USABanner,
        tag: 'english',
        isActive: false,
    },
]

const about = {
    "title": "Acerca de mi",
    "content": [
        "Soy un Desarrollador Web PHP con 4 años de experiencia creando Apps Web para la administración de personal, contabilidad e inventario, e-commerce, y microservicios.",
        "Mi trabajo se caracteriza por la atención al detalle de lo solicitado por cada cliente. Mi habilidad para adaptarme al rubro o dominio en el que será usado el software, y asi brindar resultados más allá de solo construir un software.",
        "A nivel personal soy taciturno, responsable, autodidacta, curioso de muchos temas, directo, acostumbrado al trabajo en equipo y remoto, con un buen desempeño sin mucha supervición.",
        "Si tienes interés en trabajar conmigo:",
    ]
}

const experience = {
    "title": "Experiencia",
    "content": [
        "Desarrollo Web en Frontend y Backend.",
        "Administración de proyecto en equipos de hasta 3 personas y solo (levantamiento de requerimientos, planificación, ejecución, etc).",
        "Cumplir con el equipo de diseño y lo que desean presentar.",
        "Trabajo remoto.",
        "Outsourcing.",
        "Trabajo con el equipo de multiples empresas y equipo interno de manera coordinada.",
        "Análisis de datos.",
        "Diseño de bases de datos relacionales.",
    ]
}

const role = "Desarrollador Web"
const contactText = "Contáctame"
const contactMail = "victor5rivas5@gmail.com"

const menuTexts = {
    "home": "Inicio",
    "portfolio": "Portafolio",
}

const siteSubTitles = {
    "technologies": "Tecnologías",
    "learning": "Aprendiendo",
}

const spanishContent = {
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
export { spanishContent }