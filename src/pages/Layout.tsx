import React from "react";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";

import { Layout } from "antd";
import { Link } from "react-router-dom";

export default function LayoutBase() {
  return (
    <div style={{ padding: "50px 20px 10px 20px" }}>
      <h1>Navbar</h1>
      <Link to="/home">Home</Link>
      <Layout className="bg-slate-100">
        <Outlet />
      </Layout>
    </div>
  );
}
