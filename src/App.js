import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer nombre="Bienvenido"/>
     </div>
  );
}

export default App;
