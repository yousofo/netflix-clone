import { useEffect, useState } from "react";
import MoviesSection from "./MoviesSection.tsx";
import Swiper from 'swiper';
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { v4 as uuid } from 'uuid';

async function customFetch(moviesType: string, page: number) {
  const e = await fetch(`https://api.themoviedb.org/3/${moviesType}?language=en-US&api_key=6cd45b1ee92fc939d33d5f568aa248a6&page=${page}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    }
  });
  return (await e.json()).results;
}

export default function Movies() {
  const [data, setData] = useState<any>([]);
  const [swiper, setSwiper] = useState<any>(false)
  useEffect(() => {
    if (swiper == false && data.length > 0) {
      setSwiper(
        new Swiper(`.swiper-home`, {
          speed: 2000,
          slidesPerView: 1,
          slidesPerGroup: 1,
          modules: [Autoplay, EffectFade],
          effect: "fade",
          loop: true,
          autoplay: {
            delay: 5000
          },
          fadeEffect: {
            crossFade: true,
          }
        })
      )
    } else if (swiper != false) {
      swiper.update()
    }
    if (data.length == 0) {
      customFetch("movie/top_rated", 1).then(e => setData(e));
    }
    return () => {
      if (swiper != false) swiper.destroy();

    }
  }, [data.length, typeof swiper])

  return (
    <main className="movies overflow-hidden md:pb-3">
      <div className={`.swiper hidden md:block mb-4 swiper-home z-0 opening w-full relative select-none md:h-50vh`}>
        <div className="swiper-wrapper">
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          <div className="swiper-slide"></div>
          {data.map((element: any, elei: number) => (
            <div className="swiper-slide" key={uuid()}>
              <Link className="item h-full rounded-lg relative yn-con flex items-center" to={`./${element.id}`} key={elei}>
                <div className="text relative z-20">
                  <div className="brand">
                    <span>NETFLIX</span>
                    <span>Original</span>
                  </div>
                  <div className="name text-4xl">{element.title}</div>
                  <div className="info">
                    <span>4k Ultra HD</span>
                    <span>{element.vote_average}</span>
                  </div>
                  <div className="story">{element.overview}</div>
                  <div className="more-info">
                    Released <span className="text-sm italic">{element.release_date}</span>
                  </div>
                </div>
                <div className="img absolute overflow-hidden w-full flex justify-end top-0 right-0 h-full">
                  <img className="object-cover h-full w-2/3 object-right-top" src={`https://image.tmdb.org/t/p/original/${element.backdrop_path}`}
                    alt="" />
                </div>
                <div className="shadow absolute"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <MoviesSection count={1} secName="top rated" moviesType="movie/top_rated" />
      <MoviesSection count={2} secName="popular" moviesType="movie/popular" />
      <MoviesSection count={3} secName="now playing" moviesType="movie/now_playing" />
      <MoviesSection count={4} secName="trending" moviesType="trending/movie/day" />
      <MoviesSection count={5} secName="upcoming" moviesType="movie/upcoming" />
    </main>
  );
}
