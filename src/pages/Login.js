import React from "react";
import { Footer } from "../component/Footer";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../component/Css/Login.css";
import login from "../Search_Check_Back.png";

export const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="login-container">
        <div className="Login">
          <div className="login_main_logo">
            <img src={login} alt="Logo" className="Login_Logo" />
            <div className="Login_text1">bestreview</div>
          </div>
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              className="id"
              name="id"
              rules={[
                {
                  required: true,
                  message: "아이디를 입력해주세요",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="아이디" />
            </Form.Item>

            <Form.Item
              className="password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "비밀번호를 입력해주세요",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="비밀번호"
              />
            </Form.Item>

            <Form.Item className="Login_btn">
              <Button block type="primary" htmlType="submit">
                로그인
              </Button>
            </Form.Item>

            <Form.Item className="srh">
              <Link to="/Inquiry">아이디찾기</Link>
              <Link to="/Inquiry">비밀번호찾기</Link>
              <Link to="/Inquiry">회원가입</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};
