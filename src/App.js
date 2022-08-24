// import { Navbar } from './components/Navbar/Navbar.js';

import { Header } from './components/header/Header.js';
import { Footer } from './components/footer/Footer.js';
import { Main } from './components/main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
