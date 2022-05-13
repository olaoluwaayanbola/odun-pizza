import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import react,{useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { productscalc } from '../../redux/cartSlice'



const Products = ({Data}) => {
    const [price, setPrice] = useState(Data.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch()

    const changePrice = (number) => {
      setPrice(price + number);
    };
  
    const HandleSize = (sizeIndex) => {
      const difference = Data.prices[sizeIndex] - Data.prices[size];
      setSize(sizeIndex);
      changePrice(difference);
    };
  
    const HandleChange = (e, option) => {
      const checked = e.target.checked;
      if (checked) {
        changePrice(option.price);
        setExtras((prev) => [...prev, option]);
      } else {
        changePrice(-option.price);
        setExtras(extras.filter((extra) => extra._id !== option._id));
      }
    };
    const handleClick = () => {
      dispatch(productscalc({...Data, extras, price, quantity}));
    };
    // const Data = {
    //     id:1,
    //     img:'/Img/pizza.png',
    //     name:"CAPANGNOLA",
    //     price:[19.1,20.3,25.5],
    //     desc:"Lorem ipsum"
    // }

    // const HandleChange = (ele) => {
    //     setChecked(!checked)
    //     if (!checked) {
    //         HandleSize(prev => state + 1)
    //     }else{

    //     }
    // }
  
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.ImgContainer}>
                <Image src={Data.img} objectFit='contain' layout="fill"></Image>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.title}>{Data.name}</div>
            <span className={styles.price}>{price}</span>
            <span className={styles.desc}>{Data.desc}</span>
            <h3 className={styles.choose}>
                Choose the size
            </h3>
            <div className={styles.sizes}>
                <div className={styles.size}>
                    <Image src='/Img/size.png' layout='fill' alt='' onClick={()=>{HandleSize(0)}}></Image>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size}>
                    <Image src='/Img/size.png' layout='fill' alt='' onClick={()=>{HandleSize(1)}}></Image>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size}>
                    <Image src='/Img/size.png' layout='fill' alt='' onClick={()=>{HandleSize(2)}}></Image>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
                {Data.extraOptions.map(ele =>{
                    return <div className={styles.option} key={ele._id}>
                        <input
                            type="checkbox"
                            name={ele.text}
                            id={ele.text}
                            className={styles.checkbox}
                            onChange={(e) => HandleChange(e,ele)}
                        />
                        <label htmlFor="double">{ele.text}</label>
                    </div>
                })}
            </div>
            <div className={styles.add}>
                <input 
                    type='number'
                    defaultValue='1'
                    className={styles.quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                ></input>
                <button className={styles.button} onClick={handleClick}>Add to cart</button>

            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props: {
        Data: res.data,
      },
    };
  }
export default Products