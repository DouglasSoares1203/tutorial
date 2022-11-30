import React from "react";
import {
  Route,Switch
} from "react-router-dom";
import Home from './pages/home/index';
import Shop from './pages/shop/index';
import './global.scss';


function App() {

  return (
    <div>
        <Switch>
          <Route exact path="/" component={props => <Home {...props}/>} />
          <Route path="/shop" component={props => <Shop {...props}/>} />
        </Switch>
    </div>
  );

}

export default App;
