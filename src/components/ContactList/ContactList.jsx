
import PropTypes from 'prop-types';
import { Btn, Contacts, ContactsItem, Name, Number } from "./ContactList.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

export const ContactList = ({ name, number, id }) => {

const dispatch = useDispatch()

  return (
    <>
      <Contacts>
       
          
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </ContactsItem>
          
        
      </Contacts>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};