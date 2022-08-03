import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../style/index.module.scss';

export default function Post() {
    const router = useRouter();
    const { slug } = router.query;
    //API呼び出し
    const [data, setData] = useState([]);
    useEffect(() => {
        //現在のURL(パス)を取得
        const url = window.location.pathname;
        //現在のURL(パス)から投稿IDを取得
        const postId = url.split("/")[2];
        console.log(postId);
        fetch('https://www.next-doorrr.com/knowledge-box/wp-json/wp/v2/posts?slug=' + postId)
            .then(res => res.json())
            .then(json => {
                setData(json);
                console.log(json);
            });

    }, []);
    console.log(slug);

    return (
        <div className="container">
            <Header />
            <main className={styles.main}>

                {data?.length > 0 ? (<>
                    <h2>{"カテ1-1：" + data[0].title.rendered}</h2>
                    <p>WordPressAPIでスラッグ検索して該当のデータを絞った状態で表示</p>
                    <div className="grid">
                        {data[0].content.rendered}
                    </div></>) : (<>データ読込中</>)}
                <Link href={"/corporate/" + slug + "/test"}>
                    <button>詳細へ</button>
                </Link>
            </main >

            <Footer />
        </div>);
}