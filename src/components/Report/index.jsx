const Report = ({ title }) => (
  <>
    <h1>{title}</h1>
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Income</th>
          <th>Expenses</th>
          <th>Net</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>October</td>
          <td>$24.000</td>
          <td>$22.547</td>
          <td>$1,453</td>
        </tr>
        <tr>
          <td>November</td>
          <td>$27.000</td>
          <td>$22.547</td>
          <td>$4,453</td>
        </tr>
        <tr>
          <td>October</td>
          <td>$21.000</td>
          <td>$25.547</td>
          <td>$-4,547</td>
        </tr>
      </tbody>
    </table>
  </>
);

export default Report;
