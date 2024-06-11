import './Home.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ComboItem from '../../components/ComboItem';
function Home() {
    return (
        <>
            <section className="main-image">
                <img src="https://cdn.lotteria.vn/media/banner/b/a/banner_web_kimchi.jpg" alt="" />
            </section>
            <div className="icon-fixed">
                <a href="/">
                    <img src="https://www.lotteria.vn/grs-static/images/icon-staff.svg" alt="" />
                </a>
            </div>
            <main className="main">
                <div className="container">
                    <div className="top-highlight">
                        <div className="top-highlight_menu">
                            <a className="top-highlight_item-1" href="/">
                                <span>BESTSELLER</span>
                            </a>
                            <a className="top-highlight_item-2" href="/">
                                <span>Đặt hàng</span>
                            </a>
                            <a className="top-highlight_item-3" href="/">
                                <span>Khuyến mãi</span>
                            </a>
                            <a className="top-highlight_item-4" href="/">
                                <span>Cửa hàng</span>
                            </a>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="head-title">
                            <span>Ưu đãi đặc biệt</span>
                            <a className="view-all" href="/">Xem tất cả →</a>
                        </h2>
                        <div className="highlight-products">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                slidesPerView={3}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <ComboItem />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="head-title">
                            <span>Tin tức</span>
                            <a className="view-all" href="/">Xem tất cả →</a>
                        </h2>
                        <div className="news">
                            <a className="news_item" href="/">
                                <img src="https://cdn.lotteria.vn/media/mageplaza/blog/post/resize/353x208/o/v/over_h_i_2.jpg" alt="ảnh" />
                                <div className="news_content">
                                    <span className="news_item-title">
                                        LỄ HỘI RỘN RÀNG - COMBO 2 NGƯỜI CHỈ 99.000
                                    </span>
                                    <span className="news_date">
                                        31/03/2024
                                    </span>
                                    <span className="news_readmore">
                                        Xem thêm
                                    </span>
                                </div>
                            </a>
                            <a className="news_item" href="/">
                                <img src="https://cdn.lotteria.vn/media/mageplaza/blog/post/resize/353x208/z/a/zalo_oa_b_nh_chi_n2-01.jpg" alt="ảnh" />
                                <div className="news_content">
                                    <span className="news_item-title">
                                        BÁNH "NÓNG" CHO MÙA ĐÔNG
                                    </span>
                                    <span className="news_date">
                                        14/12/2023
                                    </span>
                                    <span className="news_readmore">
                                        Xem thêm
                                    </span>
                                </div>
                            </a>
                            <a className="news_item" href="/">
                                <img src="https://cdn.lotteria.vn/media/mageplaza/blog/post/resize/353x208/p/i/pizza_teriyaki-01.jpg" alt="ảnh" />
                                <div className="news_content">
                                    <span className="news_item-title">
                                        CHICKEN TERIYAKI PIZZA
                                    </span>
                                    <span className="news_date">
                                        01/08/2023
                                    </span>
                                    <span className="news_readmore">
                                        Xem thêm
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home