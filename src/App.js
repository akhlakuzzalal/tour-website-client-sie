import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddService from './components/AddService/AddService';
import AddHotel from './components/AddService/AddHotel';
import Orders from './components/Orders/Orders';
import Services from './components/Services/Services';
import AuthProvider from './firebase/AuthProvider';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './firebase/PrivateRoute';
import Shidule from './components/Shidule/Shidule';
import ControlOrders from './components/ControlOrders/ControlOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/addHotel'>
              <AddHotel></AddHotel>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/shidule'>
              <Shidule></Shidule>
            </PrivateRoute>
            <PrivateRoute to='/order/control'>
              <ControlOrders></ControlOrders>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
