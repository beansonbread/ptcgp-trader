"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type RegisterFormValues = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: RegisterFormValues) => {
    if (loading) return; // Prevent multiple submissions
    
    setLoading(true);
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      setLoading(false);
      return;
    }

    //check if user exist
    try {
        const { data: existingUser, error: userError } = await supabase
          .from("users")
          .select("id")
          .eq("username", username)
          .limit(1);
  
        if (userError) {
          console.error("Error checking username:", userError);
          setLoading(false);
          return;
        }
  
        if (existingUser && existingUser.length > 0) {
          alert("Username already exists");
          setLoading(false);
          return;
        }

        // Sign up with Supabase
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          console.error("Signup error:", error);
          // Handle specific error cases
          if (error.message.includes("already registered") || error.message.includes("already exists")) {
            alert("Email already registered. Please use a different email or try logging in.");
          } else if (error.message.includes("rate limit") || error.message.includes("rate_limit")) {
            alert("Too many signup attempts. Please wait a few minutes before trying again.");
          } else {
            alert(error.message);
          }
          setLoading(false);
          return;
        }

        const user = data.user;
        if (user) {
          // Insert user profile
          const { error: profileError } = await supabase
            .from("profiles")
            .insert([{ id: user.id, username }]);

          if (profileError) {
            console.error("Profile insert error:", profileError);
          }
        }

        alert("Signup successful!");
        router.push("/login");
    } catch (error) {
      console.error("Unexpected error during registration:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

  return (
    <>
      <h1>Register</h1>
      <Form
        name="register"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
            Register
          </Button>
          <Button type="default" onClick={() => router.push("/login")} disabled={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
