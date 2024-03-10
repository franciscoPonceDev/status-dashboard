import { useDashboard } from '../../contexts/DashboardContext';
import DashboardSettings from './components/DashboardSettings';
import StatusCard from './components/StatusCard';

function Dashboard() {
  const { statusArray } = useDashboard();

  return (
    <main className="bg-slate-100">
      <section id="status">
        <DashboardSettings />
        <div
          id="status"
          className="flex justify-center flex-wrap gap-12 gap-y-12 py-10"
        >
          {statusArray.map((name) => (
            <StatusCard apiName={name} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
