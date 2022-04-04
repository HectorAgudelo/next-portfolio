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
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <NavigationBar
        about={() => scrollDown(about)}
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
