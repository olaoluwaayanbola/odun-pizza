import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import Featured from '../Components/Featured'
import PizzaList from '../Components/PizzaList'
import axios from 'axios'
import { useState } from 'react'

export default function Home({pizzaList}) {
  const [state,setState] = useState(true)
  function handleClick() {
    setState(!state)
  } 
  console.log(state)
  return (
    <div className={styles.container}>
      <Head>
        <title>Odun Pizza App</title>
        <meta name="description" content="Best Pizza app in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured></Featured>
      <PizzaList pizzaList = {pizzaList} state={state} handleClick={handleClick}> </PizzaList>
    </div>
  )
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};

