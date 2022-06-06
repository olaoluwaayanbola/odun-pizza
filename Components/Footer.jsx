import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/pex.jpg" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                <h3 className={styles.motto}>
                    COME AND ENJOY ODUN'S FOOD
                </h3>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        SAINT PATRICK STREET 
                        <br /> LONDON, 7609
                        <br /> (+44) 9909-987
                    </p>
                    <p className={styles.text}>
                         SAINT JOHN STREET .
                        <br /> LANCASHIRE, 44056
                        <br /> (+44) 869-1011
                    </p>
                    <p className={styles.text}>
                        1614 W. Caroll St #125.
                        <br /> NewYork, 85022
                        <br /> (602) 867-1013
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Footer