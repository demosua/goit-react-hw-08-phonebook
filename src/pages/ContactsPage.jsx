// import ContactForm from 'components/ContactForm/ContactForm';
import BasicTable  from '../components/ContactTable';
import { useSelector } from "react-redux";
import { selectFilter } from 'redux/contacts/filterSlice'
import { useGetContactsQuery } from "redux/backend/api";

const ContactsPage = () => {
  const {data: contacts, isSuccess, isError} = useGetContactsQuery();
  const filter = useSelector(selectFilter)

  if (!contacts) { return }

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  console.log(visibleContacts);

  return (
    <>
    {isSuccess && (
    <div>
          <BasicTable rows={ visibleContacts } />
    </div>)
    }
    {isError && <div>Error</div>}
    </>
  );
};

export default ContactsPage;