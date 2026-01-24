export interface SubRoutes {
    name: string; // ESTO DA NOMBRE A TABS EN PÁGINAS DE /services/route...
    path: string;
    show: boolean;
}

export interface RoutesI {
    name: string; //nombre que se muestra
    path: string; // /ruta
    show: boolean; // para mostrar o no esta ruta en algún menu etc
    imgSrc?: string | null; //ruta de imagen ilustrativa relacionada a la ruta (la uso en el sitio en caso de services)
    subRoutes?: SubRoutes[]; // esto se va a usar para los params en los servicios/sesiones para los tabs más que nada
}

export interface RouterI {
    section: string;//nombre que se muestra
    basePath: '/' | '/services' | '/gallery' | '/contact-booking' | '/reviews';
    type: 'link' | 'box' | 'dropdown' | 'boxList'; //esto poque uso mi menu personalizado
    containerClass?: string; // para casos de box o drop, esta clase da estilos a su contenedor
    illustration?: string; // src para el caso de que sean box se agrega una imagen ilustrativa al contenedor
    routes: RoutesI[];
}

export const routes: RouterI[] = [
    {
        section: "Inicio",
        basePath: "/",
        type: "link",
        routes: [{ name: "Inicio", path: "", show: true, imgSrc: null }],
    },
    {
        section: "Sesiones",
        basePath: "/services",
        type: "boxList",
        containerClass: "boxlist-services",
        illustration: "/img/services-menu.jpg",
        routes: [
            {
                name: "Bodas", path: "/weddings", show: true, imgSrc: '/img/photo-one.jpg', subRoutes: [{
                    name: 'boda', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'boda',
                    show: true
                },
                {
                    name: 'postboda',
                    path: 'postboda',
                    show: true,
                }
                ]
            },
            {
                name: "Eventos religiosos", path: "/religious_events", show: true, imgSrc: '/img/photo-two.jpg', subRoutes: [{
                    name: 'Primera Comunión', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'primera_comunion',
                    show: true
                },
                {
                    name: 'Bautizo',
                    path: 'bautizo',
                    show: true,
                },
                {
                    name: 'Confirmaciones',
                    path: 'confirmaciones',
                    show: true,
                }
                ]
            },
            {
                name: "Familia", path: "/family", show: true, imgSrc: '/img/photo-three.jpg', subRoutes: [{
                    name: 'Sesión De Estudio', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'studio_session',
                    show: true
                },
                {
                    name: 'Sesión en Exteriores',
                    path: 'outdoor_Session',
                    show: true,
                },
                {
                    name: 'LifeStyle',
                    path: 'LifeStyle',
                    show: true,
                }
                ]
            },
            {
                name: "Negocios", path: "/business", show: false, imgSrc: '/img/photo-four.jpg', subRoutes: [{
                    name: 'Productos e-commerce', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'products',
                    show: true
                },
                {
                    name: 'Instalaciones e Enteriores',
                    path: 'Facilities_and_Interiors',
                    show: true,
                },
                {
                    name: 'Gastronomía',
                    path: 'Gastronomy',
                    show: true,
                }
                ]
            },
            {
                name: "Eventos", path: "/events", show: false, imgSrc: '/img/photo-five.jpg', subRoutes: [{
                    name: 'XV Años', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'xv_party',
                    show: true
                },
                {
                    name: 'Graduación',
                    path: 'graduations',
                    show: true,
                },
                {
                    name: 'Fiestas Infantiles',
                    path: 'birthday parties',
                    show: true,
                }
                ]
            },
            {
                name: "Maternidad", path: "/maternity", show: true, imgSrc: '/img/photo-one.jpg', subRoutes: [{
                    name: 'Dulce Espera', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'baby_on_the_board',
                    show: true
                },
                {
                    name: 'Futuros Padres',
                    path: 'Partners',
                    show: true,
                },
                {
                    name: 'Recién Nacido',
                    path: 'newborn',
                    show: true,
                }
                ]
            },
            {
                name: "Parejas", path: "/couples", show: false, imgSrc: '/img/photo-two.jpg', subRoutes: [{
                    name: 'Aniversarios', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'anniversary',
                    show: true
                },
                {
                    name: 'Cita Urbana',
                    path: 'city_date',
                    show: true,
                },
                {
                    name: 'Temática',
                    path: 'themed',
                    show: true,
                }
                ]
            },
            {
                name: "Mascotas", path: "/pets", show: true, imgSrc: '/img/photo-three.jpg', subRoutes: [{
                    name: 'Sesión de estudio', // como lo voy a usar en params para tabs de services y galería, debe ser exactamente el mismo nombre del path y del label del tab 
                    path: 'studio_portrait',
                    show: true
                },
                {
                    name: 'Acción en exterior',
                    path: 'outdoor_action',
                    show: true,
                },
                {
                    name: 'Mascota y Dueño',
                    path: 'pet_and_owner',
                    show: true,
                }
                ]
            },

        ],
    },
    {
        section: "Galería",
        basePath: "/gallery",
        type: "dropdown",
        containerClass: "box-gallery",
        illustration: "/img/gallery-menu.jpg",
        routes: [
            { name: "Bodas", path: "/weddings", show: true, imgSrc: '/img/photo-one.jpg' },
            { name: "Comuniones", path: "/communions", show: true, imgSrc: '/img/photo-two.jpg' },
            { name: "Familia", path: "/family", show: true, imgSrc: '/img/photo-three.jpg' },
            { name: "Empresa", path: "/business", show: false, imgSrc: '/img/photo-four.jpg' },
            { name: "Eventos", path: "/events", show: false, imgSrc: '/img/photo-five.jpg' },
            { name: "Maternidad", path: "/maternity", show: true, imgSrc: '/img/photo-one.jpg' },
            { name: "Parejas", path: "/couples", show: true, imgSrc: '/img/photo-two.jpg' },
            { name: "Mascotas", path: "/pets", show: false, imgSrc: '/img/photo-three.jpg' },
        ],
    },
    {
        section: "Contáctanos/Reserva",
        basePath: "/contact-booking",
        type: "link",
        // containerClass: "drop-contact",
        containerClass: '',
        routes: [
            { name: "Contacto/Reserva", path: "", show: true, imgSrc: null }
        ],
    },
    {
        section: "Comentarios",
        basePath: "/reviews",
        type: "link",
        routes: [{ name: "Comentarios", path: "", show: true, imgSrc: null }],
    },
];