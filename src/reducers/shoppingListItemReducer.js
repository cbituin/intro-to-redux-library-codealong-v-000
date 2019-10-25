export default function shoppingListItemReducer(
  state = {
    items: []
  },
  action
) {
<<<<<<< HEAD
  console.log(action);
  switch (action.type) {
    case "INCREASE_COUNT":
      console.log("Current state.items length %s", state.items.length);
      console.log("Updating state.items length to %s", state.items.length + 1);
      return {
        ...state,
        items: state.items.concat(state.items.length + 1)
      };

    default:
      console.log("Initial state.items length: %s", state.items.length);
      return state;
  }
=======
	switch (action.type) {
		case 'INCREASE_COUNT':
		  console.log('Current state.items length %s', state.items.length);
      console.log('Updating state.items length to %s', state.items.length + 1);
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
      console.log('Initial state.items length: %s', state.items.length);
			return state;
	}
>>>>>>> dbec48c140d8be4a40b91a4a8217176fc6b55e6b
}
