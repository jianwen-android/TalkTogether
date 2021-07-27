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
          <div style={{flex: 6}}><h1>假期营于工作坊</h1></div>
          <div id={styles.buttondiv2}>
            <button>Sound</button>
            <button>Dict</button>
            <button>PINYIN</button>
          </div>
        </div>
        <div id={styles.othersecondarydiv}>
          <h2>
            问题一：...?
          </h2>
          <text>
            我不会考虑现在创业。

            首先，创业需要一笔资金。我现在是名学生，没有多少储蓄。我的家庭也属于小康之家，要筹一笔钱创业相当不容易。

            其次，作为学生，学业已经非常繁忙了。如果又要兼顾生意，我觉得两边都会做不好。与其一边创业，一边读书，不如好好搞好学业。学成后，才有能力成功创业。

            最后，我觉得创业有一定的风险，必须有清醒的头脑和敏捷的思维。我年纪还小，思想不够成熟，很多事情都考虑得不够周到，所以我觉得现在不够资格创业。
            
            因此，即使现在有机会创业，我也不会考虑。
          </text>
        </div>
      </div>
    </body>
  )
}