// Gráfico de Tecnologias
const ctx = document.getElementById('graficoTecnologias').getContext('2d');
const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Python', 'SQL', 'Power BI', 'TensorFlow', 'JavaScript', 'Node.JS', 'Pandas', 'Scikit-learn', 'Pytorch'],
    datasets: [{
      label: 'Nível de Proficiência (0-10)',
      data: [9, 8, 7, 6, 5, 5, 8, 7, 6],
      backgroundColor: 'rgba(0, 255, 255, 0.6)',
      borderColor: 'rgba(0, 255, 255, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          color: '#ffffff'
        },
        grid: {
          color: '#444'
        }
      },
      x: {
        ticks: {
          color: '#ffffff'
        },
        grid: {
          color: '#444'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff'
        }
      }
    }
  }
});
