import { ContactsForm } from 'components/Form/ContactsForm';
import {
  BackgroundColor,
  ContactsWrap,
  Container,
  PhoneWrap,
} from './ContactUser.styled';
import { Filter } from 'components/filter/filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

function ContactUser() {
  return (
    <div>
      <h2>PhoneBook</h2>
      <BackgroundColor>
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
      </BackgroundColor>
    </div>
  );
}

export default ContactUser;
