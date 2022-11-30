import React from "react";
import {
  Route,Switch
} from "react-router-dom";
import Home from './pages/home';
import Shop from './pages/shop';
import './global.scss';


function App() {

  return (
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
    </div>
  );

}

export default App;
