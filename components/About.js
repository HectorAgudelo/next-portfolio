import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from 'styled-components';
import { device } from './DeviceScreens';
import {
  SiReact,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiStyledcomponents,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiStorybook,
} from 'react-icons/si';

const Image = styles.img`




@media ${device.mobileS}{
  margin: 0px;
  height: 300px;
  width: auto;
};

@media ${device.mobileM}{
  margin: 0px;
  height: 350px;
  width: auto;
};

@media ${device.mobileL}{
  margin: 0px;
  height: 400px;
  width: auto;
};

@media ${device.tablet}{
  margin: 0px;
  height: 350px;
  width: auto;
};

@media ${device.laptop}{
  margin: 0px;
  height: 400px;
  width: auto;
};

@media ${device.laptopL}{
  margin: 0px;
  height: 400px;
  width: auto;
};

@media ${device.desktopL}{
  margin: 0px;
  height: 800px;
  width: auto;
};


`;

const Section = styles.div`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;
margin: ${(props) => props.margin};
gap: 10px;

@media ${device.mobileS}{
  margin: ${(props) => props.marginMobileS};
  flex-direction: ${(props) => props.flexDirectionMobileS};
  align-items: ${(props) => props.alignItemsMobileS};
};

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
  flex-direction: ${(props) => props.flexDirectionMobileM};
  align-items: ${(props) => props.alignItemsMobileM};
};

@media ${device.mobileL}{
  margin: ${(props) => props.marginMobileL};
  flex-direction: ${(props) => props.flexDirectionMobileL};
  align-items: ${(props) => props.alignItemsMobileL};
};

@media ${device.tablet}{
  margin: ${(props) => props.marginTablet};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
};

@media ${device.laptop}{
  margin: ${(props) => props.marginLaptop};
  
};

@media ${device.laptopL}{
  margin: ${(props) => props.marginLaptopL};
 
};

@media ${device.desktopL}{
  margin: ${(props) => props.marginDesktopL};
 
};


`;

const Title = styles.h1`
font-size: ${(props) => props.fontSize};
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
}

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL};
  margin: ${(props) => props.marginDesktopL} ;
};


`;

const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: #393E41 !important;

@media ${device.mobileS}{
  font-Size: ${(props) => props.fontSizeMobileS}
  padding: ${(props) => props.paddingMobileS}
};

@media ${device.mobileM}{
  font-Size: ${(props) => props.fontSizeMobileM}
  padding: ${(props) => props.paddingMobileM}
};

@media ${device.mobileL}{
  font-Size: ${(props) => props.fontSizeMobileL}
  padding: ${(props) => props.paddingMobileL}
};

@media ${device.tablet}{s
  font-Size: ${(props) => props.fontSizeTablet}
};

@media ${device.laptop}{
  font-Size: ${(props) => props.fontSizeLaptop}
};

@media ${device.laptopL}{
  font-Size: ${(props) => props.fontSizeLaptopL}
};

@media ${device.desktopL}{
  font-Size: ${(props) => props.fontSizeDesktopL}
};


`;

const ContainerStyle = styles.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content:center;



@media ${device.mobileS}{
  gap: 0px;
  margin: 0px 0px;
  height: 100%;
  width: 100%;
};


@media ${device.mobileM}{
  gap: 0px;
  margin: 0px 0px;
  height: 176%;
  width: 100%;
};


@media ${device.mobileL}{
  gap: 0px;
  margin: 0px 0px;
  height: 181%;
  width: 100%;
};

@media ${device.tablet}{
  gap: 0px;
  margin: 0px 20px;
  height: 143%;
  width: 100%;
};

@media ${device.laptop}{
  gap: 0px;
  margin: 0px 30px;
  height: 118%;
  width: 100%;
};

@media ${device.laptopL}{
  gap: 16px;
  height: 140%;
  width: 100%;
};

@media ${device.desktopL}{
gap: 16px;
height: 132%;
width: 100%;
};

`;
const ContainerSkills = styles.div`
flex-wrap: wrap;
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content:center;

@media ${device.mobileS}{
  display: flex;
  gap: ${(props) => props.gapMobileS};
  font-Size: ${(props) => props.fontSizeMobileS};
  height: 0%;
  
};

@media ${device.mobileM}{
  display: flex;
  gap: ${(props) => props.gapMobileM};
  font-Size: ${(props) => props.fontSizeMobileM};
  height: 0%;
  
};

@media ${device.mobileL}{
  display: flex;
  gap: ${(props) => props.gapMobileL};
  font-Size: ${(props) => props.fontSizeMobileL};
  height: 0%;
  
};

@media ${device.tablet}{
  display: flex;
  gap: ${(props) => props.gapTablet};
  font-Size: ${(props) => props.fontSizeTablet};
  height: 0%;
};

@media ${device.laptop}{
  display: flex;
  gap: ${(props) => props.gapLaptop};
  font-Size: ${(props) => props.fontSizeLaptop};
  height: 0%;
  margin: 0px 20px 0px 20px;
};

@media ${device.laptopL}{
 display: flex;
  gap: ${(props) => props.gapLaptopL};
  font-Size: ${(props) => props.fontSizeLaptopL};
  height: 0%;
  margin: 0px 40px 0px 40px;
};

@media ${device.desktopL}{

  display: flex;
  gap: ${(props) => props.gapDesktopL};
  font-Size: ${(props) => props.fontSizeDesktopL};
  height: 0%;
  margin: 0px 40px 0px 40px;
};

`;
const SectionSkills = styles.div`
display: flex;
flex-direction: ${(props) => props.flexDirection};
align-items: ${(props) => props.alignItems};
justify-content: center;


@media ${device.mobileS}{
  margin: ${(props) => props.marginMobileS};
  padding: 0px 10px;
  height: ${(props) => props.viewHeightMobileS};
  gap: ${(props) => props.gapMobileS};

  width: 100%;
};

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
  padding: 0px 10px;
  height: ${(props) => props.viewHeightMobileM};
  gap: ${(props) => props.gapMobileM};

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
  padding: 40px 10px;
};


`;

const TitleSkills = styles.h1`
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

const TextSkills = styles.p`
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

const About = forwardRef((props, ref) => {
  return (
    <Container fluid style={{ padding: '0px' }} ref={ref} {...props}>
      <ContainerStyle>
        <Section flexDirection='column' alignItems='center'>
          <Title
            titleAlign='center'
            textShadow='2px 5px 0 rgba(0,0,0,0.2)'
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='30px 0px 20px 0px'
            marginLaptop='30px 0px 10px 0px'
            marginTablet='30px 0px 5px 0px'
            marginMobileL='30px 0px 5px 0px'
            marginMobileM='30px 0px 5px 0px'
            marginMobileS='30px 0px 5px 0px'
            fontSizeDesktopL='80px'
            fontSizeLaptopL='45px'
            fontSizeLaptop='40px'
            fontSizeTablet='35px'
            fontSizeMobileL='35px'
            fontSizeMobileM='30px'
            fontSizeMobileS='25px'
          >
            About
          </Title>
          <Text
            margin='0px 20px 20px 20px'
            textAlign='center'
            fontSizeDesktopL='35px'
            fontSizeLaptopL='20px'
            fontSizeLaptop='15px'
            fontSizeTablet='15px'
            fontSizeMobileL='15px'
            paddingMobileL='10px'
            paddingMobileM='10px'
            paddingMobileS='10px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Section>
        <Section
          flexDirection='row'
          flexDirectionMobileL='column'
          flexDirectionMobileM='column'
          flexDirectionMobileS='column'
          alignItems='flex-start'
          alignItemsMobileL='center'
          alignItemsMobileM='center'
          alignItemsMobileS='center'
          margin='0px'
          marginDesktopL='0px 400px'
          marginLaptopL='0px 200px'
          marginLaptop='0px 100px'
          marginTablet='0px 50px'
          marginMobileL='0px 50px'
          marginMobileM='0px 50px'
          marginMobileS='0px 50px'
        >
          <Image src='/Self.jpg' alt={'Myself'} />
          <Section
            flexDirection='column'
            marginDesktopL='0px 40px'
            marginLaptopL='0px 20px'
            marginLaptop='0px 10px'
            marginTablet='0px 5px'
            marginMobileL='0px 5px'
            marginMobileM='0px 5px'
            marginMobileS='0px 5px'
            alignItems='flex-start'
          >
            <Title
              titleAlign='left'
              fontSize='25px'
              fontSizeDesktopL='50px'
              fontSizeLaptopL='30px'
              fontSizeLaptop='20px'
              fontSizeTablet='20px'
              fontSizeMobileL='20px'
              fontSizeMobileM='20px'
              fontSizeMobileS='20px'
              textShadow='none'
              margin='0px 0px 0px 0px'
            >
              Frontend Developer
            </Title>
            <Text
              textAlign='left'
              margin='0px 0px'
              fontSizeDesktopL='35px'
              fontSizeLaptopL='20px'
              fontSizeLaptop='15px'
              fontSizeTablet='15px'
              fontSizeMobileL='15px'
              fontSizeMobileM='15px'
              fontSizeMobileS='15px'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Integer enim neque volutpat ac. Nibh cras pulvinar mattis nunc sed
              blandit libero. Nunc scelerisque viverra mauris in aliquam sem
              fringilla ut. Faucibus ornare suspendisse sed nisi lacus sed
              viverra. Porta nibh venenatis cras sed felis eget velit aliquet
              sagittis. Urna molestie at elementum eu. Tempus quam pellentesque
              nec nam aliquam sem et tortor. Consectetur a erat nam at lectus
              urna duis. Nunc sed velit dignissim sodales. Cras pulvinar mattis
              nunc sed blandit libero. Ipsum consequat nisl vel pretium lectus
              quam. Pretium quam vulputate dignissim suspendisse in est. Donec
              ac odio tempor orci dapibus ultrices in.
            </Text>
          </Section>
        </Section>
        <SectionSkills flexDirection='column' alignItems='center' gap='10px'>
          <TitleSkills
            titleAlign='center'
            textShadow='none'
            margin='20px 0px 10px 0px'
            fontSizeDesktopL='50px'
            fontSizeLaptopL='30px'
            fontSizeLaptop='20px'
            fontSizeTablet='20px'
            fontSizeMobileL='20px'
            fontSizeMobileM='20px'
            fontSizeMobileS='20px'
          >
            Skills
          </TitleSkills>
          <TextSkills
            margin='0px 10px 0px 10px'
            textAlign='center'
            fontSizeDesktopL='35px'
            fontSizeLaptopL='20px'
            fontSizeLaptop='15px'
            fontSizeTablet='15px'
            fontSizeMobileL='15px'
            fontSizeMobileM='15px'
            fontSizeMobileS='15px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </TextSkills>
        </SectionSkills>
        <TextSkills
          margin='20px'
          textAlign='center'
          fontSizeDesktopL='35px'
          fontSizeLaptopL='20px'
          fontSizeLaptop='15px'
          fontSizeTablet='15px'
          fontSizeMobileL='15px'
          fontSizeMobileM='15px'
          fontSizeMobileS='15px'
        >
          <a
            style={{
              color: '#8a5c78',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
            href='https://docs.google.com/document/d/1-WiqkWGrUnhsf7YyjKerPKAkakKRrd5j/edit?usp=sharing&ouid=109866500808769579371&rtpof=true&sd=true'
            target='_blank'
            rel='noreferrer noopener'
          >
            View My Resume
          </a>
        </TextSkills>
        <ContainerSkills
          flexDirection='row'
          alignItems='center'
          gapDesktopL='60px'
          gapLaptopL='30px'
          gapLaptop='35px'
          gapTablet='40px'
          gapMobileL='30px'
          gapMobileM='15px'
          gapMobileS='7px'
        >
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiHtml5 className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              HTML
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiCss3 className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              CSS
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiJavascript className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              JavaScript
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiReact className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              React
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiBootstrap className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              Bootstrap
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiStyledcomponents className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              Style <br /> Components
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiNodedotjs className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              NodeJS
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiMongodb className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              MongoDB
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.6em'
            fontSizeMobileS='0.7em'
          >
            <SiNextdotjs className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              NextJS
            </TextSkills>
          </ContainerSkills>
          <ContainerSkills
            flexDirection='column'
            alignItems='center'
            gap='0px'
            fontSizeDesktopL='2em'
            fontSizeLaptopL='1em'
            fontSizeLaptop='0.9em'
            fontSizeTablet='0.7em'
            fontSizeMobileL='0.7em'
            fontSizeMobileM='0.7em'
            fontSizeMobileS='0.7em'
          >
            <SiStorybook className='icon' size={'3em'} />
            <TextSkills
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              Storybook
            </TextSkills>
          </ContainerSkills>
        </ContainerSkills>
      </ContainerStyle>
    </Container>
  );
});

About.displayName = 'About';

export default About;
