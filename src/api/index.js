import request from '../shared/request'
import { ApiOrigin as origin } from '@/shared/const'

const path = origin + '/open/applet/applet_controller/'

export const login = data => request({ data }, path + 'query_login_info.json')
export const getUserInfo = data => request(
  { data, hideLoading: true, hideErrorMsg: true },
  path + 'get_login_info_by_cache.json'
)

export const pkRule = () => request({}, path + 'get_applet_pk_rules.json')
export const pkStart = data => request({ data }, path + 'start_pk.json')
export const pkAccept = data => request({ data }, path + 'accept_pk.json')
export const pkDetail = data => request({ data }, path + 'pk_detail.json')
export const pkStatus = data => request({ data }, path + 'watch_pk_status.json')
export const pkMyList = () => request({}, path + 'query_my_pk_list.json')
export const pkHotList = () => request({}, path + 'query_pk_hot_list.json')

export const leaveMessage = data => request({ data }, path + 'leave_word.json')

export const wantedList = () => request({}, path + 'reward_top_list.json')
export const wantedDetail = data => request({ data }, path + 'reward_retail.json')
export const wantedIdeasAmount = () => request({}, path + 'query_reward_ideas_amount.json')
export const wantedIdea = data => request({ data }, path + 'add_recruit.json')

// 本月团队出单总量榜
export const rankNowTotal = () => request({}, path + 'query_hot_top_list.json')
// 上月团队出单总量榜
export const rankLastTotal = () => request({}, path + 'last_month_order_count_ranking.json')
// 本月团队出单保费榜
export const rankNowPremium = () => request({}, path + 'this_month_total_premium_ranking.json')
// 上月团队出单保费榜
export const rankLastPremium = () => request({}, path + 'last_month_total_premium_ranking.json')
