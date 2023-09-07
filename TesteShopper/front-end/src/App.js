import React from "react";
import logo from "./logo.svg";
import LeitorCSV from "./Component/LeitorCSV";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Cabeçalho do aplicativo */}
      <header className="App-header">
        {/* Logotipo do aplicativo */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Título do aplicativo */}
        <h3>Leitor de Arquivos .CSV Shopper</h3>

        {/* Componente LeitorCSV para carregar e exibir dados CSV */}
        <LeitorCSV />

        {/* Botões de ação */}
        <div>
          <button>Validar</button>
          <button>Atualizar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
