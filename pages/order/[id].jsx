import React from 'react'
import styles from '../../styles/order.module.css'
import Image from 'next/image'
// hkNTGDn7DPVegc--MongoDb authorization
const Order = () => {
    const state = 0
    const statusClass = (index)=>{
       if(index - state < 1) return styles.done
       if(index - state === 1) return styles.inProgress
       if(index - state > 1)return styles.undone
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr  className={styles.tr} >
                        <td className={styles.id}>
                            123456
                        </td>
                        <td>
                            <span className={styles.name}>
                                Tom hardy
                            </span>
                        </td>
                        <td>
                            <span className={styles.adress}>
                                No 2 Elton john streets
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                $39.80
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt="" />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image
                            className={styles.checkedIcon}
                            src="/img/checked.png"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" width={30} height={30} alt="" />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image
                            className={styles.checkedIcon}
                            src="/img/checked.png"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" width={30} height={30} alt="" />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image
                            className={styles.checkedIcon}
                            src="/img/checked.png"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/Delivered.png" width={30} height={30} alt="" />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image
                            className={styles.checkedIcon}
                            src="/img/checked.png"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$
                </div>
                <div className={styles.paymentMethods}>
                    <button disabled className={styles.button}>
                       Paid
                    </button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Order