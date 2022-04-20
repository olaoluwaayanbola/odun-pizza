import styles from '../styles/cart.module.css'
import Image from 'next/image'

const cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.trTitle} >
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.IMGContainer}>
                            <Image src='/Img/Pizza.png' objectFit='cover' alt="" layout='fill'/>
                        </div>
                    </td>
                    <td className={styles.name}>
                        Big pie
                    </td>
                    <td>
                        <span className={styles.Extra}>
                            Double Ingredients Spicy Sauce
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>
                            $19.90
                        </span>
                    </td>
                    <td>
                        <span className={styles.quantity}>
                            2
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>
                            $39.80
                        </span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${cart.total}
                </div>
                <div className={styles.paymentMethods}>
                    <button>
                        CASH ON DELIVERY
                    </button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default cart