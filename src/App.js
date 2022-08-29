import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Header } from './components/header/Header.js';
import { Footer } from './components/footer/Footer.js';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (

    <>
      <Header />
      <div className="App container mt-5">
        <ItemListContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;