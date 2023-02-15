import { createServer } from 'node:http'
import { readFileSync } from 'fs'
import {
  createApp,
  createRouter,
  eventHandler,
  getQuery,
  setHeader,
  toNodeListener,
} from 'h3'
import download from 'download'
import dayjs from 'dayjs'
import { getDyUrl } from './controller/dy.controller'
const app = createApp()
const port = process.env.PORT || 3612
const router = createRouter()
router.get(
  '/',
  eventHandler(async (e) => {
    const { url } = getQuery(e) as { url: string }

    try {
      const info = await getDyUrl(url)
      const vidUrl = info.aweme_detail.video.play_addr.url_list[0]
      const name = `${vidUrl.match(/(?<=(\/)).*?(?=(\/\?))/)![0].slice(vidUrl.match(/(?<=(\/)).*?(?=(\/\?))/)![0].lastIndexOf('/') + 1)}.mp4`
      const dirName = `download/${dayjs().format('YYYY-MM-DD')}/`
      await download(vidUrl, dirName)
      return {
        info,
        title: info.aweme_detail.desc,
        cover: info.aweme_detail.video.cover.url_list[0],
        url: info.aweme_detail.video.play_addr.url_list[0],
        filePath: dirName + name,
      }
    }
    catch (error) {
      return error
    }
  }),
)
router.get('/download', eventHandler(async (e) => {
  try {
    const { path } = getQuery(e) as { path: string }
    const file = readFileSync(path)
    setHeader(e, 'Content-Type', 'application/force-download')
    setHeader(e, 'Content-Disposition', `attachment;filename=${path.slice(path.lastIndexOf('/') + 1)}`)
    return file
  }
  catch (error) {
    return error
  }
}))
app.use(router)
createServer(toNodeListener(app)).listen(port, undefined, () => {
  console.log(`server is runing at http://127.0.0.1:${port}/`)
})
