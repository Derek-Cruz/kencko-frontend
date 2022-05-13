import classes from '../styles/Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div className={classes.div}>
      <div>@ 2021, fruit salad inc</div>
      <div><a href="https://www.fruityvice.com/">read me</a></div>
      <div>follow us</div>
      <div>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </div>
  );
}

export default Footer;
