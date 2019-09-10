import request from '../utils/request';

// 获取豆瓣前250排名
export function getMoiveTop250(start = 0, count = 10) {
  return request({
    url: '/v2/movie/top250',
    params: {
      start,
      count,
    }
  });
}
