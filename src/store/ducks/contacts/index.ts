import { Reducer } from 'redux';
import { ContactsState, ContactsTypes } from './types';

const INITIAL_STATE: ContactsState = {
  data: [
    {
      id: '1',
      name: 'Rocketseat',
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<ContactsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactsTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case ContactsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ContactsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };

    case ContactsTypes.CREATE_CONTACT:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.data],
      };
    case ContactsTypes.DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter(item => item !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
