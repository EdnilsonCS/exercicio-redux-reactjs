/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { ContactsTypes, Contacts } from './types';

export const loadRequest = () => action(ContactsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Contacts[]) =>
  action(ContactsTypes.LOAD_REQUEST, { data });

export const loadFailure = () => action(ContactsTypes.LOAD_REQUEST);

export const createContact = (data: Contacts) =>
  action(ContactsTypes.CREATE_CONTACT, { data });

export const deleteContact = (id: string) =>
  action(ContactsTypes.DELETE_CONTACT, { id });
