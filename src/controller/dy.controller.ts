import axios from 'axios';
export const getDyUrl = (url?: string) => {
  return new Promise(async (resolve, reject) => {
    if (!url) return reject({ msg: 'url not found' });
    const _url = url.match(/https:\/\/v.douyin.com\/[^\s ]*/)![0] || undefined;
    if (!_url) return reject({ msg: 'url错误' });
    const { request, headers } = await axios.get(_url);
    const locationUrl =
      request.res.responseUrl.match(/https:[^\s]*/)![0] || undefined;
    const cookie = headers['set-cookie'];
    console.log();

    const vid =
      locationUrl.match(
        /https:\/\/www.(douyin.com|iesdouyin.com\/share)\/video\/([^?&=\s\/]+)/,
      )![2] || undefined;
    const videoInfoUrl =
      'https://www.iesdouyin.com/aweme/v1/web/aweme/detail/?aweme_id=' + vid;
    const { data: videoInfo } = await axios.get(videoInfoUrl, {
      headers: {
        cookie: cookie,
      },
    });
    console.log(videoInfo);
  });
};
