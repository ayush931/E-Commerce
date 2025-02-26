import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "./BannerBox";

function AdsBannerSlider(props) {
  return (
    <div className="py-5 w-full">
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={props.items}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="smallButton"
      >
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBox
              img={
                "https://www.jiomart.com/images/cms/aw_rbslider/slides/1739865184_HPMC-21.jpg?im=Resize=(768,448)"
              }
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AdsBannerSlider;