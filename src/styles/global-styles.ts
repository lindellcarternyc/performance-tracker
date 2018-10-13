import { injectGlobal } from './styled-components'

import { LightTheme } from './themes'

const setGlobalStyles = () => {
  return injectGlobal`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      font-family: Lato, Helvetica-Neue, sans-serif;
      width: 100vw;
      min-height: 100vh;
      overflow-x: hidden:
      margin: 0;
      padding: 0;
      background-color: ${LightTheme.background};
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a {
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
  `
}

export default setGlobalStyles