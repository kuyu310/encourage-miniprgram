/**
 * 延时
 * @param { Number } ms 延迟时间，毫秒
 */
async function timeout(ms) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * “成功”提示
 * @param { String } title 标题
 * @param { Number } duration 提示的延迟时间，单位毫秒
 */
async function success(title = '', duration = 500) {
  wx.showToast({
    title,
    icon: 'success',
    mask: true,
    duration
  })
  await timeout(duration)
}

/**
 * 加载中
 * @param { String } title 加载提示
 */
function loading(title = '加载中') {
  wx.showLoading({
    title,
    mask: true
  })
}

/**
 * 加载完成
 */
function loaded() {
  wx.hideLoading()
}

/**
 * 弹窗
 * @param { String } content 提示的内容
 * @param { String } confirmText 确定按钮的文字
 */
function alert(content, confirmText = '知道了') {
  wx.showModal({
    title: '温馨提示',
    content,
    showCancel: false,
    confirmText
  })
}

/**
 * 弹窗（异步）
 * @param { String } content 提示的内容
 * @param { String } confirmText 确定按钮的文字
 */
function alertAsync(content, confirmText = '知道了') {
  return new Promise(resolve => {
    wx.showModal({
      title: '温馨提示',
      content,
      showCancel: false,
      confirmText,
      success: resolve
    })
  })
}

export {
  success,
  loading,
  loaded,
  alert,
  alertAsync
}
