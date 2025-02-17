import React from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import HomeImg from "../homepage_img.jpg";
import "../component/Css/Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <article>
        <img src={HomeImg} alt="img" className="HomeImg" />
        <div className="introduce">
          <h1>a</h1>
        </div>
      </article>
      <Footer />
    </>
  );
};
