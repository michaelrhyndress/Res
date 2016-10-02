import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducer from './rootReducer';

//Init model
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

// Set default values if no value exists for a field.
// This mostly helps to jump start the json fields which start as null
for (var property in window._sharedData.profile) {
	if (window._sharedData.profile.hasOwnProperty(property)) {
      if (window._sharedData.profile[property] === null){
		  if (initialState.hasOwnProperty(property))
		  window._sharedData.profile[property] = initialState[property];
	  }
    }
}

//If no selected resume, choose first in list || Create first if not exists
if(window._sharedData.profile.active_resume == null) {
	if (window._sharedData.profile.resumes.length > 0) {
		window._sharedData.profile.active_resume = window._sharedData.profile.resumes[0].id;
	}
}

// Normalize the resumes array so we can pull in
// so we can pull from entities object by ID
const norm_resumes = {results: [], entities: {}};
window._sharedData.profile.resumes.forEach(function (r) {
	norm_resumes.results.push(r.id);
	norm_resumes.entities[r.id] = r;
});


window._sharedData.profile.resumes = norm_resumes;

const hydrator = window._sharedData;
const middleware = applyMiddleware(promise(), logger());
const store = createStore(reducer, hydrator, middleware);

export default store;