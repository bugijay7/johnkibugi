import React, { useState, lazy, Suspense } from 'react';
import './App.css';

const Landing = lazy(() => import('./components/Landing/Landing'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Works = lazy(() => import('./components/Works/Works'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contacts = lazy(() => import('./components/Contacts/Contacts'));

function App() {
  const [isWelcomeClicked, setIsWelcomeClicked] = useState(false);

  const handleWelcomeClick = () => {
    setIsWelcomeClicked(true);
  };

  return (
    <div className='app-container'>
      <Suspense fallback={<div>Loading...</div>}>
        {!isWelcomeClicked ? (
          <Landing onWelcomeClick={handleWelcomeClick} />
        ) : (
          <>
            <Navbar />
            <Works />
            <Blog />
            <Skills />
            <Contacts />
  
          </>
        )}
      </Suspense>
    </div>
  );
}

export default App;
