// src/App.js
import React, { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import Statistics from "./components/Statistics";
import BarChartComponent from "./components/BarChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <TransactionsTable selectedMonth={selectedMonth} />
      <Statistics selectedMonth={selectedMonth} />
      <BarChartComponent selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
