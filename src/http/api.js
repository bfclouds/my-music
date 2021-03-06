import http from './http'
import PathClass from '@/http/pathClass'

const qqMUrl = '/qqApi'
const netEaseUrl = '/netApi'

// let apiUrl = {
//   recommendsApi: {
//     // 推荐页面数据
//     getRecommend: new PathClass(qqMUrl + '/getRecommend', http.requestMethod.GET).questFunc,
//   },
//   singersApi: {
//     getSingerList: new PathClass(qqMUrl + '/getSingerList', http.requestMethod.GET).questFunc,
//   }
// }

export const recommendsApi =  {
  getRecommend: new PathClass(qqMUrl + '/getRecommend', http.requestMethod.GET).questFunc,
  getBanner: new PathClass(netEaseUrl + '/banner', http.requestMethod.GET).questFunc,
}

export const singersApi =  {
  // getSingerList: new PathClass(qqMUrl + '/getSingerList', http.requestMethod.GET).questFunc,
  // getSingerDesc: new PathClass(qqMUrl + '/getSingerDesc', http.requestMethod.GET).questFunc,
  // getSingerAlbum: new PathClass(qqMUrl + '/getSingerAlbum', http.requestMethod.GET).questFunc

  // 获取歌手列表
  getSingerList: new PathClass(netEaseUrl + '/artist/list', http.requestMethod.GET).questFunc,
  // 获取歌手详情和歌手的热门歌单
  getSingerDesc: new PathClass(netEaseUrl + '/artists', http.requestMethod.GET).questFunc
}

export const song = {
  // 获取歌曲
  getSong: new PathClass(netEaseUrl + '/song/url', http.requestMethod.GET).questFunc,
  // 获取歌词接口
  getLyric: new PathClass(netEaseUrl + '/lyric', http.requestMethod.GET).questFunc
}