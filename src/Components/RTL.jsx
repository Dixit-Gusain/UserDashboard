
import React, { useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
)
function RTL() {
    const [state, setstate] = useState("");

    const linedata = {

        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                backgroundColor: 'rgb(193,211,231)',
                fill: true,
                tension: 0.4
            }
        ]
    }
    const optionline = {

        scales: {
            y: {
                ticks: {
                    stepSize: 200,
                    color: "red"
                },
                // beginATZero: true
            }
        }
    }

    return (
        <>

            <div>
                <Line data={linedata}
                    options={optionline}></Line>
            </div>
        </>

    );
}

export default RTL;
