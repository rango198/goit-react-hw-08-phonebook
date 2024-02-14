// // import axios from 'axios';

// // const contactsInstance = axios.create({
// //   baseURL: 'https://65c123aedc74300bce8d6244.mockapi.io/api/contacts/contacts',
// // });

// export const getContacts = () => contactsInstance.get('/');

// // export const delContact = id => {
// //   return contactsInstance.delete(`/${id}`);
// // };

// export const postContact = data => {
//   return contactsInstance.post('/', data);
// };

// export const editContact = data => {
//   return contactsInstance.put(`/${data.id}`, {
//     name: data.name,
//     phone: data.phone,
//   });
// };
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
  const { data } = await privateInstance('/users/current');
  return data;
}

export async function getContacts() {
  return await privateInstance(`/contacts`);
}

export async function addContact(data) {
  return await privateInstance.post(`/contacts`, data);
}

export async function delContact(id) {
  return await privateInstance.delete(`/contacts/${id}`);
}
