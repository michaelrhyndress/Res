import * as t from './actionTypes';

export const setFullname = ( fullname ) => ({
  type: t.SET_FULLNAME,
  payload: fullname
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