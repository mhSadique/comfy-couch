import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ManageAllOrders from './pages/AdminPages/ManageAllOrders/ManageAllOrders';
import ManageProducts from './pages/AdminPages/ManageProducts/ManageProducts';
import MakeAdmin from './pages/AdminPages/MakeAdmin/MakeAdmin';
import AddProduct from './pages/AdminPages/AddProduct/AddProduct';
import MyOrders from './pages/UserPages/MyOrders/MyOrders';
import Review from './pages/UserPages/Review/Review';
import Pay from './pages/UserPages/Pay/Pay';
import Homepage from './pages/Homepage/Homepage';
import Purchase from './pages/Purchase/Purchase';
import Explore from './pages/Explore/Explore';
import ProductPurchaseConfirmation from './pages/ProductPurchaseConfirmation/ProductPurchaseConfirmation';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './pages/Homepage/HomepageSections/Footer/Footer';

function App() {
  return (
    <>

      <Router>
        <AuthProvider>
          <Navigation />
          <Switch>

            {/* Homepage */}
            <Route exact path='/'>
              <Homepage />
            </Route>

            {/* Purchase page */}
            <PrivateRoute path='/purchase/:productId'>
              <Purchase />
            </PrivateRoute>

            {/* Confirm purchase */}
            <PrivateRoute path='/confirm-purchase/:productId'>
              <ProductPurchaseConfirmation />
            </PrivateRoute>

            {/* Explore page */}
            <Route path='/explore'>
              <Explore />
            </Route>

            {/* Login & Register */}

            <Route path='/register'>
              <Register />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            {/* Admin routes */}
            <PrivateRoute path='/manage-orders'>
              <ManageAllOrders />
            </PrivateRoute>

            <PrivateRoute path='/manage-products'>
              <ManageProducts />
            </PrivateRoute>

            <PrivateRoute path='/make-admin'>
              <MakeAdmin />
            </PrivateRoute>

            <PrivateRoute path='/add-product'>
              <AddProduct />
            </PrivateRoute>

            {/* User routes */}
            <PrivateRoute path='/my-orders'>
              <MyOrders />
            </PrivateRoute>

            <PrivateRoute path='/pay'>
              <Pay />
            </PrivateRoute>

            <PrivateRoute path='/review'>
              <Review />
            </PrivateRoute>


          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
