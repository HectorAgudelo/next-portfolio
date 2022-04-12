import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const Section = styles.div`
display: ${(props) => props.display};
flex-direction: ${(props) => props.flexDirection};
justify-content: ${(props) => props.justifyContent};
background: ${(props) => props.background};
gap: ${(props) => props.gap};

@media ${device.mobileS}{
  background-size: ${(props) => props.backgroundSizeMobileS};;
  height: ${(props) => props.heightMobileS};
  width: ${(props) => props.widthMobileS};
  align-items: ${(props) => props.alignItemsMobileS};
  margin: ${(props) => props.marginMobileS};
  flex-direction: ${(props) => props.flexDirectionMobileS}; 
};

@media ${device.mobileM}{
  margin: ${(props) => props.marginMobileM};
};

@media ${device.mobileL}{
  margin: ${(props) => props.marginMobileL};
};

@media ${device.tablet}{
 margin: ${(props) => props.marginTablet};
 flex-direction: ${(props) => props.flexDirection};
 align-items: ${(props) => props.alignItemsTablet};
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

// const Section = styles.div`
// display: flex;
// flex-direction: ${(props) => props.flexDirection};

// justify-content: center;

// gap: 10px;

// @media ${device.mobileS}{
//   margin: ${(props) => props.marginMobileS};
//   flex-direction: ${(props) => props.flexDirectionMobileS};
//   align-items: ${(props) => props.alignItemsMobileS};
// };

// @media ${device.mobileM}{
//
//
//   align-items: ${(props) => props.alignItemsMobileM};
// };

// @media ${device.mobileL}{
//
//
//   align-items: ${(props) => props.alignItemsMobileL};
// };

// @media ${device.tablet}{
//
//   flex-direction: ${(props) => props.flexDirection};
//   align-items: ${(props) => props.alignItems};
// };

// @media ${device.laptop}{
//   margin: ${(props) => props.marginLaptop};

// };

// @media ${device.laptopL}{
//   margin: ${(props) => props.marginLaptopL};

// };

// @media ${device.desktopL}{
//   margin: ${(props) => props.marginDesktopL};

// };

// `;

// const Section = styles.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.6)), url('/background.module.jpeg');

// @media ${device.mobileS}{
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
//   align-items: center;

// };

// @media ${device.mobileM}{
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
//   align-items: center;
// };

// @media ${device.mobileL}{
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
//   align-items: center;
// };
// =
// @media ${device.tablet}{
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
//   align-items: start;
// };

// @media ${device.laptop}{
//   background-size: cover;
//   height: 100vh;
//   width: 100%;
//   align-items: start;
// };

// @media ${device.laptopL}{

// };

// @media ${device.desktopL}{

// };

// `;
