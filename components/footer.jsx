import styles from "./compStyles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className={`container flex flex-j-sb flex-a-c ${styles.footer_container}`}>
        <div className={`flex  flex-j-sb  ${styles.footer_left}`}>
          <p>
            <small>
              Copyright &#x00A9; MAfriculture<sup>&#x00AE;</sup> 2022{" "}
            </small>
            | <small>All rights reserved</small>
          </p>

          <div className={`flex flex-a-c  ${styles.footer_left_links}`}>
            <Link href="">
              <a className="mg-r">
                <small>Terms & Conditions</small>
              </a>
            </Link>

            <Link href="">
              <a>
                <small>Privacy Policy</small>
              </a>
            </Link>
          </div>
        </div>

        <div className={` flex flex-a-t  flex_col mg-s-b pd-s-v ${styles.social}`}>
          <small className="mg-s-b">Follow us</small>

          <div className="flex flex-a-c ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/MAfriculture"
              className={` mg-r ${styles.link}`}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/mafriculture/"
              className={`mg-r ${styles.link}`}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ChenwiEugene"
              className={`mg-r ${styles.link}`}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pinterest.com/mafriculture/"
              className={`mg-r ${styles.link}`}
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
          <a
            href="https://wa.me/237655078817"
            target="_blank"
            rel="noopener noreferrer"
            className={` ${styles.link} ${styles.whatsapp}`}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
