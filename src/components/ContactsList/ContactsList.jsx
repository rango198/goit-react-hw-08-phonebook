import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectPhoneBookValue,
} from '../../redux/selects';
import Loader from 'components/Loader/Loader';
import { ListItemContact } from 'components/ContactItem/ContactItem';
// import { useEffect } from 'react';
// import { getContactsThunk } from '../../redux/contacts/options';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const phoneBook = useSelector(selectPhoneBookValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && phoneBook?.length === 0 && <Loader />}
      {!error && (
        <List>
          {visibleContacts.map(contacts => {
            return <ListItemContact key={contacts.id} {...contacts} />;
          })}
        </List>
      )}
    </>
  );
};
