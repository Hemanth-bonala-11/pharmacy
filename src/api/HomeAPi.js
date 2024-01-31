import requestMaker from "../lib";

export const fetchCategories = (data)=>{
    const url = `/shop/category/`;
    const payload = { ...data };
    const params = {};
    return requestMaker(url, "get", {params, payload})
}

export const fetchHomePageProducts = (data)=>{
    const { name, id } = data;
  const url = `/shop/products/${name}/${id}/`;
  const params = {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
}

export const fetchTenantOffers = (data)=>{
  const url = `/shop/offers/`;
  const params = {...data};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
}

export const fetchTenantDetails = (data)=>{
  const url = `/account/tenants/`
  const payload = {};
  const params = { ...data };
  return requestMaker(url, "get", { params, payload });
}

export const sellableProductSearch = (data) => {
  const { search, page } = data;
  const url = `/shop/sellableproductsearch/${search}/`;
  const params = page ? { page: page } : {};
  const payload = {};
  return requestMaker(url, "get", { params, payload });
};
