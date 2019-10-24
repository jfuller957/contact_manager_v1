import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
