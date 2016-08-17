import * as t from './actionTypes';

// SET updates DOM
// POST, PUT, PATCH updates persistent memory

export const setFirstname = ( firstname ) => ({
  type: t.SET_FIRSTNAME,
  payload: firstname
});

export const setLastname = ( lastname ) => ({
  type: t.SET_LASTNAME,
  payload: lastname
});

export const setUsername = ( username ) => ({
  type: t.SET_USERNAME,
  payload: username
});

export const setLabel = ( label ) => ({
  type: t.SET_LABEL,
  payload: label
});

export const setSummary = ( summary ) => ({
  type: t.SET_SUMMARY,
  payload: summary
});