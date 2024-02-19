import { ContactsForm } from 'components/Form/ContactsForm';
import { ContactsWrap, Container, PhoneWrap } from './ContactPage.styled';
import { Filter } from 'components/filter/filter';
// import { ContactsList } from 'components/ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from '../../redux/contacts/options';
import { useAuth } from 'hook/useAuthSelector';
function ContactPage() {
  const dispath = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispath(getContactsThunk());
  }, [dispath]);
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
          {/* <ContactsList /> */}
        </ContactsWrap>
      </Container>
    </div>
  );
}

export default ContactPage;
