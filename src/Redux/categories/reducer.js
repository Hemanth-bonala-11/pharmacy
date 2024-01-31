import { CategoryActions } from "./action";

const categoriesInitialState = {
    list: [],
    globalCategories: []
  };

export const CategoryReducer = (state= categoriesInitialState, {type, payload})=>{
    switch (type) {
        case CategoryActions.FETCH_CATEGORIES: {
          return {
            ...state,
            list:payload
          };
        }
        case CategoryActions.FETCH_GLOBAL_CATEGORIES: {
          return {
            ...state,
            ...payload
          };
        }
        default:
          return state;
      }

}