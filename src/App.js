
import './App.css';
import Login from './Login';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux' ;
import {store} from './store/store';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
function App() {
 
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <PrivateRoute auth={store.auth} exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
