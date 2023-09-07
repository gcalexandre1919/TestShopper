import React, { useState } from "react";
import Papa from "papaparse";

function LeitorCSV() {
  // State para armazenar os dados do CSV
  const [csvData, setCsvData] = useState([]);

  // Função para lidar com o upload do arquivo CSV
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        // Define os dados CSV no estado
        setCsvData(result.data);

        // Exibe os dados no console para verificação
        console.log(result);
        console.log(result.data);
      },
      header: true, // Se o CSV tiver cabeçalho
    });
  };

  return (
    <div>
      <h2>Leitor de Arquivos CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {csvData[0] &&
              Object.keys(csvData[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeitorCSV;
