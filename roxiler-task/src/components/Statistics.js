// src/components/Statistics.js
import React, { useState, useEffect } from "react";
import { fetchStatistics } from "../services/api";

const Statistics = ({ selectedMonth }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStatistics = async () => {
      const { data } = await fetchStatistics(selectedMonth);
      setStats(data);
    };
    loadStatistics();
  }, [selectedMonth]);

  if (!stats) return <div>Loading...</div>;

  return (
    <div>
      <h3>Statistics</h3>
      <div>Total Sale Amount: {stats.totalSaleAmount}</div>
      <div>Total Sold Items: {stats.totalSoldItems}</div>
      <div>Total Not Sold Items: {stats.totalNotSoldItems}</div>
    </div>
  );
};

export default Statistics;
