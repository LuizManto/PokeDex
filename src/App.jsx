import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
        <Link to="/"><button class="btnestilo">Home</button></Link>
        <Link to="/list"><button class="btnestilo">Lista</button></Link>
        <Link to="/search"><button class="btnestilo">Buscar</button></Link>
      <Outlet />
      <h1>Pokédex</h1>
      <p>Projeto em React consumindo API de Pokémon</p>
    </div>
  );
}

export default App;
