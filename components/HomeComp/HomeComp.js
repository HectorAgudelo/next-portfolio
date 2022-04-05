import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from 'styled-components';
import Typewriter from 'typewriter-effect';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import style from './HomeComp.module.css';
import { device } from '../DeviceScreens';

const Section = styles.div`
display: flex;
flex-direction: column;
justify-content: center;
background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.6)), url('/background.module.jpeg');



@media ${device.mobileS}{
  background-size: cover;
  height: 100vh;
  width: 100%;
  align-items: center;
  
};

@media ${device.mobileM}{
  background-size: cover;
  height: 125vh;
  width: 125vmin;
  align-items: center;
};

@media ${device.mobileL}{
  background-size: cover;
  height: 125vh;
  width: 125vmin;
  align-items: center;
};
=
@media ${device.tablet}{
  background-size: cover;
  height: 100vh;
  width: auto;
  align-items: start;
};

@media ${device.laptop}{

};

@media ${device.laptopL}{
  height: 107vh;
};

@media ${device.desktopL}{
  height: 107vh;
};



`;

const Title = styles.h1`
margin: 2px 40px;
color: #393E41;

@media ${device.mobileS}{
  font-size: 25px;
  margin: 4px 0px;
};

@media ${device.mobileM}{
  font-size: 30px;
  margin: 4px 0px;
};

@media ${device.mobileL}{
  font-size: 30px;
  margin: 4px 60px;
};

@media ${device.tablet}{
  font-size: 30px;
  margin: 4px 80px;
};

@media ${device.laptop}{
  font-size: 35px;
  margin: 4px 100px;
};

@media ${device.laptopL}{
  font-size: 40px;
  margin: 4px 200px;
};

@media ${device.desktopL}{
font-size: 80px;
margin: 4px 400px;
};



`;

const Text = styles.h3`
display: inline-flex;
margin: 2px 40px;
gap: 8px;
color: #393E41 !important;

@media ${device.mobileS}{
  font-size: 20px;
  margin: 4px 0px;
};

@media ${device.mobileM}{
  font-size: 20px;
  margin: 4px 0px;
};

@media ${device.mobileL}{
  font-size: 20px;
  margin: 4px 60px;
};

@media ${device.tablet}{
  font-size: 20px;
  margin: 4px 80px;
};

@media ${device.laptop}{
  font-size: 20px;
  margin: 4px 100px;
};
  
@media ${device.laptopL}{
    font-size: 20px;
    margin: 4px 200px;
  };

  @media ${device.desktopL}{
  font-size: 40px;
  margin: 4px 400px;
  };



`;

const ContainerStyle = styles.div`
margin: 20px 40px;
display: flex;
flex-direction: row;
align-items: start;
justify-content:center;

@media ${device.mobileS}{
  font-size: 0.7em;
  margin: 15px 60px;
  gap: 15px;
};

@media ${device.mobileM}{
  font-size: 0.9em;
  margin: 15px 60px;
  gap: 20px;
};

@media ${device.mobileL}{
  font-size: 0.9em;
  margin: 15px 60px;
  gap: 20px;
};

@media ${device.tablet}{
  font-size: 0.9em;
  margin: 20px 80px;
  gap: 20px;
};

@media ${device.laptop}{
  font-size: 0.9em;
  margin: 20px 100px;
  gap: 30px;
};

@media ${device.laptopL}{
  font-size: 1em;
  margin: 20px 200px;
  gap: 30px;
};

@media ${device.desktopL}{
  font-size: 2em;
  margin: 40px 400px;
  gap: 30px;
  };


`;

const HomeComp = forwardRef((props, ref) => {
  return (
    <Container fluid style={{padding:'0px'}} ref={ref} {...props} >
      <Section >
        <Title>Hector Agudelo-Carmona</Title>
        <Text>
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
        </Text>
        <ContainerStyle>
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
