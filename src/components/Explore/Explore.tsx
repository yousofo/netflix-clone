import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Explore = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=6cd45b1ee92fc939d33d5f568aa248a6&language=en-US')
      .then(e => e.json()).then(e => setData(e.results))
  }, [])

  return (
    <main className='yn-con  min-h-screen  md:pt-28 pb-3'>
      <h2 className='pb-1 text-xl'>Trending Shows on TV</h2>
      <section className='flex flex-wrap'>
        {
          data.map((e: { poster_path: string, id: number }) =>
            <Link to={`TV/${e.id}`} className='py-0.5 md:py-2 px-0.5 w-1/2 xs:w-1/3 sm:1/4 md:w-1/5 lg:w-1/6 xl:w-[calc(100% / 8)]'>
              <figure className="aspect-tall ">
                <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="" />
              </figure>
            </Link>
          )
        }
      </section>
    </main>
  )
}

export default Explore