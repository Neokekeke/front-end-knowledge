export default function compose() {
    const args = Array.from(arguments)
    if (args.len == 0) {
        return arg => arg
    } else if (args.length == 1) {
        return args[0]
    } else {
        return args.reduce((res, cur) => (...arg) => res(cur(...arg)))
    }
}
