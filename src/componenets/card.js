import React from "react";
import { Card } from "antd";
import { FiHeart } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <div className="main">
        <Container>
      <Row>
        <Col>
            <div className="olx-images">
          <Card
            style={{
              width: 300,
              height: 330,
              position: "relative",
              left: "50px",
              top: "20px",
            }}
          >
                <img
                  src="https://images.olx.com.pk/thumbnails/302632468-240x180.webp"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <h6>Honda C-HR Hybrid Battery Available And Repairing</h6>
                <FiHeart className="heart" />
                <h1>Rs 10,500</h1>
                <p>DHA Phase 2,Karachi- 1 week ago</p>
          </Card>
        </div>
        </Col>
      </Row>
    </Container>
      </div>
    </div>
  );
}

export default App;
