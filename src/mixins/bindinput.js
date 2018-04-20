import wepy from 'wepy'

export default class Bindinput extends wepy.mixin {
  methods = {
    /**
     * 同步表单的数据和视图
     * @param { String } key 表单要绑定数据的 key
     */
    cBindinput(...param) {
      const [key, e] = [param[0], param[1]]
      if (param.length !== 2) throw new Error('参数个数错误，请只传入 key')
      if (key === '' || key === undefined) throw new Error('请传入 key')
      this[key] = e.detail.value
    }
  }
}
