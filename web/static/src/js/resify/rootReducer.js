import { combineReducers } from 'redux';
import PersonalDetails from './_resumeFormElements/forms/personalDetails';

export default combineReducers({
  [PersonalDetails.constants.NAME]: PersonalDetails.reducer,
});