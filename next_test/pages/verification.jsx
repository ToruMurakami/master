import Head from 'next/head'
import React, { useEffect } from 'react';
import Helmet from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// デフォルトのテーマ
import '@splidejs/react-splide/css';

// または、ほかのテーマ
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// あるいは、コアスタイルのみ
import '@splidejs/react-splide/css/core';

function verification() {
    useEffect(() => {
        //modal jsを読み込む
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, []);
    return (
        <div className="container">
            <Helmet>
                <title>verification_page</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
            <Header />
            <div>
                <p>技術検証ページです</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <Splide aria-label="お気に入りの写真">
                    <SplideSlide>
                        <img src="/img/image2.jpg" alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/img/image2.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/img/image2.jpg" alt="Image 3" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/img/image2.jpg" alt="Image 4" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/img/image2.jpg" alt="Image 5" />
                    </SplideSlide>
                </Splide>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default verification;
