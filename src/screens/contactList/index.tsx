import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { ApplicationState } from '../../store';
import * as ContactsActions from '../../store/ducks/contacts/actions';
import { Contacts } from '../../store/ducks/contacts/types';

interface StateProps {
  contacts: Contacts[];
}

interface DispatchProps {
  createContact(data: Contacts): void;
  removeContact(id: string): void;
}

type Props = StateProps & DispatchProps;

const ContactList: React.FC<Props> = props => {
  const [value, setValue] = useState('');
  const { contacts, createContact, removeContact } = props;
  const handleSubmit = () => {
    createContact({
      name: value,
      id: uuidv4(),
    });
  };
  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="title"
      />
      <button onClick={handleSubmit} type="button">
        Adicionar um item
      </button>
      {contacts.map(item => (
        <li>
          {item.name}
          <button onClick={() => removeContact(item.id)} type="button">
            Remover
          </button>
        </li>
      ))}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  contacts: state.contacts.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ContactsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
