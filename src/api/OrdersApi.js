import requestMaker from "../lib";

export const placeOrder = (data)=>{
    const url = `/shop/order/prescription/`
    const params = {};
    const payload = data;
    return requestMaker(url,"post",{payload, params})
}
