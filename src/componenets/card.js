import React from "react";
import { Card } from 'antd';

function App() {
  return (
    <div>
      <div className="main">
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>Olx-Card</h1>
        <div className="container">
        <Card style={{ width: 300, height: 330, position: "relative", left:"50px", top:"20px", }}>
          <div className="row">
            <div className="col-3 olx-images">
              <img src="https://images.olx.com.pk/thumbnails/302632468-240x180.webp" style={{objectFit: "cover"}} alt="" />
              <h6>Honda C-HR Hybrid Battery Available And Repairing</h6>
              <h1>Rs 10,500</h1>
              <p>DHA Phase 2,Karachi- 1 week ago</p>
              
            </div>
          </div>
        </Card>
      </div>
    </div>
    </div>
  );
}

export default App;
