import mainlogo from "/Netflix-Logo-removebg-preview.png"
import { Link, Outlet } from "react-router-dom"
import "./nav.css"
import { useEffect, useRef, useState } from "react"

export default function Nav(props:any) {
  const [data, setData] = useState<any>([])
  const [refetch, setRefetch] = useState<Boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  let isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return;
    }

    let fetchDataAsync =0 
    if (searchQuery.length >= 2) {
      fetchDataAsync = setTimeout(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&api_key=6cd45b1ee92fc939d33d5f568aa248a6&page=1`)
          .then(e => e.json()).then(e => setData(e.results.filter((m: any) => m.release_date.length > 0).slice(0, 5)));
      }, 500);
    }
    return()=>{
      clearTimeout(fetchDataAsync)
      setData([])
    }
  }, [searchQuery, refetch])

  useEffect(() => {
    let bodyElement = document.body
    let handleBodyClick = () => setData([])
    bodyElement.addEventListener("click", handleBodyClick)
    return () => bodyElement.removeEventListener("click", handleBodyClick)
  }, [])
  return (    
    <div className="layout flex flex-col justify-between min-h-screen">
      <div className="relative md:absolute z-50 md:-translate-x-1/2 mt-0 md:left-1/2 py-[35px] md:py-0 md:mt-[35px] yn-con flex w-full flex-col gap-6">
        <nav className="text-sm flex relative justify-between items-center">
          <i className="fa-solid md:hidden fa-bars text-xl"></i>
          <ul className="left hidden md:flex gap-2">
            <li><Link to="/Explore">Explore</Link></li>
            <li><Link to="/">Home</Link></li>
            <li>TV Shows</li>
          </ul>
          <Link to="/movies " className="absolute h-full max-h-7 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img className="h-full" src={mainlogo} alt="" />
          </Link>
          <div className="flex gap-2.5 items-center ">
            <div onClick={(e) => e.stopPropagation()} className=" relative hidden md:flex items-center text-lg gap-4 rounded px-3 h-8 mobile-search">
              <i className="fa-solid fa-magnifying-glass text-xs"></i>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e: any) => e.key == "Enter" && setRefetch(e => !e)}
                className="w-full max-w-40 lg:max-w-full text-base bg-transparent py-0.5 h-full" type="text"
                placeholder="Search" />
              <ul className="absolute flex rounded-b-lg pt-0.5 pb-1 flex-col text-sm text-gray-300 mobile-search -translate-y-2 top-full right-0 w-full">
                {data.map((e: { title: string, id: number, release_date: string,poster_path:string }, i: number) =>
                  <li key={i} className=" border-b border-zinc-500">
                    <Link className="w-full px-1.5 py-1 flex items-center gap-2.5" to={`/movies/${e.id} `}>
                      <img className="h-full w-6" src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="" />
                      <span>{e.title}<span className="text-xxs italic font-extrabold ps-1">({e.release_date.split("-")[0]})</span></span>
                    </Link>
                  </li>)}
              </ul>
            </div>
            <Link className="hidden rounded sm:h-8 sm:block btn1 p-1 sm:px-3 sm:text-sm leading-none" to="/login">Sign In</Link>

          </div>
        </nav>
        <div onClick={(e) => e.stopPropagation()} className=" relative flex md:hidden items-center text-lg gap-2.5 rounded-lg px-3 py-2.5 mobile-search">
          <i className="fa-solid fa-magnifying-glass ps-1"></i>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e: any) => e.key == "Enter" && setRefetch(e => !e)}
            className="w-full bg-transparent" type="text " placeholder="Seach" />
          <i className="fa-solid fa-microphone ms-auto"></i>
          <ul className="absolute flex rounded-b-lg pt-2 pb-1 flex-col text-sm text-gray-300 mobile-search -translate-y-3 top-full right-0 w-full">
            {data.map((e: { title: string, id: number, release_date: string,poster_path:string }, i: number) =>
              <li key={i} className=" border-b border-zinc-500">
                <Link className="w-full px-3 py-0.5 flex items-center gap-2.5" to={`/movies/${e.id} `}>
                  <img className="h-full w-6" src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="" />
                  <span>{e.title}<span className="text-xxs italic font-extrabold ps-1">({e.release_date.split("-")[0]})</span></span>
                </Link>
              </li>)}
          </ul>
        </div>
      </div>
      {
        props.children
      }
      <Outlet />
      <footer className="sm:bg-black sm:bg-opacity-70  text-gray-300">
          <div className='footer w-full py-7 yn-con'>
            <p className="pb-4">Question? Contact us.</p>
            <ul className="items flex flex-wrap">
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">FAQ</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Help Center</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Terms of Use</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Privacy</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Cookie Preferences</a></li>
              <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Corporate Information</a></li>
            </ul>
            <button className="lang flex my-5 py-1 items-center h-full rounded">
              <i className="fa-solid fa-globe"></i>
              <span className="text-sm px-1">En</span>
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>
        </footer>
    </div>
  )
}