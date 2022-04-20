import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import Featured from '../Components/Featured'
import PizzaList from '../Components/PizzaList'
export default function Home({propsData}) {
  return (
    <div className={styles.container}>
      {console.log(propsData)}
      <Head>
        <title>Odun Pizza App</title>
        <meta name="description" content="Best Pizza app in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Link href="./post/Firstpost">
          <a>Firstpost</a>
      </Link> */}
      <Featured></Featured>
      <PizzaList data = {propsData}> </PizzaList>
    </div>
  )
}
export  async function serverSideProps(){
  const res = await axios.get("http://localhost:3000\api\products")
  return({
    propsData:res.data
  })
}
