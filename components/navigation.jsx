import Image from "next/image";
import Link from "next/link";
import styles from "./compStyles/navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <div className={`${styles.nav_container} container flex`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" width={100} height={50} />
          </Link>
        </div>

        <div className={styles.link}>
          <Link href="/products">
            <a className={styles.nav_link}>Products</a>
          </Link>

          <Link href="/products">
            <a className={styles.nav_link}>Cart</a>
          </Link>

          <Link href="/products">
            <a className={`${styles.nav_link} btn`}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
