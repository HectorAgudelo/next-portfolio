import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const Text = styles.p`
text-align: ${(props) => props.textAlign};
margin: ${(props) => props.margin};
gap: 0px;
color: ${(props) => props.color};

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

@media ${device.tablet}{
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