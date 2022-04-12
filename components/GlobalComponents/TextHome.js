import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const TextHome = styles.h3`
display: ${(props) => props.display};
gap: ${(props) => props.gap};
color: ${(props) => props.color};

@media ${device.mobileS}{
    font-size: ${(props) => props.fontSizeMobileS};
    margin: ${(props) => props.marginMobileS};
};

@media ${device.mobileM}{
   

};

@media ${device.mobileL}{  
  margin: ${(props) => props.marginMobileL};
};

@media ${device.tablet}{
    margin: ${(props) => props.marginTablet};
};

@media ${device.laptop}{    
    margin: ${(props) => props.marginLaptop};
};
  
@media ${device.laptopL}{ 
    margin: ${(props) => props.marginLaptopL};
  };

  @media ${device.desktopL}{
    font-size: ${(props) => props.fontSizeDesktopL};
    margin: ${(props) => props.marginDesktopL};
  };

`;

// export const Text = styles.h3`
// display: inline-flex;
// gap: 8px;
// color: #393E41 !important;

// @media ${device.mobileS}{
//   font-size: 20px;
//   margin: 4px 0px;
// };

// @media ${device.mobileM}{
//   font-size: 20px;

// };

// @media ${device.mobileL}{
//   font-size: 20px;
//   margin: 4px 60px;
// };

// @media ${device.tablet}{
//   font-size: 20px;
//   margin: 4px 80px;
// };

// @media ${device.laptop}{
//   font-size: 20px;
//   margin: 4px 100px;
// };
  
// @media ${device.laptopL}{
//     font-size: 20px;
//     margin: 4px 200px;
//   };

//   @media ${device.desktopL}{
//   font-size: 40px;
//   margin: 4px 400px;
//   };

// `;
