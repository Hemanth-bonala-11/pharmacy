import requestMaker from "../lib";

export const register = (data)=>{
    const url = `/account/register/`;
    const params = {};
    const payload = {...data};
    return requestMaker(url,"post",{params, payload})
}

export const sendOtp = (data)=>{
    const {phone_number} = data
    const url = `/account/sendotp/${phone_number}/`;
    const params = {};
    const payload = {...data};
    return requestMaker(url,"post",{params, payload})
}

export const verifyOtp = (data) => {
    const { phone_number, token, otp } = data;
    const url = `/account/verifyotp/${phone_number}/${token}/${otp}/`;
    const params = {};
    const payload = { ...data };
    return requestMaker(url, 'get', { params, payload });
};

export const login = (data) => {
    const url = `/account/login/`;
    const params = {};
    const payload = { ...data };
    return requestMaker(url, 'post', { params, payload });
};

export const fetchUserDetails = (data) => {
    const url = `/account/userprofile/`;
    const params = {};
    const payload = {};
    return requestMaker(url, 'get', { params, payload });
};
