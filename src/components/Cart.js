import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const { Title } = Typography;

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) =>
        props.theme.mode === "dark" ? "#111" : "#EEE"};
      color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")}
    
    }

    Col{
      background-color: ${(props) =>
        props.theme.mode === "dark" ? "#111" : "#EEE"};
      color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")}
    
    }
    
    button {
        background-color:${(props) =>
          props.theme.mode === "dark" ? "#111" : "#EEE"}
      }
    `;

function Cart(props) {
  const [theme, setTheme] = useState({ mode: "light" });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Row>
          <Col md={12}>
            <Title level={2}>
              Tanlangan mahsulotlar soni -{" "}
              {props.basket.content
                .map((item) => item.count)
                .reduce((a, c) => a + c, 0)}{" "}
              (ta)
            </Title>
          </Col>
          <Col md={8}>
            <Title level={2}>Total - {props.basket.totalPrice} (so'm)</Title>
          </Col>
          <Col md={4}>
            <button onClick={props.clearTotalElements}>
              <DeleteOutlined style={{ fontSize: "30px", color: "#ff4747" }} />
            </button>
          </Col>
        </Row>
        {props.basket.content.map((item, index) => (
          <Row key={index}>
            <Col md={12}>
              <Title level={2}>
                {item.title} - {item.count}
              </Title>
            </Col>
            <Col md={8}>
              <Title level={2}>
                narxi - {item.count * item.mealPrice} (so'm)
              </Title>
            </Col>
            <Col md={4}>
              <button onClick={() => props.clearElement(item)}>
                <DeleteOutlined
                  style={{ fontSize: "30px", color: "#ff4747" }}
                />
              </button>
            </Col>
          </Row>
        ))}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Cart;
