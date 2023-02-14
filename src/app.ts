import { createServer } from 'node:http'
import {
  createApp,
  createRouter,
  eventHandler,
  getQuery,
  readBody,
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
      return {
        info,
        title: info.aweme_detail.desc,
        cover: info.aweme_detail.video.cover.url_list[0],
        url: info.aweme_detail.video.play_addr.url_list[0],
      }
    }
    catch (error) {
      return error
    }
  }),
)
router.post('/download', eventHandler(async (e) => {
  try {
    const { url } = await readBody(e) as { url: string }
    const file = download(url, `download/${dayjs().format('YYYY-MM-DD')}/`)
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
