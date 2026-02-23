// Ejemplo 1 
document.getElementById('btnHablar').onclick = function() {
  alert('Hola! Humano 😃');
};

// Ejemplo 2 
document.getElementById('btnCambiarTexto').onclick = function() {
  document.getElementById('mensaje').innerText = '¡El texto ha cambiado usando JS desde un archivo externo!';
};

/* Explicación:
   - Este archivo externo contiene toda la lógica JS.
   - HTML queda limpio, solo con estructura y elementos.
   - getElementById y innerText funcionan igual que antes.
   - Mejor práctica en proyectos reales: mantener JS separado del HTML.
*/