const INITIAL_STATE = {
	section: "colors"
};

const landingPage = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "UPDATE_SECTION":
			return Object.assign({}, state, {
				section: action.payload.section
			});

		default:
			return state;
	}
};

export default landingPage;
