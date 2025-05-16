function converter() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const tipoConversao = document.getElementById("unitSelect").value;
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(temp)) {
      resultadoDiv.innerHTML = "❗ Por favor, insira um número válido.";
      return;
    }
  
    let resultado;
    if (tipoConversao === "cToF") {
      resultado = (temp * 9/5) + 32;
      resultadoDiv.innerHTML = `${temp}°C = ${resultado.toFixed(2)}°F`;
    } else {
      resultado = (temp - 32) * 5/9;
      resultadoDiv.innerHTML = `${temp}°F = ${resultado.toFixed(2)}°C`;
    }
  }
  