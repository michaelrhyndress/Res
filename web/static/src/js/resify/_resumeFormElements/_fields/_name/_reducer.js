import t from './_actionTypes';
import { State } from './_model';

const initialState: State = [{
	firstname: "",
	lastname: "",
	changed: false,
}];

export function reducer(state=initialState, action): State {
  switch (action.type) {
    case t.EDIT:
		let text = action.text.trim()
		return {
			...state,
			changed: true
      	}
  	default:
		return state;
  }
};