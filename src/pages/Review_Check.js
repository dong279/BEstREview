import React, { useState } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import "../component/Css/Review_Check.css";
import logo from "../Search_Check_Back.png";
import { Input, Button, Modal, Spin } from "antd";
import axios from "axios";
import { RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Review_Check = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setProgress(0);
    setLoading(true);

    try {
      // 백엔드 API로 URL 전송 (예: POST 요청)
      const response = await axios.post(
        "https://your-backend-url/api/submit-url",
        {
          url: url,
        },
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percent = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              setProgress(percent);
            }
          },
        }
      );

      console.log("Response from backend: ", response.data); // 백엔드 응답 처리

      // 백엔드 응답이 성공적이면, 다른 페이지로 이동
      navigate("/Search_Result");
    } catch (error) {
      console.error("There was an error submitting the URL: ", error);
      setError("There was an error submitting the URL. Please try again.");
      setIsModalVisible(true);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false); // 모달 닫기
  };

  return (
    <>
      <Header />
      <div className="check">
        <img src={logo} alt="img" className="Review_Check_Logo" />
        <h1 className="Review_text">BestReview</h1>

        <div className="url-input-container">
          <form onSubmit={handleSubmit} className="check_form">
            <Input
              className="Review_Check_input"
              type="url"
              placeholder="Enter URL"
              value={url}
              onChange={handleUrlChange}
              size="large"
            />
            <Button
              icon={<RightCircleOutlined />}
              className="button"
              type="primary"
              htmlType="submit"
              disabled={loading}
            ></Button>
          </form>
        </div>

        {/* 진행률 표시 */}
        {loading && (
          <div
            className="progress-container"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <Spin spinning={loading} percent={progress} fullscreen />
          </div>
        )}

        {/* 에러 모달 */}
        <Modal
          title="Error"
          visible={isModalVisible}
          onOk={handleModalClose}
          onCancel={handleModalClose}
          okText="Confirm"
          cancelText="Cancel"
          centered
        >
          <p>{error}</p> {/* 에러 메시지 표시 */}
        </Modal>
      </div>
      <Footer />
    </>
  );
};
