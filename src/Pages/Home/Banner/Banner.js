import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Images/banner1.jpg";
import img2 from "../../../Images/banner2.jpg";
import img3 from "../../../Images/banner3.jpg";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    
  );
};

export default Banner;
