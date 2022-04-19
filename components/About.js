import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import { Image } from './GlobalComponents/Image';
import { Section } from './GlobalComponents/Section';
import { Title } from './GlobalComponents/Tittle';
import { Text } from './GlobalComponents/TextComponets';
import { ContainerStyle } from './GlobalComponents/ContainerStyle';

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

const About = forwardRef((props, ref) => {
  return (
    <Container fluid style={{ padding: '0px' }} ref={ref} {...props}>
      <ContainerStyle
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        gapMobileS='0px'
        gapLaptopL='16px'
        marginMobileS='0px 0px'
        heightMobileS='100%'
        widthMobileS='100%'
      >
        <Section
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          gap='10px'
        >
          <Title
            color='#393E41'
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
            color='#393E41'
            textAlign='justify'
            fontSizeDesktopL='35px'
            fontSizeLaptopL='20px'
            fontSizeLaptop='15px'
            fontSizeTablet='15px'
            fontSizeMobileL='15px'
            paddingMobileL='10px'
            paddingMobileM='10px'
            paddingMobileS='10px'
            marginMobileS='0px 20px 0px 20px'
            marginTablet='0px 50px 0px 50px'
            marginLaptop='0px 100px 0px 100px'
            marginLaptopL='0px 200px 0px 200px'
            marginDesktopL='0px 300px 0px 300px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Section>
        <Section
          display='flex'
          justifyContent='center'
          flexDirection='row'
          flexDirectionMobileS='column'
          alignItemsMobileS='center'
          alignItemsTablet='flex-start'
          marginDesktopL='0px 400px'
          marginLaptopL='0px 200px'
          marginLaptop='0px 100px'
          marginTablet='0px 50px'
          marginMobileL='0px 50px'
          marginMobileM='0px 50px'
          marginMobileS='0px 50px'
          gap='10px'
        >
          <Image src='/Self.jpg' alt={'Myself'} />
          <Section
            display='flex'
            justifyContent='center'
            flexDirection='column'
            marginDesktopL='0px 40px'
            marginLaptopL='0px 20px'
            marginLaptop='0px 10px'
            marginTablet='0px 5px'
            marginMobileL='0px 5px'
            marginMobileM='0px 5px'
            marginMobileS='0px 5px'
            alignItems='flex-start'
            gap='0px'
          >
            <Title
              color='#393E41'
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
              color='#393E41'
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
        <Section
          flexDirection='column'
          alignItems='center'
          gap='10px'
          justifyContent='center'
        >
          <Title
            color='#393E41'
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
          </Title>
          <Text
            color='#393E41'
            marginMobileS='0px 20px 0px 20px'
            marginTablet='0px 50px 0px 50px'
            marginLaptop='0px 100px 0px 100px'
            marginLaptopL='0px 200px 0px 200px'
            marginDesktopL='0px 300px 0px 300px'
            textAlign='justify'
            fontSizeDesktopL='35px'
            fontSizeLaptopL='20px'
            fontSizeLaptop='15px'
            fontSizeTablet='15px'
            fontSizeMobileL='15px'
            fontSizeMobileM='15px'
            fontSizeMobileS='15px'
          >
           These are some of the technologies I have worked with on personal and professional projects.
          </Text>
        </Section>
        <Text
          color='#393E41'
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
            href='https://docs.google.com/document/d/1rY7-ZfdkOIp6-z6Sy3WkdNmhuTSUlHk6/edit?usp=sharing&ouid=109866500808769579371&rtpof=true&sd=true'
            target='_blank'
            rel='noreferrer noopener'
          >
            View My Resume
          </a>
        </Text>
        <ContainerStyle
          justifyContent='center'
          display='flex'
          flexWrap='wrap'
          flexDirection='row'
          alignItems='center'
          gapDesktopL='60px'
          gapLaptopL='30px'
          gapLaptop='35px'
          gapTablet='50px'
          gapMobileL='30px'
          gapMobileM='15px'
          gapMobileS='7px'
          marginDesktopL='30px 0px 40px 0px'
          marginLaptopL='0px 40px 0px 40px'
          marginLaptop='0px 20px 0px 20px'
        >
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiHtml5 className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              HTML
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiCss3 className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              CSS
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiJavascript className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              JavaScript
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiReact className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              React
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiBootstrap className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              Bootstrap
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiStyledcomponents className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              Style <br /> Components
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiNodedotjs className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              NodeJS
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiMongodb className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              MongoDB
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiNextdotjs className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              NextJS
            </Text>
          </ContainerStyle>
          <ContainerStyle
            justifyContent='center'
            display='flex'
            flexWrap='wrap'
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
            marginDesktopL='30px 0px 40px 0px'
            marginLaptopL='0px 40px 0px 40px'
            marginLaptop='0px 20px 0px 20px'
          >
            <SiStorybook className='icon' size={'3em'} />
            <Text
              color='#393E41'
              margin='0px 0px 0px 0px'
              textAlign='center'
              fontSizeDesktopL='25px'
              fontSizeLaptop='15px'
            >
              Storybook
            </Text>
          </ContainerStyle>
        </ContainerStyle>
      </ContainerStyle>
    </Container>
  );
});

About.displayName = 'About';

export default About;
