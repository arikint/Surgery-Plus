import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Schedule from './components/Schedule/Schedule';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
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
            <PrivateRoute path="/serviceitem/:key">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/experience">
              <Experience></Experience>
            </PrivateRoute>
            <PrivateRoute path="/schedule">
              <Schedule></Schedule>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
