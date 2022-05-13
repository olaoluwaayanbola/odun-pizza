import styles from '../styles/cart.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useState } from 'react';

const cart = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.cart)
    const [stateCheck,setCheckout] = useState(false)
    const amount = "2";
    const currency = "USD";
    const style = {"layout":"vertical"};
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);
    
    
        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log(details)
            });
          }}
                />
            </>
        );
    }
    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle} >
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </tbody>
                {selector.products.map(product => (
                    <tbody>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.IMGContainer}>
                                    <Image src='/Img/Pizza.png' objectFit='cover' alt="" layout='fill'/>
                                </div>
                            </td>
                            <td className={styles.name}>
                                {product.title}
                            </td>
                            <td>
                                {console.log(product.extras)}
                                {product.extras.map((extra) => (
                                    <span key={extra._id}>{extra.text}, </span>
                                ))}
                            </td>
                            <td>
                                <span className={styles.price}>
                                    {product.price}
                                </span>
                            </td>
                            <td>
                                <span className={styles.quantity}>
                                    {product.quantity}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>
                                    ${product.price * product.quantity}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>${selector.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${selector.total}
                </div>
                {stateCheck ? 
                    (
                        <div className={styles.paymentMethods}>
                            <button
                                className={styles.payButton}
                                onClick={() => setCash(true)}
                            >
                                CASH ON DELIVERY
                            </button>
                            <PayPalScriptProvider
                                options={{
                                    "client-id": "AX7nGBVUSpieXGMWhnctShaUfkJo-Zd07kv2GH3SgcCHxYedSqi4EcROOvJw_dnNH8PHAzPJBVrlfMd8",
                                    components: "buttons",
                                    currency: "USD",
                                    "disable-funding": "credit,card,p24"
                                }}
                            >
                                <ButtonWrapper
                                    currency={currency}
                                    showSpinner={false}
                                />
                            </PayPalScriptProvider>
                        </div>
                    ) 
                    : 
                    (
                        <button onClick={() => setCheckout(true)} className={styles.button}>
                            CHECKOUT NOW!
                        </button>
                    )
                    }
                </div>
            </div>
        </div>
  )
}

export default cart