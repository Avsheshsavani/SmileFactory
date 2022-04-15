import React from "react";
import {Route,Switch} from 'react-router'
import Aboutus from "./pages/Aboutus";
import Gallary from "./pages/Gallary";
import Contacts from "./pages/Contacts";
import Routes from './Routes';
import Services from "./pages/Services";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
   <>
   <Switch>

   <Route exact path="/" component={Routes}></Route>
   <Route path="/home" component={Home}></Route>
   <Route path="/about" component={Aboutus}></Route>
   <Route path="/contact" component={Contacts}></Route>
   <Route path="/gallary" component={Gallary}></Route>
   <Route path="/services" component={Services}></Route>
   <Route path="/error" component={Error}></Route>
   </Switch>
    </>
  );
}

export default App;
