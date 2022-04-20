import React from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'

const Featured = () => {
  const [state,setState] = React.useState(0)
  const SlideData = [
    '/Img/featured.png',
    '/Img/featured2.png',
    '/Img/featured3.png'
  ]
  const HandleSlide = (id)=>{
    if (id == 'l') {
      setState(state !== 0?state-1: 2 )
    }
    if (id == 'r') {
      setState(state !== 2?state+1: 0 )
    }
  }
  return (
    <div className={styles.Container} >
        <div className={styles.containerArrow} style = {{left:0}} onClick={()=>HandleSlide("l")} >
          <Image src='/Img/arrowl.png' alt='' layout='fill'></Image>
        </div>
            <div className={styles.wrapper} >
            {SlideData.map((items,i)=>{
              return(
              <div className={styles.Imagewrapper} key={i} style={{transform:`translate(${-100*state}vw)`}}>
                <Image src={items} layout='fill' objectFit='contain'></Image>
              </div>)
            })}  
            </div> 
        <div className={styles.containerArrow} style = {{right:0}} onClick={()=>HandleSlide("r")}>
          <Image src='/Img/arrowr.png' alt='' layout='fill'></Image>
        </div>
    </div>
  )
}

export default Featured