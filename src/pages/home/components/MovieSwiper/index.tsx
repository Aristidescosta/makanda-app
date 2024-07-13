import { IMovieType } from "@/shared/types";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

interface IMovieSwiperProps {
  movies: IMovieType[];
}

export const MovieSwiper: React.FC<IMovieSwiperProps> = ({ movies }) => {
  return (
    <Swiper
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60vw",
        background: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop
      modules={[Autoplay, EffectCoverflow]}
    >
      {movies.map((movie) => (
        <SwiperSlide
          key={movie._id}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "150px",
            height: "200px",
          }}
        >
          <img
            src={movie.bgImg}
            alt="teste"
            style={{ display: "block", width: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
