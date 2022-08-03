import Head from 'next/head'
import Helmet from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';

function sub_page() {
    return (
        <div className="container">
            <Helmet>
                <title>sub_page</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
            <Header />
            <div>
                <p>下層ページです</p>
            </div>
            <Footer />
        </div>
        );
}
export default sub_page;
