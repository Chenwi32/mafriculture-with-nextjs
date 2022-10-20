import Image from "next/image";
import Link from "next/link";
import styles from "./compStyles/navigation.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// imports icons for this component
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../libs/stateProvider";

const hamburgerClick = () => {
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  const menu = document.getElementById("links");

  let value = bar1.classList.contains("bar1");

  // This checks if the navbar__collapse and change classes are added to
  // the menu ul if not it should add
  if (value) {
    bar1.classList.remove("bar1");
    bar2.classList.remove("bar2");
    bar3.classList.remove("bar3");
    menu.classList.add("colapse");
  } else {
    bar1.classList.add("bar1");
    bar2.classList.add("bar2");
    bar3.classList.add("bar3");
    menu.classList.remove("colapse");
  }
};

const Navigation = () => {
  const { basket } = useStateValue()[0];
  const imageloader = require("../imageLoader.js");

  return (
    <div className={styles.navigation}>
      <div className={`${styles.nav_container} container flex pd-h nav`}>
        <Link href="/">
          <div className={`${styles.logo_container} flex`}>
            <div className={styles.logo}>
              <Image
                src="logo.jpg"
                width={40}
                height={30}
                loader={imageloader}
                alt="mafriculture logo"
              />
            </div>
            <span className={styles.logo_tex}>MAfriculture</span>
          </div>
        </Link>
        <div
          className={`${styles.links} colapse flex flex-a-c flex-j-r`}
          id="links"
        >
          <Link href="/products">
            <a className={styles.nav_link}>
              <FontAwesomeIcon
                icon={faSearch}
                /* style={{ fontSize: 100, color: "blue" } */
              />
            </a>
          </Link>

          <Link href="/products">
            <a className={styles.nav_link}
              onMouseOver={() => {
                const drop_down = document.getElementById("drop_down");
                if (drop_down.classList.contains('drop_down')) {
                  drop_down.classList.remove("drop_down");
                }
            }}
            
            >Products &#x1F53D;</a>
          </Link>

          <Link href="/products">
            <a className={`${styles.nav_link} btn`}>Contact</a>
          </Link>

          <Link href="/cart">
            <a
              className={`
            ${styles.nav_link} 
            ${styles.cart} 
             flex flex_col flex-a-c`}
            >
              <span>{basket?.length} </span>
              <FontAwesomeIcon
                icon={faCartPlus}
                /* style={{ fontSize: 100, color: "blue" } */
              />
            </a>
          </Link>
        </div>

        <div
          className={`${styles.nav__bar__btn} hide`}
          id="btn"
          onClick={hamburgerClick}
        >
          <div className={`${styles.bar} `} id="bar1"></div>
          <div className={`${styles.bar} `} id="bar2"></div>
          <div className={`${styles.bar}`} id="bar3"></div>
        </div>

        <div className={`${styles.drop_down_menu} drop_down`} id="drop_down"
        >
          <Link href="/products">
            <a className={styles.drop_link}>Ceramics Products</a>
          </Link>

          <Link href="/products">
            <a className={`${styles.drop_link}`}>Wood Products</a>
          </Link>
          <Link href="/products">
            <a className={`${styles.drop_link}`}>Fiber Products</a>
          </Link>
          <Link href="/products">
            <a className={`${styles.drop_link}`}>Plastic Products</a>
          </Link>
          <Link href="/products">
            <a className={`${styles.drop_link}`}>Beats</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
