import React from "react";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { List } from "antd";
import "../component/Css/Search_Result_Details.css";

const generateRandomData = (num) => {
  return Array.from({ length: num }).map((_, i) => ({
    name: `김철수 ${i}`,
    date: `2019.01.${String((i % 30) + 1).padStart(2, "0")}`,
    contentDetail: `abcdefg ${i}`,
  }));
};

export const Search_Result_Details = () => {
  const data = generateRandomData(200);

  return (
    <div className="result-container">
      <Header />
      <div className="result-container_body">
        <List
          className="Detail_List"
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 5,
            total: data.length,
            onChange: (page) => {
              console.log(page);
            },
            showSizeChanger: false,
            position: "bottom",
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="Detail_Title" key={item.name}>
              <List.Item.Meta
                title={<a href={item.href}>{item.name}</a>}
                description={item.date}
              />
              <div className="content-detail">{item.contentDetail}</div>{" "}
            </List.Item>
          )}
        />
      </div>
      <Footer />
    </div>
  );
};
