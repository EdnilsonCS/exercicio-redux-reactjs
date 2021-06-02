import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import * as ContactsActions from '../../store/ducks/contacts/actions';
import { Contacts } from '../../store/ducks/contacts/types';

interface StateProps {
  contacts: Contacts[];
}

interface DispatchProps {
  createContact(data: Contacts): void;
}

type Props = StateProps & DispatchProps;

const contactList: React.FC<Props> = props => {
  const { contacts, createContact } = props;
  const handleSubmit = () => {
    createContact({
      name: 'teste',
      id: 1,
    });
  };
  return (
    <div>
      <button onClick={handleSubmit} type="button">
        Adicionar um item
      </button>
      {contacts.map(item => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  contacts: state.contacts.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ContactsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(contactList);
