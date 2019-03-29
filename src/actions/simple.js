export default function simpleAction() {
    console.log('Olá from Action');
    return (dispatch) => {
        dispatch({type: 'ACTION_1', payload: {msg: 'Hello Thunk'}})
    }
}