import Link from 'next/link';
import styles from '../style/index.module.scss';

function Header() {
    return (
        <header>
            <h1 className={styles.title}>サイト名です</h1>
            <menu>HeaderMenu：
                <Link href="/"><a>トップ</a></Link>｜
                <Link href="/sub_page"><a>下層ページ</a></Link>｜

                <Link href="/corporate"><a>コーポレートページ</a></Link>｜
                {process.env.NEXT_PUBLIC_ENV === 'dev' ? (<>
                    <Link href="/verification"><a>モーダル・スライダー</a></Link>｜
                    <Link href="/style_guide"><a>スタイルガイド</a></Link>｜
                </>) : (<></>)}
            </menu>
        </header>);
}

export default Header;