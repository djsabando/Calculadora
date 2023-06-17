

let funcionPredeterminada = () =>{
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)


        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value)
        let testingHoras = parseFloat(document.getElementById('testingHoras').value)
        let estructuraHtml = parseFloat(document.getElementById('estructuraHtml').value)
        let estilos = parseFloat(document.getElementById('estilos').value)
        let logicJS = parseFloat(document.getElementById('logicJS').value)
        let adicionales = parseFloat(document.getElementById('adicionales').value)


        let resultado = (interfazHoras + testingHoras + estructuraHtml + estilos + logicJS + adicionales) * valorPorHora

        document.getElementById('valorTotal').value = resultado
      })

}
funcionPredeterminada();