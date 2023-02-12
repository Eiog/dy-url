import { createServer } from 'node:http'
import {
  createApp,
  createRouter,
  eventHandler,
  getQuery,
  toNodeListener,
} from 'h3'
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
app.use(router)
createServer(toNodeListener(app)).listen(port, undefined, () => {
  console.log(`server is runing at http://127.0.0.1:${port}/`)
})
