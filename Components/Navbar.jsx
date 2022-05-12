import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
  return (
    <div className={styles.conatainer}>
        <div className={styles.items}>
            <div className={styles.callButton}>
                <Image src='/Img/telephone.png' alt='' width="32" height="32" ></Image>
            </div>
            <div className={styles.text}>
                <div className={styles.text}>Order Now!</div>
                <div className={styles.text}>090 393 240</div>
            </div>
        </div>
        <div className={styles.items}>
            <ul className={styles.list}>
                <Link href='/'>
                    <li className={styles.listItems}>HomePage</li>
                </Link>
                <Link href='/products/989'>
                    <li className={styles.listItems}>Product</li>
                </Link>
                <li className={styles.listItems}>Menue</li>
                <h1 className={styles.header}>ODUN PIZZA</h1>
                <li className={styles.listItems}>Events</li>
                <li className={styles.listItems}>Blogs</li>
                <li className={styles.listItems}>Contacts</li>
            </ul>
        </div>
        <div className={styles.items}>
            <div className={styles.cart}>
                <Image src='/Img/cart.png' alt='' width="30px" height="30px"></Image>
            <div className={styles.counter}>
                {quantity}
            </div>            
            </div>
        </div>
    </div>
  )
}

export default Navbar