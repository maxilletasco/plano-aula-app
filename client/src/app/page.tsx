"use client";

import { useEffect } from "react";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3001/ping")
      .then((res) => res.text())
      .then((data) => console.log("Resposta:", data));
  }, []);

  const { Content } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content
          style={{
            margin: 0,
            padding: 24,
            background: "#fff",
          }}
        >
          <h1>Main Content</h1>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
