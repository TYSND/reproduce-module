module.exports = {
    publicPath: './',
    lintOnSave: false,
    productionSourceMap: false, // 关闭production模式的sourcemap
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // 设计稿宽度的1/10，一般为75,设计稿为750
                    require('postcss-px2rem')({remUnit: 200}),
                ]
            }
        }
    }
}