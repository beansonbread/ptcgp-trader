"use client";

import React from "react";
import {Form, Input, Checkbox, Button} from "antd";
import { useRouter } from "next/navigation";

type LoginFormValues = {
  username: string;
  password: string;
  remember: boolean;
};

const onFinish = (values: LoginFormValues) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};




export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <h1>Login</h1>
      <Form
      name="basic"
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item<LoginFormValues>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input />
      </Form.Item>
      
      <Form.Item<LoginFormValues>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      >
      <Input.Password />
      </Form.Item>
      
      <Form.Item<LoginFormValues>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
      >
      <Checkbox>Remember me</Checkbox>
      </Form.Item>
      
      <div className="flex justify-between">
      <Form.Item>
      <Button type="primary" htmlType="submit">
      Submit
      </Button>
      </Form.Item>
      <Form.Item >
      <Button type="primary" htmlType="button" onClick={() => {
        router.push('/register');
      }}>
      Register
      </Button>
      </Form.Item>
      </div>
      </Form>
    </>
  );
}
