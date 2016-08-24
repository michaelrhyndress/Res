import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducer from './rootReducer';

const initialState = {
	user: {
		first_name: "",
		last_name: "",
		username: "",
		email: ""
	},
	label: "",
	summary: "",
	active_resume: null,
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

// Object.assign(winprofiledow._sharedData., initialState);

for (var property in window._sharedData.profile) {
	if (window._sharedData.profile.hasOwnProperty(property)) {
      if (window._sharedData.profile[property] === null){
		  if (initialState.hasOwnProperty(property))
		  window._sharedData.profile[property] = initialState[property];
	  }
    }
}

// if (window._sharedData.availability === null) {
// 	window._sharedData.availability = initialState.availability;
// }

const middleware = applyMiddleware(promise(), logger());
const store = createStore(reducer, window._sharedData, middleware);

export default store;