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
      <div className={classes.footerDivOne}>
        <div>@ 2021, fruit salad inc.</div>
        <div><a href="https://www.fruityvice.com/" className={classes.a}>read me</a></div>
      </div>
      <div className={classes.footerDivTwo}>
        <div>follow us</div>
        <div className={classes.divTwo}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
