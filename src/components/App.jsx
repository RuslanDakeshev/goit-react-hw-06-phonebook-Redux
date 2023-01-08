// import { useState, useEffect } from 'react';
import Form from './Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { customAlphabet } from 'nanoid';
import { Container, Title, Subtitle } from './App.styled';
// import { initialContacts } from 'data/initialContacts';
// import { useLocalStorage } from 'hooks/useLocalStorage';

// ?
//   const handlerSubmit = newContact => {
//     setContacts(prevContacts => {
//       if (prevContacts.find(contact => contact.name === newContact.name)) {
//         alert(`${newContact.name} is already in contacts.`);
//         return prevContacts
//       }
//       return [newContact, ...prevContacts]
//   })
// }




  // const formSubmitHandler = data => {
  //   const newContact = {
  //     ...data, id: nanoid()
  //   }

  //   const isExist = contacts.find(
  //     ({ name }) => name.toLowerCase() ===newContact.name.toLowerCase()
  //   );
    
  //   if (isExist) {
  //     return alert(`${newContact.name} is already in contacts.`);
  //   }

    
  //  setContacts(prevContacts => [newContact, ...prevContacts])

  // }

  //  const changeFilter = e => {
  //   setFilter(e.currentTarget.value );
  // };

  

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
    
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

export const App = () => {
  


    return (
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <Subtitle>Contacts</Subtitle>

        <Filter />
        <ContactList
          // deleteContact={deleteContact}
          // contacts={filteredContacts}
        />
      
      </Container>
    );
  }

