import './App.css';
import Collections from './components/Collections';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <div className='app__body'>
            <Route path='/'>
              <MainContent />
              <Collections />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
