/* ======================
   CONFIGURACIÓN
====================== */
const blue = '#1800ad';
const blueLight = 'rgba(24,0,173,0.12)';
const defaults = { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false } } };

/* ======================
   INICIALIZACIÓN DE GRÁFICOS (Chart.js)
====================== */
// Chart 1: Barras frecuencia
if (document.getElementById('chartBar')) {
  new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
      labels: ['6 cm', '7 cm', '8 cm'],
      datasets: [{ data: [4, 5, 1], backgroundColor: [blue, blue, blueLight], borderRadius: 6 }]
    },
    options: { ...defaults, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: blueLight } }, x: { grid: { display: false } } } }
  });
}

// Chart 2: Línea variación
if (document.getElementById('chartLine')) {
  new Chart(document.getElementById('chartLine'), {
    type: 'line',
    data: {
      labels: ['1','2','3','4','5','6','7','8','9','10'],
      datasets: [{ data: [6,8,7,7,7,6,6,7,6,7], borderColor: blue, backgroundColor: 'rgba(24,0,173,0.08)', fill: true, tension: 0.4, pointBackgroundColor: blue, pointRadius: 4 }]
    },
    options: { ...defaults, scales: { y: { min: 5, max: 9, grid: { color: blueLight } }, x: { grid: { display: false } } } }
  });
}

// Chart 3: Histograma
if (document.getElementById('chartHist')) {
  new Chart(document.getElementById('chartHist'), {
    type: 'bar',
    data: {
      labels: ['5.5–6.5', '6.5–7.5', '7.5–8.5'],
      datasets: [{ data: [4, 5, 1], backgroundColor: [blueLight, blue, blueLight], borderRadius: 4 }]
    },
    options: { ...defaults, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: blueLight } }, x: { grid: { display: false } } } }
  });
}

// Chart 4: Dispersión
if (document.getElementById('chartScatter')) {
  new Chart(document.getElementById('chartScatter'), {
    type: 'scatter',
    data: {
      datasets: [{
        data: [{x:1,y:6},{x:2,y:8},{x:3,y:7},{x:4,y:7},{x:5,y:7},{x:6,y:6},{x:7,y:6},{x:8,y:7},{x:9,y:6},{x:10,y:7}],
        backgroundColor: blue, pointRadius: 6
      }, {
        data: [{x:0,y:6.7},{x:11,y:6.7}],
        type: 'line', borderColor: 'rgba(24,0,173,0.35)', borderDash: [5,5], pointRadius: 0, fill: false
      }]
    },
    options: { ...defaults, scales: { y: { min: 5, max: 9, grid: { color: blueLight } }, x: { min: 0, max: 11, grid: { display: false } } } }
  });
}

/* ======================
   VARIABLES
====================== */
// (No moving JS variables beyond charts were present in the HTML.)

/* ======================
   FUNCIONES
====================== */
// (All JS logic from Arduino sketch is C++ and intentionally not included here.)

/* ======================
   INICIALIZACIÓN
====================== */
// Charts initialized above when DOM includes canvas elements.
