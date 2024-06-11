// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Category from "../../components/Category";
import './Categories.scss'
import { useParams } from 'react-router-dom';
import Foods from '../Foods';
function Categories() {
    const { name } = useParams();
    return (
        <>
            <div className="container">
                <div className='categories'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={8}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Category />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {name === "foods" && (
                    <Foods />
                )}
            </div>
        </>
    )
}
export default Categories