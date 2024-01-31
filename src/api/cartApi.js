import requestMaker from "../lib";

export const add_to_cart = (data)=>{
    const url ="/shop/add_to_cart/";
    const payload = data;
    const params = {};
    return requestMaker(url,"post",{params, payload})
}

export const fetchCartDetails = () => {
    const url ="/shop/get_cart/";
    const params = {};
    const payload = {};
    return requestMaker(url, "get", { params, payload});
};