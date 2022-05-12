import React from 'react'
import styles from '../styles/PizzaCart.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${pizza._id}`}>
        <Image src={pizza.img} width="170" height='170'></Image>
      </Link>
        <h3 className={styles.title}>{pizza.title}</h3>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <p className={styles.description}>
          {pizza.desc}
        </p>
    </div>
  )
}

export default PizzaCard