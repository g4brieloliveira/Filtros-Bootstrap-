var precoPagina = document.getElementById('value')

var preco = 100

function luts() {
  if (document.getElementById('luts').checked) {
    preco += 30
  } else {
    preco -= 30
  }

  precoPagina.textContent = preco
}

function noise() {
  if (document.getElementById('noise').checked) {
    preco += 15
  } else {
    preco -= 15
  }

  precoPagina.textContent = preco
}

function makes() {
  if (document.getElementById('makes').checked) {
    preco += 50
  } else {
    preco -= 50
  }

  precoPagina.textContent = preco
}

function cilios() {
  if (document.getElementById('cilios').checked) {
    preco += 30
  } else {
    preco -= 30
  }

  precoPagina.textContent = preco
}

function dentes() {
  if (document.getElementById('dentes').checked) {
    preco += 20
  } else {
    preco -= 20
  }

  precoPagina.textContent = preco
}

function dust() {
  if (document.getElementById('dust').checked) {
    preco += 15
  } else {
    preco -= 15
  }

  precoPagina.textContent = preco
}

function kirakira() {
  if (document.getElementById('kirakira').checked) {
    preco += 40
  } else {
    preco -= 40
  }

  precoPagina.textContent = preco
}

function deformacao() {
  if (document.getElementById('deformacao').checked) {
    preco += 150
  } else {
    preco -= 150
  }

  precoPagina.textContent = preco
}