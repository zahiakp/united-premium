'use client'
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import WordPullUp from "../ui/word-pull-up";

function Hero() {
  const [show,setShow] = useState(true)
const SLIDES = [
  {title:"Your trusted partner in high-quality construction materials",image:"1.jpg",phoneImg:'P4-new-Potrait.jpg',dis:""},
  {title:"Meeting the needs of contractors, builders, and developers",image:"2.jpg",phoneImg:'11.jpg',dis:""},
  {title:"Built with a commitment to quality and reliability",image:"3.jpg",phoneImg:'img1_potrait.jpg',dis:""},
  {title:"Ensuring your projects are built to last",image:"4.jpg",phoneImg:'HP4A5440.jpg',dis:""},
]
console.log("Show state:", show);
useEffect(() => {
  setTimeout(() => {
    setShow(true);
  }, 500); 
}, []);

const [screenRatio, setScreenRatio] = useState('web');

useEffect(() => {
  const updateScreenRatio = () => {
    setScreenRatio(window.innerWidth <= 640 ? 'phone' : 'web');
  };

  updateScreenRatio();
  window.addEventListener('resize', updateScreenRatio);

  return () => {
    window.removeEventListener('resize', updateScreenRatio);
  };
}, []);
const pagination = {
  clickable: true,
  renderBullet: function (index:any, className:any) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};
  return (
    <div className="overflow-hidden h-[650px]">
 
<Swiper
  className="w-full custom-swiper"
  id="swiper"
  modules={[Autoplay,Pagination,Navigation]}
  onInit={(swiper) => {
    setShow(true);
  }}
  onSlideChange={() => {
    setShow(false);
  }}
  onSlideChangeTransitionEnd={() => {
    setShow(true);
  }}
  pagination={true} navigation={true}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
>
  {SLIDES.map((slide: any, i: number) => (
    <SwiperSlide key={i}>
      <div
        className={`w-[100%] h-[650px] bg-gradient-to-br from-[#7ed56f]/80 to-[#28b485]/80 bg-cover bg-center flex items-center justify-center px-[10%]`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(/images/${screenRatio=='phone' ? slide.phoneImg : slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          <WordPullUp words={slide.title} className="text-5xl w-full md:w-2/3 text-white text-center Grotesque-font group leading-[55px] md:text-[80px] md:leading-[90px] font-normal" show={show ? 'show' : "hidden"} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
}

export default Hero;
