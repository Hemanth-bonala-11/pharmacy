import { OfferActions } from "./action";

const list = [];

export const OfferReducer = (state= list, {type, payload})=>{
    switch (type) {
        case OfferActions.FETCH_OFFERS: {
          return {
            ...state,
            list:payload
          };
        }
        default:
          return state;
      }

}