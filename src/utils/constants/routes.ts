interface RoutesI {
    name: string; //nombre que se muestra
    path: string; // /ruta
    show: boolean; // para mostrar o no esta ruta en algún menu etc
    imgSrc?: string | null; //ruta de imagen ilustrativa relacionada a la ruta (la uso en el sitio en caso de services)
}

interface RouterI {
    section: string;//nombre que se muestra
    basePath: string;
    type: 'link' | 'box' | 'dropdown'; //esto poque uso mi menu personalizado
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
        type: "box",
        containerClass: "box-services",
        illustration: "/img/services-menu.jpg",
        routes: [
            { name: "Bodas", path: "/weddings", show: true, imgSrc: '/img/photo-one.jpg' },
            { name: "Comuniones", path: "/communions", show: true, imgSrc: '/img/photo-two.jpg' },
            { name: "Familia", path: "/family", show: true, imgSrc: '/img/photo-three.jpg' },
            { name: "Empresa", path: "/business", show: false, imgSrc: '/img/photo-four.jpg' },
            { name: "Eventos", path: "/events", show: false, imgSrc: '/img/photo-five.jpg' },
            { name: "Maternidad", path: "/maternity", show: true, imgSrc: '/img/photo-one.jpg' },
            { name: "Parejas", path: "/couples", show: false, imgSrc: '/img/photo-two.jpg' },
            { name: "Mascotas", path: "/pets", show: true, imgSrc: '/img/photo-three.jpg' },
            { name: "Y más...", path: "", show: true, imgSrc: '/img/photo-four.jpg' },
        ],
    },
    {
        section: "Galería",
        basePath: "/gallery",
        type: "box",
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
            { name: "Y más...", path: "", show: true, imgSrc: '/img/photo-four.jpg' },
        ],
    },
    {
        section: "Contáctanos",
        basePath: "/contact",
        type: "dropdown",
        containerClass: "drop-contact",
        routes: [
            { name: "Contacto", path: "/form", show: true, imgSrc: null },
            { name: "Reserva", path: "/booking", show: true, imgSrc: null },
        ],
    },
    {
        section: "Comentarios",
        basePath: "/reviews",
        type: "link",
        routes: [{ name: "Comentarios", path: "", show: true, imgSrc: null }],
    },
];