/**
 * Action types
 */
 export enum ContactsTypes {
  LOAD_REQUEST = '@contacts/LOAD_REQUEST',
  LOAD_SUCCESS = '@contacts/LOAD_SUCCESS',
  LOAD_FAILURE = '@contacts/LOAD_FAILURE',
  CREATE_CONTACT = '@contacts/CREATE_CONTACT'
}

/**
 * Data types
 */
export interface Contacts {
  id: number;
  name: string;
}

/**
 * State type
 */
export interface ContactsState {
  readonly data: Contacts[];
  readonly loading: boolean;
  readonly error: boolean;
}