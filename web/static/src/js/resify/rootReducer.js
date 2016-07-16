import { combineReducers } from 'redux';
import PersonalDetails from './_resumeFormElements/forms/personalDetails';
import ContactDetails from './_resumeFormElements/forms/contactDetails';


export default combineReducers({
	[PersonalDetails.constants.NAME]: PersonalDetails.reducer,
	[ContactDetails.constants.NAME]: ContactDetails.reducer,
});