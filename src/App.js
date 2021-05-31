import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation'
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Home/>
      <About/>
      <Footer/>
    </div>    
  );
}

export default App;
