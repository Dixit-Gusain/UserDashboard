
import React, { useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
function BarChart() {
    const data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                label: '',
                data: [50, 20, 10, 22, 50, 10, 40],
                backgroundColor: 'rgb(193,211,231)',
            }
        ]
    }
    const option = {

    }

    return (
        <>
            <div></div>
        </>

    );
}

export default BarChart;
