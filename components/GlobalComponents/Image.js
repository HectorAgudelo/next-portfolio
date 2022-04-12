import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const Image = styles.img`

@media ${device.mobileS}{
  margin: 0px;
  height: 300px;
  
};

@media ${device.mobileM}{

  height: 350px;
 
};

@media ${device.mobileL}{

  height: 400px;

};

@media ${device.tablet}{

  height: 350px;

};

@media ${device.laptop}{

  height: 400px;

};

@media ${device.laptopL}{

  height: 400px;

};

@media ${device.desktopL}{

  height: 800px;

};


`;
