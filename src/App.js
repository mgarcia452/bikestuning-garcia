import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext';
import { LoginProvider, useLoginContext } from './Context/LoginContext';
import AppRouter from './components/router/AppRouter';

// poner el empty cart con link a home

const App = () => {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;