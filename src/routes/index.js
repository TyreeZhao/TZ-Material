import React from 'react'
import { Route, IndexRedirect, Redirect } from 'react-router'

import CoreLayout from 'layouts/CoreLayout/CoreLayout'

export default () => (
  <Route>
    <Route path="/" component={CoreLayout}>
    </Route>
    <Redirect from="*" to="/" />
  </Route>
)
