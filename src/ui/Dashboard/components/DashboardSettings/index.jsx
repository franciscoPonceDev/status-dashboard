import { useState } from 'react';
import { useDashboard } from '../../../../contexts/DashboardContext';

function DashboardSettings() {
  const { updateTime, setUpdateTime } = useDashboard();
  const [inputValue, setInputValue] = useState(updateTime);
  return (
    <div className="p-5">
      <p>{`Dashboard is updating every ${updateTime} seconds.`}</p>
      <div className="flex items-center">
        <p>Change update time (s): </p>
        <input
          className="ml-2 w-20 h-8 border-2 border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          name="updateTime"
          id="updateTime"
          type="number"
          placeholder={updateTime}
          value={inputValue}
          min={10}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="ml-2 bg-gray-800 hover:bg-gray-500 text-white font-bold py-1 px-4
           rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
          type="button"
          onClick={() => {
            setUpdateTime(inputValue);
            setInputValue('');
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default DashboardSettings;
