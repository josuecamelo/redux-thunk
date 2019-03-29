import axios from 'axios';

//ACTIONS TYPES
export const IS_FETCHING = 'IS_FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ERROR = 'FETCHED_ERROR';

//ACTIONS CREATORS
export function isFetching(bool) {
    return {
        type: IS_FETCHING,
        isLoading: bool
    }
}

export function fetchedError(err) {
    return {
        type: FETCHED_ERROR,
        error: err
    }
}

export function fetched(data) {
    return {
        type: FETCHED,
        data: data
    }
}

//THUNKS
export function thunkFetchData() {
    return async (dispatch) => {
        dispatch(isFetching(true));
        try {
            const {data} = await axios.get('https://api.icndb.com/jokes');
            dispatch(fetched(data.value));
            dispatch(isFetching(false));
        } catch (err) {
            dispatch(fetchedError(err));
            dispatch(isFetching(false));
        }
    }
}
