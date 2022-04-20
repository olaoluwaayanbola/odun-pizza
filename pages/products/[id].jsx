import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import react,{useState} from 'react'
const Products = (src) => {
    const [state,setState] = useState(0)

    const Data = {
        id:1,
        img:'/Img/pizza.png',
        name:"CAPANGNOLA",
        price:[19.1,20.3,25.5],
        desc:"Lorem ipsum"
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.ImgContainer}>
                <Image src={Data.img} objectFit='contain' layout="fill"></Image>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.title}>{Data.name}</div>
            <span className={styles.price}>{Data.price[state]}</span>
            <span className={styles.desc}>{Data.desc}</span>
            <h3 className={styles.choose}>
                Choose the size
            </h3>
            <div className={styles.sizes}>
                <div className={styles.size}>
                    <Image src='/Img/size.png' layout='fill' alt='' onClick={()=>{setState(0)}}></Image>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size}>
                    <Image src='/Img/size.png' layout='fill' alt='' onClick={()=>{setState(1)}}></Image>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size}>
                    <Image src='/Img/size.png' layout='fill' alt='' onClick={()=>{setState(2)}}></Image>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input
                        type="checkbox"
                        name='double'
                        id='double'
                        className={styles.checkbox}
                    />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input
                        type="checkbox"
                        name='ExtraCheese'
                        id='ExtraCheese'
                        className={styles.checkbox}
                    />
                    <label htmlFor="ExtraCheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input
                        type="checkbox"
                        name='SpicySauce'
                        id='SpicySauce'
                        className={styles.checkbox}
                    />
                    <label htmlFor="SpicySauce">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input
                        type="checkbox"
                        name='GarlicSauce'
                        id='GarlicSauce'
                        className={styles.checkbox}
                    />
                    <label htmlFor="GarlicSauce">Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add}>
                <input 
                    type='number'
                    defaultValue='1'
                    className={styles.quantity}
                ></input>
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Products