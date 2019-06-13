import qs from 'qs';
import { message } from 'antd';

const errCodeMessages = {
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

// 整合请求参数
function getRequestParams(params, method) {
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
    return options;
}
// 核对请求状态
async function processRequestStatus(response) {
    if (errCodeMessages[response.status]) {
        throw new Error();
    } else {
        const resText = await response.text();
        return resText ? JSON.parse(resText) : {};
    }
}
// 公共请求方法
async function commonRequest(url, params, method) {
    const requestParams = getRequestParams(params, method);
    const response = await fetch(url, requestParams); // 不加await返回的是一个promise对象；加await返回是一个包含相应状态的json对象
    try {
        return await processRequestStatus(response); // 添加await的原因：解决当出现错误的时候不走catch；响应正常的时候加不加都可以
    } catch {
        message.error('请求出错');
    }
}
// post请求
function post(url, params) {
    return commonRequest(url, params, 'POST');
}
// get请求
function get(url, params) {
    const newUrl = params ? `${url}?${qs.stringify(params)}` : url;
    return commonRequest(newUrl, params, 'GET');
}
export default {
    post,
    get
};
