import styles from 'styled-components';
import { device } from '../DeviceScreens';

export const Image = styles.img`

@media ${device.mobileS}{
  margin: 0px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px; 
  opacity: 0.9
  
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
