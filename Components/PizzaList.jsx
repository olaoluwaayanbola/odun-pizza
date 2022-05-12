import React from 'react'
import styles from '../styles/Pizzalist.module.css'
import PizzaCard from './PizzaCard'
import Link from 'next/link'
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Best Pizza Place
        </h1>
        <p className={styles.description}>
          lorem ipsum
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
    </div> 
  )
}

export default PizzaList


