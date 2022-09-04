import React from 'react'
import styles from "./index.module.css"
import Header from "../Header"
function index() {
  return (
    <div className={`${styles.hero} h-[40vh] sm:h-[70vh] lg:h-[100vh]`}>

        <Header theme="light" position={'sticky'}/>
        <img src="/assets/hero.jpg" alt="interview" />
    </div>
  )
}

export default index