import React from "react";
import { DatePicker, Button, Space } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "50px 20px 10px 20px" }}>
      <h1>
        Home page here <CloseSquareOutlined />
      </h1>
      <h2>
        <Link to="/"> return home</Link>
      </h2>
      <div className="App" style={{ background: "lightgray" }}>
        <DatePicker />

        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
        </Space>
      </div>
    </div>
  );
}
