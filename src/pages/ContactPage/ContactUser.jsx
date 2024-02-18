import { ContactsForm } from 'components/Form/ContactsForm';
import { ContactsWrap, Container, PhoneWrap } from './ContactPage.styled';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../../redux/contacts/options';
import { useEffect } from 'react';
import { setAuthHeader } from '../../redux/Api/fetchAPI';

import { useAuth } from 'hook/useAuthSelector';

function ContactUser() {
  const dispatch = useDispatch();
  const { token } = useAuth();

  useEffect(() => {
    setAuthHeader(token);
    dispatch(getContactsThunk());
  }, [dispatch, token]);

  return (
    <div>
      <Container>
        <PhoneWrap>
          <h1>Phonebook</h1>
          <ContactsForm />
        </PhoneWrap>
        <ContactsWrap>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </ContactsWrap>
      </Container>
    </div>
  );
}

export default ContactUser;
