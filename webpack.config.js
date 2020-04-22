const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js', // エントリーポイントの設定
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 絶対パスを指定
        path: path.resolve(__dirname, 'public/js')
    }
}