export const CategoryActions = {
    FETCH_GLOBAL_CATEGORIES:"FETCH_GLOBAL_CATEGORIES",
    FETCH_CATEGORIES:"FETCH_CATEGORIES"
}
export const fetchHomeCategories = (data) => {
    return {
        type: CategoryActions.FETCH_CATEGORIES,
        payload: data
    }
  };

  