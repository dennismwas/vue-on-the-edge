export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps','headers' ,'urlPathname']
import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { createApp } from './app'
import logoUrl from './logo.svg'

async function render(pageContext) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  // See https://vike.dev/head
  const { documentProps } = pageContext
  const title = documentProps?.title || 'Vue on the edge'
  const desc = documentProps?.description || 'Vue on the edge'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}