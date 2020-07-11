import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from '../Card/Card'
import { WorkRounded } from '@material-ui/icons';

const data = {
    labels: ['SCHEDULED', 'IN PROGRESS', 'PAID'],
    datasets: [{
        label: '# of Votes',
        data: [30, 40, 20],
        backgroundColor: [
            '#54A2E5',
            '#F3D58C',
            '#6CBEBF'
        ],
        borderColor: [
            '#54A2E5',
            '#F3D58C',
            '#6CBEBF'
        ],
        borderWidth: 1,
    }]
}

const dataTooltip =['$9,436.46','$5,614.64','$4,422.62']

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
    rotation: -1.5 * Math.PI
}

const AppointmentsChart = () => {
    return (
        <Card
            title="Appointments"
            icon={<WorkRounded className="main-title-icon" />}
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
                    color: '#54A2E5',
                    fontWeight: 500
                }}>
                    $9,436.46
                    </div>
                <div style={{
                    position: 'absolute',
                    marginTop: -120,
                    marginLeft: 485,
                    color: '#6CBEBF',
                    fontWeight: 500
                }}>
                    $4,422.62
                    </div>
                <div style={{
                    position: 'absolute',
                    marginTop: -310,
                    marginLeft: 485,
                    color: '#DCAC39',
                    fontWeight: 500
                }}>
                    $5,614.64
                </div>
            </div>
        </Card>
    )
}

export default AppointmentsChart;