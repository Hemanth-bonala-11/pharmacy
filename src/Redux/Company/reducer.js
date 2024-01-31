import { TenantActions } from "./action";

const companyInitialState = {
  details: []
};

export const TenantReducer = (state= companyInitialState, {type, payload})=>{
    switch (type) {
        case TenantActions.SET_TENANT: {
          return {
            ...state,
            details: payload
          };
        }
        default:
          return state;
      }
}