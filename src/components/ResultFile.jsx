import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultFile = ({ datas }) => {
  const calculatedData = calculateInvestmentResults(datas);
  const initial = datas.initialInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Saving</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((elem,i) => {
          const totalInvestment = elem.valueEndOfYear - elem.year * elem.annualInvestment;
          const totalAmount = elem.valueEndOfYear - totalInvestment;
          return (
            <tr key={i}>
              <td>{elem.year}</td>
              <td>{formatter.format(elem.valueEndOfYear)}</td>
              <td>{formatter.format(elem.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultFile;
