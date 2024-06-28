import React from 'react';
import './contacts.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaPinterest } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import rp1 from '../../assets/rp1.jpg';
import rp2 from '../../assets/rp2.jpg';
import rp3 from '../../assets/rp3.jpg';


const Contacts = () => {
    const star = <FontAwesomeIcon icon={faStar} />; // FontAwesome star icon

    return (
        <div className="contacts-container">
            <div className="reviews" id='testimonials'>
                <h2>Reviews</h2>
                <div className="review">
                    <div className="review-header">
                        <span className="reviewer-name">Miss Perps</span>
                        <img src={rp1} alt="Image 1" style={{ width: '30px', height: '30px', borderRadius: '8px', marginLeft: '10px' }} />
                    </div>
                    <p className="review-text">"Working with Kibugi Maina was a fantastic experience.
                     He took our ideas and turned them into a beautifully crafted website that perfectly 
                     represents our brand. 
                    His attention to detail and dedication to delivering on time made 
                    them a pleasure to work with.</p>
                    <div className="review-rating">
                        {star}{star}{star}{star}{star}
                    </div>
                </div>
                <div className="review">
                    <div className="review-header">
                        <span className="reviewer-name">Jane M. Njeri</span>
                        <img src={rp2} alt="Image 2" style={{ width: '30px', height: '30px', borderRadius: '8px', marginLeft: '10px'  }} />
                    </div>
                    <p className="review-text">"Kibugi Maina is an exceptional developer who brought our project to life with his expertise and dedication. His attention to detail and problem-solving skills ensured 
                    that our website not only looked great but also functioned flawlessly. Working with him was a pleasure."</p>
                    <div className="review-rating">
                        {star}{star}{star}{star}{star}
                    </div>
                </div>
                <div className="review">
                    <div className="review-header">
                        <span className="reviewer-name">D4l_kinoo</span>
                        <img src={rp3} alt="Image 3" style={{ width: '30px', height: '30px', borderRadius: '8px', marginLeft: '10px'   }} />
                    </div>
                    <p className="review-text">"We were impressed by Kibugi Maina's technical prowess
                     and ability to understand our complex requirements. He delivered a high-quality website that exceeded our expectations, 
                    demonstrating professionalism and a deep understanding of modern web development trends."</p>
                    <div className="review-rating">
                        {star}{star}{star}{star}{star}
                    </div>
                </div>
            </div>
            <div className='contacts' id='contacts'>
                <div className="contact-info">
                <h2>Contact Me</h2>
                <p>Email: bugijay7@gmail.com</p>
                <p>Phone: +254 702 443 418</p>
                <p>Address: 00200 Nairobi, Kenya</p>
                </div> 

                <div className="social-icons">
                <a href="https://www.facebook.com/levante.kruz"><FaFacebook /></a>
                <a href="https://x.com/bugijay7"><FaTwitter /></a>
                <a href="https://www.instagram.com/bugijay7/"><FaInstagram /></a>
                <a href="https://github.com/bugijay7"><FaGithub /></a>
                <a href="https://www.pinterest.com/levantekruz/"><FaPinterest /></a>
                <a href='#home'>Home</a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
