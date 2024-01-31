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
    const token=localStorage.getItem("auth_token");
    const headers={
        Authorization:`Bearer ${token}`,
    };
    return requestMaker(url, "get", { params, payload});
};