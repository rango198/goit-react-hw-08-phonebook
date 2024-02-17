import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectPhoneBookValue,
} from 'components/redux/selects';
import Loader from 'components/Loader/Loader';
import { ListItemContact } from 'components/ContactItem/ContactItem';

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
