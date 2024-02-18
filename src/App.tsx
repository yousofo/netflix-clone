import {createContext } from "react";
import "./css/app.css";
import "./css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie/movie.js" 
import Nav from "./components/Nav/nav.tsx"
import Movies from "./components/Movies/Movies.tsx"
import Home from "./components/Home/Home.tsx"
import Login from "./components/Login/login.tsx";
import Explore from "./components/Explore/Explore.tsx";;
import Error from "./components/Error.tsx";

//api_key=6cd45b1ee92fc939d33d5f568aa248a6&
const currentCx = createContext(null)

export default function App() {
  return (
      <div className="app">
        <currentCx.Provider value={null}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/movies" element={<Nav />}>
                <Route index element={<Movies/>}/>
                <Route path=":movieId" element={<Movie />}/>
              </Route>
              <Route path="/Explore" element={<Nav/>}>
                <Route index element={<Explore/>}/>
                <Route path="TV/:tvid" element={<Movie />}/>
                <Route path="TV/:tid" element={<Movie />}/>
              </Route>
              <Route path="*" element={<Error/>}/>
            </Routes>
          </BrowserRouter>
        </currentCx.Provider>
      </div>
  );
}

export {currentCx}