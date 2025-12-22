import { getIngredientsRequest } from "../../utils/fakeApi";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
    return async function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
        });

        try {
            const res = await getIngredientsRequest();
            if (res && res.success) {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    items: res.data,
                });
            }
        } catch (error) {
            dispatch({
                type: GET_INGREDIENTS_FAILED,
            });
        }
    };
}
