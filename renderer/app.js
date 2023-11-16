import { createSSRApp, h } from 'vue'
import App from './App.vue'
import { setPageContext } from './usePageContext'

function createApp(pageContext) {
  const { Page} = pageContext
  const PageWithLayout = {
    render() {
      return h(
        App,
        {},
        {
          default() {
            return h(Page|| {})
          }
        }
      )
    }
  }

  const app = createSSRApp(PageWithLayout)
  setPageContext(app, pageContext)
  return app
}


export { createApp }