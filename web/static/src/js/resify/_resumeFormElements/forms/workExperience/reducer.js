import * as t from './actionTypes';
import State from './model';

const initialState: State = [{
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
          removedItem.splice(action.id, 1);
          return removedItem;
          break;
      case t.SET_POSITION:
          const arr = state.map(work => {
              if (work.id !== action.id) {
                  return work;
              }
              return {
                  ...work,
                  position: action.payload
              };
          });
          return [
              ...state,
              arr
          ];
          break;
    default:
		return state;
  }
};