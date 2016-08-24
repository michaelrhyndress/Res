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
			Mon: true,
			Tues: true,
			Wed: true,
			Thurs: true,
			Fri: true,
			Sat: false
		},
		time: {
			start: null,
			end: null
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
			return update(state, {
				label: {$set: action.payload}
			});
			break;
		case t.SET_SUMMARY:
			return update(state, {
				summary: {$set: action.payload}
			});
			break;
		default:
			return state;
	}

};