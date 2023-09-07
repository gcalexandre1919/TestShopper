import React from 'react';
import ReactDOM from 'react-dom'; // Importação corrigida para ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cria uma raiz (root) React no elemento com o ID 'root' no documento HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do modo StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um ponto de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
