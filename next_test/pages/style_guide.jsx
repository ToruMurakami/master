import Head from 'next/head'
import Helmet from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../style/index.module.scss';


export default function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header />
      <main className={styles.main}>
        <p>スタイルガイドです。</p>
        <section>ここにパーツを作成する。</section>
      </main>

      <Footer />


    </div>
  )
}
