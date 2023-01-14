import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function Row({ title, img, rating }) {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg w-[70%] overflow-hidden ml-10 ">
        <img
          alt="content"
          className="object-cover object-center h-full w-full shadow-md"
          src={`https://image.tmdb.org/t/p/original${img}`}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
        {title}
      </h2>
      <p className="text-base leading-relaxed mt-2 text-center">
        <Typography component="legend">{rating}</Typography>
        <Rating name="read-only" value={rating / 2} readOnly />
      </p>
    </div>
  );
}

export default Row;
