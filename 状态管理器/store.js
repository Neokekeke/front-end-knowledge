// 创建store
// applyMiddleware中间件的使用其实是为了增强store，返回和不使用中间件时store返回的一样
export const createStore = (reducer, applyMiddleware) => {

    if (applyMiddleware) {
        return applyMiddleware(createStore)(reducer)
    }

    // 组件公共状态
    let state = {
        count: 1,
    }

    // 观察者队列
    let observe = []

    // getter
    function getState() {
        return state
    }

    // setter
    function dispatch(action) {
        state = reducer(state, action)
        observe.forEach(fn => fn())
    }

    dispatch({ type: '@@REDUX_INIT' }) //初始化store数据

    // 发布订阅状态
    function subscribe(fn) {
        observe.push(fn)
    }

    return { getState, dispatch, subscribe }
}
