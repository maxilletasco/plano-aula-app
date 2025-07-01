'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
  fetch("http://localhost:3001/ping")
    .then(res => res.text())
    .then(data => console.log("Resposta:", data));
}, []);


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Main Page
      </main>
    </div>
  );
}
