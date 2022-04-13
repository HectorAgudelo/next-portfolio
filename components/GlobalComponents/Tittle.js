import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const Title = styles.h1`
margin: ${(props) => props.margin} ;
color: ${(props) => props.color};
text-align: ${(props) => props.titleAlign};
text-shadow: ${(props) => props.textShadow};

@media ${device.mobileS}{
    font-size: ${(props) => props.fontSizeMobileS};
    margin: ${(props) => props.marginMobileS};
};

@media ${device.mobileM}{
    font-Size: ${(props) => props.fontSizeMobileM};
    margin: ${(props) => props.marginMobileM} ;
};

@media ${device.mobileL}{
    font-Size: ${(props) => props.fontSizeMobileL};
    margin: ${(props) => props.marginMobileL};
};

@media ${device.tablet}{
    font-size: ${(props) => props.fontSizeTablet};
    margin: ${(props) => props.marginTablet};
};

@media ${device.laptop}{
    font-size: ${(props) => props.fontSizeLaptop};
  margin: ${(props) => props.marginLaptop};
};

@media ${device.laptopL}{
    font-size: ${(props) => props.fontSizeLaptopL};
    margin: ${(props) => props.marginLaptopL};
};

@media ${device.desktopL}{
    font-size: ${(props) => props.fontSizeDesktopL};
    margin: ${(props) => props.marginDesktopL};
};



`;

// const Title = styles.h1`

// color: #393E41;

// @media ${device.mobileS}{
//   font-size: 25px;
//   margin: 4px 0px;
// };

// @media ${device.mobileM}{


// };

// @media ${device.mobileL}{

//   margin: 4px 60px;
// };

// @media ${device.tablet}{
//   font-size: 30px;
//   margin: 4px 80px;
// };

// @media ${device.laptop}{
//   font-size: 35px;
//   margin: 4px 100px;
// };

// @media ${device.laptopL}{
//   font-size: 40px;
//   margin: 4px 200px;
// };

// @media ${device.desktopL}{
// font-size: 80px;
// margin: 4px 400px;
// };



// `;
