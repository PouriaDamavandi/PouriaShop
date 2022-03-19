import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards'

function App() {
  return (
    <div >
      <header>
     <Navbar/>
     <Banner/>
     <Cards />
      </header>
    </div>
  );
}

export default App;
