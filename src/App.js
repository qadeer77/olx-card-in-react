import "./App.css";
import Cards from "./componenets/card";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Olx-Card</h1>
      <Cards imgurl="https://images.olx.com.pk/thumbnails/240818816-240x180.webp" />
    </div>
  );
}

export default App;
