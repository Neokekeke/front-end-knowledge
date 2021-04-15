// logger2
export const logger2 = store => next => action => {
    console.log('logger2---进入')
    let res = next(action)
    console.log('logger2---退出')
    return res
}