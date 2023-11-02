fetch('data.json')

.then(response => response.json())
.then(data => {
    const labels = data.map(item => item.day);
    const chartData = data.map(item => item.amount);

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount',
                data: chartData,
                backgroundColor: 'hsl(10, 79%, 65%)',
                borderRadius: 5,
                hoverBackgroundColor: 'hsl(186, 34%, 60%)'
            }]
        },
        options: {
            events: ['click' , 'mousemove'],
            plugins: {
                legend: {
                  display: false,
                  title: {
                    display: false
                  }  
                },
                tooltip: {
                    enabled: true,
                    event: ['click'],
                    backgroundColor: 'hsl(25, 47%, 15%)',
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y
                        },
                    }
                },

            },
            scales: {
                y: {
                    display: false,
                    grid: {
                      display: false,
                        },
                    ticks: {
                        display: false
                         },
                    beginAtZero: true
                    
                    },
                x: {
                    grid: {
                    display: false,
                    border: {
                        display: false
                    }
                    }
                }
            },
        } 
    });
})

.catch(error => console.error('Error fetching the JSON data:', error));