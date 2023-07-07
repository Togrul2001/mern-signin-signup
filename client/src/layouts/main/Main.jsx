import React from "react";
import Navbar from "./components/Navbar";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <Layout>
      <Navbar/>
      <Layout className="h-screen">
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>

      {/* <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
}

export default Main;
