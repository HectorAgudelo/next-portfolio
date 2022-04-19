import React, { forwardRef } from 'react';
import styles from 'styled-components';
import { ProjectModalRender } from '../ProjectModalRender';
import { device } from '../DeviceScreens';
import { Button, Container } from 'react-bootstrap';
import style from './ProjectModalContainer.module.css';

const ContainerStyle = styles.div`
flex-wrap: wrap;
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content:center;
width: inherit;

@media ${device.mobileS}{
 
  gap: ${(props) => props.gapMobileS};
  font-Size: ${(props) => props.fontSizeMobileS};
  height: auto;
  
};

@media ${device.mobileM}{
  display: flex;
  gap: ${(props) => props.gapMobileM};
  font-Size: ${(props) => props.fontSizeMobileM};
  height: auto;
  
};

@media ${device.mobileL}{
  display: flex;
  gap: ${(props) => props.gapMobileL};
  font-Size: ${(props) => props.fontSizeMobileL};
  height: auto;
  
};

@media ${device.tablet}{
  display: flex;
  gap: ${(props) => props.gapTablet};
  font-Size: ${(props) => props.fontSizeTablet};
  height:auto;
  margin-top:20px;
};

@media ${device.laptop}{
  display: flex;
  gap: ${(props) => props.gapLaptop};
  font-Size: ${(props) => props.fontSizeLaptop};
  height:auto;
  margin-top:20px;
};

@media ${device.laptopL}{
 display: flex;
  gap: ${(props) => props.gapLaptopL};
  font-Size: ${(props) => props.fontSizeLaptopL};
  height: auto;
  margin-top:20px;
};

@media ${device.desktopL}{
margin-top:20px;
  display: flex;
  gap: ${(props) => props.gapDesktopL};
  font-Size: ${(props) => props.fontSizeDesktopL};
  height:auto;
};

`;

const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;

@media ${device.mobileS}{
  font-Size: ${(props) => props.fontSizeMobileS};
};

@media ${device.mobileM}{
  font-Size: ${(props) => props.fontSizeMobileM};
};

@media ${device.mobileL}{
  font-Size: ${(props) => props.fontSizeMobileL};
};

@media ${device.tablet}{
  font-Size: ${(props) => props.fontSizeTablet};
};

@media ${device.laptop}{
  font-Size: ${(props) => props.fontSizeLaptop};
};

@media ${device.laptopL}{
  font-Size: ${(props) => props.fontSizeLaptopL};
};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
};

`;

const Section = styles.div`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;


@media ${device.mobileS}{
  margin: ${(props) => props.marginMobileS};
  padding: 0px;
 gap: ${(props) => props.gapMobileS};

  width: 100%;
  height: ${(props) => props.viewHeightMobileS};
};

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
  padding: 0px 10px;
 
  gap: ${(props) => props.gapMobileM};
  height: ${(props) => props.viewHeightMobileM};
  width: 100%;
  
};

@media ${device.mobileL}{
  margin: ${(props) => props.marginMobileL};
  padding: 0px 10px;
  height: ${(props) => props.viewHeightMobileL};
  gap: ${(props) => props.gapMobileL};
  
  width: 100%;

};

@media ${device.tablet}{
  margin: ${(props) => props.marginTablet};
  height: ${(props) => props.viewHeightTablet};
  gap: ${(props) => props.gapTablet};

  width: 100%;
};

@media ${device.laptop}{
  margin: ${(props) => props.marginLaptop};
  height: ${(props) => props.viewHeightLaptop};
  gap: ${(props) => props.gapLaptop};
 
 
};

@media ${device.laptopL}{
  margin: ${(props) => props.marginLaptopL};
  height: ${(props) => props.viewHeightLaptopL};
  gap: ${(props) => props.gapLaptopL};
 
};

@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
  height: ${(props) => props.viewHeightDesktopL};
  gap: ${(props) => props.gapDesktopL};
  
};


`;

const Title = styles.h1`
font-size: ${(props) => props.fontSize};
margin: ${(props) => props.margin} ;
color: #393E41 !important;
text-align: ${(props) => props.titleAlign};
text-shadow: ${(props) => props.textShadow};


@media ${device.mobileS}{
  font-Size: ${(props) => props.fontSizeMobileS};
  margin: ${(props) => props.marginMobileS} ;
};

@media ${device.mobileM}{
  font-Size: ${(props) => props.fontSizeMobileM};
  margin: ${(props) => props.marginMobileM} ;
};

@media ${device.mobileL}{
  font-Size: ${(props) => props.fontSizeMobileL};
  margin: ${(props) => props.marginMobileL} ;
};

@media ${device.tablet}{
  font-Size: ${(props) => props.fontSizeTablet};
  margin: ${(props) => props.marginTablet} ;
};

@media ${device.laptop}{
  font-Size: ${(props) => props.fontSizeLaptop};
  margin: ${(props) => props.marginLaptop} ;
};

@media ${device.laptopL}{
  font-Size: ${(props) => props.fontSizeLaptopL};
  margin: ${(props) => props.marginLaptopL} ;
};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
  margin: ${(props) => props.marginDesktopL} ;
};


`;

const ProjectModalContainer = forwardRef((props, ref) => {
  return (
   <Container fluid style={{padding:'0px', marginTop:'0px'}}>
     <Section
      ref={ref}
      {...props}
      flexDirection='column'
      alignItems='center'
      marginDesktopL='0px 0px'
      marginLaptopL='0px 0px'
      marginLaptop='0px 0px'
      marginTablet='0px 0px'
      marginMobileL='0px 0px'
      marginMobileM='0px 0px'
      marginMobileS='0px 0px'
      gapDesktopL='33px'
      gapLaptopL='0px'
      gapLaptop='0px'
      gapTablet='0px'
      gapMobileL='0px'
      gapMobileM='0px'
      gapMobileS='0px'
      viewHeightDesktopL='100%'
      viewHeightLaptopL='100%'
      viewHeightLaptop='100%'
      viewHeightTablet='100%'
      viewHeightMobileL='100%'
      viewHeightMobileM='100%'
      viewHeightMobileS='100%'
    >
      <Section
        flexDirection='column'
        alignItems='center'
        gap='0px'
        viewHeightDesktopL='30%'
        viewHeightLaptopL='48%'
        viewHeightLaptop='20%'
        viewHeightTablet='25%'
        viewHeightMobileL='25%'
        viewHeightMobileM='23%'
        viewHeightMobileS='25%'
      >
        <Title
          titleAlign='center'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
          marginDesktopL='30px 0px 40px 0px'
          marginLaptopL='30px 0px 20px 0px'
          marginLaptop=' 30px 0px 10px 0px'
          marginTablet='30px 0px 5px 0px'
          marginMobileL='30px 0px 5px 0px'
          marginMobileM='30px 0px 5px 0px'
          marginMobileS='30px 0px 10px 0px'
          fontSizeDesktopL='80px'
          fontSizeLaptopL='45px'
          fontSizeLaptop='40px'
          fontSizeTablet='35px'
          fontSizeMobileL='35px'
          fontSizeMobileM='30px'
          fontSizeMobileS='25px'
        >
          Projects
        </Title>
        <Text
          margin='0px 20px 10px 20px'
          textAlign='center'
          fontSizeDesktopL='35px'
          fontSizeLaptopL='20px'
          fontSizeLaptop='15px'
          fontSizeTablet='15px'
          fontSizeMobileL='15px'
          fontSizeMobileM='15px'
          fontSizeMobileS='15px'
        >
        I enjoy spending time creating web apps, and exploring new technologies. Check out a couple of my most recent projects. If you would like to know more about my projects, I invite you to visit my GitHub.
        </Text>
      </Section>
      <ContainerStyle
        flexDirection='row'
        alignItems='center'
        gapDesktopL='60px'
        gapLaptopL='30px'
        gapLaptop='20px'
        gapTablet='10px'
        gapMobileL='10px'
        gapMobileM='10px'
        gapMobileS='15px'
      >
        <ProjectModalRender
          img={'/A.png'}
          tittle={'Restaurant Website'}
          description={'A website for a restaurant with menu information, a gallery showing the place, and links to other relevant information related to reservations and online ordering'}
          codeButton={
            <Button
              variant='light'
              className={`${style.customColor} w-25`}
              href='https://github.com/HectorAgudelo/AntidoteRestaurant.git'
              target='_blank'
              rel='noreferrer noopener'
            >
              Code
            </Button>
          }
          appButton={
            <Button
              variant='light'
              className={`${style.customColor} w-25 mx-2`}
              href='https://antidoteny.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              App
            </Button>
          }
        />
        <ProjectModalRender
          img={'/ChatRoom.png'}
          tittle={'Chat App'}
          description={'A chat application in which users pick among 3 different chat rooms. The app stores the most recent conversations, and notify users when a user enters or leaves the chat.'}
          codeButton={
            <Button
              variant='light'
              className={`${style.customColor} w-25`}
              href='https://github.com/HectorAgudelo/ChatRoom.git'
              target='_blank'
              rel='noreferrer noopener'
            >
              Code
            </Button>
          }
        />
      </ContainerStyle>
    </Section>
   </Container>
    
  );
});

ProjectModalContainer.displayName = 'ProjectModalContainer';
export default ProjectModalContainer;
