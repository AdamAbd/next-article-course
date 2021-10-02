import React from "react";

import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {props.children}
        </main>
      </div>
    </div>
  );
}
