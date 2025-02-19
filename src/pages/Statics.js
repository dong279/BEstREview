import React from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { Progress, Card, Row, Col } from "antd";
import "../component/Css/Statics.css";

export const Statics = () => {
  const percentages = [
    { value: 80 },
    { value: 60 },
    { value: 50 },
    { value: 90 },
    { value: 80 },
    { value: 60 },
    { value: 50 },
    { value: 90 },
    { value: 80 },
    { value: 60 },
    { value: 50 },
    { value: 90 },
  ];

  return (
    <div>
      <Header />
      <div className="progress-container">
        <Row gutter={[16, 16]}>
          {percentages.map((percent, index) => (
            <Col span={8} key={index}>
              <Card title={`Task ${index + 1}`} bordered={false}>
                <Progress
                  percent={percent.value}
                  status={
                    percent.value === 100
                      ? "success"
                      : percent.value >= 50
                        ? "active"
                        : "exception"
                  }
                  showInfo={true}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};
