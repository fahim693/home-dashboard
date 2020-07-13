import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '../Card/Card'
import { TrendingUpRounded } from '@material-ui/icons';
import 'chartjs-plugin-datalabels'

var yLabels = {
    0: '0',
    20: '$5K',
    40: '$10K',
    60: '$15K',
    80: '$20K',
}

const data = {
    labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'],
    datasets: [{
        label: '$',
        data: [3600 * 0.004, 10200 * 0.004, 4800 * .004, 5200 * .004, 18600 * .004, 10400 * .004],
        categoryPercentage: 0.5,
        barPercentage: 1.0,
        backgroundColor: [
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
        ],
        borderColor: [
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
            '#8BDCB3',
        ],
        borderWidth: 1,
    }]
}
const dataTooltip = ['$3.6K', '$10.2K', '$4.8K', '$5.2K', '$18.6K', '$10.4K']
const options = {
    plugins: {
        datalabels: {
            color: '#fff',
            font:{
                weight: '500'
            },
            formatter: function (value, context) {
                return dataTooltip[context.dataIndex];
            },
            anchor: 'end',
            align: 'bottom',
        }

    },
    tooltips: {
        callbacks: {
            title: function (tooltipItems, data) {
                return '';
            },
            label: function (tooltipItem, data) {
                return dataTooltip[tooltipItem.index];
            }
        }
    },
    layout: {
        padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
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
                max: 80,
                callback: function (value, index, values) {
                    return yLabels[value];
                }
            }
        }]
    }
}

const SalesChart = () => {
    return (
        <Card
            title="Sales"
            withSubTitle={true}
            icon={<TrendingUpRounded className="main-title-icon" />}
            cardType={4}
        >
            <div >
                <Bar
                    height={120}
                    data={data}
                    options={options} />
            </div>
        </Card>
    )
}

export default SalesChart;