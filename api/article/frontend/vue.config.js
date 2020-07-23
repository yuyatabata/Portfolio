if (ProcessingInstruction.env.NODE_ENV = 'production') {
    module.exports = {
        outputDir = '../static',
        assetsDir = '../static/article',
        indexPath = '../template/article/index.html',
        publicPath = '../api/',
    }
}