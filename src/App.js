import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AuthProvider from './contexts/AuthProvider';
import Home from './components/Home/Home/Home';
import Details from './components/Home/Services/Details/Details';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Found from './components/NotFound/Found';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <Route path="*">
            <Found></Found>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
