const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '# of Votes for X president',
        data: [12, 19, 3, 5, 2, 3, 1000],
        borderWidth: 1
      },
      {
        label: '# of Votes for Y president',
        data: [10, 23, 4, 1, 9, 13, 1200],
        borderWidth: 1
      }
  ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

