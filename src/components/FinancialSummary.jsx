import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { TransactionContext } from '../TransactionContext';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const FinancialSummary = () => {
  
  const { incomeBreakdown, expenseBreakdown } = useContext(TransactionContext);
  
  const incomeData = incomeBreakdown || {};
  const expenseData = expenseBreakdown || {};

  const chartColors = ['#04BFDA', '#9B88ED', '#FB67CA', '#FFA84A'];
  const chartHoverColors = ['#04D4F0', '#B69CFF', '#FF89DD', '#FFBD70'];
  
  const incomeDoughnutData = {
    labels: Object.keys(incomeData),
    datasets: [
      {
        data: Object.values(incomeData),
        backgroundColor: chartColors,
        hoverBackgroundColor: chartHoverColors,
      },
    ],
  };

  const expenseDoughnutData = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: chartColors,
        hoverBackgroundColor: chartHoverColors,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            position: 'right',
            labels: {
                usePointStyle: true,
                generateLabels: (chart) => {
                    const datasets = chart.data.datasets[0].backgroundColor;
                    return chart.data.labels.map((label, index) => ({
                        text: label,
                        fillStyle: '#FFFFFF',
                        strokeStyle: datasets[index],
                        lineWidth: 2,
                        pointStyle: 'circle',
                    }));
                },
            },
        },

        datalabels: {
            color: '#fff',
            formatter: (value, context) => {
                const dataset = context.chart.data.datasets[context.datasetIndex];
                const dataValues = dataset.data;

                
                const validValues = dataValues.filter(val => val > 0);
                const total = validValues.reduce((acc, val) => acc + val, 0);

                
                if (validValues.length === 1) {
                    if (value === validValues[0]) {
                        return '100%'; 
                    }
                    return ''; 
                }

                
                if (total === 0) return '0%';

                
                const percentage = ((value / total) * 100).toFixed(1);

                
                if (percentage === "0.0") {
                    return ''; 
                }

                return percentage + '%';
            },

            anchor: 'center',
            align: 'center',
            font: {
                weight: 'bold',
                size: 8,
            },
        },
    },

    cutout: '75%', 
    elements: {
        arc: {
            borderWidth: 0, 
            borderColor: 'transparent', 
        },
    },
};


const customLegendPlugin = {

    id: 'customLegend',
    beforeDraw: (chart) => {
        const { ctx, legend } = chart;
        const legendItems = legend.legendItems;

        legendItems.forEach((legendItem, index) => {
            const x = legendItem.textWidth + 20;
            const y = legendItem.top + 12;

            
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2); 
            ctx.fillStyle = 'white'; 
            ctx.fill();
            ctx.strokeStyle = legendItem.strokeStyle;
            ctx.lineWidth = legendItem.lineWidth;
            ctx.stroke();
            ctx.restore();

        });
    },
};

ChartJS.register(customLegendPlugin);



  return (
    <div className="bg-customBgGray p-6 shadow-md rounded-lg h-[610px] flex flex-col overflow-hidden">
      <h3 className="text-lg font-semibold mb-1">Financial Summary</h3>

      <div className="flex justify-between items-center mb-9">
        <div className="w-full max-w-sm mx-auto">
          <h4 className="text-lg font-medium">Income</h4>
          <div className="relative h-[215px] overflow-hidden">
            {Object.keys(incomeData).length > 0 ? (
              <Doughnut data={incomeDoughnutData} options={chartOptions} />
            ) : (
              <p className="text-center">No income data available</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-full max-w-sm mx-auto">
          <h4 className="text-lg font-medium">Expense</h4>
          <div className="relative h-[215px] overflow-hidden">
            {Object.keys(expenseData).length > 0 ? (
              <Doughnut data={expenseDoughnutData} options={chartOptions} />
            ) : (
              <p className="text-center">No expense data available</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FinancialSummary;
