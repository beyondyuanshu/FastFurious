import React from "react"
import { Route, Switch } from "react-router-dom"
import CreateTableOfContent from "./components/createTableOfContent"

export default () => (
  <div id="mainContent">
    <Switch>
      <Route exact path="/create_toc" component={CreateTableOfContent} />
    </Switch>
  </div>
)
