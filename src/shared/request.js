import wepy from 'wepy'
import { loading, loaded, alert } from './tip'

async function request(params = {}, url) {
  if (!params.hideLoading) loading()

  let pData = params.data || {}
  const userId = wepy.getStorageSync('userId')
  if (userId) Object.assign(pData, { userId })

  try {
    const { data } = await wepy.request({
      url,
      method: params.method || 'POST',
      data: pData,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    console.log('请求地址', url)
    console.log('请求参数', pData)
    if (!params.hideLoading) loaded()
    if (/^.*\.json$/.test(url)) {
      const { value, errorMsg, success } = data || {}
      console.log('返回数据', data)
      if (success) {
        return value || ''
      } else {
        if (!params.hideErrorMsg) {
          alert(errorMsg || '亲，我们系统有些繁忙，请稍后再试')
        }
      }
    }
  } catch (err) {
    console.error('请求出错', err)
    loaded()
    alert(`亲,请求${/timeout|请求超时/.test(err.errMsg) ? '超时' : '失败'},请稍后再试`)
  }
}

export default request
