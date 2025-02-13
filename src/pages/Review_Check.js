import React, { useState } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import "../component/Css/Review_Check.css";
import logo from "../footerlogo.png";
import { Input, Button } from "antd";
import axios from "axios"; // axios import 추가
import { RightCircleOutlined } from "@ant-design/icons";

export const Review_Check = () => {
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
      <img src={logo} alt="img" className="Review_Check_Logo" />
      <h1 className="Review_text">BestReview</h1>
      <div className="url-input-container">
        <form onSubmit={handleSubmit}>
          <Input
            className="Review_Check_input"
            type="url"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange} // handleUrlChange로 수정
            style={{ width: 400 }}
          />
          <Button
            icon={<RightCircleOutlined />}
            className="button"
            type="primary"
            htmlType="submit"
            style={{ marginLeft: -50 }}
          ></Button>
        </form>
      </div>
      <Footer />
    </>
  );
};
