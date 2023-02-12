import axios from 'axios';
export const getDyUrl: (url?: string) => Promise<DY.Result> = (url) => {
  return new Promise(async (resolve, reject) => {
    const _headers = {
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78',
    };
    if (!url) return reject({ msg: 'url not found' });
    const _url = url.match(/https:\/\/v.douyin.com\/[^\s ]*/);
    if (!_url || _url.length === 0) return reject({ msg: 'url错误' });
    try {
      const { request, headers } = await axios.get(_url[0], {
        headers: _headers,
      });
      const locationUrl =
        request.res.responseUrl.match(/https:[^\s]*/)![0] || undefined;
      if (!locationUrl) return reject({ msg: '解析失败' });
      const cookie = headers['set-cookie'] || undefined;
      if (!cookie) return reject({ msg: 'cookie失败' });
      const vid =
        locationUrl.match(
          /https:\/\/www.(douyin.com|iesdouyin.com\/share)\/video\/([^?&=\s\/]+)/,
        )![2] || undefined;
      if (!vid) return reject({ msg: 'vid失败' });
      const videoInfoUrl =
        'https://www.iesdouyin.com/aweme/v1/web/aweme/detail/?aweme_id=' + vid;
      const { data: videoInfo } = await axios.get(videoInfoUrl, {
        headers: {
          ..._headers,
          cookie: cookie,
        },
      });
      return resolve(videoInfo as DY.Result);
    } catch (error) {
      return reject({ msg: 'error', error });
    }
  });
};
