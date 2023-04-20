import { Input, Label, Text } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name:</Text>
      <Input type="text" name="filter" value={value} onChange={changeFilter} />
    </Label>
  );
};
