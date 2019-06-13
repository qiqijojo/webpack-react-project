module.exports = {
    mock: {
        '/api': {
            changeOrigin: true,
            target: 'http://rap2api.taobao.org',
            pathRewrite: {
                '^/api': '/app/mock/14810/'
            }
        }
    },
    dev: {
        '/api': {
            changeOrigin: true,
            target: 'http://rap2api.taobao.org',
            pathRewrite: {
                '^/api': '/app/mock/14810/'
            }
        }
    },
    qa: {
        '/api': {
            changeOrigin: true,
            target: 'http://rap2api.taobao.org',
            pathRewrite: {
                '^/api': '/app/mock/14810/'
            }
        }
    },
    online: {
        '/api': {
            changeOrigin: true,
            target: 'http://rap2api.taobao.org',
            pathRewrite: {
                '^/api': '/app/mock/14810/'
            }
        }
    }
};
