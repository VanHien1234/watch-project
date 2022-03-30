import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { HomeTemplate } from 'templates/HomeTemplate/HomeTemplate';
import Home from 'Pages/Home/Home';


export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
