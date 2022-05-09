import React, { useEffect } from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "../photos";
// eslint-disable-next-line import/no-webpack-loader-syntax
// import '!!css-loader!./PhotoGallery.module.css';
// import style from "./PhotoGallery.module.css"

// const updatedStyles = {
//     "margin-top": "8px",
//     "vertical-align": "middle",
//     "transform": "scale(2)",
//     "position": "flex",
//     "transition": "transform 0.25s ease"
// };
// const img = document.querySelectorAll("img");
// const reset = img.styles;

// const innerText = `img.setAttribute('onMouseOver', 'this.style=${updatedStyles}'); img.setAttribute('onMouseOut', 'this.style=${reset}')`;


// /* popout the browser and maximize to see more rows! -> */
const PhotoGallery = () => {
    
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.type="text/javascript";
    //     script.innerText=innerText;
    //     document.body.appendChild(script);
    // }, []);

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