import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { MovieResult } from "@/shared/types";
import { useMovie } from "@/shared/state/useMovie";

interface IMovieSwiperProps {
  movies: MovieResult[];
}

export const MovieSwiper: React.FC<IMovieSwiperProps> = ({ movies }) => {
  const addPreviewMovie = useMovie((state) => state.addMovieInBanner);

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
          key={movie.id}
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "150px",
            height: "200px",
          }}
          onClick={() => addPreviewMovie(movie)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt="teste"
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
