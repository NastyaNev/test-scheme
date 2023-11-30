import { getArray, getUsersNames } from "../../utils/api";
import { getPosts, getPostsFailed, getPostsSuccess } from "../reducers/postsSlice";
import { getUsers, getUsersFailed, getUsersSuccess } from "../reducers/usersSlice";

export function getItems() {
    return function (dispatch) {
        dispatch(getPosts());
        return getArray().then(res => {
            if (res) {
                dispatch(getPostsSuccess(res));
            } else {
                dispatch(getPostsFailed());
            }
        })
            .catch(err => {
                console.log(err)
            });
    };
}

export function getNames() {
    return function (dispatch) {
        dispatch(getUsers());
        return getUsersNames().then(res => {
            if (res) {
                dispatch(getUsersSuccess(res));
            } else {
                dispatch(getUsersFailed());
            }
        })
            .catch(err => {
                console.log(err)
            });
    };
}