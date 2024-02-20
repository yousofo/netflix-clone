import { Link } from "react-router-dom"
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="sec relative overflow-hidden p-5 sec-start pb-9">
        <img src="./backG.jpg" className="absolute w-full h-full object-cover left-0 top-0 scale-125" alt="" />

        <div className="container m-auto relative flex h-full items-center justify-center">
          <nav className="nav flex absolute top-0 left-0 w-full justify-between items-center">
            <img className="w-24" src="./Netflix-Logo-removebg-preview.png" alt="" />
            <div className="right flex gap-3">
              <button className="lang flex p-1 px-3 items-center h-full rounded">
                <i className="fa-solid fa-globe"></i>
                <span className="text-sm px-1">En</span>
                <i className="fa-solid fa-caret-down"></i>
              </button>
              <Link to="/login" className="btn text-sm p-1 px-3">Sign in</Link>
            </div>
          </nav>
          <div className="membership px-3 pt-24 sm:pb-40 sm:pt-60 w-full flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold lg:font-extrabold lg:text-5xl">Unlimited movies, TV shows, and more.</h1>
            <p className="text-base xs:text-lg my-4 lg:text-2xl">Watch anywhere. Cancel anytime.</p>
            <p className="text-base xs:text-lg lg:text-xl">Ready to watch? Enter your email to create or restart your membership.</p>

            <div className="email mt-3 w-full gap-4 sm:gap-0 flex flex-col sm:flex-row items-center justify-center">
              <input type="email" className="flex-1 sm:me-2 rounded-sm text-white p-3 max-w-64 w-full" placeholder="Email address" />
              <Link to="/movies">
                <button className="btn p-2 px-3 text-lg">Get Started
                  <i className="fa-solid ps-3 fa-chevron-right"></i></button>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="sec sec-vid px-6 py-14">
        <div className="container m-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 sm:gap-0">
          <div className="text">
            <h2 className="text-3xl font-bold mb-4">Enjoy on your TV.</h2>
            <p className="text-lg leading-5">Watch on Smart TVs, Playstations, Xbox, Chromecast, Apple TV, Blue-ray players, and more.</p>
          </div>
          <div className="vid relative">
            <img src="./tv.png" alt="" />
            <video src="./video-tv-0819.mp4" muted loop autoPlay></video>
          </div>
        </div>
      </div>
      <div className="sec flex justify-center overflow-hidden sec-dl px-6 py-14">
        <div className="container max-w-[1000px] m-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 sm:gap-10">
          <div className="img relative order-1 pb-16 sm:ms-8">
            <img src="./mobile-0819.jpg" className="max-w-56" alt="" />
            <div className="overlay absolute bottom-0">
              <div className="left">
                <img src="/boxshot.png" alt="" />
                <span>
                  <p className="whitespace-nowrap">Stranger Things</p>
                  <p>Downloading...</p>
                </span>
              </div>
              <div className="right">
                <i className="fa-solid arrow fa-arrow-down absolute centered text-lg"></i>
                <span className="line absolute left-1/2 opacity-100 bg-white"></span>
                <span className="circle centered ">
                  <span className="right absolute centered"></span>
                  {/* <span className="left"></span> */}
                </span>
                <i className="fa-solid fa-check check absolute centered text-green-600"></i>
              </div>
            </div>
          </div>
          <div className="text order-0 sm:order-2">
            <h1 className="text-3xl font-bold mb-4">Download your shows to watch offline.</h1>
            <p className="text-lg leading-5">Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
      <div className="sec px-6 py-12 sec-vid sv2">
        <div className="container m-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 sm:gap-0">
          <div className="text">
            <h1 className="text-3xl font-bold mb-4">Watch everywhere.</h1>
            <p className="text-lg leading-5">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <div className="vid relative">
            <img src="./device-pile (1).png" className="z-10" alt="" />
            {/* type="video/mp4" */}
            <video src="./video-devices.mp4" className="absolute z-0" muted loop autoPlay></video>
          </div>
        </div>
      </div>
      <div className="sec px-6 py-14 sec-dl sdl2">
        <div className="container m-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-4 sm:gap-0">
          <div className="img relative order-1">
            <img src="./Kids.png" alt="" />
          </div>
          <div className="text order-0 sm:order-2">
            <h1 className="text-3xl font-bold mb-4">Create profiles for kids.</h1>
            <p className="text-lg leading-5">Send kids on adventures with their favorite characters in a space made just for them<span></span>free with your membership.</p>
          </div>
        </div>
      </div>
      <div className="sec px-6 py-12 questions">
        <div className="container text-center sm:text-left m-auto flex flex-col align-items-center ">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <div className="items flex flex-col gap-2.5">
            <button>What is Netflix?</button>
            <button>How much does Netflix cost?</button>
            <button>Where can I watch?</button>
            <button>How do I cancel?</button>
            <button>What can I watch on Netflix?</button>
            <button>Is Netflix good for kids?</button>
          </div>

          <p className="text-lg leading-6 pt-12 pb-5 px-6 sm:px-0 text-center">Ready to watch? Enter your email to create or restart your membership.</p>

          <div className="email flex flex-col sm:flex-row w-full max-w-[500px] m-auto gap-4 sm:gap-0.5 items-center px-4">
            <input type="email" className="flex-1 sm:me-2 rounded-sm text-white p-3 w-full" placeholder="Email address" />
            <Link to="after/movies">
              <button className="btn p-2 sm:py-3 px-3 text-lg">Get Started
                <i className="fa-solid ps-3 fa-chevron-right"></i></button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="px-6 py-7 m-auto">
        <div className="footer container m-auto">
          <p className="pb-4 underline">Question? Contact us.</p>
          <ul className="items flex flex-wrap">
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">FAQ</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Help Center</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Account</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Media Center</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Investor Relations</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Jobs</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Ways to Watch</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Terms of Use</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Privacy</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Cookie Preferences</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Corporate Information</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Contact Us</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Speed Test</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Legal Notices</a></li>
            <li className="w-1/2 sm:w-1/3 py-2 leading-4"><a href="#">Only on Netflix</a></li>
          </ul>
          <button className="lang flex my-5 py-1 px-3 items-center h-full rounded">
            <i className="fa-solid fa-globe"></i>
            <span className="text-sm px-1">En</span>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <p className="text-sm">Netflix Egypt</p>
        </div>
      </footer>
    </div>
  )
}