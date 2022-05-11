import React from 'react'
import styles from '../styles/PizzaCart.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/Img/pizza.png' width="170" height='170'></Image>
        <h3 className={styles.title}>FIORI DI ZUCCA</h3>
        <span className={styles.price}>$19.90</span>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet
        </p>
    </div>
  )
}

export default PizzaCard