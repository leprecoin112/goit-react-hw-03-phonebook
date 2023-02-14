import { Component } from 'react';
import ContactForm from 'modules/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Section from 'shared/components/Section/Section';
import Contacts from 'modules/Contacts/Contacts';
import Input from 'shared/components/Input/Input';
import storage from 'shared/utils/local-storage';

const KEY_STORAGE = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = storage.load(KEY_STORAGE);
    if (contacts) {
      this.setState({
        contacts: contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== this.state.contacts) {
      storage.save(KEY_STORAGE, contacts);
    }
  }

  addContact = (name, number) => {
    if (this.checkDuplicate(name)) {
      alert(`${name} is already in contact`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  checkDuplicate(newName) {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name === newName);
  }

  changeFilter = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  render() {
    const { filter } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Input
            labelText="Find contacts by name"
            name="filter"
            value={filter}
            onChange={this.changeFilter}
          />
          <Contacts
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
