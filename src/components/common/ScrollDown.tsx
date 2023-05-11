"use client";
import React from "react";
import styles from "./common.module.css";

const ScrollDown = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo(500, 0);
      }}
      className={styles.scroll}
    ></div>
  );
};

export default ScrollDown;
