import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Aximili Elmist',
        email: 'Ax@mysteriesofwonder.com',
        phone: '555-867-5309'
      },
      {
        id: 2,
        name: 'Dakren CritStrike',
        email: 'DakArak@suddendeath.com',
        phone: '555-898-8989'
      },
      {
        id: 3,
        name: 'Hihumm Strats',
        email: 'Hihumm@pincermoves.com',
        phone: '555-828-8282'
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
