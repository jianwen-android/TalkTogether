import React from "react";
import aurora from "./Images/aurora.svg";
import preview from "./Images/preview.png";
import styles from "./readingPage.module.css";

export default function Readings() {
  return (
    <body>
      <img src={aurora} id={styles.image2} alt="" />
      <div id={styles.div}>
        <img src={preview} id={styles.preview} alt="" />
        <div id={styles.secondarydiv}>
          <div><h1>假期营于工作坊</h1></div>
          <div id={styles.buttondiv}><button>PINYIN</button></div>
        </div>
      </div>
    </body>
  )
}