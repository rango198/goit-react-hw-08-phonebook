import { ContactsForm } from 'components/Form/ContactsForm';
import { ContactsWrap, Container, PhoneWrap } from './ContactUser.styled';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'components/redux/options';
import { useEffect } from 'react';

function ContactUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

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
