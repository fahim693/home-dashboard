import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from '../Card/Card'
import { ReceiptRounded } from '@material-ui/icons';

const data = {
    labels: ['WON', 'LOST', 'OPEN'],
    datasets: [{
        label: '# of Votes',
        data: [60, 25, 15],
        backgroundColor: [
            '#6CBEBF',
            '#F2A254',
            '#54A2E5'
        ],
        borderColor: [
            '#6CBEBF',
            '#F2A254',
            '#54A2E5'
        ],
        borderWidth: 1,
    }]
}

const dataTooltip =['$15,242.52','$3,812.34','$1,642.94']

const options = {
    tooltips: {
        callbacks: {
              title: function(tooltipItems, data) {
                return '';
              },
              label: function(tooltipItem, data) {
                return dataTooltip[tooltipItem.index];
              }
            }
    },
    layout: {
        padding: {
            top: 20,
            bottom: 50
        },
    },
    legend: {
        labels: {
            fontColor: '#828282',
        },
        onClick: (e) => e.stopPropagation()
    },
    cutoutPercentage: 65,
    rotation: -1.65 * Math.PI
}

const QuotesChart = () => {
    return (
        <Card
            title="Quotes"
            icon={<ReceiptRounded className="main-title-icon" />}
            cardType={4}
        >
            <div >
                <Doughnut
                    height={180}
                    data={data}
                    options={options} />
                <div style={{
                    position: 'absolute',
                    marginTop: -120,
                    marginLeft: 100,
                    color: '#6CBEBF',
                    fontWeight: 500
                }}>
                    $15,242.52
                    </div>
                <div style={{
                    position: 'absolute',
                    marginTop: -120,
                    marginLeft: 485,
                    color: '#54A2E5',
                    fontWeight: 500
                }}>
                    $1,642.94
                    </div>
                <div style={{
                    position: 'absolute',
                    marginTop: -310,
                    marginLeft: 485,
                    color: '#F2A254',
                    fontWeight: 500
                }}>
                    $3,812.34
                </div>
            </div>
        </Card>
    )
}

export default QuotesChart;