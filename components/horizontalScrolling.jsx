
import React, {useEffect} from "react";
import styles from "./compStyles/horizontalScrolling.module.css";





const HorizontalScrolling = () => {





  return (
    <div className={` container `}>
          <div className={` ${styles.h_scrolling} `}
          id='scroll_container'>
        <div className={styles.scroll_item}></div>
        <div className={styles.scroll_item}></div>
        <div className={styles.scroll_item}></div>
        <div className={styles.scroll_item}></div>
        <div className={styles.scroll_item}></div>
        <div className={styles.scroll_item}></div>
        <div className={styles.scroll_item}></div>
      </div>
    </div>
  );
};


export default HorizontalScrolling;

