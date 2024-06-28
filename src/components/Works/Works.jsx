import React, { useState } from 'react';
import './works.css';

import proj1 from '../../assets/proj1.jpg';
import proj2 from '../../assets/proj2.jpg';
import proj3 from '../../assets/proj3.jpg';
import proj4 from '../../assets/proj4.jpg';
import proj5 from '../../assets/proj5.jpg';
import proj6 from '../../assets/proj6.jpg';

const images = [
    { src: proj1, alt: 'Description of image 1', caption: 'Personal Portfolio' },
    { src: proj2, alt: 'Description of image 2', caption: 'Church Website' },
    { src: proj3, alt: 'Description of image 3', caption: 'Flower Shop-site' },
    { src: proj4, alt: 'Description of image 4', caption: 'Custom Furniture-site' },
    { src: proj5, alt: 'Description of image 5', caption: 'Bible Verse Generator' },
    { src: proj6, alt: 'Description of image 6', caption: 'Calorie Counter' },
];

function Works() {
    const [count, setCount] = useState(0);
    
    return (
        <div className='works-container'id='works'>
            {images.map((image, index) => (
                <div className='figure-container' key={index}>
                    <figure>
                        <img src={image.src} alt={image.alt} />
                        <figcaption>{image.caption}</figcaption>
                    </figure>
                </div>
            ))}
        </div>
    );
}

export default Works;
