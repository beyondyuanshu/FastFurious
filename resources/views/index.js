import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

let App = undefined

window.setRedirectTo = function(whereTo) {
	window.redirectTo = whereTo
	window.location.hash = window.redirectTo
}

if (window.redirectTo !== undefined) {
	window.location.hash = window.redirectTo
	App = () => <Routes />
} else {
	App = () => <Routes />
}

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
)
