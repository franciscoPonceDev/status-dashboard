import { httpClient } from '../httpClient';

const baseURL = '/workflows/health/status';

const getWorkflows = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const WorkflowsAPI = {
  getWorkflows,
};

export default WorkflowsAPI;
