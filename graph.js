var ctx = document.getElementById('myBarChart').getContext('2d');

        var data = {
            labels: [" 20"," ", " 21","", " 22"," ","23"," ","24"," "," 25"," ", " 26"],
            datasets: [
                {
                    label: 'Employer: K 73500',
                    backgroundColor:'rgba(8, 0, 163, 1)',
                    data: [10,15,20,24,30,40,50,55,60,65,70,80,90]
                },
                {
                    label: 'Emploayer: K 52,500',
                    backgroundColor: 'rgba(73, 53, 255, 1)',
                    data: [10,15,20,24,30,40,50,55,60,65,70,80,90]
                },
                {
                    label: 'Employer: K 244,313',
                    backgroundColor: 'rgba(133, 175, 255, 1)',
                    data: [10,15,20,24,30,40,50,55,60,65,70,80,90]
                },
                // Add more datasets as needed
            ]
        };

        var options = {
            scales: {
                x: { 
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Categories'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Values'
                    }
                }
            }
        };

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
        