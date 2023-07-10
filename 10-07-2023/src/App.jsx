import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="#">
        <h1>LOGO</h1>
      </a>
      <a href="#" className="nav-link">
        Home
      </a>
      <a href="#" className="nav-link">
        About
      </a>
      <a href="#" className="nav-link">
        Contacts
      </a>
      <Link to="/locations">Locations</Link>
      <Link to="/products">Prodotti</Link>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
