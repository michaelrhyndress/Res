import * as t from './actionTypes';
import State from './model';

const initialState: State = {
	fullname: window._sharedData.basics.name,
    username: window._sharedData.basics.username,
    label: window._sharedData.basics.label,
    summary: window._sharedData.basics.summary,
};

export default function reducer(state=initialState, action): State {
  switch (action.type) {
    case t.SET_FULLNAME:
		let fullname = action.payload.trim()
		return {...state, fullname}
		break;
    case t.SET_USERNAME:
		let username = action.payload.trim()
		return {...state, username}
		break;
    case t.SET_LABEL:
		let label = action.payload.trim()
		return {...state, label}
		break;
    case t.SET_SUMMARY:
		let summary = action.payload.trim()
		return {...state, summary}
		break;
  	default:
		return state;
  }
};