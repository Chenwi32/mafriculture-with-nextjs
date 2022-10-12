import Image from "next/image";
import Link from "next/link";
import styles from "./compStyles/navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// imports icons for this component
import {
  faSearch,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import imageLoader from "../imageLoader";


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={`${styles.nav_container} container flex`}>
        <Link href="/">
          <div className={`${styles.logo_container} flex`}>
            <div className={styles.logo}>
              <Image src="/logo.png" width={40} height={30} loader={imageLoader } />
            </div>
            <span className={styles.logo_tex}>MAfriculture</span>
          </div>
        </Link>
        <div className={styles.link}>
          <Link href="/products">
            <a className={styles.nav_link}>
              <FontAwesomeIcon
                icon={faSearch}
                /* style={{ fontSize: 100, color: "blue" } */
              />
            </a>
          </Link>

          <Link href="/products">
            <a className={styles.nav_link}>Products</a>
          </Link>

          <Link href="/products">
            <a className={`${styles.nav_link} btn`}>Contact</a>
          </Link>

          <Link href="/products">
            <a className={'/* styles.nav_link */'}>
              <FontAwesomeIcon
                icon={faCartPlus}
                /* style={{ fontSize: 100, color: "blue" } */
              />
              
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
