import { httpClient } from '../httpClient';

const baseURL = '/orders/health/status';

const getOrders = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const OrdersAPI = {
  getOrders,
};

export default OrdersAPI;
