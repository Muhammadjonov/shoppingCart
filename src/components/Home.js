import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Card1 from "./Card1";
import Cart from "./Cart";
import { Switch, Row, Col, Button } from "antd";
import { CarTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch as Svitch,
  Route,
  Link,
} from "react-router-dom";
import "./style.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.setTotalElements = this.setTotalElements.bind(this);
    this.clearTotalElements = this.clearTotalElements.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.clearElement = this.clearElement.bind(this);
    this.state = {
      meals: [
        {
          id: 0,
          title: "Osh",
          price: 15000,
          source: "/img/osh.png",
          description:
            "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi.",
        },
        {
          id: 1,
          title: "Lag'mon",
          price: 15000,
          source: "/img/lagmon.png",
          description:
            "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi.",
        },

        {
          id: 2,
          title: "Sho'rva",
          price: 15000,
          source: "/img/shorva.png",
          description:
            "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi.",
        },

        {
          id: 3,
          title: "Chuchvara",
          price: 15000,
          source: "/img/chuchvara.png",
          description:
            "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi.",
        },

        {
          id: 4,
          title: "Grill",
          price: 35000,
          source: "/img/tabaka.png",
          description:
            "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi.",
        },

        {
          id: 5,
          title: "Baliq",
          price: 30000,
          source: "/img/baliq.png",
          description:
            "Masalligʻi va tayyorlanish uslubi boʻyicha xilma-xil turlarga boʻlinadi va har bir mamlakatda oʻzgacha tarzda tayyorlanadi. Taom asosini guruch tashkil etadi. Ushbu masalliqdan tashqari yogʻ, goʻsht, sabzi, piyoz va boshqa masalliqlar ishlatiladi.",
        },
      ],
      theme: { mode: "light" },
      totalElements: 0,
      basket: {
        content: [],
        totalPrice: 0,
      },
    };
  }
  setTotalElements(count) {
    this.setState({ totalElements: this.state.totalElements + count });
  }

  clearTotalElements() {
    this.setState({
      totalElements: 0,
      basket: {
        totalPrice: 0,
        content: [],
      },
    });
  }

  clearElement(item) {
    this.setState({
      totalElements: this.state.totalElements - item.count,
      basket: {
        content: this.state.basket.content.filter((el) => el.id !== item.id),
        totalPrice: this.state.basket.totalPrice - item.mealPrice * item.count,
      },
    });
  }

  addToCart(product, count) {
    let { content: items } = this.state.basket;
    let item = items.find((i) => i.id === product.id);

    if (item) {
      item.count += count;
      this.setState({
        basket: {
          ...this.state.basket,
          totalPrice: this.state.basket.totalPrice + count * product.price,
        },
      });
    } else {
      this.setState({
        basket: {
          ...this.state.basket,
          content: [
            ...this.state.basket.content,
            {
              id: product.id,
              title: product.title,
              count: count,
              mealPrice: product.price,
            },
          ],
          totalPrice: this.state.basket.totalPrice + count * product.price,
        },
      });
    }
    this.setTotalElements(count);
  }

  render() {
    // const { props } = this.props;
    const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${(props) =>
        props.theme.mode === "dark" ? "#111" : "#EEE"};
      color: ${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")}
    
    }
    button {
        background-color:${(props) =>
          props.theme.mode === "dark" ? "#111" : "#EEE"}
      }
    `;

    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Row gutter={12} justify="start" style={{ padding: "20px" }}>
              <Col span={12}>
                <Link to="/" style={{ fontSize: "25px" }}>
                  Home
                </Link>
                <Link to="/cart">
                  <button style={{ position: "relative" }}>
                    <ShoppingCartOutlined style={{ fontSize: "40px" }} />
                    <i className="cart_counter">
                      {this.state.basket.content
                        .map((item) => item.count)
                        .reduce((a, c) => a + c, 0)}
                    </i>
                  </button>
                </Link>
              </Col>
              <Col span={12}>
                <Switch
                  checkedChildren="dark"
                  unCheckedChildren="light"
                  defaultChecked
                  onClick={() => this.setState()}
                />
              </Col>
            </Row>
            <>
              <Svitch>
                <Route exact path="/">
                  <Card1 superState={this.state} addToCart={this.addToCart} />
                </Route>
                <Route path="/cart">
                  <Cart
                    totalElements={this.state.totalElements}
                    clearTotalElements={this.clearTotalElements}
                    basket={this.state.basket}
                    clearElement={this.clearElement}
                  />
                </Route>
              </Svitch>
            </>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
