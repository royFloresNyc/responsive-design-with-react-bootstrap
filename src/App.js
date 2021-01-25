import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Panda from './Components/Panda';
import Gorilla from './Components/Gorilla';
import Rhino from './Components/Rhino';
import SeaTurtle from './Components/SeaTurtle';
import Navigation from './Components/Navigation';

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>                
                <Route exact path='/' component={Home}/>            
                <Route path='/panda' component={Panda}/>  
                <Route path='/gorilla' component={Gorilla}/>               
                <Route path='/rhino' component={Rhino}/> 
                <Route path='/seaTurtle' component={SeaTurtle}/>  
            </Switch>
        </div>
    );
}

export default App;