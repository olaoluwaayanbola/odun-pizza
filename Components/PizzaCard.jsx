import React from "react";
import styles from "../styles/PizzaCart.module.css";
import Image from "next/image";
import Link from "next/link";
import { globalcontext } from "../contex/theme";
import { useContext } from "react";

const PizzaCard = ({ pizza }) => {
  const { themeState, toggle } = useContext(globalcontext);
  const style = {
    black: { color: "black" },
    white: { color: " whitesmoke" },
    price: { color: "rgb(246, 246, 246)" },
  };
  return (
    <div
      className={styles.container}
      style={themeState ? style.white : style.black}
    >
      <Link href={`/products/${pizza._id}`} passHref>
        <div className="linkContain">
          <Image
            src={pizza.img}
            width="200"
            height="200"
            objectFit="contain"
            alt=""
          ></Image>

          <h3 className={styles.title}>{pizza.title}</h3>
          <span
            className={styles.price}
            style={themeState ? style.price : style.black}
          >
            ${pizza.prices[0]}
          </span>
          <p className={styles.description}>{pizza.desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default PizzaCard;
