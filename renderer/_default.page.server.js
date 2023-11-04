import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { createApp } from './app'
import logoUrl from './logo.svg'
import card from './card.png'
import styles from './styles.css'

async function render(pageContext) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

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
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@vercel" />
    <meta name="twitter:creator" content="@vuejs" />
    <meta name="twitter:title" content="Vuejs on the edge" />
    <meta name="twitter:description" content="HTML, dynamically rendered in a city near you" />
    <meta name="twitter:image" content="${card}" />
    <meta name="twitter:image:alt" content="The Vercel and Vuejs logos" />
    <meta name="og:image" content="${card}" />
    <title>${title}</title>
    <link href="${styles}" type="stylesheet" />
</head>
<body>
    <div id="app">${dangerouslySkipEscape(appHtml)}</div>
</body>

</html>`
}

export { render }
export const passToClient = ['pageProps', 'headers', 'urlPathname']