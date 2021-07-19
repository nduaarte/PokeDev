export interface RootState {
  PokeReducer: {
    name: string;
  }
}

const INITIAL_STATE = {
  name: ''
}

export default function PokeReducer(state = INITIAL_STATE, action: { type: string; value: string; }) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.value };
    default:
      return state;
  }
}

export function UPDATE_NAME(value: string) {
  return { type: 'UPDATE_NAME', value };
}