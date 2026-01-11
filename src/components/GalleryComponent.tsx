import React from 'react';
import type { GalleryI } from '@pages/gallery/weddings.astro';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type GalleryProps = {
    dataGallery: GalleryI[];
};

const GalleryComponent: React.FC<GalleryProps> = ({ dataGallery }) => {

    console.log('dataGallery:', dataGallery);
    return (
        <>
            <div>Gallery REACT</div>
            <ImageGallery items={dataGallery?.pictures} autoPlay={true} slideInterval={50000} thumbnailPosition='left' showFullscreenButton={false} showPlayButton={false} />
        </>
    );
};

export default GalleryComponent;