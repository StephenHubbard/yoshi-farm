import React from 'react';
import Farm from './components/Farm';
import Nest from './components/Nest';
import {Switch, Route} from 'react-router-dom';

export default ( 
    <Switch>
        <Route exact path='/' component={Farm} />
        <Route path='/nest' component={Nest} />
    </Switch>
)