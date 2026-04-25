import { Link, Outlet } from "react-router-dom";
import "../App.jsx";

function Home() {
  return (
    <div className="home">
      <h1>Pokédex Interativa</h1>
      <p>Projeto em React consumindo API de Pokémon</p>
      <p>Bem-vindo à Pokédex Interativa! Este projeto foi desenvolvido utilizando React e integra uma API de Pokémon para fornecer informações detalhadas de forma dinâmica e intuitiva.

        Aqui você poderá explorar uma lista completa de Pokémon, visualizar detalhes individuais e utilizar a busca para encontrar rapidamente seu Pokémon favorito. Além disso, o sistema permite selecionar um Pokémon inicial, tornando a experiência mais personalizada desde o início.

        O objetivo deste projeto é demonstrar a integração com APIs externas, manipulação de dados em tempo real e construção de interfaces modernas e responsivas.

        Sinta-se à vontade para navegar, explorar e descobrir tudo sobre o universo Pokémon!</p>
    </div>
  );
}

export default Home;