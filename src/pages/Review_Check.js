import React, { useState } from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import "../component/Css/Review_Check.css";
import logo from "../Search_Check_Back.png";
import { Input, Button, Spin } from "antd";
import axios from "axios";
import { RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

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

      console.log("Response from backend: ", response.data);

      navigate("/Search_Result");
    } catch (error) {
      console.error("There was an error submitting the URL: ", error);
      setError("There was an error submitting the URL. Please try again.");
      setIsModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
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

        {loading && (
          <div
            className="progress-container"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <Spin spinning={loading} percent={progress} fullscreen />
          </div>
        )}

        <Modal
          visible={isModalVisible}
          error={error}
          onClose={handleModalClose}
        />
      </div>
      <Footer />
    </>
  );
};
