/// <reference types="vite/client" />
declare module '*?component' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
