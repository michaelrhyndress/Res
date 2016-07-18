import * as t from './actionTypes';
import State from './model';

const initialState: State = [{
    isVolunteer: false,
    company: "",
    position: "",
    website: "",
    startDate: "",
    endDate: "",
    isCurrent: false,
    summary: ""
}];

export default function reducer(state=initialState, action): State {
  switch (action.type) {
      case t.ADD_WORK:
          let newItem =  {...initialState[0]};
          return [
              ...state, newItem
          ];
          break;
      case t.DELETE_WORK:
          let removedItem = [...state];
          removedItem.splice(action.payload, 1);
          return removedItem;
          break;
      case t.SET_POSITION:
          // let modifiedPosition = [...state, {[action.index]: {"position": action.payload}];
          // return modifiedPosition;
          return [
              ...state
            ];
          break;
    default:
		return state;
  }
};