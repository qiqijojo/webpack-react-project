/**
 * 根据环境变量获取相应值
 * 根据 npm start --[参数] 进行环境切换, 例如 `npm start --qa`
 * @param {Object} obj 对象
 * @param {String} defaultEnv 默认环境
 */
function getProxyByEnv(obj, defaultEnv = 'dev') {
    let value = obj[defaultEnv];
    Object.keys(obj).forEach((envKey) => {
        if (process.env[`npm_config_${envKey}`]) {
            value = obj[envKey];
        }
    });
    return value;
}
module.exports = getProxyByEnv;
