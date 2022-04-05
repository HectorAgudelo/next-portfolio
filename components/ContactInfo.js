import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from 'styled-components';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
import { device } from './DeviceScreens';

const Section = styles.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #8a5c68;




@media ${device.mobileS}{
  
  height: 32% ;
  width: 100%;
  align-items: center;
};

@media ${device.mobileM}{
  background-size: cover;
  height: 40vh;
  width: 125vmin;
  align-items: center;
};

@media ${device.mobileL}{
  background-size: cover;
  height: 35vh;
  width: 125vmin;
  align-items: center;
};

@media ${device.tablet}{
  background-size: cover;
  height: 30vh;
  width: auto;
  align-items: center;
  margin-top: 10px
};

@media ${device.laptop}{
  margin-top: 5px
};

@media ${device.laptopL}{
    height: 31vh;
    margin-top: 65px
};

@media ${device.desktopL}{
  height: 37vh;
  margin-top: 80px
};



`;

const Title = styles.h1`
margin: 2px 40px;
color: #d3d0cb;
text-shadow: ${(props) => props.textShadow};

@media ${device.mobileS}{
    font-Size: ${(props) => props.fontSizeMobileS};
  margin: ${(props) => props.marginMobileS};
};

@media ${device.mobileM}{
    font-Size: ${(props) => props.fontSizeMobileM};
    margin: ${(props) => props.marginMobileM};
};

@media ${device.mobileL}{
    font-Size: ${(props) => props.fontSizeMobileL};
  margin: ${(props) => props.marginMobileL};
};

@media ${device.tablet}{
    font-Size: ${(props) => props.fontSizeTablet};
  margin: ${(props) => props.marginTablet};
};

@media ${device.laptop}{
    font-Size: ${(props) => props.fontSizeLaptop};
  margin: ${(props) => props.marginLaptop};
};

@media ${device.laptopL}{
    font-Size: ${(props) => props.fontSizeLaptopL};
  margin: ${(props) => props.marginLaptopL};
};

@media ${device.desktopL}{
    font-Size: ${(props) => props.fontSizeDesktopL};
margin: ${(props) => props.marginDesktopL};
};



`;

const Text = styles.h3`
display: inline-flex;
margin: 2px 40px;
text-align:center;
gap: 8px;
color: #d3d0cb !important;


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

const ContainerStyle = styles.div`

display: flex;
flex-wrap: ${(props) => props.flexWrap};
align-items: center;
justify-content:center;

@media ${device.mobileS}{
    flex-direction:  ${(props) => props.flexDirectionMobileS};
  font-size: 0.7em;
  margin: ${(props) => props.marginMobileS};
  gap: ${(props) => props.gapMobileS};
};

@media ${device.mobileM}{
  font-size: 0.9em;
  margin: ${(props) => props.marginMobileM};
  gap: ${(props) => props.gapMobileM};
};

@media ${device.mobileL}{
  font-size: 0.9em;
  margin: ${(props) => props.marginMobileL};
  gap: ${(props) => props.gapMobileL};
};

@media ${device.tablet}{
  font-size: 0.9em;
  margin: ${(props) => props.marginTablet};
  gap: ${(props) => props.gapTablet};
};

@media ${device.laptop}{
  font-size: 0.9em;
  margin: ${(props) => props.marginLaptop};
  gap: ${(props) => props.gapLaptop};
};

@media ${device.laptopL}{
  font-size: 1em;
  margin: ${(props) => props.marginLaptopL};
  gap: ${(props) => props.gapLaptopL};
};

@media ${device.desktopL}{
  font-size: 2em;
  margin: ${(props) => props.marginDesktopL};
  gap: ${(props) => props.gapDesktopL};
  };


`;

const ContactInfo = forwardRef((props, ref) => {
  return (
    <Container fluid style={{padding:'0px'}}>
       <Section ref={ref} {...props}>
      <ContainerStyle flexDirectionMobileS='column'>
        <Title
          fontSizeDesktopL='80px'
          fontSizeLaptopL='45px'
          fontSizeLaptop='40px'
          fontSizeTablet='35px'
          fontSizeMobileL='35px'
          fontSizeMobileM='30px'
          fontSizeMobileS='25px'
          marginMobileS='20px'
          marginMobileM='20px'
          marginDesktopL='20px'
          marginLaptopL='20px'
          marginLaptop='20px'
          marginTablet='20px'
          marginMobileL='20px'
          textShadow='2px 5px 0 rgba(0,0,0,0.2)'
        >
          Contact
        </Title>
        <ContainerStyle flexDirectionMobileS='row' flexWrap='wrap'>
          <ContainerStyle
            justifyContent='center'
            alignItems='center'
            flexDirectionMobileS='column'
            marginDesktopL='10px'
            marginLaptopL='10px'
            marginLaptop='10px'
            marginTablet='10px'
            marginMobileL='10px'
            marginMobileM='10px'
            marginMobileS='10px'
          >
            <Title
              fontSizeDesktopL='40px'
              fontSizeLaptopL='20px'
              fontSizeLaptop='20px'
              fontSizeTablet='20px'
              fontSizeMobileL='20px'
              fontSizeMobileM='20px'
              fontSizeMobileS='20px'
            >
              Location:
            </Title>
            <Text
              fontSizeDesktopL='30px'
              fontSizeLaptopL='15px'
              fontSizeLaptop='15px'
              fontSizeTablet='15px'
              fontSizeMobileL='15px'
              fontSizeMobileM='15px'
              fontSizeMobileS='15px'
            >
              New York City Metro Area
            </Text>
          </ContainerStyle>
          <ContainerStyle
            flexDirectionMobileS='column'
            justifyContent='center'
            alignItems='center'
            marginDesktopL='10px'
            marginLaptopL='10px'
            marginLaptop='10px'
            marginTablet='10px'
            marginMobileL='10px'
            marginMobileM='10px'
            marginMobileS='10px'
          >
            <Title
              fontSizeDesktopL='40'
              fontSizeLaptopL='20px'
              fontSizeLaptop='20px'
              fontSizeTablet='20px'
              fontSizeMobileL='20px'
              fontSizeMobileM='20px'
              fontSizeMobileS='20px'
            >
              Email:
            </Title>
            <Text
              fontSizeDesktopL='30px'
              fontSizeLaptopL='15px'
              fontSizeLaptop='15px'
              fontSizeTablet='15px'
              fontSizeMobileL='15px'
              fontSizeMobileM='15px'
              fontSizeMobileS='15px'
            >
              <a style={{ color: '#d3d0cb' }} href='mailto:haacny86@gmail.com'>
                haacny86@gmail.com
              </a>
            </Text>
          </ContainerStyle>
        </ContainerStyle>
      </ContainerStyle>
      <ContainerStyle
        flexDirectionMobileS='row'
        marginMobileS='20px'
        marginMobileM='20px'
        marginDesktopL='20px'
        marginLaptopL='20px'
        marginLaptop='20px'
        marginTablet='20px'
        marginMobileL='20px'
        gapDesktopL='50px'
        gapLaptopL='20px'
        gapLaptop='20px'
        gapTablet='20px'
        gapMobileL='20px'
        gapMobileM='20px'
        gapMobileS='20px'
      >
        <a
          href='https://www.linkedin.com/in/hector-agudelo-34aa62119/'
          rel='noreferrer'
          target='_blank'
        >
          <BsLinkedin
            style={{ color: '#d3d0cb' }}
            className='icon'
            size={'1.5em'}
          />
        </a>
        <a
          href='https://github.com/HectorAgudelo'
          rel='noreferrer'
          target='_blank'
        >
          <BsGithub
            style={{ color: '#d3d0cb' }}
            className='icon'
            size={'1.5em'}
          />
        </a>
        <a
          href='https://twitter.com/DevAgudelo'
          rel='noreferrer'
          target='_blank'
        >
          <BsTwitter
            style={{ color: '#d3d0cb' }}
            className='icon'
            size={'1.5em'}
          />
        </a>
      </ContainerStyle>
    </Section>
    </Container>
   
  );
});

ContactInfo.displayName = 'ContactInfo';

export default ContactInfo;
