import { useRouter } from 'next/router';
import Link from 'next/link';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../style/index.module.scss';

export default function Post() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className="container">
            <Header />
            <main className={styles.main}>
                <h2>カテ1-1-1：詳細ページ</h2>
                <p>ここでもWordPressAPIを実行する。カテゴリ検索になる？</p>
            </main >

            <Footer />
        </div>);
}