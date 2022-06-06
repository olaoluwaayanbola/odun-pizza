import React from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { globalcontext } from '../contex/theme'
import { useContext } from 'react'
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const {themeState,toggle} = useContext(globalcontext)
    const style={
        white:{
            backgroundColor:"#d5d5c7",
            color:"black"
        },
        x:{
            color:"black"   
        }
    }
  return (
    <div className={styles.conatainer} style={ themeState ?null:style.white}>
        <div className={styles.items}>
            <div className={styles.callButton}> 
                <Image src='/Img/telephone.png' alt='' width="32" height="32" ></Image>
            </div>
            <div className={styles.text} >
                <div className={styles.text}>Call to order Now <span className={styles.exclamation}>!</span></div>
                <div className={styles.text}>+1293256</div>
            </div>
        </div>
        <div className={styles.items}>
            {/* <nav class="navbar">
                <div class="navbar-container container">
                    <input type="checkbox" name="" id=""/>
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items">
                        <li className={styles.listItems}>Menue</li>
                        <h1 className={styles.header}>ODUN PIZZA</h1>
                        <li className={styles.listItems}>Events</li>
                        <li className={styles.listItems}>Blogs</li>
                        <li className={styles.listItems}>Contacts</li>
                    </ul>
                    <h1 class="logo">RS</h1>
                </div>
            </nav> */}
            <ul className={styles.list} style={ themeState ?null:style.x}>
                <Link href='/'>
                    <li className={styles.listItems}>HomePage</li>
                </Link>
                <li className={styles.listItems}>Menue</li>
                <h1 className={styles.header}>ODUN's FOOD</h1>
                
                <li className={styles.listItems}>Blogs</li>
                <li className={styles.listItems}>Contacts</li>
            </ul>
        </div>
        <div className={styles.items}>
           <Link href='/cart'>
                <div className={styles.cart}>
                    <Image src={themeState ?'/Img/cart.png':'/Img/black.png'} alt='' width="30px" height="30px" ></Image>
                    <div className={styles.counter}>
                        {quantity}
                    </div>            
                </div>
           </Link>
           <div class={styles.Toogle} >
                <label class={styles.switch} >
                    <input type="checkbox" onClick={toggle}/>
                    <span class={styles.slider} id={styles.round}></span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Navbar