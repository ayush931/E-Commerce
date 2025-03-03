// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <div className="homeslider py-3">
      <div className="container mx-auto overflow-hidden">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper transition"
        >
          <SwiperSlide>
            <Link to={"/adver"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
