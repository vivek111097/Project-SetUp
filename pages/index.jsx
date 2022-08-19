import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Layout/Header_component'
import styles from '../styles/Home.module.css'

const Index = () => {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  )
}

export default Index


