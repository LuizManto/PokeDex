import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <Link to="/"><button className="btnestilo">Home</button></Link>
        <Link to="/list"><button className="btnestilo">Lista</button></Link>
        <Link to="/search"><button className="btnestilo">Buscar</button></Link>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
