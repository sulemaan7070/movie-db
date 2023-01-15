import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";
import Header from "./Header";
import Footer from "./Footer";
function WhatsHot() {
  const [movies, setMovies] = useState([]);
  const popularMovies =
    "https://api.themoviedb.org/3/movie/popular?api_key=92cd293584bc7d6c960965b34aba9174&language=en-US&page=1";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(popularMovies);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, []);
  console.log(movies);
  return (
    <>
      <Header />
      <h1 className="text-center xl:text-4xl p-4">What's Hot🔥</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-12 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 ">
            {movies.map((movie, id) => {
              return (
                <Row
                  key={movie.id}
                  title={movie.original_title}
                  img={movie.poster_path}
                  rating={movie.vote_average}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WhatsHot;
