import { createStore } from 'redux'

interface OrderState {
    step: number;
}

const initialOrderState: OrderState = { step: 0 };

export function order(state = initialOrderState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { ...state, step: state.step + 1 }
  case 'DECREMENT':
    return { ...state, step: state.step - 1 }
  default:
    return state
  }
}
