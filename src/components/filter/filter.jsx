import { IoIosSearch } from 'react-icons/io';
import { Input, Label } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selects';
import { filterSet } from '../../redux/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <label>
      <Label htmlFor="userfilter">
        <IoIosSearch />
        Find contacts by name
      </Label>
      <Input
        autoComplete="off"
        id="userfilter"
        type="text"
        name="filter"
        value={filterPhoneBook}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
