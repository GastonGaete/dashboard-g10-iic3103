import { StateInterface, ReducerActionInterface } from '../interfaces';

export const initialState = {
  attribute: '',
};

export const reducer = (state: StateInterface, action: ReducerActionInterface): StateInterface => {
  switch (action.type) {
    default:
      return state;
  }
};
