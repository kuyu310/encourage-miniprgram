import wepy from 'wepy'

export default class Animation extends wepy.mixin {
  data = {
    cShowAnimationData: {},
    cHideAnimationData: {}
  }

  onLoad() {
    const animation = wepy.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    })

    this.cShowAnimationData = animation.opacity(1).step().export()
    this.cHideAnimationData = animation.opacity(0).step().export()
  }
}
