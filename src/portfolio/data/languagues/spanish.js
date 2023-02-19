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
                'Portafolio donde se muestran algunos proyectos de desarrollo web realizados, además de información sobre su creador o participante.',
                'Hecho luego de ver un tutorial básico sobre un TODO Machine.',
                'Se planea continuar con su desarrollo aplicando los conocimientos obtenidos en los siguientes cursos de React.js, Redux y SASS.',
                'Diseño propio.',
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Web APP encargada de algunos procesos administrativos, tickets de soporte, validación de la información de los usuarios, vehículos, contenedores, pagos, recopilación de datos de uso de la APP (Android y IOS) y su presentación en gráficos.',
                'Desarrollado inicialmente con un diseño básico propio, y luego expandido, y mejorado por el equipo de diseño web.',
                'Es dependiente de otro proyecto, Fletamos (Backend), desde donde se obtienen todos los datos usando una API.',
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
                'Api hecha para administrar y proveer de información a los distintos Frontends ( APPs, Web, etc). Orientada al sector de transportes y envíos. Se participó en el desarrollo de el sistema de pagos a traves de multiples proveedores, los tickets de soporte, chat, facturación, entre otras funciones menores y rutinarias, como la creación de Test, Seeders, Factories, etc.',
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
                'Web APP orientada al sector de las finanzas y contabilidad. Encargada de llevar a cabo diversas operaciones como llevar pagos, cobranzas, cuentas, facturación; en fin, operaciones rutinarias de una empresa con un contador. Esta APP tiene como público objetivo a los contadores. ',
                'Se desarrolló el Frontend del sistema de ventas y el Backend fue hecho en su totalidad por otro equipo. Cuenta con un sistema de usuario multi nivel. La comuniación se realizaba por medio de API.',

            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Sistema de administracion de contenido para el proyecto Prisma Agencia Creativa (Sitio Web).',
            ]
        }
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
        ],
        detail: {
            images: [
                PrismaWebThumb,
            ],
            description: [
                'Sitio web informativo hecho para una agencia de publicidad, donde presentan información relevante sobre la empresa, y sus proyectos realizados. ',
                'Diseño hecho por el equipo de diseño.',
            ]
        }
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
        ],
        detail: {
            images: [
                FiltrosRamirezThumb,
            ],
            description: [
                'Tienda en línea para la venta de filtros y otros componentes para motores y vehículos. Diseño propio bajo las directrices del cliente. ',
                'Fuera de línea.',
            ]
        }
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
        ],
        detail: {
            images: [
                GettfordEcommerceThumb,
            ],
            description: [
                'Tienda en línea para la venta de radios y otros equipos de telecomunicaciones. Plantilla usada para el diseño. ',
            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Web APP pre-existente a la que se mejoró las aréas de ventas, y cobranzas.',
            ]
        }
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
        ],
        detail: {
            images: [
                PrivateThumb,
            ],
            description: [
                'Web APP hecha con el fin de digitalizar todos los procesos administrativos de la Secretaría de Educación de Carabobo. Como por ejemplo: registro de pagos, asistencias, permisos, reposos, asignaciones de salarios, gestión de solicitudes, registro de información personal, asignaciones de escuelas, entre otras.',
                'Fuera de línea, por cambio de administración de la Secretaría.',
            ]
        }
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