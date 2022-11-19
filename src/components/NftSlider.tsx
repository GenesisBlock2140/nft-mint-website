import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

import NftCard from './NftCard'

const NftSlider = () => {
  return (
    <>
      <div className='nftslider-box'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{640: {
            slidesPerView: 3,
            spaceBetween: 20
          }}}
        >
          <SwiperSlide><NftCard url='https://img.seadn.io/files/8f019e788e80b2344c559eb4d23ae2ba.png?fit=max&w=350' /></SwiperSlide>
          <SwiperSlide><NftCard url='https://img.seadn.io/files/ac7a8a3ea5c4a2a6789f79a40a42c000.png?fit=max&w=350' /></SwiperSlide>
          <SwiperSlide><NftCard url='https://img.seadn.io/files/a4f243f568222811dca82924c44e649a.png?fit=max&w=350' /></SwiperSlide>
          <SwiperSlide><NftCard url='https://img.seadn.io/files/29ad126230d1e07b42d533ef97b026c9.png?fit=max&w=350' /></SwiperSlide>
          <SwiperSlide><NftCard url='https://img.seadn.io/files/b6f17e839418e0b870f982395935f9a3.png?fit=max&w=350' /></SwiperSlide>
          <SwiperSlide><NftCard url='https://img.seadn.io/files/116e045ef80c63233187f04150499279.png?fit=max&w=350' /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default NftSlider