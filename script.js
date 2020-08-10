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
calcularPrecioTotal();

function inicializar() {
  buttonAdd.addEventListener('click', addAlfombraToArray);
  buttonDel.addEventListener('click', borrarListado);
}

function addAlfombraToArray() {
  inputPais = document.getElementById("input_pais");
  inputPrecio = document.getElementById("input_precio");
  inputStock = document.getElementById("input_stock");
  var errorMsg = document.querySelector(".error_msg");

  if (inputPais.value != "" && inputPrecio.value != "") {
    paises[paises.length] = inputPais.value;
    precios[precios.length] = inputPrecio.value;
    enStock[enStock.length] = inputStock.value;
    errorMsg.textContent = "";
    pintarTabla();
    contadorAlfombras();
    calcularPrecioTotal();
    inputPais.value = "";
    inputPrecio.value = "";
  } else {
    errorMsg.textContent = "Los campos de País y Precio son obligatorios";
  }
}

function pintarTabla() {
  var htmlTR = "";
  htmlTR += estructuraTabla();
  tbodyAlfombras.innerHTML += htmlTR;
}

function estructuraTabla() {
  return "<tr><td>" + paises[paises.length - 1] + " </td><td>" + precios[precios.length - 1] + " € </td><td>" + tieneStock() + "</td></tr>";
  //se añade el length - 1 porque queremos pintar los elementos que YA ESTÁN EN LA ARRAY cuyo index es la longitud de la array menos una posición.
}

function tieneStock() {
  if (inputStock.checked) {
    return "SÍ";
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
  calcularPrecioTotal();
  contadorAlfombras();
  document.getElementById("input_pais").value = "";
  document.getElementById("input_precio").value = "";
  document.querySelector(".error_msg").textContent = "";
}

function calcularPrecioTotal() {
  var calc = parseFloat(0);
  var inputPrecioTotal = document.getElementById('precio_total');

  for (let i = 0; i < precios.length; i++) {
    calc += parseFloat(precios[i]);
  }
  inputPrecioTotal.value = calc + "€";
}