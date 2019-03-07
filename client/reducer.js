import axios from 'axios';

// INITIAL STATE
const initialState = {
    articles: [],
    userId: null
};

// ACTION TYPES
const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';

// ACTION CREATOR
export const getAllArticles = (articles) => ({
	type: GET_ALL_ARTICLES,
	articles
})

// THUNK CREATORS
export const fetchArticles = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`/api/users/${state.userId}`);
			dispatch(getAllArticles(response.data.articles));
		}
		catch (err) {
			console.log(err)
		}
	};
};

// REDUCER
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_ARTICLES:
            return { ...state, articles: action.articles };
		default:
			return state;
	}
};
