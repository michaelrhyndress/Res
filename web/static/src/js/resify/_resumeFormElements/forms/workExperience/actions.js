import * as t from './actionTypes';

export const addWork = ( id ) => ({
  type: t.ADD_WORK,
  payload: id
});

export const deleteWork = ( id ) => ({
  type: t.DELETE_WORK,
  payload: id
});

export const setPosition = ( id, payload ) => ({
  type: t.SET_POSITION,
  index: id,
  payload: payload
});
//
// export const setUsername = ( username ) => ({
//   type: t.SET_USERNAME,
//   payload: username
// });
//
// export const setLabel = ( label ) => ({
//   type: t.SET_LABEL,
//   payload: label
// });
//
// export const setSummary = ( summary ) => ({
//   type: t.SET_SUMMARY,
//   payload: summary
// });