import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Link to="/products">Prodotti</Link>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
