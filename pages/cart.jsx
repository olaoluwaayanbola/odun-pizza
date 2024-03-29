import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useState } from "react";
import { useRouter } from "next/router";
import { clear } from "../redux/cartSlice";
import axios from "axios";
import { globalcontext } from "../contex/theme";
import { useContext } from "react";

const Cart = () => {
  const dispatch = useDispatch;
  const selector = useSelector((state) => state.cart);
  const [stateCheck, setCheckout] = useState(false);
  const amount = selector.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();
  const { themeState } = useContext(globalcontext);

  const styleb = {
    white: {
      backgroundColor: "#d7d7d7",
      color: "rgb(27, 27, 29)",
    },
    black: {
      color: "rgb(59, 55, 55)",
    },
  };
  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 200) {
        dispatch(clear());
        router.push(`/order/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    // useEffect(() => {
    //   dispatch({
    //     type: "resetOptions",
    //     value: {
    //       ...options,
    //       currency: currency,
    //     },
    //   });
    // }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
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
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <div className={styles.container} style={themeState ? null : styleb.white}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitles}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          {console.log(selector.products)}
          {selector.products.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.tr}>
                <td>
                  <div className={styles.IMGContainer}>
                    <Image
                      src={product.img}
                      objectFit="cover"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </td>
                <td className={styles.name}>{product.title}</td>
                <td>
                  {console.log(product.extras)}
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </td>
                <td>
                  <span className={styles.price}>{product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
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
          {stateCheck ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AX7nGBVUSpieXGMWhnctShaUfkJo-Zd07kv2GH3SgcCHxYedSqi4EcROOvJw_dnNH8PHAzPJBVrlfMd8",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setCheckout(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
