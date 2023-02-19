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
        name: 'Portfolio',
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
                'Portfolio where some web development projects made are show, also some information about the creator or participant on it.',
                'Done after watching a basic  tutorial about a TODO Machine.',
                'It’s planned to continue its development applying the knowledge obtained in the coming courses to take; related to React.js, Redux and SASS.',
                'Own web design.',
            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Web APP in charge of some administrative processes, support tickets, validation of user information, vehicles, containers, payments, data collection of APP usage (Android and IOS) and it’s presentation with charts.',
                'Developed initially with my own basic design, and later expanded, and improved by the design team.',
                'It’s dependent on another project, Fletamos (Backend), from where all the data is obtained using  an API.',
            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Api done to manage and provide information to the different Frontends ( APPs, Web, etc). Oriented to the transport and shipping sector. Participated on the development of the payments system through multiple providers, support tickets, chat, billing, among other minor and routine  functions, such as the creation of Test, Seeders, Factories, etc.',
            ]
        }
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
        ],
        detail: {
            images: [
                QoonterAppThumb,
            ],
            description: [
                'Web APP oriented to the finance and accounting sector. In charge of carrying out various operations such as making payments, accounts, billing; in short, routine operations of a company with an accountant. This APP\'s target audience is accountants.',
                'The Frontend of the sales system was developed and the Backend was made entirely by another team. It has a multi-level user system. The communication was done through API.',
            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Content management system for the project Prisma Agencia Creativa (Web Site).',
            ]
        }
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
        ],
        detail: {
            images: [
                PrismaWebThumb,
            ],
            description: [
                'Informative website made for an advertising agency, where they present relevant information about the company, and its projects.',
                'Design made by the design team.',
            ]
        }
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
        ],
        detail: {
            images: [
                FiltrosRamirezThumb,
            ],
            description: [
                'E-commerce for the sale of filters and other components for engines and vehicles. Own design under the client\'s guidelines.',
                'Out of line.',
            ]
        }
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
        ],
        detail: {
            images: [
                GettfordEcommerceThumb,
            ],
            description: [
                'E-commerce for the sale of radios and other telecommunications equipment. Template used for design.',
            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Pre-existing web APP to which the sales and collection areas were improved.',
            ]
        }
    },
    {
        name: 'Secretaría de Carabobo (Web APP and Admin Site)',
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Web APP made in order to digitize all the administrative processes of the Secretary of Education of Carabobo. For example: registration of payments, attendance, permits, rest, salary assignments, application management, registration of personal information, school assignments, among others.',
                'Offline, due to change of administration of the Secretariat.',
            ]
        }
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
        "Implement the design made by the design team, matching their expectations.",
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
    "description": "Description",
    "domain": "Domain"
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