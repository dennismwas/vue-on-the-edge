import { createApp } from './app'

function render(pageContext) {
  createApp(pageContext).mount('#app')
}

export { render }