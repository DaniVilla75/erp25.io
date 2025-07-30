// Carga la navegación y el primer módulo
window.onload = () => {
  fetch('modules/nav.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  cargarModulo('introduccion.html');
};

function cargarModulo(modulo) {
  fetch(`modules/${modulo}`)
    .then(res => res.text())
    .then(data => document.getElementById('main-content').innerHTML = data);
}
