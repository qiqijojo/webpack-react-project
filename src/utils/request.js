function request(url, params) {
    return fetch(url, params) // 返回的是一个promise对象，因此后面要用.then接收
        .then(response => response.json()); // 返回的是一个promise对象，因此后面要用.then接收
}
export default request;
