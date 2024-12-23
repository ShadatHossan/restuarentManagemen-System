
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../Banner/Img/slide1.jpg';
import img2 from '../Banner/Img/slide2.jpg';
import img3 from '../Banner/Img/slide3.jpg';
import img4 from '../Banner/Img/slide4.jpg';
import img5 from '../Banner/Img/slide5.jpg';
import SectionTitle from '../Sheared/SectionTitle';





const Banner = () => {
  return (
    <div>
      {/* Heading Design Edit start*/}
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      >
      </SectionTitle>
      {/* Heading Design Edit End*/}
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={img1} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>SALADS</h3></SwiperSlide>
        <SwiperSlide><img src={img2} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>PIZZA</h3></SwiperSlide>
        <SwiperSlide><img src={img3} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>SOUP</h3></SwiperSlide>
        <SwiperSlide><img src={img4} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>DESSERTS</h3></SwiperSlide>
        <SwiperSlide><img src={img5} /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;