// logger1
export function logger1(store) {
    let next = store.dispatch
    return function (action) {
        console.log('logger1')
        let result = next(action)
        return result;
    }
}

export const logger = store => next => action => {
    console.log('logger --- 进入', store)
    let res = next(action)
    console.log('logger --- 退出', next)
    return res
}