// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import woman from '../../../assets/medical_one.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSection = () => {

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={woman} />
          <h1>Client 1</h1>
          <p>I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={woman} />
          <h1>Client 2</h1>
          <p>I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={woman} />
          <h1>Client 3</h1>
          <p>I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={woman} />
          <h1>Client 4</h1>
          <p>I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={woman} />
          <h1>Client 5</h1>
          <p>I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>
        </SwiperSlide>

      </Swiper>
    </div>

  );

};

export default TestimonialSection;