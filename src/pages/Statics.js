import React from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { Progress, Card, Row, Col } from "antd";
import "../component/Css/Statics.css";

export const Statics = () => {
  const tasks = [
    { name: "쿠팡", value: 80 },
    { name: "11번가", value: 60 },
    { name: "알리익스프레스", value: 50 },
    { name: "G마켓", value: 90 },
    { name: "e마트", value: 90 },
  ];

  return (
    <div className="staticmain">
      <Header />
      <div className="progress-container">
        <Row gutter={[16, 16]}>
          {tasks.map((task, index) => (
            <Col span={8} key={index}>
              <Card className="static_card" title={task.name} bordered={false}>
                <Progress percent={task.value} showInfo={true} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};
