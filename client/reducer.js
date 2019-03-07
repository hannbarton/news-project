import axios from 'axios';

// INITIAL STATE
const initialState = {
    articles: [],
    userId: null
};

// ACTION TYPES
const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
const ADD_ARTICLE = 'ADD_ARTICLE';
const SET_USERID = 'SET_USERID'

// ACTION CREATOR
export const getAllArticles = (articles) => ({
	type: GET_ALL_ARTICLES,
	articles
})
export const addArticle = (article) => ({
	type: ADD_ARTICLE,
	article
})

export const setUser = (userId) => ({
    type: SET_USERID,
    userId
})


// THUNK CREATORS
export const fetchArticles = (userId) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`/api/users/all/${userId}`);
			dispatch(getAllArticles(response.data.articles));
		}
		catch (err) {
			console.log(err)
		}
	};
};

export const postArticle = (article) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`/api/articles/saved`, article);
			dispatch(addArticle(response.data.article));
		}
		catch (err) {
			console.log(err)
		}
	};
};

export const setMainUser = () => {
    return async (dispatch) => {
		try {
			const response = await axios.get(`/api/users/me`);
			dispatch(setUser(response.data.id));
		}
		catch (err) {
			console.log(err)
		}
	}
}

// REDUCER
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_ARTICLES:
            return { ...state, articles: action.articles };
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.article] };
        case SET_USERID:
            return { ...state, userId: action.userId};
		default:
			return state;
    }
};
