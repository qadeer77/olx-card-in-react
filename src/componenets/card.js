import React from "react";
import { Card, Col, Row } from "antd";
import { FiHeart } from "react-icons/fi";
import { Button } from "antd";

const Cards = (props) => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false}>
          <img
            className="image"
            src="https://images.olx.com.pk/thumbnails/302632468-240x180.webp"
            style={{ objectFit: "cover" }}
            alt=""
          />
          <Button type="primary" className="button" danger>
            FEATURED
          </Button>
          <h6>Honda C-HR Hybrid Battery Available And Repairing</h6>
          <FiHeart className="heart" />
          <h1>Rs 10,500</h1>
          <p>DHA Phase 2,Karachi- 1 week ago</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <img
            className="image"
            src="https://images.olx.com.pk/thumbnails/306263504-240x180.webp"
            style={{ objectFit: "cover" }}
            alt=""
          />
          <h6>Corner Shape Sofa set karachi malir city tariq</h6>
          <FiHeart className="heart" />
          <h1>Rs 70,000</h1>
          <p>Arra Tulla Road,Sahiwal- 2 minute ago</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <img
            className="image"
            src="https://images.olx.com.pk/thumbnails/303982056-240x180.webp"
            style={{ objectFit: "cover" }}
            alt=""
          />
          <Button type="primary" className="button" danger>
            FEATURED
          </Button>
          <h6>OnePlus 7Pro DUAL SIM and single sim also</h6>
          <FiHeart className="heart" />
          <h1>Rs 55,000</h1>
          <p>Gulburg 3,Karachi- 1 sec ago</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          {" "}
          <img
            className="image"
            src="https://images.olx.com.pk/thumbnails/306263479-240x180.webp"
            style={{ objectFit: "cover" }}
            alt=""
          />
          <h6>Stylish fitting wool court for men in 17 and 18 inch shoulder</h6>
          <FiHeart className="heart" />
          <h1>Rs 19,00</h1>
          <p>DHA market 4,Rawalpindi- 1 hour ago</p>
        </Card>
      </Col>
    </Row>
  </div>
);
export default Cards;
