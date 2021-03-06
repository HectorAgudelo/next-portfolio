import styles from '../styles/Home.module.css';
import HomeComp from '../components/HomeComp/HomeComp';
import About from '../components/About';
import Skills from '../components/Skills';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ProjectModalContainer from '../components/ProjectModalContainer/ProjectModalContainer';
import ContactInfo from '../components/ContactInfo';
import React, { useRef } from 'react';

export default function Home() {

  const home = useRef(null);
  const about = useRef(null);
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
        about={() => {scrollDown(about); console.log('component')}}
        home={() => scrollDown(home)}
        projects={() => scrollDown(projects)}
        contact={() => scrollDown(contact)}
      />
      <HomeComp ref={home} />
      <About ref={about} />
      {/* <Skills /> */}
      <ProjectModalContainer ref={projects} />
      <ContactInfo ref={contact} />
    </div>
  );
}
