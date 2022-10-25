const process = require('process'); 

module.exports = function (source, options) {
    // source 为 compiler 传递给 Loader 的一个文件的原内容
    // 处理...
    let filePath = this.resourcePath
    let codeArr = source.split('\n')
    let cwd = process.cwd()
    console.log('filePath------------', filePath, 'cwd--------------', cwd);

    // win 的路径需要转换
    if (process.platform === 'win32') {
        cwd = cwd.replace(/\\/g, '/')
    }
    codeArr.forEach((codeRow, rowIndedx) => {
        filePath = filePath.replace(cwd, '')
        codeArr[rowIndedx] = codeRow.replaceAll(
            '<div',
            `<div data-loc="${filePath}:${rowIndedx + 1}"`
        )
    })
    source = codeArr.join('\n')

    return source // 需要返回处理后的内容
}