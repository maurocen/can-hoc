import { useState } from 'react';
import './App.css';
import Can from './components/Can';
import Menu from './components/Menu/menu';
import Report from './components/Report';
import Unauthorized from './components/Unauthorized';

function App() {
  const [role, setRole] = useState('user');

  return (
    <div className="App">
      <Menu role={role} />
      <header className="App-header">
        <select value={role} onChange={({ target: { value }}) => setRole(value)}>
          <option value="user">User</option>
          <option value="mod">Mod</option>
          <option value="admin">Admin</option>
        </select>
        <h1>Current role: {role} </h1>
        <Can
          i="see"
          a="reports"
          as={role}
        >
          <Report title="Q4" />
        </Can>
        <Can
          i="see"
          a="quarterly-reports"
          as={role}
          fallback={<Unauthorized />}
        >
          <Report title="Q3" />
        </Can>
      </header>
    </div>
  );
}

export default App;
