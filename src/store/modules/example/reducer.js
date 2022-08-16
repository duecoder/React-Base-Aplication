export const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
}
