import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SectionItem = ({ data }: any) => {
  const[,setLoaded] = useState(false);
  const loader = useRef<any>(null);
  const movieLink = useRef<any>(null);
  function imgLoaded() {
    loader.current.classList.add("opacity-0","pointer-events-none");
    movieLink.current.classList.remove("opacity-0")
    setLoaded(true)
  }

  return (
    <div className={`swiper-slide  item relative w-1/6 movie-img inline-block px-0.5`}>
      <div ref={loader} className="circle-loader transition-all z-20 rounded-full aspect-square absolute w-1/2 centered"></div>
      <Link ref={movieLink} className={`relative block opacity-0 z-10 aspect-tall`} to={`./${data.id}`}>
        <img onLoad={imgLoaded} loading="lazy" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} className="w-full h-full object-cover" alt="" />
        {data.vote_average >= 7.5 &&
          <div className="tier absolute right-0.5 top-0 overflow-hidden">
            <div className="relative p-0.5 text-xs">
              <p>TOP</p>
              <p>50</p>
            </div>
          </div>
        }
        <img className="logo w-10 absolute top-0.5 left-1" src="/Netflix-Logo-removebg-preview.png" alt="" />
      </Link>
    </div>
  )
}

export default SectionItem