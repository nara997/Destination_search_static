import React from "react";
import "./Table.css"

const Table = () => {
  return (
    <table width={"90%"} className="table-border">
      <thead>
        <tr>
          <th width={"60%"}>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={"60%"}>John</td>
          <td>30</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td width={"60%"}>Jane</td>
          <td>25</td>
          <td >jane@example.com</td>
        </tr>
        <tr>
          <td width={"60%"}>Bob</td>
          <td >40</td>
          <td>bob@example.com</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;