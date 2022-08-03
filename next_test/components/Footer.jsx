import Link from 'next/link';

function Footer() {
    return (
        <footer>
            <menu>FooterMenu：
                <Link href="/"><a>トップ</a></Link>｜
                <Link href="/sub_page"><a>下層ページ</a></Link>｜
                <Link href="/corporate"><a>コーポレートページ</a></Link>｜
                {process.env.NEXT_PUBLIC_ENV === 'dev' ? (<>
                    <Link href="/verification"><a>モーダル・スライダー</a></Link>｜
                    <Link href="/style_guide"><a>スタイルガイド</a></Link>｜
                </>) : (<></>)}
            </menu>
        </footer>);
}

export default Footer;