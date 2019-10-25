import React from 'react';
import Isle from './components/Isle';
import Nest from './components/Nest';
import {Switch, Route} from 'react-router-dom';

export default ( 
    <Switch>
        <Route exact path='/' component={Isle} />
        <Route path='/nest' component={Nest} />
    </Switch>
)