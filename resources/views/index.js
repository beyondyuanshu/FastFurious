import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import Routes from "./routes"

let App = undefined

window.setRedirectTo = function(whereTo) {
  window.redirectTo = whereTo
}

if (window.redirectTo !== undefined) {
  window.location.hash = window.redirectTo
  App = () => <Routes />
} else {
  window.location.hash = "/create_toc" // TODO: pluginCall is missing in sketch-module-web-view/client
  App = () => <Routes />
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
)
