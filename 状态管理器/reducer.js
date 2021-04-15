const initialState = {
    count: 0,
    name: 'st'
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1
            }
        case 'minus':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return initialState
    }
}
