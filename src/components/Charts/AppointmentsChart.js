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
            '#64B5F6',
            '#FFD740',
            '#8BDCB3'
        ],
        borderColor: [
            '#64B5F6',
            '#FFD740',
            '#8BDCB3'
        ],
        borderWidth: 1,
    }]
}

const dataTooltip = ['$9,436.46', '$5,614.64', '$4,422.62']

const options = {
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
    rotation: -1.5 * Math.PI,
    plugins: {
        datalabels: {
            display: false
        }
    },
}

const AppointmentsChart = () => {
    return (
        <Card
            title="Appointments"
            icon={<WorkRounded className="main-title-icon" />}
            cardType={4}
        >
            <div >
                {/* '#64B5F6',
            '#FFD740',
            '#8BDCB3' */}
                <Doughnut
                    height={180}
                    data={data}
                    options={options}
                    plugins={
                        [{
                            beforeInit: function (chart, options) {
                                chart.legend.afterFit = function () {
                                    this.height = this.height + 18;
                                };
                            }
                        }]
                    }
                />
                <div style={{
                    position: 'absolute',
                    marginTop: -120,
                    marginLeft: 100,
                    color: '#2286C3',
                    fontWeight: 500
                }}>
                    $9,436.46
                    </div>
                <div style={{
                    position: 'absolute',
                    marginTop: -120,
                    marginLeft: 485,
                    color: '#398E8F',
                    fontWeight: 500
                }}>
                    $4,422.62
                    </div>
                <div style={{
                    position: 'absolute',
                    marginTop: -310,
                    marginLeft: 485,
                    color: '#C8A600',
                    fontWeight: 500
                }}>
                    $5,614.64
                </div>
            </div>
        </Card>
    )
}

export default AppointmentsChart;