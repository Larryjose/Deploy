import React from "react";
import fondoAbout from "../../assets/fondoAbout.jpg";
import style from "./About.module.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className={style.contain}>
      <img src={fondoAbout} alt="fondo" className={style.fondo} />
      <div className={style.p}>
        <p>Proyecto individual (PI)</p>
      </div>
      <div className={style.button}>
        <Link to="/">
          <button className={style.but}>Home</button>
        </Link>
      </div>

      <div className={style.body}>
        <div className={style.containPacman}>
          <div className={style.pacman}></div>
          {/* <div className={style.path}></div>
          <div className={style.path}></div>
          <div className={style.path}></div>
          <div className={style.path}></div>
          <div className={style.path}></div>
          <div className={style.path}></div>
          <div className={style.path}></div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
