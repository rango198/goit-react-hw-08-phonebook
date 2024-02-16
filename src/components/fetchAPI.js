import axios from 'axios';

const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const privateInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export function setToken(token) {
  privateInstance.defaults.headers.common['Authorization'] = token;
}

export function delToken() {
  delete privateInstance.defaults.headers.common['Authorization'];
}

export async function signUp(body) {
  return await publicInstance.post('/users/signup', body);
}

export async function logIn(body) {
  const { data } = await publicInstance.post('/users/login', body);
  setToken(`Bearer ${data.token}`);
  return data;
}

export async function getProfile() {
  const { data } = await privateInstance.get('/users/current');
  return data;
}
export const getContacts = () => privateInstance.get('/contacts');

export const addContact = data => {
  return privateInstance.post('/contacts', data);
};

export const delContact = id => {
  return privateInstance.delete(`contacts/${id}`);
};

export const editContact = contact => {
  return privateInstance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
};
