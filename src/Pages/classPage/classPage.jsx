import { useState } from "react";
import React from "react";
import styles from "./classPage.module.css";
import aurora from "../loginPage/Images/aurora.svg";
import con1 from "./Constellation/con1.svg"
import con2 from "./Constellation/con2.svg"

export default function Classes() {
  const [classes, setClases] = useState([
    { name: "S309", colour: "linear-gradient(156.72deg, #584BEA 0%, #18AD90 99.95%)", constellations: con1, alert: true, link: "abd", id: 1},
    { name: "S302", colour: "linear-gradient(156.72deg, #A913DE 15.1%, #E45D10 99.95%)", constellations: con2, alert: false, link: "a3d", id: 2},
    { name: "S401", colour: "linear-gradient(156.72deg, #1EAC90 10.93%, #C242FF 99.95%)", constellations: con1, alert: false, link: "a313f", id: 3},
    { name: "S102", colour: "linear-gradient(135deg, #A913DE 0%, #E6073C 100%)", constellations: con2, alert: true, link: "qr313", id: 4},
    { name: "banana", colour: "linear-gradient(135deg, #5E50F7 0%, #B11BE6 100%)", constellations: con1, alert: false, link: "q4sdf", id: 5},
    { name: "S101", colour: "linear-gradient(135deg, #A913DE 0%, #E6073C 100%)", constellations: con2, alert: false, link: "11sfw", id: 6},
  ]);

  return (
    <body id={styles.bg}>
      <img src={aurora} id={styles.auro} alt="" />
      <div id={styles.container}>
        <div id={styles.classContainer}>
          {classes.sort((a, b) => a.alert < b.alert).map(({id,colour,name,constellations,alert}) => (
            <div id={styles.class} key={id} style={{background: colour}}>
              <div id={styles.alert} style={{
                opacity: alert ? 1 : 0
              }}/>
              <img src={constellations} id={styles.image} alt=""/>
              <a href="/"><h2>
                {name}
              </h2></a>
              <div id={styles.line}/>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
