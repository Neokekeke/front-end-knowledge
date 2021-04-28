async function getJSON() {
    const url = 'https://api.github.com/users/ruanyf';
    try {

        // fetch api 是一个promise，返回的是一个response Stream 对象
        // response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象。
        const res = await fetch(url);
        const response = await res.json();

        console.log(res, response)
    } catch(err) {
        console.log(err)
    }
}
getJSON()