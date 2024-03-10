import { httpClient } from '../httpClient';

const baseURL = '/invites/health/status';

const getInvites = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const InvitesAPI = {
  getInvites,
};

export default InvitesAPI;
