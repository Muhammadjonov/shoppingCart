import React, { Component } from "react";
import "antd/dist/antd.css";
import { Card, Button, Row, Col } from "antd";
import "./style.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

export class Card1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.superState.meals.map((meal) => {
        meal.count = meal.count || 0;
        return meal;
      }),
      basket: {
        content: [],
        totalPrice: 0,
      },
    };
  }

  increment = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          item.count++;
          return item;
        }
        return item;
      }),
    });
  };

  decrement = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          item.count--;
          return item;
        }
        return item;
      }),
    });
  };

  // addToCart(product, count) {
  //   this.setState({
  //     basket: {
  //       ...this.state.basket,
  //       content: [
  //         ...this.state.basket.content,
  //         {
  //           id: product.id,
  //           title: product.title,
  //           count: count,
  //           mealPrice: product.price,
  //         },
  //       ],
  //       totalPrice: this.state.basket.totalPrice + count * product.price,
  //     },
  //   });
  //   this.props.setTotalElements(count);
  // }

  render() {
    window.stata = this.state;
    const { meals } = this.props.superState;

    return (
      <>
        <Row gutter={24} style={{ marginTop: "30px", padding: "0 30px" }}>
          {meals.map((item, index) => (
            <Col key={item.id} span={4}>
              <Card
                title={`${item.title}  ${item.price}`}
                hoverable
                cover={
                  <img
                    alt="osh"
                    src={item.source}
                    style={{
                      height: "200px",
                      maxWidth: "250px",
                      margin: "0 auto",
                    }}
                  />
                }
              >
                <p className="text-p">{item.description}</p>
                <React.Fragment>
                  <Button
                    type="default"
                    onClick={() => this.decrement(item.id)}
                    size="medium"
                    disabled={this.state.items[index].count < 2}
                    shape="circle"
                  >
                    -
                  </Button>
                  <span style={{ padding: "0 5px" }}>
                    {this.state.items[index].count}
                  </span>
                  <Button
                    type="default"
                    onClick={() => this.increment(item.id)}
                    size="medium"
                    shape="circle"
                    disabled={this.state.items[index].count > 19}
                  >
                    +
                  </Button>
                  <i
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      fontWeight: "600",
                    }}
                  >
                    max 20{" "}
                  </i>
                  <Button
                    type="primary"
                    onClick={() =>
                      this.props.addToCart(item, this.state.items[index].count)
                    }
                  >
                    Add to Cart
                    <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                  </Button>
                  <b />
                  <h2>{this.state.items[index].count * item.price}</h2>
                </React.Fragment>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Card1;
