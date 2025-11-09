"use client";
import React from "react";
import {Form, Input, Checkbox, Button} from "antd";
import { useRouter } from "next/navigation";

type RegisterFormValues = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
};

const onFinish = (values: RegisterFormValues) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export default function RegisterPage() {
    const router = useRouter();
    return (
        <>
        <h1>Register</h1>
        
        <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
            <Form.Item<RegisterFormValues>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
            </Form.Item>
            
            <Form.Item<RegisterFormValues>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>
            
            <Form.Item<RegisterFormValues>
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your confirm password!' }]}
            >
            <Input.Password />
            </Form.Item>
            
            <Form.Item<RegisterFormValues>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Register</Button>
                <Button type="primary" htmlType="button" onClick={() => {
                    router.push('/login');
                }}>
                Login
                </Button>
            </Form.Item>
        </Form>
        </>
    );
}