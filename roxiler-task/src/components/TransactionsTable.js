// src/components/TransactionsTable.js
import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../services/api";

const TransactionsTable = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadTransactions = async () => {
      const { data } = await fetchTransactions(selectedMonth, search, page);
      setTransactions(data);
    };
    loadTransactions();
  }, [selectedMonth, search, page]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.title}</td>
              <td>{tx.description}</td>
              <td>{tx.price}</td>
              <td>{tx.dateOfSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default TransactionsTable;
