import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const userSignUp = async credentials => {
  const { data: result } = await authInstance.post(
    '/users/signup',
    credentials
  );
  setAuthHeader(result.token);
  // console.log(result);
  return result;
};

export const userLogin = async credentials => {
  const { data: result } = await authInstance.post('/users/login', credentials);
  setAuthHeader(result.token);
  // console.log(result);
  return result;
};

export const userLogout = async () => {
  const response = await authInstance.post('/users/logout');
  clearAuthHeader();
  return response;
};

export const userCurrent = async token => {
  setAuthHeader(token);
  const response = await authInstance.get('/users/current');
  return response;
};

// contact
export const getAllContacts = () => authInstance.get('/contacts');

export const addContact = contact =>
  authInstance.post('/contacts', { ...contact });

export const delContact = id => authInstance.delete(`/contacts/${id}`);

export const editContact = contact => {
  return authInstance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
};
