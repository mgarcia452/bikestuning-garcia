import NavBar from './components/navbar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.scss'

function App() {

  return (
    <div className="App">
      <NavBar />
      <body className="appBady">
        <img src="../mrSparkleFull.png" className="App-logo" alt="logo" />
      </body>
      <Footer />
    </div>
  );
}

export default App;
