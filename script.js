var paises = new Array();
var precios = new Array();
var enStock = new Array();
var tbodyAlfombras = document.getElementById("tbody_alfombras");
var buttonAdd = document.getElementById("button_add");
var buttonDel = document.getElementById("button_clean");
var buttonCalc = document.getElementById("button_calc");

var inputPais, inputPrecio, inputStock;

inicializar();
contadorAlfombras();

function inicializar() {
  buttonAdd.addEventListener('click', addAlfombraToArray);
  buttonDel.addEventListener('click', borrarListado);
  buttonCalc.addEventListener('click', calcularPrecioTotal);
}

function addAlfombraToArray() {
  inputPais = document.getElementById("input_pais");
  inputPrecio = document.getElementById("input_precio");
  inputStock = document.getElementById("input_stock");

  paises[paises.length] = inputPais.value; //se añade a la array el valor de los inputs
  precios[precios.length] = inputPrecio.value;
  enStock[enStock.length] = inputStock.value;
  pintarTabla();
  contadorAlfombras();
}

function pintarTabla() {
  var htmlTR = "";
  htmlTR += estructuraTabla();
  tbodyAlfombras.innerHTML += htmlTR;
}

function estructuraTabla() {
  return "<tr><td>" + paises[paises.length - 1] + " </td><td>" + precios[precios.length - 1] + " € </td><td>" + tieneStock() + "</td></tr>";
  //se añade el length - 1 porque queremos pintar el elemento que ya está en la array cuyo index es la longitud de la array menos una posición
}

function tieneStock() {
  if(inputStock.checked) {
    return "SI";
  } else {
    return "NO";
  }
}

function contadorAlfombras() {
  var inputNumAlfombras = document.getElementById('input_total');
  inputNumAlfombras.value = paises.length;
}

function borrarListado() {
  tbodyAlfombras.innerHTML = ``;
  precios = [];
  paises = [];
  enStock = [];
  contadorAlfombras();
  calcularPrecioTotal();
}

function calcularPrecioTotal() {
  var parPrecioTotal = document.querySelector('.precio-total');
  var calc = parseFloat(0);

  for (let i = 0; i < precios.length; i++) {
    calc += parseFloat(precios[i]);
  }
  parPrecioTotal.textContent = "El precio total de las alfombras es: " + calc + "€";
}