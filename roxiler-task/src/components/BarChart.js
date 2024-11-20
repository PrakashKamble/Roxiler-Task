// src/components/BarChart.js
import React, { useState, useEffect } from "react";
import { fetchBarChart } from "../services/api";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChartComponent = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const { data } = await fetchBarChart(selectedMonth);
      setChartData(data);
    };
    loadChartData();
  }, [selectedMonth]);

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
