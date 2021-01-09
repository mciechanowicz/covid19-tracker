import React, { useState, useEffect } from 'react'
import { Box } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import { formatDataThirdFormat, formatDataFourthFormat } from '../utils/formatData';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: tooltipItem => formatDataThirdFormat(tooltipItem.value),
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: value => formatDataFourthFormat(value),
        },
      },
    ],
  },
};

const formatChartData = (data, casesType) => {
  const chartData = [];
  let lastDataPoint;

  for (let date in data[casesType]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  };
  return chartData
}

const LineGraph = ({ type }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=90')
    .then(response => response.json())
    .then(data => {
      let chartData = formatChartData(data, type);
      setData(chartData);
    })
  }, [type]);

  return (
    <Box>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </Box>
  );
}

export default LineGraph
