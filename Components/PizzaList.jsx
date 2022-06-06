import React from 'react'
import styles from '../styles/Pizzalist.module.scss'
import PizzaCard from './PizzaCard'
import Link from 'next/link'
import { globalcontext } from '../contex/theme'
import { useContext } from 'react'
const PizzaList = ({pizzaList}) => {
  const {themeState,toggle} = useContext(globalcontext)
  const style= {
    white:{
      backgroundColor:"#d7d7d7",
      color:"rgb(27, 27, 29)"
    },
    black:{
      color:"azure"
    }
  }
  return (
    <div className={styles.container} style={ themeState ?null:style.white}>
        <h1 className={styles.title}>
            WELCOME TO ODUN'S
        </h1>
        <p className={styles.description} style={ themeState ?style.black:style.white}>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
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


