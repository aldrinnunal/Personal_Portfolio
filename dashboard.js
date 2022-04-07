
//  DASBOARD TOGGLE
$('.toggler').click(function(){
   
    $('.togglerWrapper').toggleClass('openToggle');
    $('.sidebar').toggleClass('sidebarHide');
    $('.main').toggleClass('mainWide');
});

// NIGHTMODE
$('.darkmode__track').click(function(){
    $('.darkmode__ball').toggleClass('nightmode');
    $(this).toggleClass('darktrack');
    $('body').toggleClass('darkbody');
    $('.cards').toggleClass('darkcards');
    $('.cards1').toggleClass('darkcards');
    $('h3').toggleClass('darkh3');
    $('.bar').toggleClass('darktoggle');
    $('.fa-envelope').toggleClass('darkh3');
    $('.fa-bell').toggleClass('darkh3');
  
   
    
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

