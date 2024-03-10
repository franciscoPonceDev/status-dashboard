import { httpClient } from '../httpClient';

const baseURL = '/customers/health/status';

const getCustomers = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const CustomersAPI = {
  getCustomers,
};

export default CustomersAPI;
