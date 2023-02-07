import { createServer } from 'node:http';
import {
  createApp,
  eventHandler,
  toNodeListener,
  createRouter,
  getQuery,
} from 'h3';
import { getDyUrl } from './controller/dy.controller';
const app = createApp();
const port = process.env.PORT || 3000;
const router = createRouter();
router.get(
  '/',
  eventHandler((e) => {
    const { url } = getQuery(e) as { url: string };
    if (url) {
      getDyUrl(url);
    }

    return 'hello world';
  }),
);
app.use(router);
createServer(toNodeListener(app)).listen(port, undefined, () => {
  console.log(`server is runing at http://127.0.0.1:${port}/`);
});
