import compose from './compose.js'

// 执行中间件
// 思想就是上一个中间件函数的结果作为参数传递给下一个中间件函数
// 中间件执行的顺序根据传入的顺序来
function applyMiddleware(store, ...middleware) {
    let middlewareArr = [...middleware]
    let middlewareArrReverse = middlewareArr.reverse() // 先进来的中间件先执行
    const mwFn = middlewareArrReverse.forEach(
        (fn) => (store.dispatch = fn(store))
    )
    console.log('mwFn', mwFn)
}

// 升级版applyMiddleWare
const applyMiddlewareX = (...middlewares) => (createStore) => (reducer) => {
    const store = createStore(reducer);
    let { getState, dispatch } = store;
    const params = {
        getState,
        dispatch: action => dispatch(action)
    }

    const middlewareArr = middlewares.map(middleware => middleware(params))
    dispatch = compose(...middlewareArr)(dispatch)

    console.log('middlewareArr', middlewareArr, dispatch)
    return { ...store, dispatch }
}

export { applyMiddleware, applyMiddlewareX }
