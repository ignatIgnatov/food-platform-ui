import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, UPDATE_STOCK_FAILURE, UPDATE_STOCK_REQUEST, UPDATE_STOCK_SUCCESS } from "./ActionType"

const initialState = {
    ingredients: [],
    update: null,
    category: [],
    error: null,
    loading: false
}

const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_INGREDIENTS_REQUEST:
        case GET_INGREDIENT_CATEGORY_REQUEST:
        case CREATE_INGREDIENT_CATEGORY_REQUEST:
        case CREATE_INGREDIENT_REQUEST:
        case UPDATE_STOCK_REQUEST:
            return {
                ...state, loading: true, error: null
            };

        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state, ingredients: action.payload, loading: false
            };

        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state, loading: false, category: action.payload
            };

        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state, loading: false,
                category: [...state.category, action.payload]
            };

        case CREATE_INGREDIENT_SUCCESS:
            return {
                ...state, loading: false,
                ingredients: [...state.ingredients, action.payload]
            };

        case UPDATE_STOCK_SUCCESS:
            return {
                ...state, loading: false, update: action.payload,
                ingredients: state.ingredients.map(
                    (item) => item.id === action.payload.id ? action.payload : item
                )
            };

        case GET_INGREDIENTS_FAILURE:
        case GET_INGREDIENT_CATEGORY_FAILURE:
        case CREATE_INGREDIENT_CATEGORY_FAILURE:
        case CREATE_INGREDIENT_FAILURE:
        case UPDATE_STOCK_FAILURE:
            return {
                ...state, loading: false, error: action.payload
            };

        default:
            return state;
    }
}

export default ingredientReducer;