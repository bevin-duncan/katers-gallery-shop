import React, { useEffect } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../photos";

const PhotoGallery = () => {
    

    const firstIndex = (photos.length - photos.length%4)/4;
    const secondIndex = firstIndex * 2;
    const thirdIndex = secondIndex + firstIndex;

    return (
        <div className="gallery-container">
         
            <div className="row">
                <div className="column">
                    {photos && photos.slice(0, firstIndex).map((photo, index) => <img src={photo.src} key={index} className="gallery-img"></img>)}
                </div>
                <div className="column">
                    {photos && photos.slice(firstIndex, secondIndex).map((photo, index) => <img src={photo.src} key={index} className="gallery-img"></img>)}
                </div>
                <div className="column">
                    {photos && photos.slice(secondIndex, thirdIndex).map((photo, index) => <img src={photo.src} key={index} className="gallery-img"></img>)}
                </div>
                <div className="column">
                    {photos && photos.slice(thirdIndex).map((photo, index) => <img src={photo.src} key={index} className="gallery-img"></img>)}
                </div>
                {/* // photo.index===(photos.length - photos.length%4)/4 || photo.index === 2 * ((photos.length - photos.length%4)/4)) || photo.index === 3 * ((photos.length - photos.length%4)/4)) ?  */}
            </div> 
        </div>
    )
}


export default PhotoGallery