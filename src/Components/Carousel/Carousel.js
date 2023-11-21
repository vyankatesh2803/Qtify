
import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import './Carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';

export default ({data}) => {
    return <div>
      <Swiper
      modules={[Virtual, Navigation]}
      slidesPerView={7}
      spaceBetween={30}
      navigation={true}
      virtual
      >
      {data.map(cardData => <SwiperSlide key={cardData.id}><Card
                      imgSrc={cardData.image}
                      label={cardData.title}
                      followersCount={cardData.follows}
                      /></SwiperSlide>
                      )}    
      </Swiper>
    </div>
}