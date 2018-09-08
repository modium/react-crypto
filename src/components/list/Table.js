import React from 'react';
import './Table.css';

const Table = (props) => {
  return (
    <table className="Table">
    <thead className="Table-head">
      <tr>
        <th>Cryptocurrency</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>24H Change</th>  
      </tr>    
    </thead>
    <tbody className="Table-body">
    {props.currencies.map((currency) => (
      <tr key={currency.id}>
        <td>
          <span className="Table-rank">{currency.rank}</span>
          {currency.name}
        </td>
        <td>
          <span className="Table-dollar">$</span>
          {currency.price}
        </td>
        <td>
          <span className="Table-dollar">$</span>
          {currency.marketCap}
        </td>
        <td>
          {props.renderChangePercent(currency.percentChange24h)}
        </td>
      </tr>
    ))}
    </tbody>
  </table>
  );
}

export default Table;