import requestMaker from "../lib";

export const fetchPagedProducts = (data) => {
    const { page , subCategoryName, subCategoryId } = data;
    console.log(data,"data");
    if(!page) page=1
    const url = `/shop/products/Pagination/`;
    const params = {data};
    const payload = {};
    return requestMaker(url, "get", { params, payload });
  }

  export const fetchAllProducts = (data) => {
    const { subCategoryName, subCategoryId } = data;
    const url = `/shop/products/${subCategoryName}/${subCategoryId}/`;
    const params = {};
    const payload = {};
    return requestMaker(url, "get", { params, payload });
  };