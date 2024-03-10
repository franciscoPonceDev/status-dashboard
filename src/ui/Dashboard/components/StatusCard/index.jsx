/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDashboard } from '../../../../contexts/DashboardContext';
import { getRequest, formatTimestamp } from '../../../../utils/utils';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorCard from './components/ErrorCard';

function StatusCard({ apiName }) {
  const { updateTime } = useDashboard();
  const [statusData, setStatusData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getRequest(apiName);
        console.log(response);
        setStatusData(response.data);
      } catch (error) {
        console.error(error);
        setStatusData({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(
      fetchData,
      updateTime >= 10 ? updateTime : 10 * 1000
    );

    return () => clearInterval(intervalId);
  }, [updateTime, apiName, getRequest]);

  if (!statusData.success) {
    return <ErrorCard apiName={apiName} loading={loading} />;
  }

  return (
    <div
      key={apiName}
      className="flex flex-col items-start justify-between w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-40 bg-white bg-opacity-75 shadow-inner border hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-default py-4 px-6 text-gray-700"
      style={{
        clipPath:
          'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
      }}
    >
      {loading ? (
        <Spinner className="absolute right-2 top-2" />
      ) : (
        <span className="h-4 w-4 absolute right-2 top-2 rounded-full bg-teal-800" />
      )}

      <h2 className="font-bold self-center">{apiName}</h2>
      <p className="w-full">
        <strong>Status: </strong>
        {statusData.message || 'Healthy'}
      </p>
      <p className="w-full">
        <strong>Hostname: </strong>
        {statusData.hostname || '-'}
      </p>
      <p className="w-full">
        <strong>Last update: </strong>
        {statusData.time ? formatTimestamp(statusData.time) : '-'}
      </p>
    </div>
  );
}

export default StatusCard;
