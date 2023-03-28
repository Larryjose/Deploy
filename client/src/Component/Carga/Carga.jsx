import React from "react";
import style from "./Carga.module.css";

const Carga = () => {
  return (
    <div className={style.body}>
      <div className={style.contain}>
        <div className={style.pacman}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
        <div className={style.path}></div>
      </div>
    </div>
  );
};

export default Carga;
