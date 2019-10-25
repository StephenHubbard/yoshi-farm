import React from 'react';
import Isle from './components/Isle';
import Nest from './components/Nest';
import MushroomKingdom from './components/MushroomKingdom';
import {Switch, Route} from 'react-router-dom';

export default ( 
    <Switch>
        <Route exact path='/' component={Isle} />
        <Route path='/mushroomkingdom' component={MushroomKingdom} />
        <Route path='/nest' component={Nest} />
    </Switch>
)