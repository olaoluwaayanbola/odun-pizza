import React from "react";
import styles from "../styles/Featured.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { globalcontext } from "../contex/theme";
const Featured = () => {
  const { themeState } = useContext(globalcontext);

  const style = {
    backgroundColor: "#d5d5c7",
  };
  const [state, setState] = React.useState(0);
  const SlideData = ["/Img/burg2.png", "/Img/spag.png", "/Img/www.png"];
  const HandleSlide = (id) => {
    if (id == "l") {
      setState(state !== 0 ? state - 1 : 2);
    }
    if (id == "r") {
      setState(state !== 2 ? state + 1 : 0);
    }
  };
  return (
    <div className={styles.Container} style={themeState ? null : style}>
      <div
        className={styles.containerArrow}
        style={{ left: 0 }}
        onClick={() => HandleSlide("l")}
      >
        <Image src="/Img/arrowl.png" alt="" layout="fill"></Image>
      </div>
      <div className={styles.wrapper}>
        {SlideData.map((items, i) => {
          return (
            <div
              className={styles.Imagewrapper}
              key={i}
              style={{ transform: `translate(${-100 * state}vw)` }}
            >
              <Image
                src={items}
                layout="fill"
                alt=""
                objectFit="contain"
              ></Image>
            </div>
          );
        })}
      </div>
      <div
        className={styles.containerArrow}
        style={{ right: 0 }}
        onClick={() => HandleSlide("r")}
      >
        <Image src="/Img/arrowr.png" alt="" layout="fill"></Image>
      </div>
    </div>
  );
};

export default Featured;
