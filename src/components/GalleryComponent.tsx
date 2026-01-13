import React, { useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '@styles/components/galleryComponent.css';

type GalleryProps = {
    nameGallery: string;
};

export interface GalleryI {
    original: string;
    thumbnail: string;
    description?: string;
    originalAlt?: string;
    thumbnailAlt?: string;
    originalTitle?: string;
    thumbnailTitle?: string;
    thumbnailLabel?: string;
    originalClass?: string;
    thumbnailClass?: string;
}

interface DataGalleryResponse {
    title: string;
    pictures: GalleryI[];
}

const GalleryComponent: React.FC<GalleryProps> = ({ nameGallery }) => {

    const [dataGallery, setDataGallery] = React.useState<DataGalleryResponse | null>(null);
    const [thumbnailPosition, setThumbnailPosition] = React.useState<'bottom' | 'top' | 'left' | 'right'>('bottom');

    const getInfoGallery = async () => {
        try {
            // const response = await fetch(
            //     "https://jsonplaceholder.typicode.com/photos?_limit=10",
            // );
            // const data = await response.json();
            const responseGallery = {
                title: "Galería de Bodas",
                pictures: [
                    {
                        original: "/img/photo-one.jpg",
                        thumbnail: "/img/photo-one.jpg",
                        originalAlt: "Fotografía Uno",
                        thumbnailAlt: "Miniatura Uno",
                        description: "Descripción de la foto uno",
                    },
                    {
                        original: "/img/photo-two.jpg",
                        thumbnail: "/img/photo-two.jpg",
                        originalAlt: "Fotografía Dos",
                        thumbnailAlt: "Miniatura Dos",
                        description: "Descripción de la foto dos",
                    },
                    {
                        original: "/img/photo-three.jpg",
                        thumbnail: "/img/photo-three.jpg",
                        originalAlt: "Fotografía Tres",
                        thumbnailAlt: "Miniatura Tres",
                        description: "Descripción de la foto tres",
                    },
                    {
                        original: "/img/photo-four.jpg",
                        thumbnail: "/img/photo-four.jpg",
                        originalAlt: "Fotografía Cuatro",
                        thumbnailAlt: "Miniatura Cuatro",
                        description: "Descripción de la foto cuatro",
                    },
                    {
                        original: "/img/photo-five.jpg",
                        thumbnail: "/img/photo-five.jpg",
                        originalAlt: "Fotografía Cinco",
                        thumbnailAlt: "Miniatura Cinco",
                        description: "Descripción de la foto cinco",
                    },
                ],
            };

            setDataGallery(responseGallery);
        } catch (error) {
            console.error("Error fetching gallery data:", error);

        }
    };

    useEffect(() => {
        if (!nameGallery || nameGallery == '') {
            return;
        }

        getInfoGallery();
    }, [nameGallery]);



    useEffect(() => {

        if (window.innerWidth >= 1024) {
            setThumbnailPosition('left');
        }

        function handleResize() {
            if (window.innerWidth >= 1024) {
                setThumbnailPosition('left');
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <section className='gallery-carousel-container'>

                {
                    dataGallery && dataGallery.pictures.length > 0 && (
                        <ImageGallery items={dataGallery.pictures} autoPlay={true} slideInterval={50000} thumbnailPosition={thumbnailPosition} showFullscreenButton={false} showPlayButton={false} />
                    )
                }
            </section>
        </>
    );
};

export default GalleryComponent;