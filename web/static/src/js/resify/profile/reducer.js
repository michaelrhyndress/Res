import * as t from './actionTypes';
import State from './model';
import update from 'react/lib/update'



const initialState: State = {
	user: {
		first_name: "",
		last_name: "",
		username: "",
		email: ""
	},
	label: "",
	summary: "",
	active_resume: "",
	availability: {
		phone: "",
		days: {
			Sun: false,
			Mon: false,
			Tues: false,
			Wed: false,
			Thurs: false,
			Fri: false,
			Sat: false
		},
		time: {
			start: "",
			end: ""
		}
	},
	is_public: false,
	location: null,
	resumes: [],
	social_profiles: null,
	start_page: 1,
	website: ""
};


export default function reducer(state=initialState, action): State {
	switch (action.type) {
		case t.GET_PROFILE_FULFILLED:
			let profile = Object.assign({}, ...state, action.payload.data);
			return profile;
			break;
		//UserDetails
		case t.SET_FIRSTNAME:
			return update(state, {
				user: {
					first_name: {$set: action.payload}
				}
			});
			break;
		case t.SET_LASTNAME:
			return update(state, {
				user: {
					last_name: {$set: action.payload}
				}
			});
			break;
		case t.SET_USERNAME:
			return update(state, {
				user: {
					username: {$set: action.payload}
				}
			});
			break;
		case t.SET_LABEL:
			let label = action.payload;
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