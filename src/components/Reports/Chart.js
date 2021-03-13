import { Card, CardContent } from '@material-ui/core';
import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
    labels: ["Jan 30, 2020", "Jan 31, 2020", "Feb 02, 2020", "Feb 03, 2020", "Feb 04, 2020", "Feb 05, 2020", "Feb 06, 2020", "Feb 07, 2020", "Feb 08, 2020"],
    datasets: [
        {
            data: [0, 30, 78, 45, 28, 36, 67, 33, 45],
            fill: true,
            backgroundColor: "rgba(98, 199, 150, 0.16)",
            borderColor: "#62C796",
            pointBorderColor: '#fff',
            pointBackgroundColor: '#4BCA81',
            pointBorderWidth: 2,
            pointRadius: 5,
        }
    ]
};

var yLabels = {
    0: '0.00',
    20: '$10.00',
    40: '$20.00',
    60: '$30.00',
    80: '$40.00',
    100: '$50.00',
}
const options = {
    plugins: {
        datalabels: {
            formatter: function (value, context) {
                return "";
            }
        }
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 100,
                callback: function (value, index, values) {
                    return yLabels[value];
                }
            }
        }]
    }
}

const Chart = () => {
    return (
        <Card>
            <CardContent >
                <div style={{ padding: 22 }}>
                    <Line data={data} height={100} options={options} />
                </div>
            </CardContent>
        </Card>
    )
}

export default Chart;