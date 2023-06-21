import ContactItem from "../ContactItem";
import { Contact } from './Contacts.styled';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { selectFilter } from 'redux/contacts/filterSlice';
import { useGetContactsQuery } from "redux/contacts/contactsApi";

const Contacts = () => {
  // const filter = useSelector(selectFilter)
  // const normalizedFilter = filter.toLowerCase();
  // const { data: contacts, error, isLoading } = useGetContactsQuery();
  // console.log(contacts);

  // if (!contacts) { return }
  // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  const { data, isFetching, error } = useGetContactsQuery();
  console.log(data);

  return (
<>
    <Contact>
      {data.map(contact =>
        (<ContactItem key={contact.id} contact={contact} />)
      )}
      {error && <div>Error</div>}
    </Contact>
</>
  )
};
  
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};