import React from 'react';
import Isle from './components/Isle';
import Nest from './components/Nest';
import Home from './components/Home';
import Starhill from './components/Starhill';
import MushroomKingdom from './components/MushroomKingdom';
import {Switch, Route} from 'react-router-dom';

export default ( 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/isle' component={Isle} />
        <Route path='/mushroomkingdom' component={MushroomKingdom} />
        <Route path='/nest' component={Nest} />
        <Route path='/starhill' component={Starhill} />
    </Switch>
)