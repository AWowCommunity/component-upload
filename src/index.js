import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { injectGlobal } from 'styled-components'

import App from './app'

injectGlobal`
    html {
        height: 100%;
    }
    body {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
)