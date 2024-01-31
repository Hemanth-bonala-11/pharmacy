import {legacy_createStore, combineReducers,applyMiddleware} from "redux"

import { AuthReducer } from "./Auth/reducer";
import { CartReducer } from "./Cart/reducer";
import { ProductsReducer } from "./Products/reducer";
import {thunk} from "redux-thunk";
import { OrderReducer } from "./Orders/reducer";
import { CategoryReducer } from "./categories/reducer";
import { OfferReducer } from "./Offers/reducer";
import {TenantReducer} from './Company/reducer'

const rootReducer= combineReducers({
    auth: AuthReducer,
    cart: CartReducer,
    products: ProductsReducer,
    orders: OrderReducer,
    categories: CategoryReducer,
    offers: OfferReducer,
    tenant: TenantReducer
});

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))