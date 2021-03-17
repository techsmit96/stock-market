import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Utils/routes';
import Navigator from './Utils/Navigator';
function App() {
  return (
    <Router>
      <Navigator />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
    // <div className="App">
    //   <Header />
    //   <Home />
    // </div>
  );
}

export default App;
