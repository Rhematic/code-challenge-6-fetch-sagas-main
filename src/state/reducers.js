// Used to store class and number of unique animals in that class
export function zooAnimalsReducer(state = [], action) {
  if (action.type === 'SET_ZOO_ANIMALS') {
    return action.payload;
  }

  return state;
}
