import AdsBannerSlider from "../components/AdsBannerSlider";
import HomeCategorySlider from "../components/HomeCategorySlider";
import HomeSlider from "../components/HomeSlider";
import { TbTruckDelivery } from "react-icons/tb";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ProductSlider from "../components/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Blogitem from "../components/BlogItem";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white">
      <HomeSlider />
      <HomeCategorySlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="left-section">
              <h3 className="text-[22px] font-[600]">Popular products</h3>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of Season
              </p>
            </div>
            <div className="right-section w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Jewellery" />
                <Tab label="Medicine" />
                <Tab label="Health" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={6} />
        </div>
      </section>
      <section className="py-4 bg-white pt-0">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto rounded-md py-4 p-4 border-2 border-[#287c2c] flex items-center justify-between mb-7 bg-white">
            <div className="clo1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your Order and Save Over &#8377; 200
              </p>
            </div>
            <div className="col3 font-bold text-[25px]">
              Only &#8377; 200 /-
            </div>
          </div>
          <div className="bg-white">
            <AdsBannerSlider items={4} />
          </div>
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[22px] font-[600]">Latest Product</h3>
          <p className="text-[14px] font-[400]">
            Do not miss the current offers until the end of Season
          </p>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h3 className="text-[22px] font-[600]">Featured Product Product</h3>
          <p className="text-[14px] font-[400]">
            Do not miss the current offers until the end of Season
          </p>
          <ProductSlider items={6} />
          <AdsBannerSlider items={2} />
        </div>
      </section>
      <section className="bg-white py-5 pt-0 blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From the Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
            <SwiperSlide>
              <Blogitem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <hr />
      <section className="bg-white py-5 pt-5 footerBanner">
        <FooterBanner />
        <hr />
      </section>
      <Footer />
      <br className="bg-white" />
    </div>
  );
}

export default Home;
