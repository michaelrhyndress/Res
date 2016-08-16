import { combineReducers } from 'redux';
import profile from './profile'

// export default combineReducers({
// 	[profile.constants.NAME]: profile.reducer
// });

export default combineReducers({
	[profile.constants.NAME]: profile.reducer
});