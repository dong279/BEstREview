import React, { useState } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import HomeImg from "../homepage_img.png";
import "../component/Css/Home.css";

export const Home = () => {
  const [url, setUrl] = useState(""); // URL 상태를 관리

  const handleUrlChange = (e) => {
    setUrl(e.target.value); // URL 입력값 업데이트
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지

    try {
      // 백엔드 API로 URL 전송 (예: POST 요청)
      const response = await axios.post(
        "https://your-backend-url/api/submit-url",
        {
          url: url, // 전송할 데이터
        }
      );

      console.log("Response from backend: ", response.data); // 백엔드 응답 처리

      // 필요에 따라 추가적인 처리 (예: 성공 메시지 표시, 입력 필드 초기화 등)
    } catch (error) {
      console.error("There was an error submitting the URL: ", error);
      // 에러 처리 (예: 에러 메시지 표시 등)
    }
  };
  return (
    <>
      <Header />
      <article>
        <img src={HomeImg} alt="img" className="HomeImg" />
        <div className="introduce">
          <h1>a</h1>
        </div>
        <div className="url-input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="url"
              placeholder="Enter URL"
              value={url}
              onChange={handleUrlChange}
              className="url-input"
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </article>
      <Footer />
    </>
  );
};
