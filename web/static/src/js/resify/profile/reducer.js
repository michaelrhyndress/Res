import * as t from './actionTypes';
import uuid from 'uuid';
import State from './model';
import update from 'react/lib/update';



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
	resumes: {
		entities: [
			{
				id: {
					work: [{
						id: 0,
						isVolunteer: false,
						company: "",
						position: "",
						website: "",
						startDate: "",
						endDate: "",
						isCurrent: false,
						summary: "",
						order: 0
					}]
				}
			}
		]
	},
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

		//Contact
		case t.SET_AVAILABILITY_PHONE:
			return update(state, {
				availability: {
					phone: {$set: action.payload}
				}
			});
			break;

		case t.SET_AVAILABILITY_DAYS:
			return update(state, {
				availability: {
					days: {$set: action.payload}
				}
			});
			break;

		case t.SET_AVAILABILITY_TIME:
			return update(state, {
				availability: {
					time: {$set: action.payload}
				}
			});
			break;

		//Work
		case t.ADD_WORK:
			let newWorkItem =  {...initialState.resumes.entities[0].id.work[0]};
			newWorkItem.id = uuid.v4();
			newWorkItem.order = action.order;

			return update(state, {
				resumes: {
					entities: {
						[state.active_resume]: {
							work: {$push: [newWorkItem]}
						}
					}
				}
			});
			break;
		case t.DELETE_WORK:
		case t.SET_WORK_POSITION:
		case t.SET_WORK_EMPLOYER:
		case t.SET_WORK_SUMMARY:
			return update(state, {
				resumes: {
					entities: {
						[state.active_resume]: {
							work: {$set: action.payload}
						}
					}
				}
			});
			break;
		default:
			return state;
	}
};