import path from 'path'

function generate(code: string, filePath: string) {
  // 根据回车拆分代码文件
  let codeArr = code.split('\n')
  let cwd = process.cwd()
  // win 的路径需要转换
  if(process.platform === 'win32') {
    cwd = cwd.replace(/\\/g, '/')
  }
  codeArr.forEach((codeRow, rowIndedx) => {
    filePath = filePath.replace(cwd, '')
    codeArr[rowIndedx] = codeRow.replaceAll(
      '<div',
      `<div data-loc="${filePath}:${rowIndedx + 1}"`
    )
  })
  code = codeArr.join('\n')
  return code
}

function transform(code, filePath) {
  let ext = path.extname(filePath)
  switch (ext) {
    case '.vue':
      return generate(code, filePath)
    default:
      return code
  }
}

export default transform
