import { memo, useRef, useState } from 'react'
import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import SectionItem from './SectionItem';
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

const MoviesSection = memo(({ count, moviesType, secName }: { count: number, moviesType: string, secName: string }) => {
  const [data, setData] = useState([]);
  const wrapper = useRef<any>([]);
  const swiperBack = useRef<any>(null);
  const swiperNext = useRef<any>(null);
  let swiper: Swiper | null = null;
  useEffect(() => {
    swiper = new Swiper(`.swiper${count}`, {
      slidesPerView: 2,
      speed: 400,
      modules: [Navigation],
      lazyPreloaderClass: "swiper-lazy-preloader",
      slidesPerGroup: 2,
      breakpoints: {
        400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        600: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        768: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
        1024: {
          slidesPerView: 7,
          slidesPerGroup: 7,
        },
        1280: {
          slidesPerView: 9,
          slidesPerGroup: 9,
        },
        1536: {
          slidesPerView: 10,
          slidesPerGroup: 10,
        },
      },
      navigation: {
        nextEl: `.swiper-button-next${count}`,
        prevEl: `.swiper-button-prev${count}`
      },
    });
    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, []);
  useEffect(() => {
    if (data.length === 0) {
      customFetch(moviesType, 1).then(e => setData(e))
    }
  }, [typeof swiper])

  return (
    <div className={`holder-con w-full overflow-hidden m-auto relative z-1 py-1.5 md:py-2 `}>{/*${(data.length > 0 && swiper != false) && "yn-show"}*/}
      <h2 className='pb-1 yn-con text-xl'>
        <span className='capitalize'>
          {secName + " "}
        </span>
        on Netflix</h2>

      <div className={`.swiper swiper${count} holder yn-con overflow-hidden relative select-none`} >
        <div ref={wrapper} className="swiper-wrapper flex min-h-20">
          {data.map((element: any) => (
            <SectionItem data={element} key={uuid()} />
          ))}
        </div>
        <div ref={swiperBack} className={`swiper-button-prev opacity-100 text-white left-0 h-full  bg-dark-80 top-0 mt-0 swiper-button-prev${count}`}></div>
        <div ref={swiperNext} className={`swiper-button-next h-full text-white right-0 bg-dark-80 top-0 mt-0  swiper-button-next${count}`}></div>
      </div>

    </div>
  )
}, (oldProps, newProps): boolean => oldProps.count == newProps.count);


export default MoviesSection