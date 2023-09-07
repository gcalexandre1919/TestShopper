// Define a função reportWebVitals que aceita uma função onPerfEntry como argumento
const reportWebVitals = onPerfEntry => {
  // Verifica se onPerfEntry é uma função e se foi fornecida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa as funções de medição de desempenho do módulo 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama cada função de medição de desempenho e passa a função onPerfEntry como callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exporta a função reportWebVitals para uso em outros locais
export default reportWebVitals;
