
import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = `${__dirname}/..`
const isProduction = process.env.NODE_ENV === 'production'

startServer()


async function startServer() {
  const app = express()

  app.use(compression())

  if (isProduction) {
    const sirv = (await import('sirv')).default
    app.use(sirv(`${root}/dist/client`))
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        build: {
          rollupOptions: {
            output: {
              manualChunks:{}
            }
          }
        },
        optimizeDeps:{exclude:['vue']},
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }


  app.get('*', async (req, res, next) => {
    const dateString = new Date().toISOString();
    const parsedCity = decodeURIComponent(req.headers['x-vercel-ip-city']);
    const ip = (req.headers['x-forwarded-for'] ?? '127.0.0.1').split(',')[0];
    const city = parsedCity == 'undefined' ? "Cannot get city" : parsedCity;

    const pageContextInit = {
      urlOriginal: req.originalUrl,
      dateString,
      ip,
      city,
      parsedCity
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) {
      return next()
    } else {
      const { body, statusCode, headers, earlyHints } = httpResponse
      if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      res.send(body)
    }
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
