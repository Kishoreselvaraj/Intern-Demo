var ctx1 = document.getElementById('donutChart1').getContext('2d');
var ctx2 = document.getElementById('donutChart2').getContext('2d');
var ctx3 = document.getElementById('donutChart3').getContext('2d');

var data1 = {
    labels: ['Donation 1'],
    datasets: [{
        data: [78, 22],
        backgroundColor: ['rgba(74, 220, 184)', 'rgba(211, 247, 238,1)'],
        hoverOffset: 4,
    }]
};

var data2 = {
    labels: ['Donation 2'],
    datasets: [{
        data: [95, 5],
        backgroundColor: ['rgba(74, 220, 184)', 'rgba(211, 247, 238,1)'],
        hoverOffset: 4,
    }]
};

var data3 = {
    labels: ['Donation 3'],
    datasets: [{
        data: [59, 41],
        backgroundColor: ['rgba(74, 220, 184)', 'rgba(211, 247, 238,1)'],
        hoverOffset: 4,
    }]
};

var options = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false,
        }
    },
    cutout: 60, // Adjust the cutout value to control the thickness
};

var donutChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: data1,
    options: options
});

var donutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: data2,
    options: options
});

var donutChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: data3,
    options: options
});