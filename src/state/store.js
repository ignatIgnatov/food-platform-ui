import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./restaurant/Reducer";
import menuItemReducer from "./menu/Reducer";
import cartReducer from "./cart/Reducer";
import orderReducer from "./order/Reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

