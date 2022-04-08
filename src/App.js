import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { HomeTemplate } from 'templates/HomeTemplate/HomeTemplate';
import Detail from 'Pages/Detail/Detail';
import Home from 'Pages/Home/Home';
import News from 'Pages/News/News';
import Loading from 'LoadingCpn/Loading';
import Category from 'Pages/Category/Category';
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/product/:id" exact Component={Detail} />
        <HomeTemplate path="/news" Component={News} />
        <HomeTemplate path="/category" Component={Category} />
        {/* <HomeTemplate path="/news/:id" exact Component={NewsDetail} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
