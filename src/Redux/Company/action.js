export const TenantActions = {
    SET_TENANT:"SET_TENANT",
    
}
export const fetchTenant = (data) => {
    return {
        type: TenantActions.SET_TENANT,
        payload: data
    }
  };


