import { createContext, useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  // change number inside parenthesis to change the default value of status updates.
  // note that the minimum value is 10 seconds, even if you set it to a lower value.
  const [updateTime, setUpdateTime] = useState(15);

  const statusArray = [
    'ACCOUNTS',
    'ASSETS',
    'CUSTOMERS',
    'DATAPOINTS',
    'DEVICES',
    'DOCUMENTS',
    'FORMS',
    'INVITES',
    'MEDIA',
    'MESSAGES',
    'NAMESPACES',
    'ORDERS',
    'PATIENTS',
    'RELATIONSHIPS',
    'RULES',
    'TEMPLATES',
    'USERS',
    'WORKFLOWS',
  ];

  const value = useMemo(
    () => ({
      updateTime,
      setUpdateTime,
      statusArray,
    }),
    [updateTime, setUpdateTime]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export default DashboardContext;

DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
