const BASE_URL = process.env.NODE_ENV === 'production'
    ? './'
    : '/'

module.exports = {
    filenameHashing: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
};

module.exports = {
    devServer: {
        proxy: {
            '': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    },
};