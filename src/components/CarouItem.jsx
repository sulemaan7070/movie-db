import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@mui/material/Skeleton";

function CarouItem({ poster, backDrop, info, title, rating }) {
  return (
    <div className="flex justify-center items-center flex-col w-[75%] mx-auto min-h-screen">
      {!backDrop ? (
        <Skeleton variant="rectangular" width={1000 - 2} height={400} />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original${backDrop}`}
          className="w-[90%] h-[400px] object-cover object-center"
          alt=""
        />
      )}
      <div className="flex justify-center items-center xl:ml-14 mt-2">
        {!poster ? (
          <Skeleton variant="rectangular" width={700} height={400} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            className="w-[30%] object-contain"
            alt=""
          />
        )}

        <div className="mx-10">
          <h1 className="text-center">{title}</h1>
          <p className="text-base leading-relaxed mt-2 text-center">
            <Typography component="legend">
              {" "}
              Average rating: {rating}
            </Typography>
            <Rating name="read-only" value={rating / 2} readOnly />
          </p>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouItem;
