import React, { useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '@styles/components/galleryComponent.css';

type GalleryProps = {
    sessionName: string; //nombre de ruta... weddings, couples, family, etc...
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

type DataGalleryResponse = GalleryI[];


const GalleryComponent: React.FC<GalleryProps> = ({ sessionName }) => {

    const [dataGallery, setDataGallery] = React.useState<DataGalleryResponse | null>(null);
    const [thumbnailPosition, setThumbnailPosition] = React.useState<'bottom' | 'top' | 'left' | 'right'>('bottom');


    const getInfoGallery = async () => {
        try {
            // const response = await fetch(
            //     "https://jsonplaceholder.typicode.com/photos?_limit=10",
            // );
            // const data = await response.json();
            let responseGallery = [] as DataGalleryResponse;
            const values = {
                1: 'one',
                2: 'two',
                3: 'three',
                4: 'four',
                5: 'five'
            };

            for (let i = 1; i <= 5; i++) {
                responseGallery = [...responseGallery, {
                    original: `/gallery/webp/${sessionName}-${values[i as keyof typeof values]}.webp`,
                    thumbnail: `/gallery/thumbs/${sessionName}-${values[i as keyof typeof values]}.jpg`,
                    description: '',
                    originalAlt: '',
                    thumbnailAlt: '',
                }];
            }

            setDataGallery(responseGallery);
        } catch (error) {
            console.error("Error fetching gallery data:", error);

        }
    };

    useEffect(() => {
        if (!sessionName || sessionName == '') {
            return;
        }

        getInfoGallery();
    }, [sessionName]);



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
                    dataGallery && dataGallery.length > 0 && (
                        <ImageGallery items={dataGallery} autoPlay={true} slideInterval={50000} thumbnailPosition={thumbnailPosition} showFullscreenButton={false} showPlayButton={false} />
                    )
                }
            </section>
        </>
    );
};

export default GalleryComponent;