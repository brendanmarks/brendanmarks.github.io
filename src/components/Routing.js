import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main.js';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
    </Switch>
)

export default Routing;