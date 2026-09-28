import * as types from "./actionTypes";

export const getAddress = (data) => ({
    type:types.GET_ADDRESS,
    payload: data
});

export const fetchAddress = () => {
    return (dispatch) => {
        fetch("https://farfetch-backend-nine.vercel.app/address")
            .then((response) => response.json())
            .then((data) =>
                dispatch(getAddress(data))
            );
    };
}