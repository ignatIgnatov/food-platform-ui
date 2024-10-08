import { api } from "../../config/api";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST, UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS } from "./ActionType";

export const createMenuItem = ({ req, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.post(`/api/admin/food`, req, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
            console.log("created menu item", data);
        } catch (error) {
            console.log("error", error);
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error });
        }
    }
}

export const getMenuItemByRestaurantId = (req) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST });
        try {
            const { data } = await api.get(`/api/food/restaurant/${req.restaurantId}?vegetarian=${req.vegetarian}&nonVeg=${req.nonVeg}&seasonal=${req.seasonal}&foodCategory=${req.foodCategory}`, {
                headers: {
                    Authorization: `Bearer ${req.jwt}`
                }
            });
            dispatch({ type: GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS, payload: data });
            console.log("menu items by restaurant id", data);
        } catch (error) {
            console.log("error", error);
            dispatch({ type: GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, payload: error });
        }
    }
}

export const searchMenuItem = ({ keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(`/api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
            console.log("search menu item", data);
        } catch (error) {
            console.log("error", error);
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
        }
    }
}

export const updateMenuItemAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(`/api/admin/food/${foodId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, payload: data });
            console.log("update item availability", data);
        } catch (error) {
            console.log("error", error);
            dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, payload: error });
        }
    }
}

export const deleteFoodAction = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/admin/food/${foodId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: data });
            console.log("deleted menu item", data);
        } catch (error) {
            console.log("error", error);
            dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
        }
    }
}