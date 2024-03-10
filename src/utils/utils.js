import AccountsAPI from '../services/AccountsAPI/AccountsAPI';
import AssetsAPI from '../services/AssetsAPI/AssetsAPI';
import CustomersAPI from '../services/CustomersAPI/CustomersAPI';
import DatapointsAPI from '../services/DatapointsAPI/DatapointsAPI';
import DevicesAPI from '../services/DevicesAPI/DevicesAPI';
import DocumentsAPI from '../services/DocumentsAPI/DocumentsAPI';
import FormsAPI from '../services/FormsAPI/FormsAPI';
import InvitesAPI from '../services/InvitesAPI/InvitesAPI';
import MediaAPI from '../services/MediaAPI/MediaAPI';
import MessagesAPI from '../services/MessagesAPI/MessagesAPI';
import NamespacesAPI from '../services/NamespacesAPI/NamespacesAPI';
import OrdersAPI from '../services/OrdersAPI/OrdersAPI';
import PatientsAPI from '../services/PatientsAPI/PatientsAPI';
import RelationshipsAPI from '../services/RelationshipsAPI/RelationshipsAPI';
import RulesAPI from '../services/RulesAPI/RulesAPI';
import TemplatesAPI from '../services/TemplatesAPI/TemplatesAPI';
import UsersAPI from '../services/UsersAPI/UsersAPI';
import WorkflowsAPI from '../services/WorkflowsAPI/WorkflowsAPI';

export const getRequest = async (status) => {
  switch (status) {
    case 'ACCOUNTS':
      return AccountsAPI.getAccounts();

    case 'ASSETS':
      return AssetsAPI.getAssets();

    case 'CUSTOMERS':
      return CustomersAPI.getCustomers();

    case 'DATAPOINTS':
      return DatapointsAPI.getDatapoints();

    case 'DEVICES':
      return DevicesAPI.getDevices();

    case 'DOCUMENTS':
      return DocumentsAPI.getDocuments();

    case 'FORMS':
      return FormsAPI.getForms();

    case 'INVITES':
      return InvitesAPI.getInvites();

    case 'MEDIA':
      return MediaAPI.getMedia();

    case 'MESSAGES':
      return MessagesAPI.getMessages();

    case 'NAMESPACES':
      return NamespacesAPI.getNamespaces();

    case 'ORDERS':
      return OrdersAPI.getOrders();

    case 'PATIENTS':
      return PatientsAPI.getPatients();

    case 'RELATIONSHIPS':
      return RelationshipsAPI.getRelationships();

    case 'RULES':
      return RulesAPI.getRules();

    case 'TEMPLATES':
      return TemplatesAPI.getTemplates();

    case 'USERS':
      return UsersAPI.getUsers();

    case 'WORKFLOWS':
      return WorkflowsAPI.getWorkflows();

    default:
      console.log('Status not found');
      return null;
  }
};

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
