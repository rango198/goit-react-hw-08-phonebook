import { ContactsForm } from 'components/Form/ContactsForm';
import { ContactsWrap, Container, PhoneWrap } from './ContactPage.styled';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

function ContactUser() {
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
