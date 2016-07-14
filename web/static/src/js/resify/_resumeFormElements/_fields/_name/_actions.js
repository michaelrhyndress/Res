import t from './_actionTypes';

export const edit = (text) => ({
  type: t.EDIT,
  payload: { text }
});
