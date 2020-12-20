import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Biography from './pages/Biography';
import Interiors from './pages/Interiors';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Inspirations from './pages/Inspirations';
import Default from './pages/Default';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Switch, Route} from 'react-router-dom';
import {Chatbot} from 'react-chatbot-kit';
import './App.css';

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';


function App() {
  return (
    <div className="App">

      {/* common navbar for all pages */}
      <Navbar/>
      <div className="chatbot">
        <Route exact path="/chatbot">
        <Chatbot className="Chatbot" config={config} messageParser={MessageParser} actionProvider={ActionProvider} exact path="/chatbot" />
        </Route>
         </div>
      
      
      {/* end of common navbar for all pages */}


      <Switch>
        <Route exact path="/" component={Home} />
       
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/biography" component={Biography} />
        <Route exact path="/interiors" component={Interiors} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/inspirations" component={Inspirations} />
        <Route component={Default} />
      </Switch>


      {/* common footer for all pages */}
      <Footer/>
      {/* end of common footer for all pages */}
    </div>
  );
}

export default App;
