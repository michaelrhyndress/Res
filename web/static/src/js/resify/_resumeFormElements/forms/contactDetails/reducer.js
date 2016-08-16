import * as t from './actionTypes';
import State from './model';


const initialState: State = {
	phone: "",
	days: "",
	time:""
};

export default function reducer(state=initialState, action): State {
	switch (action.type) {
		case t.SET_AVAILABILITY_PHONE:
			return { ...state, phone: action.payload }
			break;
			
		case t.SET_AVAILABILITY_DAYS:
			return { ...state, days: action.payload }
			break;
			
		case t.SET_AVAILABILITY_TIME:
			return { ...state, time: action.payload }
			break;
			
		default:
			return state;
	}
};