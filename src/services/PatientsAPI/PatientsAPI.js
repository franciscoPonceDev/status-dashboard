import { httpClient } from '../httpClient';

const baseURL = '/patients/health/status';

const getPatients = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const PatientsAPI = {
  getPatients,
};

export default PatientsAPI;
