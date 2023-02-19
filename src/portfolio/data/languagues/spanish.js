/**
 * Languages logos
 */
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
        ],
        detail: {
            images: [
                PortafolioThumb,
                FiltrosRamirezThumb,
                QoonterAppThumb,
            ],
            description: [
                'Sitio destinado a la presentación de los proyectos hechos o se haya tenido participación. Así como tambien un resumen de mi persona como desarrollador y conocimientos actuales.',
                'Proyecto hecho para prácticar los conocimientos aprendidos en React.js, luego de tomar un curso básico para realizar un TODO Machine',
                'Se estará actualizando a medida que se adquieran más conocimientos. Como el manejo de estado con Redux.'
            ]
        }
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
    {
        name: 'Secretaría de Carabobo (Web APP y Sitio Administrador)',
        image: PrivateThumb,
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
        "Implementar el diseño del equipo de diseño, cumpliendo su expectativa.",
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
    "description": "Descripción",
    "domain": "Dominio"
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