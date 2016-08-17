import * as t from './actionTypes';
import State from '../../../profile/model';



export default function reducer(state=initialState, action): State {
	switch (action.type) {
		case t.SET_FIRSTNAME:
			let firstname = action.payload.trim();
			console.log(state);
			return {...state, firstname};
			break;
		case t.SET_LASTNAME:
			let lastname = action.payload.trim();
			return {...state, lastname};
			break;
		case t.SET_USERNAME:
			let username = action.payload.trim();
			return {...state, username};
			break;
		case t.SET_LABEL:
			let label = action.payload.trim();
			return {...state, label};
			break;
		case t.SET_SUMMARY:
			let summary = action.payload.trim();
			return {...state, summary};
			break;
		default:
			return state;
	}
};