import { DashboardProvider } from '../contexts/DashboardContext';
import Dashboard from './Dashboard';
import Header from './Header';

function App() {
  return (
    <div>
      <DashboardProvider>
        <Header />
        <Dashboard />
      </DashboardProvider>
    </div>
  );
}

export default App;
