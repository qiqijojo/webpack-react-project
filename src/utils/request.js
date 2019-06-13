import qs from 'qs';

function commonRequest(url, params, method) {
    const options = {
        headers: {
            'content-type': 'application/json'
        },
        method,
        mode: 'cors',
        credentials: 'include'
    };
    if (/post/i.test(method)) {
        options.body = (typeof params === 'string') ? params : JSON.stringify(params);
    }
    return fetch(url, options) // 返回的是一个promise对象，因此后面要用.then接收
        .then(response => response.json()); // 返回的是一个promise对象，因此后面要用.then接收
}
function post(url, params) {
    return commonRequest(url, params, 'POST');
}
function get(url, params) {
    const newUrl = params ? `${url}?${qs.stringify(params)}` : url;
    return commonRequest(newUrl, params, 'GET');
}
export default {
    post,
    get
};
