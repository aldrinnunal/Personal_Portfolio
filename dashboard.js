
// BURGER TOGGLE
$('.toggler').click(function(){
   
    $('.togglerWrapper').toggleClass('openToggle');
    $('.sidebar').toggleClass('sidebarHide');
    $('.main').toggleClass('mainWide');

});

// CHART JS
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Apartment', 'Condo', 'Loft', 'PentHouse'],
        datasets: [{
            label: 'Real Estates',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

