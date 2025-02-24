import React, { useEffect, useState } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import "../component/Css/Search_Result.css";
import { Progress } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export const Search_Result = () => {
  const location = useLocation();
  const { accuracy, text3, text4, text5, reviews, url } = location.state || {}; // URL과 다른 데이터를 받아옵니다.
  const navigate = useNavigate();

  const calculateGrade = (accuracy) => {
    if (accuracy >= 90) {
      return "A";
    } else if (accuracy >= 80) {
      return "B";
    } else if (accuracy >= 70) {
      return "C";
    } else if (accuracy >= 60) {
      return "D";
    } else {
      return "F";
    }
  };

  const calculateProgress = (accuracy) => {
    if (accuracy === null) return 0;
    if (accuracy >= 90) {
      return 100;
    } else if (accuracy >= 80) {
      return 80;
    } else if (accuracy >= 70) {
      return 70;
    } else if (accuracy >= 60) {
      return 60;
    } else {
      return 50;
    }
  };

  const button1 = () => {
    navigate("/Search_Result_Details", {
      state: { reviews, accuracy, text3, text4, text5 },
    });
  };

  return (
    <div className="result_body">
      <Header />
      <div className="page-container">
        <div className="parent">
          <button onClick={button1} className="div1">
            상세보기
          </button>

          <div className="div2">
            <Progress
              type="circle"
              percent={accuracy !== null ? calculateProgress(accuracy) : 0}
              showInfo={false}
              strokeWidth={20}
              format={() =>
                accuracy !== null
                  ? `${calculateProgress(accuracy)}%`
                  : "Loading..."
              }
            />
          </div>
          <div className="grade">
            {accuracy !== null ? calculateGrade(accuracy) : "A"}
          </div>
          <div className="div3">{text3 || ""}</div>
          <div className="div4">{text4 || ""}</div>
          <div className="div5">{text5 || ""}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
