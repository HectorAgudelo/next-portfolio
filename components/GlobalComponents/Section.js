import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const Section = styles.div`
display: ${(props) => props.display};
flex-direction: ${(props) => props.flexDirection};
justify-content: ${(props) => props.justifyContent};
background: ${(props) => props.background};
gap: ${(props) => props.gap};
align-items:  ${(props) => props.alignItems};


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

