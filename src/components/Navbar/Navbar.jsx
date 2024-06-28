import React, { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import background3 from '../../assets/background3.jpg'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className='navbar-container'>
         
         <div className='nav' id='home'>
           <div>
           <h1>Bugijay7</h1>
           </div>

          <div className="menu-icon" onClick={toggleMenu}>
          <FaBars   size={30} />
          </div>
          <ul className={`nav-menu ${isOpen ? 'nav-menu-active' : ''}`}>
          <li className="nav-item"><a href="#contacts">Contacts</a></li>
          <li className="nav-item"><a href="#works">Works</a></li>
          <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
          <li className="nav-item"><a href="#skills">Skills</a></li>
          </ul>
        </div> 


        


         <div className='hero-section'>
         <div className="container noselect">
         <div className="canvas">
           {Array.from({ length: 25 }, (_, index) => (
             <div key={index} className={`tracker tr-${index + 1}`}></div>
           ))}
           <div id="card">
             <p id="prompt">Hey i am <br></br>
             Kibugi Maina</p>
             <div className="title">I,m  
             a self-taught front-end developer with a passion for 
             crafting visually appealing and user-friendly web applications.<br></br>
             I enjoy turning complex problems
             into:-<br></br>
             simple, <br></br>beautiful,<br></br> and intuitive designs.
             </div>
             <div className="subtitle"></div>
           </div>
         </div>
       </div>

              <div className='pic'>
              <img src={background3} alt="desktop background" style={{ 
                width: '450px',
                 height: '350px', 
                 borderRadius: '8px', 
                 marginLeft: '10px' }} />
              </div>
        </div>
  </div>
    )

}

export default Navbar