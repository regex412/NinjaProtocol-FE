const INITIAL_STATE = {
	pageNumber: 0
}

const reducer = (state = INITIAL_STATE, action={}) => {
	switch(action.type) {
		case "SET_PAGENUMBER":
			return {
				...state,
				pageNumber: action.content
			};
		default:
			return state;
	}
};

export default reducer;