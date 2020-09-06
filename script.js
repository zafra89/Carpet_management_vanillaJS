var paises = new Array();
var precios = new Array();
var enStock = new Array();
var tbodyAlfombras = document.getElementById("tbody_alfombras");
var buttonAdd = document.getElementById("button_add");
var buttonDel = document.getElementById("button_clean");
var buttonCalc = document.getElementById("button_calc");

var inputPais, inputPrecio, inputStock, errorMsg

inicializar();

function inicializar() {
  buttonAdd.addEventListener('click', addAlfombraToArray);
  buttonDel.addEventListener('click', borrarListado);
  contadorAlfombras();
  //calcularPrecioTotal();
}

function addAlfombraToArray() {
  inputPais = document.getElementById("input_pais");
  inputPrecio = document.getElementById("input_precio");
  inputStock = document.getElementById("input_stock");
  errorMsg = document.querySelector(".error_msg");

  if (validarPais() && validarPrecio()) {
    paises[paises.length] = inputPais.value;
    precios[precios.length] = inputPrecio.value;
    pintarTabla();
    contadorAlfombras();
    calcularPrecioTotal();
    inputPais.value = "";
    inputPrecio.value = "";
  } /*else if (!validarPais() && !validarPrecio()) {
    errorMsg.innerHTML = 'Introduce un país y un precio válidos';
  }*/
}

function validarPais() {
  if (inputPais.value != null && inputPais.value != '' && inputPais.value.length > 1) {
    errorMsg.innerHTML = '';
    return true;
  } else {
    errorMsg.innerHTML = 'Introduce un país válido';
    return false;
  }
}

function validarPrecio() {
  if (typeof(parseFloat(inputPrecio.value)) == 'number' && inputPrecio.value > 0) {
    errorMsg.innerHTML = '';
    return true;
  } else {
    errorMsg.innerHTML = 'Introduce un precio válido';
    return false;
  }
}

function pintarTabla() {
  var htmlTR = "";
  htmlTR += estructuraTabla();
  tbodyAlfombras.innerHTML += htmlTR;
}

function estructuraTabla() {
  return "<tr><td>" + paises[paises.length - 1]
   + " </td><td>" + precios[precios.length - 1]
   + " € </td><td>" + (inputStock.checked? "SÍ" : "NO") + "</td></tr>";
}

function contadorAlfombras() {
  var inputNumAlfombras = document.getElementById('input_total');
  inputNumAlfombras.value = paises.length + ' alfombras';
}

function borrarListado() {
  tbodyAlfombras.innerHTML = ``;
  precios = [];
  paises = [];
  enStock = [];
  calcularPrecioTotal();
  contadorAlfombras();
  inputPais.value = "";
  inputPrecio.value = "";
  inputStock.checked = false;
  errorMsg.textContent = "";
}

function calcularPrecioTotal() {
  //var calc = precios.reduce((a, b) => parseFloat(a) + parseFloat(b)); // CON REDUCE
  var calc = parseFloat(0)
  var inputPrecioTotal = document.getElementById('precio_total');
  for (let i = 0; i < precios.length; i++) {                        //CON UN FOR LOOP
    calc += parseFloat(precios[i]);
  }
  inputPrecioTotal.value = calc + "€";
}