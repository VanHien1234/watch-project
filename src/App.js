import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { HomeTemplate } from 'templates/HomeTemplate/HomeTemplate';
import Detail from 'Pages/Detail/Detail';
import Home from 'Pages/Home/Home';
import News from 'Pages/News/News';

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/product/:id" exact Component={Detail} />
        <HomeTemplate path="/news" exact Component={News} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
