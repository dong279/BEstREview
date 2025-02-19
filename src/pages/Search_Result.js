import React, { useEffect, useState } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import axios from "axios";
import "../component/Css/Search_Result.css";
import { Progress } from "antd";

export const Search_Result = () => {
  const [accuracy, setAccuracy] = useState(null);
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://your-backend-url/api/data");

        setAccuracy(response.data.accuracy);
        setText3(response.data.text3);
        setText4(response.data.text4);
        setText5(response.data.text5);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="parent">
          <div className="div1">조회결과</div>

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
            <div className="grade">
              {accuracy !== null ? calculateGrade(accuracy) : "A"}
            </div>
          </div>

          <div className="div3">{text3 || ""}</div>
          <div className="div4">{text4 || ""}</div>
          <div className="div5">{text5 || ""}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
