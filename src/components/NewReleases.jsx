import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { Paper, Button } from "@mui/material";
import CarouItem from "./CarouItem";
import Header from "./Header";

function NewReleases() {
  const [movies, setMovies] = useState([]);
  const popularMovies =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=92cd293584bc7d6c960965b34aba9174&language=en-US&page=1";

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
      <Carousel>
        {movies.map((movie, id) => {
          return (
            <CarouItem
              key={movie.id}
              poster={movie.poster_path}
              backDrop={movie.backdrop_path}
              title={movie.original_title}
              rating={movie.vote_average}
              info={movie.overview}
            />
          );
        })}
      </Carousel>
    </>
  );
}

export default NewReleases;
