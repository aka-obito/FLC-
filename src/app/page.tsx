import Image from 'next/image';
import React from 'react';
import Articles from './components/articles';
import About from './components/about';
import Events from './components/events';
import Contact from './components/contacts';
import posts from '../helper/articles.json';
import logo from '../../public/assets/Logo/1.1.png';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "App-logo">
          <Image src={logo} alt="Foreign Language Club Logo" height={125} width={125} />
        </div>
        <div className="Heading">
          <h1><b>Foreign Language Club</b></h1>
        </div>
      </header>
      <main>
        <About />
        <Articles posts={posts} />
        <Events />
        <Contact />
      </main>
      <footer>
        <div className="containeer">
            <div className="footer-content">
                <h2>Contact Us</h2>
                <p>Email: foreignlanguageclub@mitaoe.ac.in</p>
                <p>Phone: 9767189662</p>
            </div>
            <div className="footer-content">
                <h2>Follow Us</h2>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/company/foreign-language-club-mitaoe/about/?viewAsMember=true">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/foreignlanguageclubmitaoe?igsh=MWM0ZmRyams5OGk4OA==">Instagram</a></li>
                </ul>
            </div>
        </div>
      </footer>
    </div>
    
  );
}
