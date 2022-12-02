import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import style from './HomeComp.module.css';
import { Section } from '../GlobalComponents/Section';
import { ContainerStyle } from '../GlobalComponents/ContainerStyle';
import {Title} from '../GlobalComponents/Tittle'
import {TextHome} from '../GlobalComponents/TextHome'


const HomeComp = forwardRef((props, ref) => {
  return (
    <Container fluid style={{ padding: '0px' }} ref={ref} {...props}>
      <Section
        display='flex'
        flexDirection='column'
        justifyContent='center'
        background='linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,1)), url("/background.module.jpeg")'
        backgroundSizeMobileS='cover'
        heightMobileS='100vh'
        widthMobileS='100%'
        alignItemsMobileS='center'
        alignItemsTablet='start'
      >
        <Title
        color='#393E41'
        fontSizeMobileS='25px'
        fontSizeTablet='30px'
        fontSizeLaptop='35px'
        fontSizeLaptopL='40px'
        fontSizeDesktopL='80px'
        marginMobileS='4px 0px'
        marginMobileL='4px 60px'
        marginTablet='4px 80px'
        marginLaptop='4px 100px'
        marginLaptopL='4px 200px'
        marginDesktopL='4px 400px'

        >Hector Agudelo-Carmona</Title>
        <TextHome
         display='inline-flex'
         gap='15px'
         color='#393E41 !important'
         fontSizeMobileS='20px'
         fontSizeDesktopL='40px'
         marginMobileS='4px 0px'
         marginMobileL='4px 60px'
         marginTablet='4px 80px'
         marginLaptop='4px 100px'
         marginLaptopL='4px 200px'
         marginDesktopL='4px 400px'
        >
          I am a
          <Typewriter
            className={style.Typewriter__wrapper}
            options={{
              strings: [
                'Frontend Developer',
                'Software Engineer',
                'Software Developer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </TextHome>
        <ContainerStyle
          display='flex'
          flexDirection='row'
          alignItemsTablet='start'
          justifyContent='center'
          fontSizeMobileS='0.7em'
          fontSizeMobileM='0.9em'
          fontSizeLaptopL='1em'
          fontSizeDesktopL='2em'
          marginMobileS='15px 60px'
          marginTablet='20px 80px'
          marginLaptop='20px 100px'
          marginLaptopL='20px 200px'
          marginDesktopL='40px 400px'
          gapMobileS='15px'
          gapMobileM='20px'
          gapLaptop='30px'
        >
          <a
            className={style.a}
            href='https://www.linkedin.com/in/hector-agudelo-34aa62119/'
            rel='noreferrer'
            target='_blank'
          >
            <BsLinkedin className={style.icon} size={'1.5em'} />
          </a>
          <a
            className={style.a}
            href='https://github.com/HectorAgudelo'
            rel='noreferrer'
            target='_blank'
          >
            <BsGithub className={style.icon} size={'1.5em'} />
          </a>
          <a
            className={style.a}
            href='https://twitter.com/DevAgudelo'
            rel='noreferrer'
            target='_blank'
          >
            <BsTwitter className={style.icon} size={'1.5em'} />
          </a>
        </ContainerStyle>
      </Section>
    </Container>
  );
});

HomeComp.displayName = 'HomeComp';

export default HomeComp;
