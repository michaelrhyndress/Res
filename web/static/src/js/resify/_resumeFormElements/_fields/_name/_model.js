export type Fullname = {
  firstname: string;
  lastname: string;
  changed: boolean;
};

export type State = Fullname[];

// Some utility functions that operates on our model
// export const filterCompleted = todos => todos.filter(t => t.completed);
//
// export const filterActive = todos => todos.filter(t => !t.completed);
