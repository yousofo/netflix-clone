import { useState, useEffect, useContext, useRef } from "react";
import { useParams } from 'react-router-dom';
import "./movie.css"
import VideoJS from '../videojs';

export default function Movie() {
  const [data, setData] = useState<any>(false);
  let { movieId, tvid } = useParams();
  const movie = useRef<any>(null)
  const video = useRef<any>(null)
  const playerRef = useRef(null);
  console.log("movieId: " + movieId)
  console.log("movie: ")
  console.log(data)
  console.log(Object.keys(data).find(el => el == "success"))

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: '/Blank Video Placeholder.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player: any) => playerRef.current = player;

  useEffect(() => {
    if (movieId) {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=6cd45b1ee92fc939d33d5f568aa248a6`, {
        method: "GET",
        headers: {
          accept: "application/json",
        }
      }).then(e => e.json()).then(e => setData(Object.keys(e).find(el => el == "success") ? false : e)).catch(e => setData(false))
    } else if (tvid) {
      fetch(`https://api.themoviedb.org/3/tv/${tvid}?language=en-US&api_key=6cd45b1ee92fc939d33d5f568aa248a6`, {
        method: "GET",
        headers: {
          accept: "application/json",
        }
      }).then(e => e.json()).then(e => setData(Object.keys(e).find(el => el == "success") ? false : e)).catch(e => setData(false))
    }

    const handleKeyDown = (event: any) => {
      if (event.which === 27) {
        video.current.classList.remove("active")
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [movieId])

  return (
    <div className=" flex-1 bg-black flex flex-col min-h-[50vh]" >
      <div className="movie relative flex-1 flex items-end overflow-hidden border-b-black border-b"
        ref={movie} onClick={(e) => movie.current.classList.remove("active")}
      >
        {data ? (
          <>
            <img className="relative md:absolute z-0 w-full my-auto h-full select-none object-cover" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
            <div className="absolute text md:relative w-full bottom-0">
              <div className=" relative z-10 yn-con mb-9 text-xs sm:text-sm text-slate-200 flex flex-col gap-2">
                <h2 className="text-2xl sm:text-3xl">{data.title || data.original_name}</h2>
                <div className="btns flex gap-1.5">
                  <button className="btn1 whitespace-nowrap p-1 sm:py-2 sm:px-3" onClick={() => video.current.classList.add("active")}>WATCH MOVIE</button>
                  <button className="btn2 whitespace-nowrap p-1 sm:py-2 sm:px-3">VIEW INFO</button>
                  <button className="btn3 ">+ ADD TO WISHLIST</button>
                </div>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </>)
          : <div className="absolute centered ">
            Sorry, Info is currently not available...
          </div>}
      </div>
      <div ref={video} className="video-big  fixed w-full h-full left-0 top-0">
        <div className="video-exit w-full h-full" onClick={() => video.current.classList.remove("active")}></div>
        <div className="z-10 video max-w-[900px] w-3/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </div>
  );
}
