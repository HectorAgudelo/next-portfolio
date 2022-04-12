import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const ContainerStyle = styles.div`
display: ${(props) => props.display};
flex-direction: ${(props) => props.flexDirection};
align-items:  ${(props) => props.alignItems};
justify-content: ${(props) => props.justifyContent};

@media ${device.mobileS}{
  font-size: ${(props) => props.fontSizeMobileS};
  margin: ${(props) => props.marginMobileS};
  gap: ${(props) => props.gapMobileS};
  height: ${(props) => props.heightMobileS};
  width: ${(props) => props.widthMobileS};
};

@media ${device.mobileM}{
    font-size: ${(props) => props.fontSizeMobileM};
    gap: ${(props) => props.gapMobileM};
};

@media ${device.mobileL}{



};

@media ${device.tablet}{
  margin: ${(props) => props.marginTablet};
};

@media ${device.laptop}{
  margin: ${(props) => props.marginLaptop};
  gap: ${(props) => props.gapLaptop};
};

@media ${device.laptopL}{
  font-size: ${(props) => props.fontSizeLaptopL};
  margin: ${(props) => props.marginLaptopL};
  gap: ${(props) => props.gapLaptopL};
};

@media ${device.desktopL}{
  font-size: ${(props) => props.fontSizeDesktopL};
  margin: ${(props) => props.marginDesktopL};
  };

`;

