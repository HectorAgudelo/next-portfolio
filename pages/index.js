import styles from '../styles/Home.module.css';
import HomeComp from '../components/HomeComp/HomeComp';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ProjectModalContainer from '../components/ProjectModalContainer/ProjectModalContainer';
import ContactInfo from '../components/ContactInfo';
import React, { useRef } from 'react';

export default function Home() {

  const home = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop-48,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{height:'100%'}}>
      <NavigationBar
        about={() => scrollDown(about)}
        experience={() => scrollDown(experience)}
        home={() => scrollDown(home)}
        projects={() => scrollDown(projects)}
        contact={() => scrollDown(contact)}
      />
      <HomeComp id='Home' ref={home} />
      <About id='About' ref={about} />
      <Experience id='Experience' ref={experience} />
      {/* <Skills /> */}
      <ProjectModalContainer id='Projects' ref={projects} />
      <ContactInfo id='Contact' ref={contact} />
    </div>
  );
}
