export const OfferActions = {
    FETCH_OFFERS:"FETCH_OFFERS",
    
}
export const fetchOffers = (data) => {
    return {
        type: OfferActions.FETCH_OFFERS,
        payload: data
    }
  };
